import { Bell, RefreshCw, Search, Send, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge, buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
import type {
  MobileExperienceContent,
  MobileExperienceIconName,
} from "../types";
import { LandingReveal } from "./landing-reveal";

const featureIcons: Record<MobileExperienceIconName, LucideIcon> = {
  bell: Bell,
  refresh: RefreshCw,
  search: Search,
  send: Send,
};

export function MobileExperienceSection({
  content,
}: {
  content: MobileExperienceContent;
}) {
  return (
    <section className="relative overflow-hidden border-t border-primary/15 bg-cti-gold text-foreground">
      <div className="mx-auto grid w-full max-w-[1480px] lg:min-h-[680px] lg:grid-cols-[minmax(520px,0.92fr)_minmax(0,0.98fr)]">
        <LandingReveal>
          <MobileAppVisual content={content} />
        </LandingReveal>

        <div className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:flex lg:items-center lg:py-20 lg:pl-10 xl:pl-14">
          <LandingReveal>
            <div className="max-w-2xl">
              {content.eyebrow ? (
                <Badge
                  variant="outline"
                  className="h-6 rounded-md border-primary/15 bg-white/80 px-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
                >
                  {content.eyebrow}
                </Badge>
              ) : null}
              <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
                {content.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-foreground/75">
                {content.description}
              </p>

              <ul className="mt-8 grid gap-5">
                {content.features.map((feature) => {
                  const Icon = featureIcons[feature.icon];

                  return (
                    <li
                      key={feature.title}
                      className="grid grid-cols-[auto_1fr] items-start gap-4"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-foreground text-foreground">
                        <Icon className="size-5" />
                      </span>
                      <p className="pt-2 text-lg font-bold leading-7 text-foreground">
                        {feature.title}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href={content.primaryCta.href}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-lg bg-primary px-7 text-sm font-semibold text-white hover:bg-primary/90"
                  )}
                >
                  {content.primaryCta.label}
                </Link>
                <p className="text-xs font-semibold text-foreground/70">
                  {content.note}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {content.storeBadges.map((badge) => (
                  <Link
                    key={badge.label}
                    href={badge.href}
                    aria-label={badge.label}
                    className={cn(
                      "inline-flex h-12 items-center overflow-hidden rounded-lg shadow-lg shadow-primary/15 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary/40",
                      badge.imageSrc.includes("AppStore")
                        ? "w-36"
                        : "w-[162px]"
                    )}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- These external SVG badges render blank through next/image. */}
                    <img
                      src={badge.imageSrc}
                      alt={badge.imageAlt}
                      width={168}
                      height={50}
                      className="h-12 w-auto max-w-none object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </LandingReveal>
        </div>
      </div>
    </section>
  );
}

function MobileAppVisual({ content }: { content: MobileExperienceContent }) {
  return (
    <div className="relative min-h-[380px] overflow-hidden bg-primary sm:min-h-[500px] lg:mb-32 lg:h-[calc(100%-8rem)] lg:min-h-0 lg:[clip-path:url(#landing-mobile-app-image-clip)]">
      <svg aria-hidden="true" focusable="false" className="absolute size-0">
        <clipPath
          id="landing-mobile-app-image-clip"
          clipPathUnits="objectBoundingBox"
        >
          <path d="M 0 0 H 1 L 0.91 0.78 C 0.86 0.92 0.78 1 0.66 1 H 0 Z" />
        </clipPath>
      </svg>
      <Image
        src={content.visual.src}
        alt={content.visual.alt}
        fill
        loading="eager"
        quality={90}
        sizes="(min-width: 1024px) 48vw, 100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute left-[30%] top-[37%] w-[36%] max-w-[210px] rotate-[10deg] rounded-lg bg-white/95 px-3 py-2 shadow-2xl ring-1 ring-white/70 sm:left-[31%] sm:top-[38%] lg:left-[29%] lg:top-[38%]">
        <Image
          src={content.visual.logoSrc}
          alt={content.visual.logoAlt}
          width={260}
          height={78}
          loading="eager"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
