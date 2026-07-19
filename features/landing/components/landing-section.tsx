import type { ComponentProps, ReactNode } from "react";

import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { LandingSectionContent } from "../types";
import { LandingReveal } from "./landing-reveal";

type SectionTone = "default" | "muted" | "primary";
type HeaderTone = "light" | "dark";

export function LandingContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function LandingSection({
  tone = "default",
  className,
  children,
  ...props
}: ComponentProps<"section"> & {
  tone?: SectionTone;
}) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20",
        tone === "default" && "bg-background text-foreground",
        tone === "muted" && "bg-muted/50 text-foreground",
        tone === "primary" && "bg-primary text-primary-foreground",
        className
      )}
      {...props}
    >
      <LandingContainer>
        <LandingReveal>{children}</LandingReveal>
      </LandingContainer>
    </section>
  );
}

export function SectionHeader({
  content,
  tone = "light",
  className,
}: {
  content: LandingSectionContent;
  tone?: HeaderTone;
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <div className={cn("max-w-2xl space-y-3", className)}>
      {content.eyebrow ? (
        <Badge
          variant="outline"
          className={cn(
            "h-6 rounded-md px-2.5 text-xs font-semibold uppercase tracking-[0.14em]",
            isDark
              ? "border-white/20 bg-white/10 text-cti-gold"
              : "border-cti-blue/20 bg-cti-blue/5 text-cti-blue"
          )}
        >
          {content.eyebrow}
        </Badge>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-semibold tracking-normal sm:text-4xl",
          isDark ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {content.title}
      </h2>
      <p
        className={cn(
          "text-base leading-7",
          isDark ? "text-blue-50" : "text-muted-foreground"
        )}
      >
        {content.description}
      </p>
    </div>
  );
}
