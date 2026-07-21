import { Badge, Card, CardContent, Separator } from "@/components/ui";
import type { ClientTransfersContent } from "../types";
import { LandingSection } from "./landing-section";

export function ClientTransfersSection({
  content,
}: {
  content: ClientTransfersContent;
}) {
  return (
    <LandingSection id="clients-transferts" className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="max-w-3xl">
          {content.eyebrow ? (
            <Badge
              variant="outline"
              className="h-6 rounded-md border-primary/15 bg-cti-gold/20 px-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
            >
              {content.eyebrow}
            </Badge>
          ) : null}
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {content.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {content.highlights.map((highlight) => (
              <div
                key={highlight.value}
                className="rounded-lg border border-cti-gold/30 bg-cti-gold/10 p-4"
              >
                <p className="text-sm font-bold text-primary">
                  {highlight.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-foreground/70">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Card className="rounded-lg border-primary/15 bg-white shadow-none">
          <CardContent className="p-6 sm:p-8">
            <div className="grid gap-6">
              {content.paragraphs.map((paragraph, index) => (
                <div key={paragraph}>
                  <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-foreground text-sm font-bold text-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base leading-8 text-foreground/80">
                      {paragraph}
                    </p>
                  </div>
                  {index < content.paragraphs.length - 1 ? (
                    <Separator className="mt-6 bg-border" />
                  ) : null}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </LandingSection>
  );
}
