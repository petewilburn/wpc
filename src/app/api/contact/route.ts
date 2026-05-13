import { NextResponse } from 'next/server'
import { EmailClient } from "@azure/communication-email"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  serviceInterest: z.enum([
    "Software Systems",
    "Industrial Automation",
    "Mechanical Engineering",
    "Forensic Engineering",
    "General Inquiry"
  ]),
  message: z.string().min(20),
  website: z.string().max(0), // Honeypot must be empty
  _rendered: z.number()
})

// Simple in-memory rate limiting (Note: clears on Vercel cold starts, but adequate for basic protection)
const rateLimit = new Map<string, { count: number, timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS_PER_IP = 3

export async function POST(request: Request) {
  try {
    // 1. Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown-ip'
    
    // 2. Rate Limit Check
    const now = Date.now()
    const ipData = rateLimit.get(ip)
    
    if (ipData) {
      if (now - ipData.timestamp < RATE_LIMIT_WINDOW) {
        if (ipData.count >= MAX_REQUESTS_PER_IP) {
          return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
        }
        ipData.count++
      } else {
        rateLimit.set(ip, { count: 1, timestamp: now })
      }
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now })
    }

    // 3. Parse Body
    const body = await request.json()
    
    // 4. Validate with Zod
    const validatedData = contactSchema.parse(body)

    // 5. Honeypot check
    if (validatedData.website !== "") {
      // Silently succeed for bots
      return NextResponse.json({ success: true })
    }

    // 6. Timestamp check (reject if submitted < 2s after render)
    const timeSinceRender = now - validatedData._rendered
    if (timeSinceRender < 2000) {
      return NextResponse.json({ error: "Submission rejected." }, { status: 400 })
    }

    // 7. Send Email via Azure Communication Services
    const connectionString = process.env.ACS_CONNECTION_STRING
    const senderAddress = process.env.SENDER_ADDRESS

    if (!connectionString || !senderAddress) {
      console.warn("ACS credentials not found. Form validation succeeded but email not sent.")
      // Return success anyway for the frontend if credentials aren't set during dev
      return NextResponse.json({ success: true, warning: "Email not sent (missing credentials)" })
    }

    const client = new EmailClient(connectionString)

    const emailMessage = {
      senderAddress: senderAddress,
      content: {
        subject: `New Inquiry: ${validatedData.serviceInterest} from ${validatedData.name}`,
        html: `
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Company:</strong> ${validatedData.company || 'N/A'}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || 'N/A'}</p>
          <p><strong>Service Interest:</strong> ${validatedData.serviceInterest}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br/>')}</p>
        `
      },
      recipients: {
        to: [{ address: "info@wilburnpacific.com" }]
      }
    }

    const poller = await client.beginSend(emailMessage)
    await poller.pollUntilDone()

    // Auto-reply to the form submitter. Failure here doesn't fail the request —
    // the primary notification to info@ already went out.
    try {
      const autoReply = {
        senderAddress,
        content: {
          subject: "We received your inquiry — Wilburn Pacific",
          plainText: `Hi ${validatedData.name},\n\nThanks for reaching out about ${validatedData.serviceInterest}. We've received your message and will respond within one business day.\n\nFor reference, here's what you sent:\n\n${validatedData.message}\n\n— Wilburn Pacific Company`,
          html: `
            <p>Hi ${validatedData.name},</p>
            <p>Thanks for reaching out about <strong>${validatedData.serviceInterest}</strong>. We've received your message and will respond within one business day.</p>
            <p>For reference, here's what you sent:</p>
            <blockquote style="border-left:3px solid #eed202;padding-left:16px;color:#475569;margin:16px 0;">${validatedData.message.replace(/\n/g, "<br/>")}</blockquote>
            <p>— Wilburn Pacific Company</p>
          `,
        },
        recipients: { to: [{ address: validatedData.email }] },
        replyTo: [{ address: "info@wilburnpacific.com" }],
      }
      const autoReplyPoller = await client.beginSend(autoReply)
      await autoReplyPoller.pollUntilDone()
    } catch (autoReplyErr) {
      console.warn("Auto-reply failed (primary email succeeded):", autoReplyErr)
    }

    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error("Contact form error:", error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data.", details: (error as any).errors }, { status: 400 })
    }
    return NextResponse.json({ error: "Failed to process request." }, { status: 500 })
  }
}
