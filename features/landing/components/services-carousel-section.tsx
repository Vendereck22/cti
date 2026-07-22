"use client";

import {
  BadgeDollarSign,
  Laptop,
  Package,
  Send,
  Smartphone,
  Store,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import type { LandingIconName, PublicLandingContent } from "../types";
import { LandingSection, SectionHeader } from "./landing-section";

const serviceIcons: Partial<Record<LandingIconName, LucideIcon>> = {
  laptop: Laptop,
  mobile: Smartphone,
  money: BadgeDollarSign,
  package: Package,
  send: Send,
  store: Store,
  wallet: Wallet,
};

export function ServicesCarouselSection({
  content,
}: {
  content: PublicLandingContent["services"];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    let intervalId: number | undefined;

    const stop = () => {
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    const start = () => {
      stop();

      if (!mobileQuery.matches || reducedMotionQuery.matches) {
        return;
      }

      intervalId = window.setInterval(() => {
        const cards = Array.from(
          scroller.querySelectorAll<HTMLElement>("[data-service-card]")
        );

        if (cards.length < 2) {
          return;
        }

        const currentIndex = cards.reduce((closestIndex, card, index) => {
          const currentDistance = Math.abs(card.offsetLeft - scroller.scrollLeft);
          const closestDistance = Math.abs(
            cards[closestIndex].offsetLeft - scroller.scrollLeft
          );

          return currentDistance < closestDistance ? index : closestIndex;
        }, 0);
        const nextCard = cards[(currentIndex + 1) % cards.length];
        const scrollerRect = scroller.getBoundingClientRect();
        const nextCardRect = nextCard.getBoundingClientRect();

        scroller.scrollTo({
          behavior: "smooth",
          left: Math.max(
            0,
            scroller.scrollLeft + nextCardRect.left - scrollerRect.left
          ),
        });
      }, 4800);
    };

    start();
    mobileQuery.addEventListener("change", start);
    reducedMotionQuery.addEventListener("change", start);

    return () => {
      stop();
      mobileQuery.removeEventListener("change", start);
      reducedMotionQuery.removeEventListener("change", start);
    };
  }, []);

  return (
    <LandingSection id="services" className="bg-white">
      <div className="space-y-8">
        <SectionHeader content={content} />

        <div
          ref={scrollerRef}
          data-service-scroller
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {content.cards.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? Wallet;

            return (
              <Link
                key={service.title}
                href={service.href}
                data-service-card
                className="group w-[calc(100vw-3rem)] max-w-[22rem] shrink-0 snap-start sm:w-[420px] sm:max-w-none lg:w-[460px]"
              >
                <Card className="h-full overflow-hidden rounded-lg border-cti-gold/25 bg-white py-0 shadow-none transition-colors hover:border-primary/35">
                  <div className="relative aspect-[16/10] overflow-hidden bg-cti-gold/10">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 460px, (min-width: 640px) 420px, 84vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />
                    <span className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-lg bg-cti-gold text-primary shadow-lg shadow-primary/15">
                      <Icon className="size-6" />
                    </span>
                    <Badge
                      variant="outline"
                      className="absolute bottom-4 left-4 rounded-md border-white/25 bg-white/90 text-primary"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Badge>
                  </div>
                  <CardHeader className="p-5 sm:p-6">
                    <CardTitle className="text-2xl font-bold leading-tight tracking-normal text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mt-3 text-base leading-7 text-foreground/75">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                    <span className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-primary/90">
                      {content.actionLabel}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </LandingSection>
  );
}
