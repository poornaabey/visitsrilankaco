"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { formatPrice } from "@/lib/currency";
import {
  readCartFromStorage,
  readCurrencyFromStorage,
  writeCartToStorage,
  writeCurrencyToStorage,
} from "@/lib/storage";
import type { CartItem } from "@/types/cart";
import type { CurrencyCode } from "@/types/currency";
import { CURRENCY_CODES } from "@/lib/currency";

interface AppContextValue {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  cart: CartItem | null;
  setCart: (item: CartItem | null) => void;
  formatPrice: (usdVal: number) => string;
}

const AppContext = createContext<AppContextValue | null>(null);

function parseCart(raw: string | null): CartItem | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as CartItem;
  } catch {
    return null;
  }
}

function isCurrencyCode(value: string): value is CurrencyCode {
  return CURRENCY_CODES.includes(value as CurrencyCode);
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");
  const [cart, setCartState] = useState<CartItem | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedCurrency = readCurrencyFromStorage();
    if (storedCurrency && isCurrencyCode(storedCurrency)) {
      setCurrencyState(storedCurrency);
    }
    setCartState(parseCart(readCartFromStorage()));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeCurrencyToStorage(currency);
  }, [currency, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    writeCartToStorage(cart ? JSON.stringify(cart) : null);
  }, [cart, hydrated]);

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
  }, []);

  const setCart = useCallback((item: CartItem | null) => {
    setCartState(item);
  }, []);

  const formatPriceUsd = useCallback(
    (usdVal: number) => formatPrice(usdVal, currency),
    [currency],
  );

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      cart,
      setCart,
      formatPrice: formatPriceUsd,
    }),
    [currency, setCurrency, cart, setCart, formatPriceUsd],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within AppProvider");
  }
  return ctx;
}
