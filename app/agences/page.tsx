import type { Metadata } from "next";

import { landingContent } from "@/features/landing/content";
import { AgencyLocatorSection } from "@/features/landing/components/agency-locator-section";
import { LandingPageShell } from "@/features/landing/components/landing-page";

export const metadata: Metadata = {
  title: "Agences",
  description: landingContent.agencyLocator.description,
};

export default function AgenciesPage() {
  return (
    <LandingPageShell content={landingContent}>
      <main>
        <AgencyLocatorSection content={landingContent.agencyLocator} />
      </main>
    </LandingPageShell>
  );
}
