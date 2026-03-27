# Prompt: Next.js Landing Page — Vibe Coding Development Agency

---

## Project Overview

Build a complete, production-ready **Next.js 14+ (App Router)** landing page for a modern development agency that specializes in **vibe coding** — a new paradigm where developers describe what they want in natural language and AI builds it, with the developer guiding, refining, and shipping the result. The agency positions itself as a premium partner that helps startups, solopreneurs, and businesses launch products 10x faster using AI-assisted development workflows.

**Brand Name:** `VIBE.DEV` (or suggest a better one that fits the aesthetic)

**Core Value Proposition:** "We don't just write code — we vibe it into existence. Ship your product in days, not months."

**Target Audience:** Non-technical founders, early-stage startups, small businesses, and solopreneurs who want to launch fast without hiring a full dev team.

---

## Tech Stack

- **Framework:** Next.js 14+ with App Router (`/app` directory)
- **Styling:** Tailwind CSS v4 + custom CSS where needed for advanced effects
- **Animations:** Framer Motion for page transitions, scroll-triggered reveals, hover states, and micro-interactions
- **Typography:** Use Google Fonts — pick 2 distinctive fonts: one bold/display font for headings (e.g., Clash Display, Satoshi, Cabinet Grotesk, General Sans, Switzer, Outfit — NOT Inter, NOT Space Grotesk) and one clean readable font for body text
- **Icons:** Lucide React
- **Deployment-ready:** All components should be self-contained, no external API dependencies for the landing page itself
- **SEO:** Proper metadata, Open Graph tags, semantic HTML
- **Responsive:** Fully responsive — mobile-first, with breakpoints for tablet and desktop
- **Dark mode:** Default to dark theme with an optional light mode toggle

---

## Design Direction & Aesthetic

**Tone:** Futuristic-minimal with bold accents. Think: the intersection of a premium SaaS site and a creative studio portfolio. NOT generic startup template. NOT purple-gradient-on-white AI slop.

**Key Design Principles:**

1. **Bold Typography** — Oversized hero headings (clamp-based fluid sizing), tight letter-spacing on display text, generous line-height on body copy. Headlines should feel like statements, not descriptions.

2. **Color Palette:**
   - Background: Deep black/charcoal (`#0A0A0A` / `#111111`)
   - Primary accent: Electric lime/green (`#CCFF00` or similar high-energy neon)
   - Secondary accent: Cool blue or cyan for contrast moments
   - Text: Off-white (`#F5F5F5`) for body, pure white for headings
   - Muted: Gray tones (`#333`, `#666`, `#999`) for secondary text and borders
   - Use CSS variables for all colors

3. **Layout & Spacing:**
   - Generous whitespace — let sections breathe
   - Max content width: 1280px, with full-bleed backgrounds
   - Asymmetric grid layouts where appropriate (not everything centered)
   - Overlapping elements, broken grid moments for visual interest

4. **Visual Effects & Atmosphere:**
   - Subtle grain/noise texture overlay on the background
   - Gradient mesh or aurora-like glow effects behind key sections
   - Glassmorphism cards with subtle backdrop-blur
   - Dotted or lined grid patterns as decorative backgrounds
   - Custom cursor effect on desktop (optional but impressive)
   - Smooth scroll behavior

5. **Animations (Framer Motion):**
   - Staggered fade-up reveals on scroll for each section
   - Hero text reveal animation (word-by-word or line-by-line)
   - Hover effects on cards: subtle scale + glow
   - Number counter animations for stats
   - Smooth section transitions
   - Marquee/ticker for client logos or tech stack

---

## Page Structure & Sections

### 1. Navigation Bar (sticky)
- Logo on the left (`VIBE.DEV` in custom typography or a minimal SVG mark)
- Nav links: Services · How It Works · Portfolio · Pricing · FAQ
- CTA button on the right: "Start Your Project" (accent color, pill-shaped)
- Mobile: hamburger menu with a full-screen overlay nav (animated)
- On scroll: navbar gets a subtle backdrop-blur + border-bottom

### 2. Hero Section
- **Layout:** Split or full-width, with the headline dominating
- **Headline:** Large, bold, multi-line. Example:
  > "We Build Your Product  
  > While You Describe It."
  
  or
  
  > "From Idea to Launch  
  > in Days, Not Months."
- **Subheadline:** 1–2 sentences explaining vibe coding in plain terms. Example: "Our team combines AI-powered development with human expertise to ship your app, website, or MVP at unprecedented speed."
- **CTA Buttons:** Two buttons — "Get a Free Estimate" (primary/filled) + "See Our Work" (secondary/outlined)
- **Visual element:** Abstract code/waveform animation, or a stylized terminal window showing a prompt → result transformation, or a dynamic particle/mesh background
- **Social proof strip** below the hero: "Trusted by 50+ founders" + small avatar stack or logo row

### 3. Logos / Social Proof Marquee
- Infinite horizontal scroll marquee (both directions for two rows, or single row)
- Show logos of technologies used (Next.js, React, Tailwind, Vercel, Supabase, Stripe, OpenAI, Claude, Cursor, etc.) or client logos
- Muted/grayscale logos that brighten on hover
- Subtle separator above and below

### 4. "What Is Vibe Coding?" Explainer Section
- **Purpose:** Educate visitors who don't know the term
- **Layout:** Left side — short punchy copy; Right side — animated illustration or diagram
- **Content:**
  - Brief definition: what vibe coding is (AI-assisted development where you describe intent and AI generates code, guided by expert developers)
  - Why it matters: 10x speed, lower cost, same quality
  - How it's different from traditional dev agencies and from pure no-code
- **Visual:** A simple 3-step mini-diagram or animated flow:
  1. 💬 You describe your vision
  2. 🤖 AI generates the code
  3. 👨‍💻 Our experts refine & ship

### 5. Services Section
- **Layout:** Bento grid (mixed card sizes) or offset card grid
- **Cards (6 services):**
  1. **MVP Development** — Go from idea to working product in 1–2 weeks. Landing pages, web apps, mobile apps.
  2. **SaaS Products** — Full-stack SaaS applications with auth, payments, dashboards, and admin panels.
  3. **Landing Pages & Marketing Sites** — High-converting, beautifully designed pages that ship in days.
  4. **AI Integrations** — Add AI features to your existing product: chatbots, content generation, data analysis, automation.
  5. **Redesign & Modernization** — Rebuild your outdated app with modern tech stack and better UX.
  6. **Ongoing Support & Iteration** — Monthly retainer for continuous development, bug fixes, and feature additions.
- **Each card has:** Icon (Lucide), title, 2-line description, subtle hover glow effect
- **Section heading:** "What We Build" or "Services"

### 6. How It Works — Process Section
- **Layout:** Horizontal stepper on desktop, vertical timeline on mobile
- **4 Steps:**
  1. **Discovery Call** — "Tell us your idea. We'll scope it, define features, and give you a timeline." (Icon: MessageCircle)
  2. **Rapid Prototyping** — "We vibe-code your first working prototype in 48–72 hours." (Icon: Zap)
  3. **Refine & Polish** — "You review, we iterate. Pixel-perfect design and bulletproof code." (Icon: Sparkles)
  4. **Launch & Scale** — "We deploy to production and support you as you grow." (Icon: Rocket)
- **Visual:** Each step has a number (large, semi-transparent in background), icon, title, description
- **Connecting line or progress bar** between steps (animated on scroll)

### 7. Portfolio / Case Studies Section
- **Layout:** 3 featured projects in a grid or carousel
- **Each project card:**
  - Screenshot/mockup image (use placeholder gradient cards with project name if no real images)
  - Project name
  - Category tag (e.g., "SaaS", "E-commerce", "AI Tool")
  - 1-line result: "Launched in 5 days · 2,000 users in first month"
  - Hover: reveal a "View Case Study →" link
- **Section heading:** "Recent Launches" or "What We've Shipped"
- Optional: "View All Projects" button at the bottom

### 8. Stats / Impact Section
- **Layout:** Full-width band with 4 key metrics in a row
- **Stats (with counter animation on scroll):**
  - `50+` Projects Shipped
  - `5 days` Average Launch Time
  - `98%` Client Satisfaction
  - `10x` Faster Than Traditional Dev
- **Design:** Large numbers in accent color, labels in muted text, separated by vertical dividers or in individual cards

### 9. Tech Stack Section
- **Purpose:** Build credibility by showing the modern tools used
- **Layout:** Grid of tech logos with labels, or a visual "stack" diagram
- **Categories:**
  - Frontend: Next.js, React, Tailwind CSS, TypeScript
  - Backend: Node.js, Python, Supabase, PostgreSQL
  - AI Tools: Claude, Cursor, v0, Bolt, GPT API
  - Infrastructure: Vercel, AWS, Cloudflare
  - Payments & Auth: Stripe, Clerk, NextAuth
- **Design:** Monochrome icons on dark cards, grouped by category

### 10. Testimonials Section
- **Layout:** Carousel or staggered cards (2–3 visible at once)
- **Each testimonial:**
  - Quote text (2–3 sentences)
  - Author name, title, company
  - Small avatar (placeholder circle with initials)
  - Star rating (optional)
- **3–4 testimonials** with varied lengths
- **Design:** Cards with subtle border, large opening quotation mark as decorative element

### 11. Pricing Section
- **Layout:** 3-tier pricing cards side by side
- **Tiers:**
  1. **Starter** — $2,999
     - Best for: Landing pages, simple sites
     - Includes: Up to 5 pages, responsive design, basic SEO, 1 round of revisions, delivery in 5 days
  2. **Growth** — $7,999 ⭐ (highlighted as "Most Popular")
     - Best for: MVPs, web apps, SaaS
     - Includes: Full-stack app, auth + payments, admin dashboard, 3 rounds of revisions, delivery in 2 weeks, 30 days of support
  3. **Scale** — Custom Pricing
     - Best for: Complex products, ongoing development
     - Includes: Everything in Growth, custom integrations, AI features, priority support, dedicated team, monthly retainer available
- **Each card:** Title, price, description, feature list (checkmarks), CTA button
- **Popular tier:** Slightly elevated, accent border/glow, "Most Popular" badge
- **Below pricing:** "Not sure which plan? Book a free call →"

### 12. FAQ Section
- **Layout:** Accordion (expand/collapse) — single column, max-width ~800px centered
- **8–10 Questions:**
  1. What exactly is vibe coding?
  2. How is this different from hiring a freelancer or traditional agency?
  3. What tech stack do you use?
  4. How fast can you deliver?
  5. Do I need to be technical to work with you?
  6. What if I'm not happy with the result?
  7. Do you provide source code?
  8. Can you add AI features to my existing product?
  9. What does "ongoing support" include?
  10. How do I get started?
- **Design:** Clean, minimal. Plus/minus icon for expand state. Smooth height animation.

### 13. CTA / Contact Section
- **Layout:** Full-width section with centered content, strong visual treatment
- **Headline:** "Ready to Ship Your Next Big Idea?" or "Let's Build Something Amazing — Fast."
- **Subtext:** "Book a free 30-minute discovery call. No commitment, no BS."
- **CTA Button:** Large, accent-colored — "Book Your Free Call"
- **Secondary:** "Or email us at hello@vibe.dev"
- **Background:** Gradient glow, mesh, or subtle animation to make this section pop

### 14. Footer
- **Layout:** Multi-column grid
- **Columns:**
  - Brand: Logo + 1-line tagline + social icons (Twitter/X, GitHub, LinkedIn, Discord)
  - Services: Links to each service
  - Company: About, Blog, Careers, Contact
  - Legal: Privacy Policy, Terms of Service
- **Bottom bar:** © 2026 VIBE.DEV · All rights reserved
- **Design:** Dark, clean, well-spaced. Accent color on hover for links.

---

## File & Folder Structure

```
/app
  /layout.tsx          — Root layout with fonts, metadata, global styles
  /page.tsx             — Main landing page (imports all sections)
  /globals.css          — Tailwind directives + CSS variables + custom styles

/components
  /layout
    Navbar.tsx
    Footer.tsx
  /sections
    Hero.tsx
    LogoMarquee.tsx
    WhatIsVibeCoding.tsx
    Services.tsx
    HowItWorks.tsx
    Portfolio.tsx
    Stats.tsx
    TechStack.tsx
    Testimonials.tsx
    Pricing.tsx
    FAQ.tsx
    CTA.tsx
  /ui
    Button.tsx
    Card.tsx
    Badge.tsx
    Accordion.tsx
    SectionHeading.tsx
    Container.tsx
    AnimatedCounter.tsx
    GrainOverlay.tsx

/lib
  constants.ts          — All text content, pricing data, FAQ data, testimonials
  utils.ts              — Utility functions (cn, etc.)

/public
  /images               — Placeholder images, OG image
  /fonts                — Local font files (if not using Google Fonts CDN)
```

---

## Content & Copy Guidelines

- **Voice:** Confident, direct, slightly irreverent. Not corporate. Not cringe.
- **Avoid:** "Leverage", "synergy", "cutting-edge", "revolutionize", "game-changer" — these are banned words.
- **Use:** Short sentences. Bold claims backed by specifics. Conversational but professional.
- **Numbers over adjectives:** "Ship in 5 days" > "Ship incredibly fast"
- **Address the reader directly:** "You describe it. We build it."
- **Every heading should be a statement or provocation, not a label.** "What We Build" > "Our Services". "Your Idea, Live in Days" > "Our Process".

---

## Performance & Quality Requirements

1. **Lighthouse score:** Aim for 95+ on Performance, Accessibility, Best Practices, SEO
2. **Core Web Vitals:** Optimize LCP, CLS, FID
3. **Images:** Use Next.js `<Image>` component, WebP format, lazy loading
4. **Fonts:** Preload display font, use `font-display: swap`
5. **Animations:** Use `will-change` and GPU-accelerated properties. Respect `prefers-reduced-motion`.
6. **Semantic HTML:** Proper heading hierarchy, ARIA labels where needed, keyboard navigation
7. **No layout shift:** Reserve space for dynamic content, set explicit dimensions
8. **Bundle size:** Keep client-side JS minimal. Use Server Components by default, `"use client"` only where interactivity is needed.

---

## Deliverables

1. Complete Next.js project with all sections implemented
2. Fully responsive (mobile, tablet, desktop)
3. All animations and interactions working
4. Dark theme as default
5. Clean, well-organized, commented code
6. All content populated (use realistic placeholder content, not lorem ipsum)
7. Ready to deploy on Vercel with zero configuration
