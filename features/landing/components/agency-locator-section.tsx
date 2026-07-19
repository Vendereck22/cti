"use client";

import { useMemo, useState } from "react";
import { Clock, MapPin, Phone, Search } from "lucide-react";

import {
  Badge,
  Button,
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Separator,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import type { Agency, AgencyLocatorContent } from "../types";
import { LandingSection, SectionHeader } from "./landing-section";

interface AgencyLocatorSectionProps {
  content: AgencyLocatorContent;
}

export function AgencyLocatorSection({ content }: AgencyLocatorSectionProps) {
  const [query, setQuery] = useState("");
  const [selectedAgencyId, setSelectedAgencyId] = useState(
    content.agencies[0]?.id ?? ""
  );
  const normalizedQuery = query.trim().toLowerCase();
  const filteredAgencies = useMemo(() => {
    if (!normalizedQuery) {
      return content.agencies;
    }

    return content.agencies.filter((agency) =>
      [agency.name, agency.city, agency.country, agency.address]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [content.agencies, normalizedQuery]);
  const selectedAgency =
    content.agencies.find((agency) => agency.id === selectedAgencyId) ??
    filteredAgencies[0] ??
    content.agencies[0];
  const mapAgencies =
    filteredAgencies.length > 0 ? filteredAgencies : content.agencies;

  function selectAgencyAndOpenMap(agencyId: string) {
    setSelectedAgencyId(agencyId);
    window.requestAnimationFrame(() => {
      document
        .getElementById("carte-agences")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <LandingSection id="agences">
      <div className="space-y-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeader content={content} />
          <Badge
            variant="outline"
            className="w-fit rounded-md border-cti-blue/20 bg-cti-blue/5 px-3 py-1.5 text-cti-blue"
          >
            {content.agencies.length} {content.networkLabel}
          </Badge>
        </div>

        <div className="rounded-lg border border-border bg-muted/40 p-4 shadow-sm sm:p-5">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={content.searchPlaceholder}
              className="h-11 rounded-lg border-input bg-background pl-9"
            />
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredAgencies.length > 0 ? (
              filteredAgencies.map((agency) => (
                <AgencyCard
                  key={agency.id}
                  agency={agency}
                  isSelected={selectedAgency?.id === agency.id}
                  selectLabel={content.selectAgencyLabel}
                  onSelect={() => selectAgencyAndOpenMap(agency.id)}
                />
              ))
            ) : (
              <div className="rounded-lg border border-dashed border-border bg-background p-5 text-sm text-muted-foreground md:col-span-2 xl:col-span-3">
                {content.emptyState}
              </div>
            )}
          </div>
        </div>

        <AgencyMapPanel
          content={content}
          selectedAgency={selectedAgency}
          agencies={mapAgencies}
          onSelectAgency={setSelectedAgencyId}
        />
      </div>
    </LandingSection>
  );
}

function AgencyCard({
  agency,
  isSelected,
  selectLabel,
  onSelect,
}: {
  agency: Agency;
  isSelected: boolean;
  selectLabel: string;
  onSelect: () => void;
}) {
  return (
    <Card
      className={cn(
        "rounded-lg border-border shadow-none transition-colors hover:border-primary/25",
        isSelected && "border-primary/40 bg-secondary"
      )}
    >
      <CardHeader className="gap-2">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle className="text-base font-semibold text-foreground">
              {agency.name}
            </CardTitle>
            <CardDescription className="mt-1 text-sm">
              {agency.city}, {agency.country}
            </CardDescription>
          </div>
          <Badge
            variant="outline"
            className="rounded-md border-cti-blue/20 bg-cti-blue/5 text-cti-blue"
          >
            {agency.country}
          </Badge>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-3 pt-4 text-sm text-muted-foreground">
        <p className="flex gap-2">
          <MapPin className="mt-0.5 size-4 shrink-0 text-cti-blue" />
          <span>{agency.address}</span>
        </p>
        <p className="flex gap-2">
          <Clock className="mt-0.5 size-4 shrink-0 text-cti-blue" />
          <span>{agency.hours}</span>
        </p>
        <p className="flex gap-2">
          <Phone className="mt-0.5 size-4 shrink-0 text-cti-blue" />
          <span>{agency.phone}</span>
        </p>
      </CardContent>
      <CardFooter className="border-t border-border bg-muted/30">
        <Button
          type="button"
          variant={isSelected ? "default" : "outline"}
          size="sm"
          onClick={onSelect}
          className={cn(
            "h-9 rounded-lg",
            isSelected && "bg-primary text-primary-foreground"
          )}
        >
          <MapPin className="size-4" />
          {selectLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}

function AgencyMapPanel({
  content,
  selectedAgency,
  agencies,
  onSelectAgency,
}: {
  content: AgencyLocatorContent;
  selectedAgency?: Agency;
  agencies: Agency[];
  onSelectAgency: (agencyId: string) => void;
}) {
  const hasCoordinates =
    typeof selectedAgency?.latitude === "number" &&
    typeof selectedAgency.longitude === "number";

  return (
    <div id="carte-agences" className="scroll-mt-24">
      <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
        <Card className="rounded-lg border-border shadow-none">
          <CardHeader>
            <Badge
              variant="outline"
              className="w-fit rounded-md border-cti-blue/20 bg-cti-blue/5 text-cti-blue"
            >
              {content.mapSelectedLabel}
            </Badge>
            <CardTitle className="text-2xl font-semibold text-foreground">
              {content.mapTitle}
            </CardTitle>
            <CardDescription className="text-sm leading-6">
              {content.mapDescription}
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="grid gap-3 pt-5">
            {agencies.map((agency) => {
              const isSelected = selectedAgency?.id === agency.id;

              return (
                <Button
                  key={agency.id}
                  type="button"
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => onSelectAgency(agency.id)}
                  className={cn(
                    "h-auto justify-start rounded-lg px-4 py-3 text-left",
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:bg-muted"
                  )}
                >
                  <span className="grid gap-1">
                    <span className="font-semibold">{agency.name}</span>
                    <span
                      className={cn(
                        "text-xs",
                        isSelected ? "text-blue-50" : "text-muted-foreground"
                      )}
                    >
                      {agency.city}, {agency.country}
                    </span>
                  </span>
                </Button>
              );
            })}
          </CardContent>
        </Card>

        <Card className="overflow-hidden rounded-lg border-primary/15 shadow-xl shadow-primary/10">
          <CardHeader className="gap-4 border-b border-border bg-primary text-primary-foreground">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-1">
                <Badge
                  variant="outline"
                  className="rounded-md border-white/20 bg-white/10 text-cti-gold"
                >
                  {content.mapTitle}
                </Badge>
                <CardTitle className="text-xl font-semibold">
                  {selectedAgency?.name ?? content.mapTitle}
                </CardTitle>
                <CardDescription className="text-blue-50">
                  {selectedAgency
                    ? `${selectedAgency.city}, ${selectedAgency.country}`
                    : content.mapDescription}
                </CardDescription>
              </div>
              <Badge
                variant="outline"
                className="rounded-md border-white/20 bg-white/10 text-white"
              >
                {agencies.length}{" "}
                {agencies.length > 1
                  ? content.agencyCountPlural
                  : content.agencyCountSingular}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 p-4">
            {hasCoordinates && selectedAgency ? (
              <iframe
                title={`${content.mapFrameTitle} ${selectedAgency.name}`}
                src={buildOpenStreetMapEmbedUrl(selectedAgency)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full rounded-lg border border-border bg-muted"
              />
            ) : (
              <div className="flex h-[420px] items-center justify-center rounded-lg border border-dashed border-border bg-muted p-6 text-center text-sm text-muted-foreground">
                {content.mapUnavailableLabel}
              </div>
            )}

            {selectedAgency ? (
              <div className="grid gap-3 rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground sm:grid-cols-2">
                <p className="flex gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-cti-blue" />
                  <span>{selectedAgency.address}</span>
                </p>
                <p className="flex gap-2">
                  <Clock className="mt-0.5 size-4 shrink-0 text-cti-blue" />
                  <span>{selectedAgency.hours}</span>
                </p>
                <p className="flex gap-2 sm:col-span-2">
                  <Phone className="mt-0.5 size-4 shrink-0 text-cti-blue" />
                  <span>{selectedAgency.phone}</span>
                </p>
              </div>
            ) : null}
          </CardContent>
          <CardFooter className="justify-between border-t border-border bg-muted/30">
            <span className="text-xs text-muted-foreground">
              {content.agencies.length} {content.networkLabel}
            </span>
            {hasCoordinates && selectedAgency ? (
              <a
                href={buildOpenStreetMapLink(selectedAgency)}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "sm", variant: "outline" }),
                  "rounded-lg text-primary"
                )}
              >
                {content.mapOpenLabel}
                <MapPin className="size-4" />
              </a>
            ) : null}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function buildOpenStreetMapEmbedUrl(agency: Agency) {
  const latitude = agency.latitude ?? 0;
  const longitude = agency.longitude ?? 0;
  const delta = 0.02;
  const bbox = [
    longitude - delta,
    latitude - delta,
    longitude + delta,
    latitude + delta,
  ].join(",");

  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
    bbox
  )}&layer=mapnik&marker=${encodeURIComponent(`${latitude},${longitude}`)}`;
}

function buildOpenStreetMapLink(agency: Agency) {
  return `https://www.openstreetmap.org/?mlat=${agency.latitude}&mlon=${agency.longitude}#map=15/${agency.latitude}/${agency.longitude}`;
}
