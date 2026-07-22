"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  Clock,
  ExternalLink,
  Globe2,
  MapPin,
  MapPinned,
  Navigation,
  Phone,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

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
import { LandingSection } from "./landing-section";

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
      [agency.name, agency.city, agency.country, agency.address, agency.phone]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [content.agencies, normalizedQuery]);

  const cities = useMemo(
    () => Array.from(new Set(content.agencies.map((agency) => agency.city))),
    [content.agencies]
  );
  const countries = useMemo(
    () => Array.from(new Set(content.agencies.map((agency) => agency.country))),
    [content.agencies]
  );
  const mappedAgencies = content.agencies.filter(
    (agency) =>
      typeof agency.latitude === "number" &&
      typeof agency.longitude === "number"
  );
  const selectedAgency =
    filteredAgencies.find((agency) => agency.id === selectedAgencyId) ??
    filteredAgencies[0] ??
    content.agencies.find((agency) => agency.id === selectedAgencyId) ??
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
    <LandingSection id="agences" className="bg-white">
      <div className="space-y-8 lg:space-y-10">
        <div className="overflow-hidden rounded-lg border border-primary/10 bg-primary text-white shadow-xl shadow-primary/15">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.18fr_0.82fr] lg:p-10">
            <div className="max-w-3xl">
              {content.eyebrow ? (
                <Badge
                  variant="outline"
                  className="rounded-md border-cti-gold/30 bg-cti-gold text-primary"
                >
                  {content.eyebrow}
                </Badge>
              ) : null}
              <h2 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-normal sm:text-4xl lg:text-5xl">
                {content.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">
                {content.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <AgencyMetric
                icon={Building2}
                value={String(content.agencies.length).padStart(2, "0")}
                label={content.networkLabel}
              />
              <AgencyMetric
                icon={Globe2}
                value={String(countries.length).padStart(2, "0")}
                label="pays couverts"
              />
              <AgencyMetric
                icon={MapPinned}
                value={String(mappedAgencies.length).padStart(2, "0")}
                label="cartes disponibles"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-white p-4 shadow-sm shadow-primary/5 sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={content.searchPlaceholder}
                aria-label={content.searchPlaceholder}
                className="h-12 rounded-lg border-input bg-background pl-10 text-base"
              />
            </div>
            <Badge
              variant="outline"
              className="w-fit rounded-md border-primary/15 bg-primary/5 px-3 py-1.5 text-primary"
            >
              {filteredAgencies.length}{" "}
              {filteredAgencies.length > 1
                ? content.agencyCountPlural
                : content.agencyCountSingular}
            </Badge>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              type="button"
              variant={!query ? "default" : "outline"}
              size="sm"
              onClick={() => setQuery("")}
              className={cn(
                "rounded-full px-4",
                !query
                  ? "bg-primary text-white"
                  : "border-primary/15 bg-white text-primary hover:bg-primary/5"
              )}
            >
              Tout afficher
            </Button>
            {cities.map((city) => (
              <Button
                key={city}
                type="button"
                variant={query === city ? "default" : "outline"}
                size="sm"
                onClick={() => setQuery(city)}
                className={cn(
                  "rounded-full px-4",
                  query === city
                    ? "bg-primary text-white"
                    : "border-primary/15 bg-white text-primary hover:bg-primary/5"
                )}
              >
                {city}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
            <div className="rounded-lg border border-dashed border-primary/20 bg-primary/5 p-6 text-sm leading-6 text-muted-foreground md:col-span-2 xl:col-span-3">
              {content.emptyState}
            </div>
          )}
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

function AgencyMetric({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-lg border border-white/15 bg-white/10 p-4">
      <span className="flex size-11 items-center justify-center rounded-lg bg-cti-gold text-primary">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-2xl font-bold leading-none text-white">{value}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-50">
          {label}
        </p>
      </div>
    </div>
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
        "relative h-full rounded-lg border-border bg-white py-0 shadow-none transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10",
        isSelected && "border-primary/45 ring-2 ring-primary/10"
      )}
    >
      <span
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-cti-gold opacity-0",
          isSelected && "opacity-100"
        )}
      />
      <CardHeader className="p-5 pb-0">
        <div className="grid grid-cols-[auto_1fr] gap-4">
          <span
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-lg",
              isSelected
                ? "bg-primary text-cti-gold"
                : "bg-cti-gold text-primary"
            )}
          >
            <Building2 className="size-5" />
          </span>
          <div className="min-w-0">
            <CardTitle className="text-xl font-bold leading-tight tracking-normal text-foreground">
              {agency.name}
            </CardTitle>
            <CardDescription className="mt-1 text-sm">
              {agency.city}, {agency.country}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3 p-5 text-sm leading-6 text-muted-foreground">
        <AgencyInfo icon={MapPin}>{agency.address}</AgencyInfo>
        <AgencyInfo icon={Clock}>{agency.hours}</AgencyInfo>
        <AgencyInfo icon={Phone}>{agency.phone}</AgencyInfo>
      </CardContent>
      <CardFooter className="border-t border-border bg-muted/40 p-5">
        <Button
          type="button"
          variant={isSelected ? "default" : "outline"}
          onClick={onSelect}
          className={cn(
            "h-10 w-full rounded-lg font-semibold",
            isSelected
              ? "bg-primary text-primary-foreground"
              : "border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
          )}
        >
          <Navigation className="size-4" />
          {selectLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}

function AgencyInfo({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: string;
}) {
  return (
    <p className="grid grid-cols-[auto_1fr] gap-2">
      <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
      <span>{children}</span>
    </p>
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
    <div id="carte-agences" className="scroll-mt-28">
      <Card className="overflow-hidden rounded-lg border-primary/15 bg-white py-0 shadow-xl shadow-primary/10">
        <CardHeader className="border-b border-primary/10 bg-primary p-5 text-white sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <Badge
                variant="outline"
                className="rounded-md border-cti-gold/30 bg-cti-gold text-primary"
              >
                {content.mapSelectedLabel}
              </Badge>
              <CardTitle className="mt-3 text-2xl font-bold tracking-normal sm:text-3xl">
                {selectedAgency?.name ?? content.mapTitle}
              </CardTitle>
              <CardDescription className="mt-2 text-sm leading-6 text-blue-50">
                {selectedAgency
                  ? `${selectedAgency.address} - ${selectedAgency.city}, ${selectedAgency.country}`
                  : content.mapDescription}
              </CardDescription>
            </div>
            <Badge
              variant="outline"
              className="w-fit rounded-md border-white/20 bg-white/10 text-white"
            >
              {agencies.length}{" "}
              {agencies.length > 1
                ? content.agencyCountPlural
                : content.agencyCountSingular}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="grid gap-5 p-4 sm:p-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            {selectedAgency ? (
              <div className="rounded-lg border border-border bg-muted/40 p-4">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cti-gold text-primary">
                    <ShieldCheck className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Agence selectionnee
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Confirmez les frais, les pieces et les horaires avec cette
                      agence avant le passage.
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3 text-sm leading-6 text-muted-foreground">
                  <AgencyInfo icon={MapPin}>{selectedAgency.address}</AgencyInfo>
                  <AgencyInfo icon={Clock}>{selectedAgency.hours}</AgencyInfo>
                  <AgencyInfo icon={Phone}>{selectedAgency.phone}</AgencyInfo>
                </div>
              </div>
            ) : null}

            <div className="max-h-[340px] space-y-2 overflow-y-auto pr-1 [scrollbar-width:thin]">
              {agencies.map((agency) => {
                const isSelected = selectedAgency?.id === agency.id;

                return (
                  <Button
                    key={agency.id}
                    type="button"
                    variant={isSelected ? "default" : "outline"}
                    onClick={() => onSelectAgency(agency.id)}
                    className={cn(
                      "h-auto w-full justify-start rounded-lg px-4 py-3 text-left",
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "border-border bg-white text-foreground hover:border-primary/25 hover:bg-primary/5"
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
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-muted">
            {hasCoordinates && selectedAgency ? (
              <iframe
                title={`${content.mapFrameTitle} ${selectedAgency.name}`}
                src={buildOpenStreetMapEmbedUrl(selectedAgency)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full bg-muted sm:h-[440px] lg:h-[540px]"
              />
            ) : (
              <div className="flex h-[360px] items-center justify-center p-6 text-center text-sm text-muted-foreground sm:h-[440px] lg:h-[540px]">
                {content.mapUnavailableLabel}
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex-col items-start gap-3 border-t border-border bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <span className="text-xs leading-5 text-muted-foreground">
            {content.agencies.length} {content.networkLabel} references pour
            preparer votre passage en agence.
          </span>
          {hasCoordinates && selectedAgency ? (
            <a
              href={buildOpenStreetMapLink(selectedAgency)}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "h-9 rounded-lg border-primary/20 bg-white text-primary hover:bg-primary hover:text-white"
              )}
            >
              {content.mapOpenLabel}
              <ExternalLink className="size-4" />
            </a>
          ) : null}
        </CardFooter>
      </Card>
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
