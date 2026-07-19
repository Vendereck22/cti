import type { Metadata } from "next";

import { landingContent } from "@/features/landing/content";
import { LandingPage } from "@/features/landing/components/landing-page";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: landingContent.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: landingContent.seo.title,
  description: landingContent.seo.description,
  openGraph: {
    title: landingContent.seo.title,
    description: landingContent.seo.description,
    locale: "fr_CD",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LandingPage />
    </>
  );
}
