import { test, expect } from "@playwright/test"

test("contact form submits and shows the success state", async ({ page }) => {
  await page.goto("/company/contact")

  await page.getByLabel("Full Name").fill("Test User")
  await page.getByLabel("Email Address").fill("test@example.com")
  await page
    .getByLabel("Message")
    .fill("This is a test message that is sufficiently long to pass the 20-character validation rule.")

  // Form rejects submissions less than 2s after render to deter bots.
  // The default service-interest value "General Inquiry" is fine; leave it.
  await page.waitForTimeout(2500)

  await page.getByRole("button", { name: /send message|submit/i }).click()

  await expect(page.getByRole("heading", { name: "Message Sent" })).toBeVisible({
    timeout: 15_000,
  })
})
