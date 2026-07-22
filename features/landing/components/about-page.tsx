import {
  Building2,
  Eye,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import type { LandingImageContent, PublicInfoPageContent } from "../types";
import {
  LandingContainer,
  LandingSection,
  SectionHeader,
} from "./landing-section";

export function AboutPage({ content }: { content: PublicInfoPageContent }) {
  return (
    <main className="bg-white">
      <AboutStorySection content={content} />
      <MissionVisionSection content={content} />
      {content.team ? (
        <TeamSection content={content.team} note={content.teamNote} />
      ) : null}
    </main>
  );
}

function AboutStorySection({ content }: { content: PublicInfoPageContent }) {
  return (
    <section className="relative overflow-hidden border-b border-primary/10 bg-cti-gold text-foreground">
      <LandingContainer className="pb-14 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-44">
        <div className="max-w-4xl space-y-5">
          {content.eyebrow ? (
            <Badge
              variant="outline"
              className="h-6 rounded-md border-primary/20 bg-white/85 px-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
            >
              {content.eyebrow}
            </Badge>
          ) : null}
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-normal text-foreground sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="max-w-3xl text-pretty text-lg leading-8 text-foreground/78">
            {content.description}
          </p>
        </div>
      </LandingContainer>
    </section>
  );
}

function MissionVisionSection({
  content,
}: {
  content: PublicInfoPageContent;
}) {
  const blocks = content.storyBlocks ?? [];

  if (blocks.length === 0 || !content.missionVisionSection) {
    return null;
  }

  const icons: LucideIcon[] = [Target, Eye, ShieldCheck];

  return (
    <LandingSection>
      <div className="space-y-8">
        <SectionHeader
          content={content.missionVisionSection}
          className="max-w-3xl"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {blocks.map((block, index) => {
            const Icon = icons[index] ?? Building2;

            return (
              <Card
                key={block.title}
                className="min-h-[310px] rounded-lg border-primary/15 bg-white py-0 shadow-none transition-colors hover:border-primary/35"
              >
                <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-5 p-6 pb-0 sm:p-7 sm:pb-0">
                  <span className="inline-flex h-7 items-center rounded-full bg-cti-gold px-3 text-xs font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-foreground text-foreground">
                    <Icon className="size-6" />
                  </span>
                </CardHeader>
                <CardContent className="p-6 pt-8 sm:p-7 sm:pt-10">
                  <Badge
                    variant="outline"
                    className="mb-4 rounded-md border-primary/20 bg-cti-gold/20 text-primary"
                  >
                    {block.eyebrow}
                  </Badge>
                  <CardTitle className="text-2xl font-bold leading-tight tracking-normal text-foreground">
                    {block.title}
                  </CardTitle>
                  <CardDescription className="mt-4 text-base leading-7 text-foreground/75">
                    {block.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </LandingSection>
  );
}

function TeamSection({
  content,
  note,
}: {
  content: NonNullable<PublicInfoPageContent["team"]>;
  note?: string;
}) {
  return (
    <LandingSection>
      <div className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeader content={content} />
          {note ? (
            <div className="rounded-lg border border-cti-gold/30 bg-cti-gold/10 p-5 text-sm leading-6 text-foreground/75 sm:p-6">
              {note}
            </div>
          ) : null}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.members.map((member) => (
            <TeamMemberCard
              key={member.name}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </LandingSection>
  );
}

function TeamMemberCard({
  image,
  name,
  role,
}: {
  image: LandingImageContent;
  name: string;
  role: string;
}) {
  return (
    <Card className="group/card overflow-hidden rounded-lg border-cti-gold/25 bg-white py-0 shadow-none transition-colors hover:border-primary/35">
      <div className="relative aspect-[4/3] overflow-hidden bg-cti-gold/10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          unoptimized
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover/card:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-bold leading-tight tracking-normal text-foreground">
          {name}
        </CardTitle>
        <CardDescription className="mt-1 text-sm font-semibold leading-5 text-primary">
          {role}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
