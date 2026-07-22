import type { Metadata } from "next";

import { landingContent } from "@/features/landing/content";
import { ContactPage } from "@/features/landing/components/contact-page";
import { LandingPageShell } from "@/features/landing/components/landing-page";

export const metadata: Metadata = {
  title: "Contact",
  description: landingContent.publicPages.contact.description,
};

export default function ContactsPage() {
  return (
    <LandingPageShell content={landingContent}>
      <ContactPage content={landingContent.publicPages.contact} />
    </LandingPageShell>
  );
}
