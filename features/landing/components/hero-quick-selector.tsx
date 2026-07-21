"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui";
import type {
  CountryOption,
  CurrencyOption,
  RateEstimatorContent,
} from "../types";

export function HeroQuickSelector({
  content,
  destinationLabel,
}: {
  content: RateEstimatorContent;
  destinationLabel: string;
}) {
  const [countryCode, setCountryCode] = useState(content.initialCountryCode);
  const [sourceCurrency, setSourceCurrency] = useState(
    content.initialSourceCurrency
  );

  const selectedCountry =
    content.countries.find((country) => country.code === countryCode) ??
    content.countries[0];
  const selectedCurrency =
    content.currencies.find((currency) => currency.code === sourceCurrency) ??
    content.currencies[0];
  const formattedAmount = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(content.initialAmount);

  return (
    <div id="simulateur" className="grid max-w-3xl gap-4 sm:grid-cols-2">
      <Select
        value={countryCode}
        onValueChange={(value) => {
          if (typeof value === "string") {
            setCountryCode(value);
          }
        }}
      >
        <SelectTrigger
          aria-label={destinationLabel}
          className="min-h-[86px] w-full rounded-lg border-slate-300 bg-white px-4 py-3 text-left shadow-sm"
        >
          <HeroCountryValue country={selectedCountry} label={destinationLabel} />
        </SelectTrigger>
        <SelectContent align="start" className="min-w-[280px]">
          {content.countries.map((country) => (
            <SelectItem
              key={country.code}
              value={country.code}
              className="py-2.5"
            >
              <CountryOptionRow country={country} />
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={sourceCurrency}
        onValueChange={(value) => {
          if (typeof value === "string") {
            setSourceCurrency(value);
          }
        }}
      >
        <SelectTrigger
          aria-label={content.sourceCurrencyLabel}
          className="min-h-[86px] w-full rounded-lg border-slate-300 bg-white px-4 py-3 text-left shadow-sm"
        >
          <HeroAmountValue
            amount={formattedAmount}
            currency={selectedCurrency}
            label={content.amountLabel}
          />
        </SelectTrigger>
        <SelectContent align="start" className="min-w-[240px]">
          {content.currencies.map((currency) => (
            <SelectItem
              key={currency.code}
              value={currency.code}
              className="py-2.5"
            >
              <CurrencyOptionRow currency={currency} />
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function HeroCountryValue({
  label,
  country,
}: {
  label: string;
  country?: CountryOption;
}) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-3">
      <FlagBadge flag={country?.flag ?? "🇨🇩"} />
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-none text-muted-foreground">
          {label}
        </p>
        <p className="mt-2 line-clamp-2 text-xl font-bold leading-tight text-foreground sm:text-2xl">
          {country?.label ?? "RDC"}
        </p>
      </div>
    </div>
  );
}

function HeroAmountValue({
  amount,
  currency,
  label,
}: {
  amount: string;
  currency?: CurrencyOption;
  label: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-none text-muted-foreground">
          {label}
        </p>
        <p className="mt-2 truncate text-2xl font-bold leading-none text-foreground">
          {amount}
        </p>
      </div>
      <span className="inline-flex shrink-0 items-center gap-2 text-xl font-semibold text-foreground">
        <FlagBadge flag={currency?.flag ?? "🇪🇺"} size="sm" />
        {currency?.code ?? "EUR"}
      </span>
    </div>
  );
}

function CountryOptionRow({
  country,
}: {
  country: CountryOption;
}) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <FlagBadge flag={country.flag} size="sm" />
      <span className="grid min-w-0">
        <span className="truncate font-semibold text-foreground">
          {country.label}
        </span>
        <span className="truncate text-xs text-muted-foreground">
          {country.description}
        </span>
      </span>
    </span>
  );
}

function CurrencyOptionRow({ currency }: { currency: CurrencyOption }) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <FlagBadge flag={currency.flag} size="sm" />
      <span className="truncate font-semibold text-foreground">
        {currency.label}
      </span>
    </span>
  );
}

function FlagBadge({
  flag,
  size = "default",
}: {
  flag: string;
  size?: "default" | "sm";
}) {
  return (
    <span
      aria-hidden="true"
      className={
        size === "sm"
          ? "flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-lg ring-1 ring-slate-300"
          : "flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-xl ring-1 ring-slate-300"
      }
    >
      {flag}
    </span>
  );
}
