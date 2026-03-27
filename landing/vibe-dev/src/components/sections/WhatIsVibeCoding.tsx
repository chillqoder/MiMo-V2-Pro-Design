"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Bot, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const features = [
  {
    icon: MessageSquare,
    title: "Describe Your Vision",
    description:
      "Tell us what you want to build in plain English. No technical specs needed.",
  },
  {
    icon: Bot,
    title: "AI Generates the Code",
    description:
      "Our AI tools turn your description into production-ready code in hours, not weeks.",
  },
  {
    icon: Code2,
    title: "Experts Refine & Ship",
    description:
      "Senior developers review, refine, and deploy. Quality is never compromised.",
  },
];

const steps = [
  { number: "01", icon: MessageSquare, label: "Describe" },
  { number: "02", icon: Bot, label: "Generate" },
  { number: "03", icon: Code2, label: "Ship" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function WhatIsVibeCoding() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <Container>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <SectionHeading
                label="What Is Vibe Coding?"
                title="You Describe It. AI Builds It. We Ship It."
                description="Vibe coding is a new development paradigm where you describe what you want in natural language and AI transforms it into real, production-ready software."
                align="left"
              />
            </motion.div>

            <div className="space-y-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative flex flex-col items-center lg:items-start"
          >
            {/* Vertical connector line */}
            <div className="absolute left-6 lg:left-10 top-12 bottom-12 w-px bg-accent/30" />

            <div className="space-y-6 w-full max-w-sm">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.35 + 0.15 * i }}
                  className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 pl-16 lg:pl-20"
                >
                  <span className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 text-5xl font-bold text-white/5 select-none">
                    {step.number}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-lg font-semibold text-white">
                      {step.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
