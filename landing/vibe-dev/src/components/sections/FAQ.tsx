"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="FAQ"
            title="Questions? We've Got Answers."
          />
          <Accordion items={FAQ_ITEMS} />
        </div>
      </Container>
    </section>
  );
}
