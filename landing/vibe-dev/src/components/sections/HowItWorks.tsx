"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Zap, Sparkles, Rocket, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  Zap,
  Sparkles,
  Rocket,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-20 md:py-32 dotted-bg">
      <Container>
        <SectionHeading
          label="The Process"
          title="From Idea to Launch in 4 Steps"
        />

        <div ref={ref} className="relative mt-16">
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px hidden md:block">
              <div className="absolute inset-0 bg-border" />
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                className="absolute inset-0 h-full bg-accent"
              />
            </div>

            {PROCESS_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col items-center md:items-start text-center md:text-left"
                >
                  <div className="relative">
                    <span
                      aria-hidden
                      className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 text-8xl font-display text-white/5 leading-none select-none pointer-events-none"
                    >
                      {step.number}
                    </span>

                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mt-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
