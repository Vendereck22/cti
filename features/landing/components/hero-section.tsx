import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants, Card, CardContent } from "@/components/ui";
import { cn } from "@/lib/utils";
import type {
  LandingHeroContent,
  LandingImageContent,
  RateEstimatorContent,
} from "../types";
import { LandingReveal } from "./landing-reveal";
import { LandingContainer } from "./landing-section";
import { RateEstimator } from "./rate-estimator";

interface HeroSectionProps {
  content: LandingHeroContent;
  estimator: RateEstimatorContent;
}

export function HeroSection({ content, estimator }: HeroSectionProps) {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden border-b border-border bg-background text-foreground"
    >
      <LandingContainer className="relative grid items-center gap-10 py-10 lg:min-h-[720px] lg:grid-cols-[0.78fr_1.22fr] lg:py-16 xl:gap-12">
        <LandingReveal>
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex h-8 items-center rounded-md border border-cti-blue/20 bg-cti-blue/5 px-3 text-sm font-semibold text-cti-blue">
              {content.eyebrow}
            </div>
            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-normal text-primary sm:text-5xl lg:text-6xl">
                {content.title}
              </h1>
              <p className="max-w-xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
                {content.description}
              </p>
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
                  "h-11 rounded-lg border-border px-5 text-sm font-semibold text-primary hover:bg-muted"
                )}
              >
                <MapPin className="size-4" />
                {content.secondaryCta.label}
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {content.metrics.map((metric) => (
                <Card
                  key={metric.label}
                  className="rounded-lg border-primary/10 bg-muted/50 shadow-none"
                >
                  <CardContent className="p-4">
                    <p className="text-lg font-semibold text-primary">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">
                      {metric.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </LandingReveal>

        <LandingReveal>
          <div className="grid w-full items-start gap-4 xl:grid-cols-[0.78fr_1fr] xl:gap-5">
            <div className="order-2 xl:order-1">
              <HeroVisual visual={content.visual} />
            </div>
            <div className="order-1 xl:order-2">
              <RateEstimator content={estimator} />
            </div>
          </div>
        </LandingReveal>
      </LandingContainer>
    </section>
  );
}

function HeroVisual({ visual }: { visual: LandingImageContent }) {
  return (
    <Card className="overflow-hidden rounded-lg border-primary/10 bg-primary text-primary-foreground shadow-2xl shadow-primary/15">
      <div className="relative h-52 overflow-hidden bg-muted sm:h-64 xl:h-[420px]">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/10" />
      </div>
      <CardContent className="space-y-3 p-5">
        {visual.eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cti-gold">
            {visual.eyebrow}
          </p>
        ) : null}
        {visual.title ? (
          <h2 className="text-xl font-semibold leading-tight text-white">
            {visual.title}
          </h2>
        ) : null}
        {visual.description ? (
          <p className="text-sm leading-6 text-blue-50">{visual.description}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
