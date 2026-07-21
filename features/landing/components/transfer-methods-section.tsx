"use client";

import {
  Building2,
  Laptop,
  LockKeyhole,
  Smartphone,
  Store,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  buttonVariants,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import type {
  LandingIconName,
  TransferMethodCard,
  TransferMethodGroupId,
  TransferMethodsContent,
} from "../types";
import { LandingContainer } from "./landing-section";

const methodIcons: Partial<Record<LandingIconName, LucideIcon>> = {
  agency: Building2,
  laptop: Laptop,
  lock: LockKeyhole,
  mobile: Smartphone,
  store: Store,
  wallet: Wallet,
};

export function TransferMethodsSection({
  content,
}: {
  content: TransferMethodsContent;
}) {
  const [activeGroupId, setActiveGroupId] =
    useState<TransferMethodGroupId>(content.defaultGroupId);
  const activeGroup =
    content.groups.find((group) => group.id === activeGroupId) ??
    content.groups[0];

  return (
    <section className="border-b-4 border-b-cti-gold bg-muted py-14 text-foreground sm:py-16 lg:py-20">
      <LandingContainer>
        <div className="max-w-4xl">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
        </div>

        <div className="mt-8 border-b border-border">
          <div
            role="tablist"
            aria-label={content.tabsLabel}
            className="flex gap-6 overflow-x-auto text-base font-semibold sm:gap-8 sm:text-lg"
          >
            {content.groups.map((group) => {
              const isActive = group.id === activeGroup.id;

              return (
                <button
                  key={group.id}
                  id={`transfer-method-tab-${group.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`transfer-method-panel-${group.id}`}
                  onClick={() => setActiveGroupId(group.id)}
                  className={cn(
                    "shrink-0 border-b-4 px-3 pb-4 text-left transition-colors sm:px-5",
                    isActive
                      ? "border-foreground text-foreground"
                      : "border-transparent text-primary hover:border-primary/30"
                  )}
                >
                  {group.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id={`transfer-method-panel-${activeGroup.id}`}
          role="tabpanel"
          aria-labelledby={`transfer-method-tab-${activeGroup.id}`}
          className="mt-8 grid gap-5 md:grid-cols-3"
        >
          {activeGroup.cards.map((card) => (
            <TransferMethodCardView key={card.title} card={card} />
          ))}
        </div>

        <div className="mt-9 flex justify-center gap-3" aria-hidden="true">
          {content.groups.map((group) => (
            <span
              key={group.id}
              className={cn(
                "size-3 rounded-full",
                group.id === activeGroup.id ? "bg-foreground" : "bg-border"
              )}
            />
          ))}
        </div>
      </LandingContainer>
    </section>
  );
}

function TransferMethodCardView({ card }: { card: TransferMethodCard }) {
  const Icon = methodIcons[card.icon] ?? Wallet;

  return (
    <Card className="min-h-[360px] rounded-lg border-border bg-white shadow-none transition-colors hover:border-primary/25">
      <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-5 p-6 pb-0 sm:p-8 sm:pb-0">
        <CardTitle className="text-2xl font-bold leading-tight tracking-normal text-foreground">
          {card.title}
        </CardTitle>
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-foreground text-foreground sm:size-16">
          <Icon className="size-7 sm:size-8" />
        </span>
      </CardHeader>
      <CardContent className="p-6 pt-4 sm:p-8 sm:pt-3">
        <p className="max-w-sm text-base font-medium leading-7 text-foreground/85">
          {card.description}
        </p>
      </CardContent>
      <CardFooter className="mt-auto border-t-0 bg-transparent p-6 pt-0 sm:p-8 sm:pt-0">
        <Link
          href={card.href}
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 rounded-full bg-primary px-6 text-sm font-semibold text-white hover:bg-primary/90"
          )}
        >
          {card.actionLabel}
        </Link>
      </CardFooter>
    </Card>
  );
}
