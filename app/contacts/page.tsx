import type { Metadata } from "next";

import { landingContent } from "@/features/landing/content";
import { LandingPageShell } from "@/features/landing/components/landing-page";
import { PublicInfoPage } from "@/features/landing/components/public-info-page";

export const metadata: Metadata = {
  title: "Contact",
  description: landingContent.publicPages.contact.description,
};

export default function ContactsPage() {
  return (
    <LandingPageShell content={landingContent}>
      <PublicInfoPage content={landingContent.publicPages.contact} />
    </LandingPageShell>
  );
}
