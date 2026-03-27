const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Vercel",
  "Claude",
  "Cursor",
  "OpenAI",
  "Stripe",
  "Node.js",
  "PostgreSQL",
];

function MarqueeRow({
  direction,
  className,
}: {
  direction: "left" | "right";
  className?: string;
}) {
  const items = [...tools, ...tools, ...tools];
  const animationClass =
    direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className={`flex gap-4 w-max ${animationClass}`}>
        {items.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="shrink-0 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:border-accent/30 hover:text-accent transition cursor-default"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 left-0 right-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <MarqueeRow direction="left" />
        <MarqueeRow direction="right" className="mt-4" />
      </div>
    </section>
  );
}
