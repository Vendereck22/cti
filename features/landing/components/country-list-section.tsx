import { ChevronRight } from "lucide-react";

import type { CountryListContent } from "../types";
import { LandingContainer } from "./landing-section";

export function CountryListSection({
  content,
}: {
  content: CountryListContent;
}) {
  return (
    <section id="pays" className="border-t border-border bg-[#f3f3f3] py-14 text-foreground sm:py-16 lg:py-20">
      <LandingContainer>
        <div className="space-y-10">
          <h2 className="max-w-5xl text-balance text-3xl font-bold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.countries.map((country) => (
              <a
                key={country.code}
                href="#simulateur"
                className="group flex min-h-[64px] items-center justify-between gap-4 rounded-full bg-white px-5 py-3 text-foreground shadow-none ring-1 ring-transparent transition-colors hover:ring-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Préparer un transfert vers ${country.label}`}
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-2xl ring-1 ring-foreground/15">
                    {country.flag}
                  </span>
                  <span className="truncate text-lg font-bold leading-tight">
                    {country.label}
                  </span>
                </span>
                <ChevronRight className="size-6 shrink-0 text-foreground transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </LandingContainer>
    </section>
  );
}
