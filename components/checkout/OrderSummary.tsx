"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { useApp } from "@/providers/AppProvider";
import { getChildPrice } from "@/lib/currency";
import type { CartItem, CheckoutUpsells } from "@/types/cart";
import type { Tour } from "@/types/tour";

const UPSELL_PRICES = { transfer: 150, gopro: 45, visa: 30 } as const;

interface OrderSummaryProps {
  tour: Tour;
  cart: CartItem;
  upsells: CheckoutUpsells;
}

export function OrderSummary({ tour, cart, upsells }: OrderSummaryProps) {
  const { formatPrice } = useApp();

  const upsellTotalUSD =
    (upsells.transfer ? UPSELL_PRICES.transfer : 0) +
    (upsells.gopro ? UPSELL_PRICES.gopro : 0) +
    (upsells.visa ? UPSELL_PRICES.visa : 0);
  const finalTotalUSD = cart.totalUSD + upsellTotalUSD;
  const childUnit = getChildPrice(tour.price);

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-2xl sticky top-28 border border-stone-200">
      <h3 className="text-2xl font-bold text-stone-900 mb-8">Order Summary</h3>
      <div className="flex gap-4 mb-8 pb-8 border-b border-stone-100">
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-sm shrink-0">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg leading-tight mb-1 text-stone-900">
            {tour.title}
          </h4>
          <p className="text-stone-500 font-medium flex items-center">
            <Calendar className="w-3 h-3 mr-1" /> {cart.date}
          </p>
        </div>
      </div>

      <div className="space-y-4 text-stone-600 font-medium mb-8 pb-8 border-b border-stone-100">
        <div className="flex justify-between items-center bg-stone-50 p-3 rounded-lg">
          <span>Adults ({cart.adults})</span>
          <span className="text-stone-900 font-bold">
            {formatPrice(tour.price * cart.adults)}
          </span>
        </div>
        {cart.children > 0 && (
          <div className="flex justify-between items-center bg-stone-50 p-3 rounded-lg">
            <span>Children ({cart.children})</span>
            <span className="text-stone-900 font-bold">
              {formatPrice(childUnit * cart.children)}
            </span>
          </div>
        )}
        {upsells.transfer && (
          <div className="flex justify-between text-emerald-600 px-3">
            <span>Transfer Upgrade</span>
            <span>+{formatPrice(UPSELL_PRICES.transfer)}</span>
          </div>
        )}
        {upsells.gopro && (
          <div className="flex justify-between text-emerald-600 px-3">
            <span>GoPro Rental</span>
            <span>+{formatPrice(UPSELL_PRICES.gopro)}</span>
          </div>
        )}
        {upsells.visa && (
          <div className="flex justify-between text-emerald-600 px-3">
            <span>Visa Fast-Track</span>
            <span>+{formatPrice(UPSELL_PRICES.visa)}</span>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center text-2xl font-bold">
        <span className="text-stone-900">Total</span>
        <span className="text-emerald-600">{formatPrice(finalTotalUSD)}</span>
      </div>
    </div>
  );
}
