import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  CheckCircle2,
  Clock3,
  Laptop,
  LockKeyhole,
  Mail,
  MapPin,
  Package,
  Phone,
  Search,
  ShieldCheck,
  Send,
  Smartphone,
  Store,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { getPublicLandingContent } from "../services/public-landing.service";
import type {
  LandingImageContent,
  LandingIconName,
  PublicLandingContent,
  TrustProof,
} from "../types";
import { BrandLogo } from "./brand-logo";
import { ClientTransfersSection } from "./client-transfers-section";
import { CountryListSection } from "./country-list-section";
import { FAQSection } from "./faq-section";
import { HeroSection } from "./hero-section";
import { LandingContainer } from "./landing-section";
import { MobileExperienceSection } from "./mobile-experience-section";
import { ServicesCarouselSection } from "./services-carousel-section";
import { SocialLinks } from "./social-links";
import { SiteHeader } from "./site-header";
import { TransferMethodsSection } from "./transfer-methods-section";

const icons: Record<LandingIconName, LucideIcon> = {
  agency: Building2,
  arrow: ArrowRight,
  check: CheckCircle2,
  clock: Clock3,
  laptop: Laptop,
  lock: LockKeyhole,
  map: MapPin,
  mobile: Smartphone,
  money: BadgeDollarSign,
  package: Package,
  phone: Phone,
  search: Search,
  shield: ShieldCheck,
  send: Send,
  store: Store,
  wallet: Wallet,
};

export async function LandingPage() {
  const content = await getPublicLandingContent();

  return (
    <LandingPageShell content={content}>
      <main>
        <HeroSection content={content.hero} estimator={content.estimator} />
        <TrustBand items={content.trust} />
        <TransferMethodsSection content={content.transferMethods} />
        <ServicesCarouselSection content={content.services} />
        <ClientTransfersSection content={content.clientTransfers} />
        <MobileExperienceSection content={content.mobileExperience} />
        <FAQSection content={content.faq} />
        <CountryListSection content={content.countryList} />
        {/* <WhyChooseSection content={content.whyChoose} /> */}
      </main>
    </LandingPageShell>
  );
}

export function LandingPageShell({
  content,
  children,
}: {
  content: PublicLandingContent;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader content={content.header} />
      {children}
      <SiteFooter content={content} />
    </div>
  );
}

function TrustBand({ items }: { items: TrustProof[] }) {
  return (
    <section className="border-y border-primary/10 bg-primary py-8 text-primary-foreground sm:py-10">
      <LandingContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = icons[item.icon];

          return (
            <div
              key={item.title}
              className="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-start"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-cti-gold/25 bg-cti-gold text-primary">
                <Icon className="size-5" />
              </span>
              <div>
                <h2 className="text-base font-semibold leading-snug text-white">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-blue-50">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </LandingContainer>
    </section>
  );
}

export function WhyChooseSection({
  content,
}: {
  content: PublicLandingContent["whyChoose"];
}) {
  return (
    <section className="border-t border-primary/10 bg-cti-gold py-14 text-foreground sm:py-16 lg:py-20">
      <LandingContainer>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-lg border border-primary/15 bg-white p-6 shadow-sm shadow-primary/5 sm:p-8 lg:sticky lg:top-28">
            {content.eyebrow ? (
              <Badge
                variant="outline"
                className="h-6 rounded-md border-primary/15 bg-cti-gold/20 px-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
              >
                {content.eyebrow}
              </Badge>
            ) : null}
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
              {content.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              {content.description}
            </p>

            <Separator className="my-6 bg-border" />

            <div className="grid gap-3">
              {content.highlights.map((highlight) => {
                const Icon = icons[highlight.icon];

                return (
                  <div
                    key={highlight.value}
                    className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-lg border border-cti-gold/30 bg-cti-gold/10 p-3"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-cti-gold">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {highlight.value}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {highlight.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {content.points.map((point, index) => {
              const Icon = icons[point.icon];

              return (
                <Card
                  key={point.title}
                  className="group min-h-[286px] rounded-lg border-primary/15 bg-white shadow-none transition-all hover:border-primary/35 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardHeader className="grid-cols-[1fr_auto] items-start gap-5 p-6 pb-0 sm:p-7 sm:pb-0">
                    <span className="inline-flex h-7 items-center rounded-full bg-cti-gold px-3 text-xs font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-foreground text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                      <Icon className="size-6" />
                    </span>
                  </CardHeader>
                  <CardContent className="p-6 pt-8 sm:p-7 sm:pt-10">
                    <CardTitle className="text-2xl font-bold leading-tight tracking-normal text-foreground">
                      {point.title}
                    </CardTitle>
                    <CardDescription className="mt-4 text-base leading-7 text-foreground/75">
                      {point.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </LandingContainer>
    </section>
  );
}

export function EditorialImageCard({
  visual,
  tone = "light",
}: {
  visual: LandingImageContent;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <Card
      className={cn(
        "overflow-hidden rounded-lg shadow-xl",
        isDark
          ? "border-white/15 bg-white/10 shadow-slate-950/20"
          : "border-primary/10 bg-background shadow-primary/10",
      )}
    >
      <div className="h-64 overflow-hidden bg-muted sm:h-80 lg:h-[420px]">
        <Image
          src={visual.src}
          alt={visual.alt}
          width={900}
          height={620}
          unoptimized
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="size-full object-cover"
        />
      </div>
      <CardContent className="space-y-3 p-5">
        {visual.eyebrow ? (
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.14em]",
              isDark ? "text-cti-gold" : "text-cti-blue",
            )}
          >
            {visual.eyebrow}
          </p>
        ) : null}
        {visual.title ? (
          <h3
            className={cn(
              "text-xl font-semibold leading-tight",
              isDark ? "text-white" : "text-foreground",
            )}
          >
            {visual.title}
          </h3>
        ) : null}
        {visual.description ? (
          <p
            className={cn(
              "text-sm leading-6",
              isDark ? "text-blue-50" : "text-muted-foreground",
            )}
          >
            {visual.description}
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}

function SiteFooter({ content }: { content: PublicLandingContent }) {
  const officeItems = content.footer.contactItems.filter(
    (item) => !item.includes("@")
  );
  const phoneHref = `tel:${content.header.contactPhone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${content.header.contactEmail}`;

  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <LandingContainer className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.9fr_1.15fr] lg:items-start">
          <div>
            <div className="inline-flex rounded-lg bg-white p-3 shadow-xl shadow-black/25 ring-1 ring-white/10">
              <BrandLogo content={content.header} variant="footer" />
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
              {content.footer.description}
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cti-gold">
                Reseaux sociaux
              </p>
              <SocialLinks
                links={content.header.socialLinks}
                variant="footer"
                className="mt-3"
              />
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-sm shadow-black/20">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cti-gold">
              {content.footer.contactTitle}
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/72">
              {officeItems.map((item) => (
                <li key={item} className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-cti-gold text-primary">
                    <MapPin className="size-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
              <li className="grid grid-cols-[auto_1fr] gap-3">
                <span className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-cti-gold text-primary">
                  <Phone className="size-4" />
                </span>
                <a
                  href={phoneHref}
                  className="transition-colors hover:text-cti-gold"
                >
                  {content.header.contactPhone}
                </a>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-3">
                <span className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-cti-gold text-primary">
                  <Mail className="size-4" />
                </span>
                <a
                  href={emailHref}
                  className="break-all transition-colors hover:text-cti-gold"
                >
                  {content.header.contactEmail}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {content.footer.columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cti-gold">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/68 transition-colors hover:text-cti-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-3 text-xs leading-6 text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{content.footer.legal}</p>
          <p className="font-semibold uppercase tracking-[0.16em] text-white/70">
            {content.header.companyName}
          </p>
        </div>
      </LandingContainer>
    </footer>
  );
}
