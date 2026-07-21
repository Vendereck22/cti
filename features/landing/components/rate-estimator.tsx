"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, BadgeDollarSign, Info } from "lucide-react";

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Separator,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import type { CurrencyRate, RateEstimatorContent } from "../types";

interface RateEstimatorProps {
  content: RateEstimatorContent;
}

export function RateEstimator({ content }: RateEstimatorProps) {
  const [amountValue, setAmountValue] = useState(String(content.initialAmount));
  const [sourceCurrency, setSourceCurrency] = useState(
    content.initialSourceCurrency
  );
  const [targetCurrency, setTargetCurrency] = useState(
    content.initialTargetCurrency
  );
  const [destinationId, setDestinationId] = useState(
    content.initialDestinationId
  );

  const amount = parseAmount(amountValue);
  const selectedRate = useMemo(
    () =>
      findRate(
        content.rates,
        sourceCurrency,
        targetCurrency,
        content.sameCurrencyLabel
      ),
    [content.rates, content.sameCurrencyLabel, sourceCurrency, targetCurrency]
  );
  const estimateAvailable = Boolean(selectedRate && amount > 0);
  const fee = selectedRate && amount > 0
    ? selectedRate.fixedFee + amount * selectedRate.percentageFee
    : 0;
  const convertedAmount = selectedRate && amount > 0 ? amount * selectedRate.rate : 0;
  const total = selectedRate && amount > 0 ? amount + fee : amount;
  const selectedDestination = content.destinations.find(
    (destination) => destination.id === destinationId
  );

  return (
    <Card
      id="simulateur"
      className="rounded-lg border-white/20 bg-card text-card-foreground shadow-2xl shadow-slate-950/25"
    >
      <CardHeader className="gap-3 border-b border-border bg-muted/40">
        <Badge
          variant="outline"
          className="h-6 rounded-md border-cti-gold/40 bg-accent px-2.5 text-primary"
        >
          <BadgeDollarSign className="size-3.5" />
          {content.badge}
        </Badge>
        <div className="space-y-2">
          <CardTitle className="text-xl font-semibold leading-tight text-foreground">
            {content.title}
          </CardTitle>
          <CardDescription className="text-sm leading-6">
            {content.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
          <Field label={content.amountLabel}>
            <Input
              inputMode="decimal"
              min="0"
              type="number"
              value={amountValue}
              aria-invalid={amount <= 0}
              onChange={(event) => setAmountValue(event.target.value)}
              className="h-11 rounded-lg border-input bg-background text-base font-semibold text-foreground"
            />
          </Field>
          <Field label={content.sourceCurrencyLabel}>
            <Select
              value={sourceCurrency}
              onValueChange={(value) => {
                if (typeof value === "string") {
                  setSourceCurrency(value);
                }
              }}
            >
              <SelectTrigger className="h-11 w-full rounded-lg border-input bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {content.currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={content.targetCurrencyLabel}>
            <Select
              value={targetCurrency}
              onValueChange={(value) => {
                if (typeof value === "string") {
                  setTargetCurrency(value);
                }
              }}
            >
              <SelectTrigger className="h-11 w-full rounded-lg border-input bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {content.currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field label={content.destinationLabel}>
            <Select
              value={destinationId}
              onValueChange={(value) => {
                if (typeof value === "string") {
                  setDestinationId(value);
                }
              }}
            >
              <SelectTrigger className="h-11 w-full rounded-lg border-input bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {content.destinations.map((destination) => (
                  <SelectItem key={destination.id} value={destination.id}>
                    {destination.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="rounded-lg border border-border bg-muted/60 p-4">
          {estimateAvailable && selectedRate ? (
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {content.resultLabel}
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-primary">
                    {formatCurrency(convertedAmount, targetCurrency)}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="rounded-md border-border bg-background text-muted-foreground"
                >
                  {selectedRate.updatedAtLabel}
                </Badge>
              </div>

              <Separator className="bg-border" />

              <dl className="grid gap-3 text-sm sm:grid-cols-3">
                <ResultItem
                  label={content.feeLabel}
                  value={formatCurrency(fee, sourceCurrency)}
                />
                <ResultItem
                  label={content.rateLabel}
                  value={`1 ${sourceCurrency} = ${formatNumber(
                    selectedRate.rate
                  )} ${targetCurrency}`}
                />
                <ResultItem
                  label={content.totalLabel}
                  value={formatCurrency(total, sourceCurrency)}
                />
              </dl>
            </div>
          ) : (
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0 text-amber-600" />
              <p>{content.unavailableRateLabel}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-3 border-t border-border bg-muted/40 sm:flex-row sm:items-center">
        <Button
          type="button"
          className="h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary/90"
        >
          {content.submitLabel}
          <ArrowRight className="size-4" />
        </Button>
        <p className="text-xs leading-5 text-muted-foreground">
          {selectedDestination
            ? `${selectedDestination.city}, ${selectedDestination.country}. `
            : null}
          {content.legalNote}
        </p>
      </CardFooter>
    </Card>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="space-y-2 text-sm font-medium text-foreground">
      <span>{label}</span>
      {children}
    </label>
  );
}

function ResultItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-background p-3 ring-1 ring-border">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-semibold text-foreground">{value}</dd>
    </div>
  );
}

function findRate(
  rates: CurrencyRate[],
  sourceCurrency: string,
  targetCurrency: string,
  sameCurrencyLabel: string
): CurrencyRate | null {
  if (sourceCurrency === targetCurrency) {
    return {
      sourceCurrency,
      targetCurrency,
      rate: 1,
      fixedFee: 0,
      percentageFee: 0,
      updatedAtLabel: sameCurrencyLabel,
    };
  }

  const exactRate = rates.find(
    (rate) =>
      rate.sourceCurrency === sourceCurrency &&
      rate.targetCurrency === targetCurrency
  );

  if (exactRate) {
    return exactRate;
  }

  const inverseRate = rates.find(
    (rate) =>
      rate.sourceCurrency === targetCurrency &&
      rate.targetCurrency === sourceCurrency
  );

  if (!inverseRate) {
    return null;
  }

  return {
    sourceCurrency,
    targetCurrency,
    rate: 1 / inverseRate.rate,
    fixedFee: inverseRate.fixedFee,
    percentageFee: inverseRate.percentageFee,
    updatedAtLabel: inverseRate.updatedAtLabel,
  };
}

function parseAmount(value: string) {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatCurrency(value: number, currency: string) {
  try {
    return new Intl.NumberFormat("fr-FR", {
      currency,
      maximumFractionDigits: currency === "CDF" ? 0 : 2,
      style: "currency",
    }).format(value);
  } catch {
    return `${formatNumber(value)} ${currency}`;
  }
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: value > 100 ? 0 : 4,
  }).format(value);
}
