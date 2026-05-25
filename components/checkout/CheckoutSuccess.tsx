"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useApp } from "@/providers/AppProvider";

export function CheckoutSuccess() {
  const router = useRouter();
  const { setCart } = useApp();
  const bookingRef = useMemo(
    () => `VSL-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    [],
  );

  return (
    <div className="min-h-screen pt-32 pb-24 bg-stone-50 flex items-center justify-center px-4 animate-fade-in">
      <div className="bg-white p-12 rounded-[2rem] shadow-xl max-w-lg w-full text-center border border-stone-200">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <Check className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
          Booking Confirmed
        </h2>
        <p className="text-stone-600 mb-8 text-lg">
          Your itinerary and receipt have been sent to your email. Booking Ref:{" "}
          <strong className="text-stone-900">{bookingRef}</strong>
        </p>
        <button
          type="button"
          onClick={() => {
            setCart(null);
            router.push("/");
          }}
          className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-stone-800 transition"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
