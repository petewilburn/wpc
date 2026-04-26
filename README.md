# Wilburn Pacific Corporate Site

> A modern, high-precision corporate web application built to reflect exclusive partnership and technical excellence.

![Hero Section Screenshot](<!-- TODO: Insert Hero Section Image Path -->)

## Project Overview

The Wilburn Pacific Corporate Site is a scalable, highly optimized web application developed to serve as the digital presence for a premium engineering and automation consultancy. Designed with a modern, professional aesthetic, it emphasizes clarity, speed, and accessibility. The site leverages cutting-edge React paradigms and utility-first styling to deliver a seamless user experience across all devices.

## Architecture & Tech Stack

This project is built on a modern, robust technology stack tailored for performance, developer experience, and maintainability.

### Core Framework
- **[Next.js 16 (App Router)](https://nextjs.org/)**: Utilizes React Server Components (RSC) to minimize client-side JavaScript, improving time-to-interactive and SEO.
- **[React 19](https://react.dev/)**: Leverages the latest concurrent rendering features and hooks.
- **TypeScript**: Enforces strict type safety across components, API routes, and data models.

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Uses the modern `@theme` directive approach for a streamlined, configuration-free styling pipeline.
- **[Base UI](https://base-ui.com/)**: Powers the accessible, unstyled interactive components (such as navigation menus), ensuring ARIA compliance without sacrificing design freedom.
- **Custom Design System**: Features a curated CSS variable token system mapped directly to Tailwind, eliminating ad-hoc magic values and ensuring strict visual consistency.

### Data Validation & Form Handling
- **[React Hook Form](https://react-hook-form.com/)**: Manages complex form state efficiently with minimal re-renders.
- **[Zod](https://zod.dev/)**: Provides strict schema validation for the contact form, enforcing data integrity on both the client and server.

### Backend Integrations
- **Next.js Route Handlers**: Serves as the secure, server-side API layer (`/api/contact`).
- **Azure Communication Services (`@azure/communication-email`)**: Handles reliable transactional email delivery for contact inquiries.
- **Security**: Implements in-memory rate limiting, timestamp validation, and honeypot fields to mitigate spam and bot abuse.

### Content & Analytics
- **Markdown Parsing (`remark` & `gray-matter`)**: Drives the content for resources, blogs, and capabilities natively from the filesystem.
- **Vercel Analytics & Speed Insights**: Provides real-time telemetry on user engagement and Core Web Vitals.

![Contact Form Screenshot](<!-- TODO: Insert Contact Form Image Path -->)

## Key Features

- **Dynamic Routing & Content Generation**: Robust nested layouts for `capabilities`, `industries`, and `resources` powered by the Next.js App Router.
- **Accessible Navigation**: Fully keyboard-navigable and screen-reader optimized navigation utilizing Base UI primitives.
- **Modern Aesthetic**: Features clean typography, a sophisticated color palette, and subtle interactive states tailored for a premium brand feel.
- **Automated SEO Engine**: Dynamically generates `sitemap.ts` and `robots.ts` for optimized search engine crawling.

## Project Structure

```text
src/
├── app/                  # Next.js App Router (Pages, Layouts, API Routes)
│   ├── api/              # Secure Serverless Route Handlers
│   ├── capabilities/     # Dynamic capability pages
│   ├── company/          # About and Contact pages
│   ├── industries/       # Dynamic industry sector pages
│   └── resources/        # Markdown-driven blog and guides
├── components/           # React Components
│   ├── capabilities/     # Specific page templates
│   ├── contact/          # Form handling UI
│   ├── layout/           # Global structures (Navbar, Footer, Modals)
│   ├── resources/        # Content cards and navigation
│   ├── shared/           # Reusable generic components (CTAs, Headings)
│   └── ui/               # Base UI and Shadcn foundational primitives
├── data/                 # Mock data and content structures
└── lib/                  # Utility functions and Markdown parsing logic
```

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v20+) installed on your machine.

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Set up environment variables. Create a `.env.local` file in the root directory:
```env
ACS_CONNECTION_STRING="your_azure_connection_string"
SENDER_ADDRESS="your_verified_sender_email"
```
*(Note: The site will gracefully fallback to logging warnings in development if these are not provided).*

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com). Because it leverages standard Next.js features, it can easily be deployed by connecting the GitHub repository to the Vercel dashboard for automated CI/CD.

![Mobile Navigation Screenshot](<!-- TODO: Insert Mobile Nav Image Path -->)
