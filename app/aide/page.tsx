import type { Metadata } from "next";

import { landingContent } from "@/features/landing/content";
import { FAQSection } from "@/features/landing/components/faq-section";
import { LandingPageShell } from "@/features/landing/components/landing-page";

export const metadata: Metadata = {
  title: "Aide",
  description: landingContent.faq.description,
};

export default function HelpPage() {
  return (
    <LandingPageShell content={landingContent}>
      <main>
        <FAQSection content={landingContent.faq} />
      </main>
    </LandingPageShell>
  );
}
