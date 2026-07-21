"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Card,
  CardContent,
} from "@/components/ui";
import type { FAQContent } from "../types";
import { LandingSection } from "./landing-section";

interface FAQSectionProps {
  content: FAQContent;
}

export function FAQSection({ content }: FAQSectionProps) {
  const defaultValue = content.items[0] ? [content.items[0].id] : [];

  return (
    <LandingSection id="faq" tone="muted">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 max-w-2xl space-y-3">
          {content.eyebrow ? (
            <Badge
              variant="outline"
              className="h-6 rounded-md border-cti-blue/20 bg-cti-blue/5 px-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-cti-blue"
            >
              {content.eyebrow}
            </Badge>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-base leading-7 text-muted-foreground">
            {content.description}
          </p>
        </div>

        <Card className="rounded-lg border-cti-gold/25 bg-white shadow-none">
          <CardContent className="px-5">
            <Accordion defaultValue={defaultValue}>
              {content.items.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="py-4 text-base font-semibold text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-6 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </LandingSection>
  );
}
