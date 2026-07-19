import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  Menu,
  MapPin,
  Phone,
  Quote,
  Search,
  ShieldCheck,
  Send,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { getPublicLandingContent } from "../services/public-landing.service";
import type {
  LandingImageContent,
  LandingHeaderContent,
  LandingIconName,
  PublicLandingContent,
  TrustProof,
} from "../types";
import { AgencyLocatorSection } from "./agency-locator-section";
import { FAQSection } from "./faq-section";
import { HeroSection } from "./hero-section";
import {
  LandingContainer,
  LandingSection,
  SectionHeader,
} from "./landing-section";

const icons: Record<LandingIconName, LucideIcon> = {
  agency: Building2,
  arrow: ArrowRight,
  check: CheckCircle2,
  clock: Clock3,
  lock: LockKeyhole,
  map: MapPin,
  money: BadgeDollarSign,
  phone: Phone,
  search: Search,
  shield: ShieldCheck,
  send: Send,
  wallet: Wallet,
};

export async function LandingPage() {
  const content = await getPublicLandingContent();

  return (
    <LandingPageShell content={content}>
      <main>
        <HeroSection content={content.hero} estimator={content.estimator} />
        <TrustBand items={content.trust} />
        <ProcessSection content={content.process} />
        <ServicesSection content={content} />
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

function SiteHeader({ content }: { content: LandingHeaderContent }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <LandingContainer className="flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-lg font-semibold text-cti-gold shadow-sm">
            {content.logoLabel}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-foreground">
              {content.companyName}
            </span>
            <span className="block text-xs text-muted-foreground">
              {content.logoDescription}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {content.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={content.secondaryCta.href}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "hidden h-10 rounded-lg border-border px-3 text-sm font-semibold text-primary sm:inline-flex"
            )}
          >
            <MapPin className="size-4" />
            {content.secondaryCta.label}
          </Link>
          <Link
            href={content.primaryCta.href}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 rounded-lg bg-cti-gold px-3 text-sm font-semibold text-primary hover:bg-[#e0a900]"
            )}
          >
            {content.primaryCta.label}
          </Link>
          <MobileNavigation content={content} />
        </div>
      </LandingContainer>
    </header>
  );
}

function MobileNavigation({ content }: { content: LandingHeaderContent }) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label={content.mobileMenuLabel}
        className={cn(
          buttonVariants({ size: "icon-lg", variant: "outline" }),
          "rounded-lg border-border text-primary md:hidden"
        )}
      >
        <Menu className="size-4" />
      </SheetTrigger>
      <SheetContent className="w-[86vw] max-w-sm border-border bg-background">
        <SheetHeader className="border-b border-border p-5">
          <SheetTitle className="flex items-center gap-3 text-primary">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-cti-gold">
              {content.logoLabel}
            </span>
            {content.companyName}
          </SheetTitle>
          <SheetDescription>{content.logoDescription}</SheetDescription>
        </SheetHeader>
        <nav className="grid gap-1 px-5 py-3">
          {content.navigation.map((item) => (
            <SheetClose
              key={item.href}
              nativeButton={false}
              render={
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                />
              }
            >
              {item.label}
            </SheetClose>
          ))}
        </nav>
        <SheetFooter className="border-t border-border p-5">
          <SheetClose
            nativeButton={false}
            render={
              <Link
                href={content.secondaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-11 w-full rounded-lg border-border text-primary"
                )}
              />
            }
          >
            <MapPin className="size-4" />
            {content.secondaryCta.label}
          </SheetClose>
          <SheetClose
            nativeButton={false}
            render={
              <Link
                href={content.primaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 w-full rounded-lg bg-cti-gold text-primary hover:bg-[#e0a900]"
                )}
              />
            }
          >
            {content.primaryCta.label}
            <ArrowRight className="size-4" />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function TrustBand({ items }: { items: TrustProof[] }) {
  return (
    <LandingSection className="relative z-10 -mt-10 border-b border-border pb-12 pt-0 sm:-mt-12 sm:pb-14">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = icons[item.icon];

          return (
            <Card
              key={item.title}
              className="rounded-lg border-border shadow-none transition-colors hover:border-primary/25"
            >
              <CardContent className="flex gap-3 p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cti-blue/10 text-cti-blue">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </LandingSection>
  );
}

function ProcessSection({
  content,
}: {
  content: PublicLandingContent["process"];
}) {
  return (
    <LandingSection tone="muted">
      <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        {content.visual ? <EditorialImageCard visual={content.visual} /> : null}
        <div>
          <SectionHeader content={content} />
          <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {content.steps.map((step) => (
              <Card
                key={step.step}
                className="rounded-lg border-border shadow-none"
              >
                <CardHeader className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary font-semibold text-cti-gold">
                    {step.step}
                  </span>
                  <div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-6">
                      {step.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </LandingSection>
  );
}

function ServicesSection({ content }: { content: PublicLandingContent }) {
  return (
    <LandingSection id="services">
      <SectionHeader content={content.services} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {content.services.cards.map((service) => {
          const Icon = icons[service.icon];

          return (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full rounded-lg border-border shadow-none transition-colors group-hover:border-cti-blue/40">
                <CardHeader>
                  <span className="mb-4 flex size-10 items-center justify-center rounded-lg bg-cti-blue/10 text-cti-blue">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm leading-6">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto border-t border-border bg-muted/40">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-cti-blue">
                    {content.services.actionLabel}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardFooter>
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
    <LandingSection tone="muted">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeader content={content} />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-sm font-semibold text-primary">
                Une approche claire
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Chaque bloc guide le client vers une action simple : simuler,
                comprendre, localiser, puis confirmer en agence.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-sm font-semibold text-primary">
                Un parcours en agence
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                La landing prépare le client sans créer de transaction en ligne.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {content.points.map((point) => {
            const Icon = icons[point.icon];

            return (
              <Card
                key={point.title}
                className="h-full rounded-lg border-border bg-background shadow-none transition-colors hover:border-primary/25"
              >
                <CardHeader className="gap-4">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-cti-blue/10 text-cti-blue">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {point.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-6">
                      {point.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </LandingSection>
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
        <SectionHeader content={content} tone="dark" />
        <div className="grid gap-3 sm:grid-cols-3">
          {content.points.map((point) => (
            <Card
              key={point}
              className="rounded-lg border-white/15 bg-white/10 text-primary-foreground shadow-none"
            >
              <CardContent className="p-4 text-sm leading-6 text-blue-50">
                <CheckCircle2 className="mb-3 size-5 text-cti-gold" />
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
          <SectionHeader content={content} tone="dark" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {content.points.map((point) => {
              const Icon = icons[point.icon];

              return (
                <Card
                  key={point.title}
                  className="rounded-lg border-white/15 bg-white/10 text-primary-foreground shadow-none"
                >
                  <CardHeader>
                    <span className="flex size-10 items-center justify-center rounded-lg bg-cti-gold text-primary">
                      <Icon className="size-5" />
                    </span>
                    <CardTitle className="mt-2 text-base font-semibold text-white">
                      {point.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-6 text-blue-50">
                      {point.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
        {content.visual ? (
          <EditorialImageCard visual={content.visual} tone="dark" />
        ) : null}
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
    <LandingSection>
      <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
        <SectionHeader content={content} />
        <div className="grid gap-4 md:grid-cols-3">
          {content.items.map((item) => (
            <Card
              key={`${item.name}-${item.location}`}
              className="h-full rounded-lg border-border bg-background shadow-none transition-colors hover:border-primary/25"
            >
              <CardHeader className="gap-4">
                <span className="flex size-10 items-center justify-center rounded-lg bg-cti-gold/20 text-primary">
                  <Quote className="size-5" />
                </span>
                <CardDescription className="text-base leading-7 text-foreground">
                  “{item.quote}”
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex-col items-start gap-1 border-t border-border bg-muted/40">
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
          : "border-primary/10 bg-background shadow-primary/10"
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
              isDark ? "text-cti-gold" : "text-cti-blue"
            )}
          >
            {visual.eyebrow}
          </p>
        ) : null}
        {visual.title ? (
          <h3
            className={cn(
              "text-xl font-semibold leading-tight",
              isDark ? "text-white" : "text-foreground"
            )}
          >
            {visual.title}
          </h3>
        ) : null}
        {visual.description ? (
          <p
            className={cn(
              "text-sm leading-6",
              isDark ? "text-blue-50" : "text-muted-foreground"
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
    <LandingSection>
      <Card className="rounded-lg border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/10">
        <CardHeader className="gap-3 px-5 py-10 sm:px-8 lg:px-10">
          {content.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cti-gold">
              {content.eyebrow}
            </p>
          ) : null}
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl space-y-3">
              <CardTitle className="text-3xl font-semibold tracking-normal sm:text-4xl">
                {content.title}
              </CardTitle>
              <CardDescription className="text-base leading-7 text-blue-50">
                {content.description}
              </CardDescription>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={content.primaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 rounded-lg bg-cti-gold px-5 text-sm font-semibold text-primary hover:bg-[#e0a900]"
                )}
              >
                {content.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={content.secondaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-11 rounded-lg border-white/25 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
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
    <footer className="border-t border-primary/20 bg-slate-950 py-10 text-white">
      <LandingContainer className="grid gap-8 md:grid-cols-[1.1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-cti-gold text-lg font-semibold text-primary">
              {content.header.logoLabel}
            </span>
            <div>
              <p className="font-semibold">{content.header.companyName}</p>
              <p className="text-sm text-slate-400">
                {content.header.logoDescription}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            {content.footer.description}
          </p>
          <div className="mt-5 space-y-2 text-sm text-slate-300">
            <p className="font-semibold text-white">
              {content.footer.contactTitle}
            </p>
            {content.footer.contactItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {content.footer.columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold text-white">
                {column.title}
              </h2>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
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
        <Separator className="mt-8 bg-white/10" />
        <p className="mt-5 text-xs text-slate-400">{content.footer.legal}</p>
      </LandingContainer>
    </footer>
  );
}
