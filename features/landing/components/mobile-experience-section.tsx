import { Bell, RefreshCw, Search, Send, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge, buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
import type {
  MobileExperienceContent,
  MobileExperienceIconName,
} from "../types";
import { LandingSection } from "./landing-section";

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
    <LandingSection tone="primary" className="py-0">
      <div className="grid gap-0 lg:grid-cols-[0.98fr_1.02fr] lg:items-stretch">
        <div className="relative min-h-[380px] overflow-hidden rounded-lg bg-primary sm:min-h-[460px] lg:min-h-[640px] lg:[clip-path:ellipse(112%_100%_at_0%_50%)]">
          <Image
            src={content.visual.src}
            alt={content.visual.alt}
            fill
            loading="eager"
            quality={90}
            sizes="(min-width: 1024px) 620px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-cti-gold/10" />
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

        <div className="py-10 lg:py-20 lg:pl-10 xl:pl-14">
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
          </div>
        </div>
      </div>
    </LandingSection>
  );
}
