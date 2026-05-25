const CART_KEY = "vsl_cart";
const CURRENCY_KEY = "vsl_currency";

export function readCartFromStorage(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CART_KEY);
}

export function writeCartToStorage(value: string | null): void {
  if (typeof window === "undefined") return;
  if (value === null) {
    localStorage.removeItem(CART_KEY);
  } else {
    localStorage.setItem(CART_KEY, value);
  }
}

export function readCurrencyFromStorage(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CURRENCY_KEY);
}

export function writeCurrencyToStorage(currency: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CURRENCY_KEY, currency);
}
