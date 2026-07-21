import type { ComponentType } from "react";

import { cn } from "@/lib/utils";
import type { LandingHeaderContent, SocialIconName } from "../types";

type SocialLink = LandingHeaderContent["socialLinks"][number];

const socialIcons: Record<SocialIconName, ComponentType> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

export function SocialLinks({
  links,
  variant = "topbar",
  className,
}: {
  links: SocialLink[];
  variant?: "topbar" | "footer";
  className?: string;
}) {
  const isFooter = variant === "footer";

  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-1 sm:gap-2",
        isFooter ? "justify-start" : "justify-end",
        className
      )}
    >
      {links.map((link) => (
        <SocialLinkItem key={link.label} link={link} isFooter={isFooter} />
      ))}
    </div>
  );
}

function SocialLinkItem({
  link,
  isFooter,
}: {
  link: SocialLink;
  isFooter: boolean;
}) {
  const Icon = socialIcons[link.icon];

  return (
    <a
      href={link.href}
      aria-label={link.label}
      title={link.label}
      className={cn(
        "inline-flex items-center justify-center rounded-lg border transition-colors",
        isFooter
          ? "size-9 border-primary/10 bg-white text-primary hover:border-primary hover:bg-primary hover:text-cti-gold"
          : "size-6 border-primary/10 bg-white text-primary hover:border-primary hover:bg-primary hover:text-cti-gold sm:size-8"
      )}
    >
      <Icon />
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-3.5 fill-current"
    >
      <path d="M14.2 8.5V6.9c0-.8.5-1 1.1-1h1.5V3.2C16.5 3.1 15.5 3 14.4 3c-2.3 0-3.9 1.4-3.9 4v1.5H8v3h2.5V21h3.1v-9.5h2.6l.4-3h-3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4 fill-none stroke-current stroke-2"
    >
      <rect width="15" height="15" x="4.5" y="4.5" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.7" cy="7.3" r="0.8" className="fill-current stroke-0" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-3.5 fill-current"
    >
      <path d="M6.8 8.9H3.9V20h2.9V8.9ZM5.3 7.4A1.7 1.7 0 1 0 5.3 4a1.7 1.7 0 0 0 0 3.4ZM20.1 13.6c0-3-1.6-4.9-4.2-4.9-1.7 0-2.7.9-3.1 1.6V8.9H10V20h2.9v-5.9c0-1.6.8-2.6 2.1-2.6s2.1.9 2.1 2.7V20h3v-6.4Z" />
    </svg>
  );
}
