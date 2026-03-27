'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import { TECH_STACK } from '@/lib/constants'

const categoryLabels: Record<keyof typeof TECH_STACK, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  ai: 'AI Tools',
  infra: 'Infrastructure',
  payments: 'Payments & Auth',
}

export function TechStack() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const categories: Array<[keyof typeof TECH_STACK, readonly string[]]> =
    Object.entries(TECH_STACK) as Array<
      [keyof typeof TECH_STACK, readonly string[]]
    >

  return (
    <section className="py-20 md:py-32" id="tech-stack">
      <Container>
        <SectionHeading
          label="Our Stack"
          title="Built With the Best Tools"
          description="We use proven, modern technologies to build fast, reliable products."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12"
        >
          {categories.map(([key, values], index) => (
            <motion.div
              key={key}
              className="rounded-2xl bg-card/30 border border-border p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <h3 className="font-display font-semibold text-white text-lg mb-4">
                {categoryLabels[key]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {values.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-muted-foreground hover:border-accent/30 hover:text-accent transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}