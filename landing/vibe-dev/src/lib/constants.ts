export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const SERVICES = [
  {
    icon: "Rocket",
    title: "MVP Development",
    description:
      "Go from idea to working product in 1–2 weeks. Landing pages, web apps, mobile apps — we build them fast.",
  },
  {
    icon: "Layers",
    title: "SaaS Products",
    description:
      "Full-stack SaaS applications with auth, payments, dashboards, and admin panels — production-ready.",
  },
  {
    icon: "Monitor",
    title: "Landing Pages & Sites",
    description:
      "High-converting, beautifully designed marketing pages that ship in days, not weeks.",
  },
  {
    icon: "Brain",
    title: "AI Integrations",
    description:
      "Add AI features to your existing product: chatbots, content generation, data analysis, automation.",
  },
  {
    icon: "RefreshCw",
    title: "Redesign & Modernization",
    description:
      "Rebuild your outdated app with a modern tech stack and better UX. Faster, cleaner, more reliable.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Ongoing Support",
    description:
      "Monthly retainer for continuous development, bug fixes, and feature additions. Your dedicated dev team.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    icon: "MessageCircle",
    title: "Discovery Call",
    description:
      "Tell us your idea. We'll scope it, define features, and give you a timeline.",
  },
  {
    number: "02",
    icon: "Zap",
    title: "Rapid Prototyping",
    description:
      "We vibe-code your first working prototype in 48–72 hours. You see results fast.",
  },
  {
    number: "03",
    icon: "Sparkles",
    title: "Refine & Polish",
    description:
      "You review, we iterate. Pixel-perfect design and bulletproof code — every time.",
  },
  {
    number: "04",
    icon: "Rocket",
    title: "Launch & Scale",
    description:
      "We deploy to production and support you as you grow. Your success is our success.",
  },
] as const;

export const PORTFOLIO_PROJECTS = [
  {
    name: "Pitchly",
    category: "SaaS",
    description: "AI-powered pitch deck generator",
    result: "Launched in 5 days · 2,000 users in first month",
    gradient: "from-[#CCFF00]/20 to-[#00D4FF]/20",
  },
  {
    name: "Flowstate",
    category: "Productivity",
    description: "Team collaboration dashboard",
    result: "MVP in 7 days · $50K ARR in 3 months",
    gradient: "from-[#00D4FF]/20 to-[#CCFF00]/20",
  },
  {
    name: "QuickMenu",
    category: "E-commerce",
    description: "Restaurant ordering platform",
    result: "Full app in 10 days · 50+ restaurants onboarded",
    gradient: "from-[#CCFF00]/20 to-[#FF6B6B]/20",
  },
] as const;

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Shipped" },
  { value: 5, suffix: " days", label: "Average Launch Time" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "x", label: "Faster Than Traditional" },
] as const;

export const TECH_STACK = {
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Python", "Supabase", "PostgreSQL"],
  ai: ["Claude", "Cursor", "v0", "GPT API"],
  infra: ["Vercel", "AWS", "Cloudflare"],
  payments: ["Stripe", "Clerk", "NextAuth"],
} as const;

export const TESTIMONIALS = [
  {
    quote:
      "VIBE.DEV shipped our MVP in 6 days. What our previous agency couldn't do in 3 months, they nailed in a week. The quality was production-ready from day one.",
    author: "Sarah Chen",
    role: "Founder",
    company: "Pitchly",
  },
  {
    quote:
      "I'm not technical at all. I described what I wanted in plain English and they built it. It felt like magic. Now we have 50+ restaurants on the platform.",
    author: "Marcus Rivera",
    role: "CEO",
    company: "QuickMenu",
  },
  {
    quote:
      "The speed is real, but what surprised me most was the quality. Clean code, great design, and they actually understood our vision on the first try.",
    author: "Alex Novak",
    role: "CTO",
    company: "Flowstate",
  },
  {
    quote:
      "We needed to rebuild our legacy app fast. VIBE.DEV delivered a modern, responsive version in 2 weeks. Our users noticed the difference immediately.",
    author: "Priya Sharma",
    role: "Product Lead",
    company: "DataBridge",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$2,999",
    description: "Best for landing pages and simple sites",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "1 round of revisions",
      "Delivery in 5 days",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$7,999",
    description: "Best for MVPs, web apps, and SaaS products",
    features: [
      "Full-stack application",
      "Auth + payments integration",
      "Admin dashboard",
      "3 rounds of revisions",
      "Delivery in 2 weeks",
      "30 days of support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "Best for complex products and ongoing development",
    features: [
      "Everything in Growth",
      "Custom integrations",
      "AI features",
      "Priority support",
      "Dedicated team",
      "Monthly retainer available",
    ],
    cta: "Contact Us",
    popular: false,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What exactly is vibe coding?",
    answer:
      "Vibe coding is an AI-assisted development approach where you describe what you want in natural language, and expert developers use AI tools to generate, refine, and ship production-ready code. You stay focused on your vision — we handle the technical execution.",
  },
  {
    question: "How is this different from hiring a freelancer or traditional agency?",
    answer:
      "Speed. We use AI-powered workflows that compress weeks of development into days. A traditional agency might take 3-6 months for what we deliver in 1-2 weeks. Plus, you get a dedicated team, not a rotating cast of contractors.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "We primarily build with Next.js, React, TypeScript, Tailwind CSS, and deploy on Vercel. For backend, we use Supabase, PostgreSQL, and Node.js. We also integrate AI tools like Claude, Cursor, and GPT API for accelerated development.",
  },
  {
    question: "How fast can you deliver?",
    answer:
      "Simple landing pages: 3-5 days. MVPs and web apps: 1-2 weeks. Complex SaaS products: 2-4 weeks. We'll give you a specific timeline after our discovery call.",
  },
  {
    question: "Do I need to be technical to work with you?",
    answer:
      "Not at all. Most of our clients are non-technical founders and business owners. We communicate in plain English, not jargon. You tell us what you want, we make it happen.",
  },
  {
    question: "What if I'm not happy with the result?",
    answer:
      "Every project includes revision rounds (1-3 depending on your plan). We iterate until you're satisfied. If we truly can't deliver what you need, we offer a full refund within the first 48 hours of the project.",
  },
  {
    question: "Do you provide source code?",
    answer:
      "Yes, 100%. You own all the code we write. We push everything to your GitHub repository, and you have full access and ownership from day one.",
  },
  {
    question: "Can you add AI features to my existing product?",
    answer:
      "Absolutely. We specialize in AI integrations — chatbots, content generation, data analysis, recommendation engines, and more. We can work with your existing codebase or build standalone AI features.",
  },
  {
    question: "What does 'ongoing support' include?",
    answer:
      "Bug fixes, feature additions, performance optimization, security updates, and general development support. Think of us as your outsourced dev team, available on a monthly retainer.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click any 'Start Your Project' or 'Book a Free Call' button on this page. We'll schedule a 30-minute discovery call to discuss your idea, scope the project, and get you a timeline and quote. No commitment required.",
  },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "MVP Development", href: "#services" },
    { label: "SaaS Products", href: "#services" },
    { label: "Landing Pages", href: "#services" },
    { label: "AI Integrations", href: "#services" },
    { label: "Redesign", href: "#services" },
    { label: "Support", href: "#services" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#cta" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
} as const;
