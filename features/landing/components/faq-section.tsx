"use client";

import { CheckCircle2, MessageCircleQuestion } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import type { FAQContent } from "../types";
import { LandingSection, SectionHeader } from "./landing-section";

interface FAQSectionProps {
  content: FAQContent;
}

export function FAQSection({ content }: FAQSectionProps) {
  const defaultValue = content.items[0] ? [content.items[0].id] : [];

  return (
    <LandingSection id="faq">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="space-y-6 lg:sticky lg:top-28">
          <SectionHeader content={content} />

          <Card className="rounded-lg border-primary/15 bg-primary py-0 text-primary-foreground shadow-xl shadow-primary/10">
            <CardHeader className="p-5 sm:p-6">
              <span className="flex size-12 items-center justify-center rounded-lg bg-cti-gold text-primary">
                <MessageCircleQuestion className="size-6" />
              </span>
              {content.supportTitle ? (
                <CardTitle className="mt-4 text-2xl font-bold leading-tight tracking-normal text-white">
                  {content.supportTitle}
                </CardTitle>
              ) : null}
              {content.supportDescription ? (
                <CardDescription className="text-sm leading-6 text-blue-50">
                  {content.supportDescription}
                </CardDescription>
              ) : null}
            </CardHeader>
            {content.supportItems?.length ? (
              <CardContent className="grid gap-3 p-5 pt-0 sm:p-6 sm:pt-0">
                {content.supportItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 p-3 text-sm font-semibold text-white"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-cti-gold" />
                    {item}
                  </div>
                ))}
              </CardContent>
            ) : null}
          </Card>
        </div>

        <Card className="rounded-lg border-cti-gold/25 bg-white py-0 shadow-none">
          <CardHeader className="border-b border-cti-gold/20 bg-cti-gold/10 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <Badge
                  variant="outline"
                  className="rounded-md border-primary/20 bg-white text-primary"
                >
                  FAQ
                </Badge>
                <CardTitle className="mt-3 text-2xl font-bold tracking-normal text-foreground">
                  Réponses rapides
                </CardTitle>
              </div>
              <span className="rounded-md bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
                {content.items.length} questions
              </span>
            </div>
          </CardHeader>
          <CardContent className="px-5 sm:px-6">
            <Accordion defaultValue={defaultValue}>
              {content.items.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="py-5 text-left text-base font-bold text-foreground hover:text-primary hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-6 text-muted-foreground">
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
