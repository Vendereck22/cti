import type { Metadata } from "next";

import { landingContent } from "@/features/landing/content";
import { AboutPage } from "@/features/landing/components/about-page";
import { LandingPageShell } from "@/features/landing/components/landing-page";

export const metadata: Metadata = {
  title: "A propos",
  description: landingContent.publicPages.about.description,
};

export default function AboutRoutePage() {
  return (
    <LandingPageShell content={landingContent}>
      <AboutPage content={landingContent.publicPages.about} />
    </LandingPageShell>
  );
}
