import {
  ArrowRight,
  Building2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import {
  Badge,
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import type { ContactMethodIconName, ContactPageContent } from "../types";
import {
  LandingContainer,
  LandingSection,
  SectionHeader,
} from "./landing-section";

const contactIcons: Record<ContactMethodIconName, LucideIcon> = {
  agency: Building2,
  clock: Clock3,
  mail: Mail,
  map: MapPin,
  phone: Phone,
  search: Search,
  shield: ShieldCheck,
};

export function ContactPage({ content }: { content: ContactPageContent }) {
  return (
    <main className="bg-white">
      <ContactHero content={content} />
      <ContactMethods content={content} />
      <OfficeHoursSection content={content} />
    </main>
  );
}

function ContactHero({ content }: { content: ContactPageContent }) {
  return (
    <section className="relative overflow-hidden border-b border-primary/10 bg-cti-gold text-foreground">
      <LandingContainer className="grid gap-8 pb-14 pt-32 sm:pb-16 sm:pt-36 lg:grid-cols-[minmax(0,0.95fr)_minmax(380px,0.72fr)] lg:items-end lg:pb-20 lg:pt-44">
        <div className="max-w-3xl space-y-5">
          {content.eyebrow ? (
            <Badge
              variant="outline"
              className="h-6 rounded-md border-primary/20 bg-white/85 px-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
            >
              {content.eyebrow}
            </Badge>
          ) : null}
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-normal text-foreground sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/78">
            {content.description}
          </p>
          <div className="flex flex-col gap-3 pt-3 sm:flex-row">
            {content.primaryCta ? (
              <Link
                href={content.primaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/15 hover:bg-primary/90"
                )}
              >
                {content.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
            ) : null}
            {content.secondaryCta ? (
              <Link
                href={content.secondaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 rounded-lg border-primary/25 bg-white px-6 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
                )}
              >
                {content.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>

        <Card className="rounded-lg border-primary/15 bg-white py-0 text-foreground shadow-xl shadow-primary/10">
          <CardHeader className="p-5 sm:p-6">
            <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-cti-gold">
              <ShieldCheck className="size-5" />
            </span>
            <CardTitle className="mt-4 text-2xl font-semibold tracking-normal">
              {content.visual?.title}
            </CardTitle>
            <CardDescription className="text-base leading-7">
              {content.visual?.description}
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="grid gap-4 p-5 sm:p-6">
            {content.contactMethods.slice(0, 2).map((method) => {
              const Icon = contactIcons[method.icon];

              return (
                <a
                  key={method.title}
                  href={method.href}
                  className="grid grid-cols-[auto_1fr] gap-3 rounded-lg border border-border bg-white p-3 transition-colors hover:border-primary/25 hover:bg-cti-gold/20"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-cti-blue/10 text-cti-blue">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">
                      {method.title}
                    </span>
                    <span className="mt-1 block truncate text-sm text-muted-foreground">
                      {method.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </CardContent>
        </Card>
      </LandingContainer>
    </section>
  );
}

function ContactMethods({ content }: { content: ContactPageContent }) {
  return (
    <LandingSection>
      <div className="space-y-8">
        <SectionHeader content={content.methodsSection} />
        <div className="grid gap-4 md:grid-cols-3">
          {content.contactMethods.map((method) => {
            const Icon = contactIcons[method.icon];

            return (
              <Card
                key={method.title}
                className="rounded-lg border-border bg-background shadow-none transition-colors hover:border-primary/25"
              >
                <CardHeader className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-cti-blue/10 text-cti-blue">
                      <Icon className="size-5" />
                    </span>
                    <Badge
                      variant="outline"
                      className="rounded-md border-cti-blue/20 bg-cti-blue/5 text-cti-blue"
                    >
                      CTI
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold tracking-normal">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <a
                    href={method.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {method.value}
                    <ArrowRight className="size-4" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </LandingSection>
  );
}

function OfficeHoursSection({ content }: { content: ContactPageContent }) {
  return (
    <LandingSection tone="primary">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <SectionHeader
          content={{
            eyebrow: "Disponibilité CTI",
            title: content.officeHours.title,
            description: content.officeHours.description,
          }}
        />
        <Card className="rounded-lg border-primary/15 bg-primary py-0 text-primary-foreground shadow-xl shadow-primary/10">
          <CardHeader className="p-5 sm:p-6">
            <span className="flex size-11 items-center justify-center rounded-lg bg-cti-gold text-primary">
              <Clock3 className="size-5" />
            </span>
            <CardTitle className="mt-4 text-2xl font-semibold tracking-normal">
              {content.officeHours.title}
            </CardTitle>
            <CardDescription className="text-blue-50">
              {content.officeHours.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 p-5 pt-0 sm:p-6 sm:pt-0">
            {content.officeHours.rows.map((row) => (
              <div
                key={row.label}
                className="flex items-start justify-between gap-4 border-t border-white/15 pt-4 text-sm"
              >
                <span className="text-blue-50">{row.label}</span>
                <span className="text-right font-semibold text-white">
                  {row.value}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </LandingSection>
  );
}
