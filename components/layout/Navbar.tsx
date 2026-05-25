"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Compass,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useApp } from "@/providers/AppProvider";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { CURRENCY_CODES } from "@/lib/currency";
import { CURRENCY_SYMBOLS } from "@/types/currency";
import type { CurrencyCode } from "@/types/currency";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrolled = useScrollHeader();
  const { currency, setCurrency, cart } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const solidHeader = scrolled || !isHome;
  const navLinkClass = cn(
    "text-sm font-bold uppercase tracking-wider hover:text-emerald-500 transition-colors",
    solidHeader ? "text-stone-700" : "text-stone-100",
  );

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        solidHeader
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <Compass
              className={cn(
                "h-8 w-8 transition-colors",
                solidHeader
                  ? "text-emerald-700"
                  : "text-white group-hover:text-emerald-400",
              )}
            />
            <span
              className={cn(
                "ml-2 text-2xl font-serif font-bold tracking-tight transition-colors",
                solidHeader ? "text-stone-900" : "text-white",
              )}
            >
              visitsrilanka<span className="text-emerald-600">.co</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/destinations" className={navLinkClass}>
              Destinations
            </Link>
            <Link href="/tours" className={navLinkClass}>
              Tours & Packages
            </Link>
            <Link href="/guide" className={navLinkClass}>
              Travel Info
            </Link>

            <div className="relative group">
              <button
                type="button"
                className={cn(
                  "flex items-center text-sm font-bold uppercase tracking-wider transition-colors",
                  solidHeader ? "text-stone-700" : "text-stone-100",
                )}
              >
                {currency}{" "}
                <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
              </button>
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-stone-100 overflow-hidden">
                {CURRENCY_CODES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCurrency(c as CurrencyCode)}
                    className={cn(
                      "block w-full text-left px-4 py-3 text-sm font-bold transition-colors",
                      currency === c
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-stone-700 hover:bg-stone-50",
                    )}
                  >
                    {c} {CURRENCY_SYMBOLS[c]}
                  </button>
                ))}
              </div>
            </div>

            {cart ? (
              <Link
                href="/checkout"
                className="bg-stone-900 text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center hover:bg-emerald-600 transition-colors shadow-md"
              >
                Cart (1) <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            ) : (
              <Link
                href="/tours"
                className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Plan Trip
              </Link>
            )}
          </div>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  "w-7 h-7",
                  solidHeader ? "text-stone-900" : "text-white",
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "w-7 h-7",
                  solidHeader ? "text-stone-900" : "text-white",
                )}
              />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-6 border-t border-stone-100">
          <Link
            href="/"
            className="text-xl font-bold text-stone-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/destinations"
            className="text-xl font-bold text-stone-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Destinations
          </Link>
          <Link
            href="/tours"
            className="text-xl font-bold text-stone-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tours & Packages
          </Link>
          <Link
            href="/guide"
            className="text-xl font-bold text-stone-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Travel Guide
          </Link>
          <div className="pt-4 border-t border-stone-100 flex justify-between items-center">
            <span className="font-bold text-stone-500 uppercase">Currency</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="bg-stone-100 font-bold p-2 rounded-lg outline-none"
            >
              {CURRENCY_CODES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}
