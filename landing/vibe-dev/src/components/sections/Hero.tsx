"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const avatars = [
  { initials: "JD", color: "bg-blue-500" },
  { initials: "AK", color: "bg-purple-500" },
  { initials: "MR", color: "bg-emerald-500" },
  { initials: "ST", color: "bg-orange-500" },
  { initials: "LW", color: "bg-pink-500" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-screen flex items-center gradient-mesh">
      <Container className="py-20 md:py-32">
        <div
          ref={ref}
          className="flex flex-col text-center md:text-left max-w-4xl mx-auto md:mx-0"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0 }}
            className="inline-flex items-center gap-1.5 mb-6 self-center md:self-start"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-display font-semibold rounded-full border border-accent/40 text-accent bg-accent/5 backdrop-blur-sm">
              AI-Powered Development Agency
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold tracking-tight text-foreground"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
          >
            <span className="block">We Build Your Product</span>
            <span className="block text-accent">While You Describe It.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Our team combines AI-powered development with human expertise to
            ship your app, website, or MVP at unprecedented speed.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button variant="primary" size="lg">
              Get a Free Estimate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg">
              See Our Work
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 flex items-center gap-3 justify-center md:justify-start"
          >
            <div className="flex -space-x-2">
              {avatars.map((avatar, i) => (
                <div
                  key={i}
                  className={`h-8 w-8 rounded-full ${avatar.color} flex items-center justify-center border-2 border-background text-xs font-semibold text-white`}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Trusted by 50+ founders
            </span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
