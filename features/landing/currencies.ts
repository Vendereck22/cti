import type { CurrencyOption } from "./types";

const priorityCurrencies = ["EUR", "USD", "CDF", "GBP", "XAF", "XOF"] as const;

const currencyNames = new Intl.DisplayNames(["fr"], { type: "currency" });
const currencySorter = new Intl.Collator("fr", { sensitivity: "base" });

export function getWorldCurrencyOptions(): CurrencyOption[] {
  const currencyCodes = getSupportedCurrencyCodes();
  const priorityCodes = new Set<string>(priorityCurrencies);
  const sortedCurrencies = currencyCodes
    .filter((code) => !priorityCodes.has(code))
    .map(currencyOptionFromCode)
    .sort((first, second) => currencySorter.compare(first.label, second.label));

  return [
    ...priorityCurrencies
      .filter((code) => currencyCodes.includes(code))
      .map(currencyOptionFromCode),
    ...sortedCurrencies,
  ];
}

function getSupportedCurrencyCodes() {
  if (typeof Intl.supportedValuesOf === "function") {
    return Intl.supportedValuesOf("currency");
  }

  return ["EUR", "USD", "CDF", "GBP", "XAF", "XOF"];
}

function currencyOptionFromCode(code: string): CurrencyOption {
  const name = currencyNames.of(code) ?? code;

  return {
    code,
    flag: getCurrencySymbol(code),
    label: `${code} - ${capitalizeFirstLetter(name)}`,
  };
}

function getCurrencySymbol(code: string) {
  try {
    const currencyPart = new Intl.NumberFormat("fr-FR", {
      currency: code,
      currencyDisplay: "narrowSymbol",
      style: "currency",
    })
      .formatToParts(0)
      .find((part) => part.type === "currency");

    return currencyPart?.value ?? code;
  } catch {
    return code;
  }
}

function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
