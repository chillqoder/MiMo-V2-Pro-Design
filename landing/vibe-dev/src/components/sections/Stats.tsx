"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { STATS } from "@/lib/constants";

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 md:py-32 gradient-mesh">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center py-8 md:py-12 px-4 ${
                index < STATS.length - 1 ? "md:border-r md:border-border" : ""
              }`}
            >
              <span className="text-5xl md:text-6xl font-display font-bold text-accent">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider mt-2 text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
