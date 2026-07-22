import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
import type {
  LandingHeroContent,
  LandingImageContent,
  RateEstimatorContent,
} from "../types";
import { HeroQuickSelector } from "./hero-quick-selector";
import { LandingReveal } from "./landing-reveal";

interface HeroSectionProps {
  content: LandingHeroContent;
  estimator: RateEstimatorContent;
}

export function HeroSection({ content, estimator }: HeroSectionProps) {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-cti-gold text-foreground"
    >
      <div className="mx-auto grid max-w-[1480px] lg:min-h-[700px] lg:grid-cols-[minmax(0,0.98fr)_minmax(430px,0.92fr)]">
        <div className="relative z-10 px-4 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-44 xl:pl-20">
          <LandingReveal>
            <div className="max-w-3xl space-y-8">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  {content.eyebrow}
                </p>
                <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-normal text-foreground sm:text-5xl lg:text-6xl">
                  {content.title}
                </h1>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/80 sm:text-xl">
                  {content.description}
                </p>
              </div>

              <HeroQuickSelector
                content={estimator}
                destinationLabel={content.primaryCta.label}
              />

              <div className="space-y-8">
                <Link
                  href={content.primaryCta.href}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 w-full max-w-[360px] rounded-full bg-primary px-8 text-base font-bold text-white shadow-xl shadow-primary/20 hover:bg-primary/90"
                  )}
                >
                  {content.primaryCta.label}
                </Link>

                <div className="flex flex-col gap-3 text-sm font-semibold text-foreground sm:flex-row sm:items-center">
                  <span className="inline-flex items-center gap-3">
                    <ShieldCheck className="size-5 text-primary" />
                    Intelligence. Sécurité. Ensemble.
                  </span>
                  <Link
                    href="/aide"
                    className="font-bold underline underline-offset-4 hover:text-primary"
                  >
                    En savoir plus sur la sécurité CTI
                  </Link>
                </div>
              </div>
            </div>
          </LandingReveal>
        </div>

        <LandingReveal>
          <div className="relative min-h-[340px] overflow-hidden bg-primary sm:min-h-[420px] lg:mt-32 lg:h-[calc(100%-8rem)] lg:min-h-0 lg:[clip-path:url(#landing-hero-image-clip)]">
            <HeroVisual visual={content.visual} />
          </div>
        </LandingReveal>
      </div>
    </section>
  );
}

function HeroVisual({ visual }: { visual: LandingImageContent }) {
  return (
    <>
      <svg aria-hidden="true" focusable="false" className="absolute size-0">
        <clipPath
          id="landing-hero-image-clip"
          clipPathUnits="objectBoundingBox"
        >
          <path d="M 0.34 0 C 0.22 0 0.14 0.08 0.09 0.22 L 0 1 H 1 V 0 Z" />
        </clipPath>
      </svg>
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        priority
        unoptimized
        sizes="(min-width: 1024px) 48vw, 100vw"
        className="object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-primary/10" />
    </>
  );
}
