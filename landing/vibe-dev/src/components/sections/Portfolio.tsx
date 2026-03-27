"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <Container>
        <SectionHeading
          label="Recent Launches"
          title="What We've Shipped"
          description="Real products, real results. Here's what vibe coding looks like in action."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl overflow-hidden border border-border bg-card/50 group hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(204,255,0,0.06)] transition-all duration-300"
            >
              <div
                className={`relative aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
                <span className="relative font-display text-3xl md:text-4xl font-bold text-white/80">
                  {project.name}
                </span>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm tracking-wide">
                    View Case Study →
                  </span>
                </div>
              </div>

              <div className="p-5">
                <Badge>{project.category}</Badge>
                <h3 className="font-display text-xl font-bold text-white mt-3">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {project.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
