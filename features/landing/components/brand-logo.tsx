import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import type { LandingHeaderContent } from "../types";

const logoSrc = "/images/logo/logo-cti-cropped.png";

export function BrandLogo({
  content,
  variant = "header",
  href = "/",
  className,
}: {
  content: LandingHeaderContent;
  variant?: "header" | "footer" | "sheet";
  href?: string | null;
  className?: string;
}) {
  const label = `${content.companyName} - ${content.logoDescription}`;
  const logo = (
    <span
      className={cn(
        "relative block shrink-0 overflow-hidden",
        variant === "header" && "h-12 w-[228px] sm:h-14 sm:w-[282px]",
        variant === "sheet" && "h-10 w-[202px]",
        variant === "footer" &&
          "h-14 w-[260px] max-w-full sm:h-16 sm:w-[320px]",
        className
      )}
    >
      <Image
        src={logoSrc}
        alt={label}
        fill
        priority={variant === "header"}
        sizes={
          variant === "footer"
            ? "(min-width: 640px) 320px, 260px"
            : "(min-width: 640px) 282px, 202px"
        }
        className="object-contain"
      />
    </span>
  );

  if (!href) {
    return logo;
  }

  return (
    <Link href={href} aria-label={`Retour a l'accueil ${content.companyName}`}>
      {logo}
    </Link>
  );
}
