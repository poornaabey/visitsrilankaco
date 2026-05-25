"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Settings } from "lucide-react";
import { useState } from "react";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { useApp } from "@/providers/AppProvider";
import { getChildPrice } from "@/lib/currency";
import type { Tour } from "@/types/tour";
import { TailorModal } from "./TailorModal";

interface BookingSidebarProps {
  tour: Tour;
}

export function BookingSidebar({ tour }: BookingSidebarProps) {
  const router = useRouter();
  const { formatPrice, setCart } = useApp();
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [showTailorModal, setShowTailorModal] = useState(false);

  const childPrice = getChildPrice(tour.price);
  const totalUSD = adults * tour.price + children * childPrice;

  const handleCheckout = () => {
    if (!date) {
      alert("Please select a travel date.");
      return;
    }
    setCart({ tourId: tour.id, date, adults, children, totalUSD });
    router.push("/checkout");
  };

  return (
    <>
      <TailorModal
        open={showTailorModal}
        onClose={() => setShowTailorModal(false)}
        tourTitle={tour.title}
      />
      <div className="bg-white rounded-[2rem] p-8 border border-stone-200 shadow-xl sticky top-28">
        <div className="flex justify-between items-start mb-8 pb-8 border-b border-stone-100">
          <div>
            <span className="text-4xl font-bold text-stone-900 block mb-1">
              {formatPrice(tour.price)}
            </span>
            <span className="text-stone-500 font-medium text-sm">per adult</span>
          </div>
          <span className="bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg border border-emerald-100">
            Best Price
          </span>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-bold text-stone-900 mb-3">
              Select Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 outline-none font-bold text-stone-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-bold text-stone-900 mb-1">
              Travelers
            </label>
            <QuantityStepper
              label="Adults"
              priceLabel={formatPrice(tour.price)}
              value={adults}
              onDecrease={() => setAdults(Math.max(1, adults - 1))}
              onIncrease={() => setAdults(adults + 1)}
            />
            <QuantityStepper
              label="Children"
              sublabel="(Under 12)"
              priceLabel={formatPrice(childPrice)}
              value={children}
              onDecrease={() => setChildren(Math.max(0, children - 1))}
              onIncrease={() => setChildren(children + 1)}
            />
          </div>
        </div>

        <div className="flex justify-between items-center text-2xl font-bold mb-8 pt-6 border-t border-stone-100">
          <span className="text-stone-900">Total</span>
          <span className="text-emerald-600">{formatPrice(totalUSD)}</span>
        </div>

        <div className="space-y-4">
          <button
            type="button"
            onClick={handleCheckout}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-emerald-600/20 flex items-center justify-center text-lg transform hover:-translate-y-0.5"
          >
            Proceed to Checkout <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button
            type="button"
            onClick={() => setShowTailorModal(true)}
            className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl hover:bg-stone-800 transition flex items-center justify-center text-lg"
          >
            <Settings className="w-5 h-5 mr-2" /> Tailor-Make this Tour
          </button>
        </div>
      </div>
    </>
  );
}
