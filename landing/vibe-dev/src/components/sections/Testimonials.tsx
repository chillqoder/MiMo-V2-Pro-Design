"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 md:py-32 dotted-bg">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="Don't Take Our Word for It"
          description="Here's what our clients say after shipping with us."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {TESTIMONIALS.map((testimonial, index) => {
            const initials = testimonial.author
              .split(" ")
              .map((n) => n[0])
              .join("");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="rounded-2xl border border-border bg-card/30 p-6 md:p-8 hover:border-accent/20 transition-colors flex flex-col"
              >
                <span className="text-6xl text-accent/20 font-display leading-none select-none">
                  &ldquo;
                </span>

                <p className="text-foreground text-lg leading-relaxed mt-2 flex-1">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
