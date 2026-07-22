"use client";

import { Mail, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  buttonVariants,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import type { LandingHeaderContent } from "../types";
import { BrandLogo } from "./brand-logo";
import { LandingContainer } from "./landing-section";
import { SocialLinks } from "./social-links";

export function SiteHeader({ content }: { content: LandingHeaderContent }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      setHasScrolled(window.scrollY > 16);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
        hasScrolled
          ? "border-transparent bg-transparent shadow-none"
          : "border-b border-border bg-white/95 shadow-sm shadow-black/5 backdrop-blur"
      )}
    >
      <div
        className={cn(
          "overflow-hidden border-b bg-white text-primary transition-[max-height,opacity,transform,border-color] duration-300 ease-out",
          hasScrolled
            ? "pointer-events-none max-h-0 -translate-y-2 border-b-0 border-transparent opacity-0"
            : "max-h-12 translate-y-0 border-border opacity-100"
        )}
      >
        <LandingContainer className="flex min-h-10 items-center justify-between gap-2 py-2 sm:gap-4">
          <div className="flex min-w-0 items-center gap-2 text-[11px] font-medium text-primary sm:gap-4 sm:text-sm">
            <a
              href={`tel:${content.contactPhone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-cti-blue sm:gap-2"
            >
              <Phone className="size-3.5" />
              <span>{content.contactPhone}</span>
            </a>
            <span
              className="h-3.5 w-px shrink-0 bg-border sm:h-4"
              aria-hidden="true"
            />
            <a
              href={`mailto:${content.contactEmail}`}
              className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-cti-blue sm:gap-2"
            >
              <Mail className="size-3.5 shrink-0" />
              <span className="max-w-[64px] truncate min-[390px]:max-w-[78px] sm:max-w-none">
                {content.contactEmail}
              </span>
            </a>
          </div>

          <SocialLinks links={content.socialLinks} />
        </LandingContainer>
      </div>

      <div
        className={cn(
          "transition-colors duration-300",
          hasScrolled ? "bg-transparent" : "bg-white"
        )}
      >
        <LandingContainer
          className={cn(
            "flex items-center justify-between gap-4 transition-[min-height,padding] duration-300",
            hasScrolled ? "min-h-[68px] py-2" : "min-h-[76px] py-3"
          )}
        >
          <BrandLogo content={content} />

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-7 lg:flex">
              {content.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-cti-blue",
                    hasScrolled
                      ? "text-foreground drop-shadow-[0_1px_0_rgba(255,255,255,0.55)]"
                      : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <MobileNavigation content={content} hasScrolled={hasScrolled} />
          </div>
        </LandingContainer>
      </div>
    </header>
  );
}

function MobileNavigation({
  content,
  hasScrolled,
}: {
  content: LandingHeaderContent;
  hasScrolled: boolean;
}) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label={content.mobileMenuLabel}
        className={cn(
          buttonVariants({ size: "icon-lg", variant: "outline" }),
          "rounded-lg border-border text-primary md:hidden",
          hasScrolled && "border-primary/20 bg-white/70 shadow-sm backdrop-blur"
        )}
      >
        <Menu className="size-4" />
      </SheetTrigger>
      <SheetContent className="w-[86vw] max-w-sm border-border bg-background">
        <SheetHeader className="border-b border-border p-5">
          <SheetTitle>
            <BrandLogo content={content} variant="sheet" href={null} />
          </SheetTitle>
          <SheetDescription className="sr-only">
            {content.logoDescription}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-2 border-b border-border px-5 py-4 text-sm text-muted-foreground">
          <a
            href={`tel:${content.contactPhone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted hover:text-foreground"
          >
            <Phone className="size-4 text-cti-blue" />
            {content.contactPhone}
          </a>
          <a
            href={`mailto:${content.contactEmail}`}
            className="inline-flex min-w-0 items-center gap-2 rounded-lg px-3 py-2 hover:bg-muted hover:text-foreground"
          >
            <Mail className="size-4 shrink-0 text-cti-blue" />
            <span className="truncate">{content.contactEmail}</span>
          </a>
        </div>
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
      </SheetContent>
    </Sheet>
  );
}
