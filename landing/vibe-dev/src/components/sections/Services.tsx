"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Layers, Monitor, Brain, RefreshCw, HeadphonesIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/lib/constants";
import { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Layers,
  Monitor,
  Brain,
  RefreshCw,
  HeadphonesIcon,
};

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-20 md:py-32">
      <Container>
        <SectionHeading label="What We Build" title="Your Idea, Our Expertise" />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 md:p-8 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(204,255,0,0.05)] transition-all ${index === 0 ? "col-span-1 lg:col-span-2" : ""}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    {Icon && <Icon className="h-6 w-6 text-accent" />}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mt-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
