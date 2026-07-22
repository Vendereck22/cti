import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  CheckCircle2,
  Clock3,
  Laptop,
  LockKeyhole,
  MapPin,
  Package,
  Phone,
  Quote,
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
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { AgencyLocatorSection } from "./agency-locator-section";
import { BrandLogo } from "./brand-logo";
import { ClientTransfersSection } from "./client-transfers-section";
import { FAQSection } from "./faq-section";
import { HeroSection } from "./hero-section";
import {
  LandingContainer,
  LandingSection,
  SectionHeader,
} from "./landing-section";
import { MobileExperienceSection } from "./mobile-experience-section";
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
        <ProcessSection content={content.process} />
        <ServicesSection content={content} />
        <ClientTransfersSection content={content.clientTransfers} />
        <MobileExperienceSection content={content.mobileExperience} />
        <WhyChooseSection content={content.whyChoose} />
        <RateInfoSection content={content.rateInfo} />
        <AgencyLocatorSection content={content.agencyLocator} />
        <SecuritySection content={content.security} />
        <TestimonialsSection content={content.testimonials} />
        <FAQSection content={content.faq} />
        <FinalCtaSection content={content.finalCta} />
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
    <section className="border-y border-primary/10 bg-cti-gold py-8 text-foreground sm:py-10">
      <LandingContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = icons[item.icon];

          return (
            <div
              key={item.title}
              className="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-start"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary text-cti-gold">
                <Icon className="size-5" />
              </span>
              <div>
                <h2 className="text-base font-semibold leading-snug text-foreground">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-foreground/75">
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

function ProcessSection({
  content,
}: {
  content: PublicLandingContent["process"];
}) {
  return (
    <section className="border-t border-border bg-white py-14 text-foreground sm:py-16 lg:py-20">
      <LandingContainer>
        <div className="max-w-4xl space-y-3">
          {content.eyebrow ? (
            <Badge
              variant="outline"
              className="h-6 rounded-md border-primary/15 bg-cti-gold/20 px-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
            >
              {content.eyebrow}
            </Badge>
          ) : null}
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            {content.description}
          </p>
        </div>

        {content.visual ? (
          <Card className="mt-8 rounded-lg border-cti-gold/30 bg-cti-gold/10 shadow-none">
            <CardContent className="grid gap-2 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-sm font-semibold text-primary">
                  {content.visual.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground/75">
                  {content.visual.description}
                </p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {content.visual.eyebrow}
              </span>
            </CardContent>
          </Card>
        ) : null}

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {content.steps.map((step) => (
            <Card
              key={step.step}
              className="min-h-[320px] rounded-lg border-border bg-white shadow-none transition-colors hover:border-primary/25"
            >
              <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-5 p-6 pb-0 sm:p-8 sm:pb-0">
                <CardTitle className="text-2xl font-bold leading-tight tracking-normal text-foreground">
                  {step.title}
                </CardTitle>
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-foreground text-lg font-bold text-foreground sm:size-16">
                  {step.step}
                </span>
              </CardHeader>
              <CardContent className="p-6 pt-8 sm:p-8 sm:pt-10">
                <p className="max-w-sm text-base font-medium leading-7 text-foreground/85">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </LandingContainer>
    </section>
  );
}

function ServicesSection({ content }: { content: PublicLandingContent }) {
  return (
    <LandingSection id="services">
      <SectionHeader content={content.services} />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {content.services.cards.map((service) => {
          const Icon = icons[service.icon];

          return (
            <Link
              key={service.title}
              href={service.href}
              className="group block h-full"
            >
              <Card className="h-full rounded-lg border-cti-gold/20 bg-white shadow-none transition-colors group-hover:border-primary/45 group-hover:shadow-md group-hover:shadow-cti-gold/10">
                <CardContent className="flex h-full gap-5 p-5 sm:p-6">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-foreground bg-white text-foreground transition-colors group-hover:border-primary group-hover:text-primary sm:size-16">
                    <Icon className="size-6" />
                  </span>
                  <div className="min-w-0">
                    <CardTitle className="text-xl font-bold leading-tight tracking-normal text-foreground sm:text-2xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mt-3 text-base leading-7 text-foreground/75">
                      {service.description}
                    </CardDescription>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      {content.services.actionLabel}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </LandingSection>
  );
}

function WhyChooseSection({
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

function RateInfoSection({
  content,
}: {
  content: PublicLandingContent["rateInfo"];
}) {
  return (
    <LandingSection id="taux" tone="primary">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader content={content} />
        <div className="grid gap-3 sm:grid-cols-3">
          {content.points.map((point) => (
            <Card
              key={point}
              className="rounded-lg border-primary/15 bg-white text-foreground shadow-none"
            >
              <CardContent className="p-4 text-sm leading-6 text-muted-foreground">
                <CheckCircle2 className="mb-3 size-5 text-primary" />
                {point}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </LandingSection>
  );
}

function SecuritySection({
  content,
}: {
  content: PublicLandingContent["security"];
}) {
  return (
    <LandingSection tone="primary">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeader content={content} />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {content.points.map((point) => {
              const Icon = icons[point.icon];

              return (
                <Card
                  key={point.title}
                  className="rounded-lg border-primary/15 bg-white text-foreground shadow-none"
                >
                  <CardHeader>
                    <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-cti-gold">
                      <Icon className="size-5" />
                    </span>
                    <CardTitle className="mt-2 text-base font-semibold text-foreground">
                      {point.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-6 text-muted-foreground">
                      {point.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
        {content.visual ? <EditorialImageCard visual={content.visual} /> : null}
      </div>
    </LandingSection>
  );
}

function TestimonialsSection({
  content,
}: {
  content: PublicLandingContent["testimonials"];
}) {
  return (
    <LandingSection tone="muted">
      <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
        <SectionHeader content={content} />
        <div className="grid gap-4 md:grid-cols-3">
          {content.items.map((item) => (
            <Card
              key={`${item.name}-${item.location}`}
              className="h-full rounded-lg border-cti-gold/25 bg-white shadow-none transition-colors hover:border-primary/35"
            >
              <CardHeader className="gap-4">
                <span className="flex size-10 items-center justify-center rounded-lg bg-cti-gold/20 text-primary">
                  <Quote className="size-5" />
                </span>
                <CardDescription className="text-base leading-7 text-foreground">
                  “{item.quote}”
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex-col items-start gap-1 border-t border-cti-gold/20 bg-white">
                <p className="text-sm font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-cti-blue">
                  {item.location}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </LandingSection>
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

function FinalCtaSection({
  content,
}: {
  content: PublicLandingContent["finalCta"];
}) {
  return (
    <LandingSection tone="muted">
      <Card className="rounded-lg border-cti-gold/35 bg-white text-foreground shadow-xl shadow-cti-gold/20">
        <CardHeader className="gap-3 px-5 py-10 sm:px-8 lg:px-10">
          {content.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              {content.eyebrow}
            </p>
          ) : null}
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl space-y-3">
              <CardTitle className="text-3xl font-semibold tracking-normal sm:text-4xl">
                {content.title}
              </CardTitle>
              <CardDescription className="text-base leading-7 text-muted-foreground">
                {content.description}
              </CardDescription>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={content.primaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 rounded-lg bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90",
                )}
              >
                {content.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={content.secondaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-11 rounded-lg border-primary/25 bg-white px-5 text-sm font-semibold text-primary hover:bg-primary hover:text-white",
                )}
              >
                <MapPin className="size-4" />
                {content.secondaryCta.label}
              </Link>
            </div>
          </div>
        </CardHeader>
      </Card>
    </LandingSection>
  );
}

function SiteFooter({ content }: { content: PublicLandingContent }) {
  return (
    <footer className="border-t border-border bg-white py-10 text-foreground">
      <LandingContainer className="grid gap-8 md:grid-cols-[1.1fr_1.4fr]">
        <div>
          <BrandLogo content={content.header} variant="footer" />
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            {content.footer.description}
          </p>
          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">
              {content.footer.contactTitle}
            </p>
            {content.footer.contactItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <SocialLinks
            links={content.header.socialLinks}
            variant="footer"
            className="mt-5"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {content.footer.columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold text-foreground">
                {column.title}
              </h2>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </LandingContainer>
      <LandingContainer>
        <Separator className="mt-8 bg-border" />
        <p className="mt-5 text-xs text-muted-foreground">
          {content.footer.legal}
        </p>
      </LandingContainer>
    </footer>
  );
}
