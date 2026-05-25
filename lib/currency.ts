import {
  CURRENCY_SYMBOLS,
  EXCHANGE_RATES,
  type CurrencyCode,
} from "@/types/currency";

export function formatPrice(usdVal: number, currency: CurrencyCode): string {
  const symbol = CURRENCY_SYMBOLS[currency];
  const converted = Math.round(usdVal * EXCHANGE_RATES[currency]);
  return `${symbol}${converted.toLocaleString()}`;
}

export function getChildPrice(adultPrice: number): number {
  return Math.round(adultPrice * 0.5);
}

export const CURRENCY_CODES = Object.keys(EXCHANGE_RATES) as CurrencyCode[];
