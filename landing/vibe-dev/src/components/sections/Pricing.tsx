"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PRICING_TIERS } from "@/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="pricing" className="py-20 md:py-32">
      <Container>
        <SectionHeading
          label="Pricing"
          title="Simple, Transparent Pricing"
          description="No hidden fees. No surprises. Just great work at fair prices."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`relative rounded-2xl border bg-card/50 p-6 md:p-8 ${
                tier.popular
                  ? "md:-translate-y-4 border-accent shadow-[0_0_40px_rgba(204,255,0,0.1)]"
                  : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Most Popular</Badge>
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-white">
                {tier.name}
              </h3>

              <div className={`mt-4 text-4xl md:text-5xl font-display font-bold ${tier.popular ? "text-accent" : "text-white"}`}>
                {tier.price}
              </div>

              <p className="mt-2 text-muted-foreground">
                {tier.description}
              </p>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  variant={tier.popular ? "primary" : "secondary"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center text-muted-foreground"
        >
          Not sure which plan?{" "}
          <a href="#cta" className="text-accent hover:underline">
            Book a free call →
          </a>
        </motion.p>
      </Container>
    </section>
  );
}
