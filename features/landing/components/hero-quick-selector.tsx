"use client";

import { useState } from "react";

import {
  Input,
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
  const [amountValue, setAmountValue] = useState(
    formatInitialAmount(content.initialAmount)
  );

  const selectedCountry =
    content.countries.find((country) => country.code === countryCode) ??
    content.countries[0];
  const selectedCurrency =
    content.currencies.find((currency) => currency.code === sourceCurrency) ??
    content.currencies[0];

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
        <SelectContent align="start" className="max-h-[360px] min-w-[320px]">
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

      <HeroAmountControl
        amountLabel={content.amountLabel}
        amountValue={amountValue}
        currencies={content.currencies}
        currencyLabel={content.sourceCurrencyLabel}
        onAmountChange={setAmountValue}
        onCurrencyChange={setSourceCurrency}
        selectedCurrency={selectedCurrency}
        sourceCurrency={sourceCurrency}
      />
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

function HeroAmountControl({
  amountLabel,
  amountValue,
  currencies,
  currencyLabel,
  onAmountChange,
  onCurrencyChange,
  selectedCurrency,
  sourceCurrency,
}: {
  amountLabel: string;
  amountValue: string;
  currencies: CurrencyOption[];
  currencyLabel: string;
  onAmountChange: (value: string) => void;
  onCurrencyChange: (value: string) => void;
  selectedCurrency?: CurrencyOption;
  sourceCurrency: string;
}) {
  return (
    <div className="flex min-h-[86px] items-center justify-between gap-3 rounded-lg border border-slate-300 bg-white px-4 py-3 shadow-sm">
      <div className="min-w-0 flex-1">
        <label
          htmlFor="hero-transfer-amount"
          className="text-sm font-semibold leading-none text-muted-foreground"
        >
          {amountLabel}
        </label>
        <Input
          id="hero-transfer-amount"
          inputMode="decimal"
          value={amountValue}
          aria-label={amountLabel}
          onChange={(event) =>
            onAmountChange(event.target.value.replace(/[^\d.,]/g, ""))
          }
          className="mt-1 h-9 rounded-none border-0 bg-transparent p-0 text-2xl font-bold leading-none text-foreground shadow-none focus-visible:ring-0 md:text-2xl"
        />
      </div>

      <Select
        value={sourceCurrency}
        onValueChange={(value) => {
          if (typeof value === "string") {
            onCurrencyChange(value);
          }
        }}
      >
        <SelectTrigger
          aria-label={currencyLabel}
          className="h-11 min-w-[116px] rounded-full border-slate-300 bg-white px-2.5 text-left"
        >
          <span className="inline-flex items-center gap-2 text-lg font-semibold text-foreground">
            <CurrencyBadge value={selectedCurrency?.flag ?? "€"} />
            {selectedCurrency?.code ?? "EUR"}
          </span>
        </SelectTrigger>
        <SelectContent align="start" className="max-h-[360px] min-w-[320px]">
          {currencies.map((currency) => (
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
          {country.description ?? `Code pays ${country.code}`}
        </span>
      </span>
    </span>
  );
}

function CurrencyOptionRow({ currency }: { currency: CurrencyOption }) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <CurrencyBadge value={currency.flag} />
      <span className="grid min-w-0">
        <span className="truncate font-semibold text-foreground">
          {currency.code}
        </span>
        <span className="truncate text-xs text-muted-foreground">
          {currency.label}
        </span>
      </span>
    </span>
  );
}

function CurrencyBadge({ value }: { value: string }) {
  const isLongValue = value.length > 2;

  return (
    <span
      aria-hidden="true"
      className={
        isLongValue
          ? "flex size-8 shrink-0 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold leading-none ring-1 ring-slate-300"
          : "flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-base font-semibold ring-1 ring-slate-300"
      }
    >
      {value}
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

function formatInitialAmount(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
