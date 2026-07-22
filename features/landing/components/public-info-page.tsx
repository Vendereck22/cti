import {
  ArrowRight,
  Building2,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import {
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import type { LandingIconName, PublicInfoPageContent } from "../types";
import { EditorialImageCard } from "./landing-page";
import { LandingSection, SectionHeader } from "./landing-section";

const icons: Partial<Record<LandingIconName, LucideIcon>> = {
  agency: Building2,
  map: MapPin,
  phone: Phone,
  search: Search,
  shield: ShieldCheck,
};

export function PublicInfoPage({ content }: { content: PublicInfoPageContent }) {
  const highlights = content.highlights ?? [];

  return (
    <main>
      <LandingSection>
        <div className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="space-y-8">
              <SectionHeader content={content} />
              {content.visual && <EditorialImageCard visual={content.visual} tone="light" />}
            </div>
            {highlights.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {highlights.map((item) => {
                  const Icon = icons[item.icon] ?? ShieldCheck;

                  return (
                    <Card
                      key={item.title}
                      className="rounded-lg border-border shadow-none"
                    >
                      <CardHeader>
                        <span className="flex size-10 items-center justify-center rounded-lg bg-cti-blue/10 text-cti-blue">
                          <Icon className="size-5" />
                        </span>
                        <CardTitle className="mt-2 text-base font-semibold text-foreground">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-6">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            ) : null}
          </div>

          {(content.primaryCta || content.secondaryCta) && (
            <Card className="rounded-lg border-primary/15 bg-cti-gold text-foreground shadow-xl shadow-cti-gold/20">
              <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-foreground/75">
                  {content.description}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  {content.primaryCta ? (
                    <Link
                      href={content.primaryCta.href}
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "h-11 rounded-lg bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90"
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
                        "h-11 rounded-lg border-primary/25 bg-white px-5 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
                      )}
                    >
                      {content.secondaryCta.label}
                    </Link>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </LandingSection>
    </main>
  );
}
