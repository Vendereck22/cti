import { ArrowRight, Building2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Badge,
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import type { LandingImageContent, PublicInfoPageContent } from "../types";
import { LandingSection, SectionHeader } from "./landing-section";

export function AboutPage({ content }: { content: PublicInfoPageContent }) {
  const blocks = content.storyBlocks ?? [];

  return (
    <main>
      <LandingSection>
        <div className="space-y-10">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionHeader content={content} />
            <Card className="rounded-lg border-primary/15 bg-primary text-primary-foreground shadow-xl shadow-primary/10">
              <CardContent className="p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cti-gold">
                  De la Belgique à la RDC
                </p>
                <p className="mt-3 text-base leading-7 text-blue-50">
                  Une présence physique de proximité avec des agences à Kinshasa et en Belgique, pour rendre vos transferts plus lisibles, encadrés et rassurants.
                </p>
              </CardContent>
            </Card>
          </div>

          {blocks.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {blocks.map((block, index) => (
                <StoryTextCard
                  key={block.title}
                  block={block}
                  icon={index === 0 ? "mission" : "vision"}
                />
              ))}
            </div>
          ) : null}

          {content.team && (
            <ImageShowcase
              eyebrow={content.team.eyebrow}
              title={content.team.title}
              description={content.team.description}
              items={content.team.members.map((member) => ({
                title: member.name,
                caption: member.role,
                image: member.image,
              }))}
            />
          )}

          {content.agencyShowcase && (
            <ImageShowcase
              eyebrow={content.agencyShowcase.eyebrow}
              title={content.agencyShowcase.title}
              description={content.agencyShowcase.description}
              items={content.agencyShowcase.agencies.map((agency) => ({
                title: agency.name,
                caption: agency.location,
                image: agency.image,
              }))}
              tone="muted"
            />
          )}

          {(content.primaryCta || content.secondaryCta) && (
            <Card className="rounded-lg border-primary/15 bg-cti-gold text-foreground shadow-xl shadow-cti-gold/20">
              <CardContent className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    Continuer avec CTI
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground/75">
                    Retrouvez une agence proche ou contactez notre equipe CTI pour
                    preparer votre prochaine operation.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  {content.primaryCta ? (
                    <Link
                      href={content.primaryCta.href}
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "h-11 rounded-lg bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90"
                      )}
                    >
                      {content.primaryCta.label}
                      <ArrowRight className="size-4" />
                    </Link>
                  ) : null}
                  {content.secondaryCta ? (
                    <Link
                      href={content.secondaryCta.href}
                      className={cn(
                        buttonVariants({ size: "lg", variant: "outline" }),
                        "h-11 rounded-lg border-primary/25 bg-white px-5 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
                      )}
                    >
                      {content.secondaryCta.label}
                    </Link>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </LandingSection>
    </main>
  );
}

function StoryTextCard({
  block,
  icon,
}: {
  block: NonNullable<PublicInfoPageContent["storyBlocks"]>[number];
  icon: "mission" | "vision";
}) {
  const Icon = icon === "mission" ? ShieldCheck : Building2;

  return (
    <Card className="rounded-lg border-border bg-background shadow-none transition-colors hover:border-primary/25">
      <CardHeader className="gap-5 p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="flex size-11 items-center justify-center rounded-lg bg-cti-blue/10 text-cti-blue">
            <Icon className="size-5" />
          </span>
          <Badge
            variant="outline"
            className="rounded-md border-cti-blue/20 bg-cti-blue/5 text-cti-blue"
          >
            {block.eyebrow}
          </Badge>
        </div>
        <div className="space-y-3">
          <CardTitle className="text-2xl font-semibold leading-tight text-foreground">
            {block.title}
          </CardTitle>
          <CardDescription className="text-base leading-7">
            {block.description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}

function ImageShowcase({
  eyebrow,
  title,
  description,
  items,
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  items: {
    title: string;
    caption: string;
    image: LandingImageContent;
  }[];
  tone?: "default" | "muted";
}) {
  return (
    <section
      className={cn(
        "space-y-8 border-t border-border pt-10",
        tone === "muted" && "bg-white px-4 py-10 sm:px-6 lg:px-8"
      )}
    >
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        {eyebrow ? (
          <Badge
            variant="outline"
            className="rounded-md border-cti-blue/20 bg-cti-blue/5 text-cti-blue"
          >
            {eyebrow}
          </Badge>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Card
            key={item.title}
            className="overflow-hidden rounded-lg border-border bg-background shadow-none transition-colors hover:border-primary/25"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                unoptimized
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover/card:scale-105"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-cti-blue">
                {item.caption}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
