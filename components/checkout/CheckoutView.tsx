"use client";

import Link from "next/link";
import {
  Camera,
  CreditCard,
  FileText,
  Map,
  ShieldCheck,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { useApp } from "@/providers/AppProvider";
import { getTourById } from "@/lib/data/tours";
import type { CheckoutUpsells, PaymentStatus } from "@/types/cart";
import { writeCartToStorage } from "@/lib/storage";
import { CheckoutSuccess } from "./CheckoutSuccess";
import { OrderSummary } from "./OrderSummary";

const UPSELL_ITEMS = [
  {
    key: "transfer" as const,
    icon: Map,
    title: "Luxury SUV Airport Transfer",
    desc: "Private chauffeur pickup upon arrival.",
    priceUSD: 150,
  },
  {
    key: "gopro" as const,
    icon: Camera,
    title: "GoPro Hero 11 Rental",
    desc: "Pre-configured for 4K wildlife action.",
    priceUSD: 45,
  },
  {
    key: "visa" as const,
    icon: FileText,
    title: "ETA Visa Fast-Track",
    desc: "We process your government paperwork.",
    priceUSD: 30,
  },
];

export function CheckoutView() {
  const { cart, formatPrice } = useApp();
  const tour = cart ? getTourById(cart.tourId) : undefined;
  const [upsells, setUpsells] = useState<CheckoutUpsells>({
    transfer: false,
    gopro: false,
    visa: false,
  });
  const [status, setStatus] = useState<PaymentStatus>("idle");

  if (!cart || !tour) {
    return (
      <div className="min-h-screen pt-40 pb-24 text-center bg-stone-50">
        <h2 className="text-3xl font-bold mb-4 text-stone-900">
          Your Cart is Empty
        </h2>
        <Link
          href="/tours"
          className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition"
        >
          Browse Tours
        </Link>
      </div>
    );
  }

  const upsellTotalUSD =
    (upsells.transfer ? 150 : 0) +
    (upsells.gopro ? 45 : 0) +
    (upsells.visa ? 30 : 0);
  const finalTotalUSD = cart.totalUSD + upsellTotalUSD;

  const handlePayment = (e: FormEvent) => {
    e.preventDefault();
    setStatus("processing");
    setTimeout(() => {
      setStatus("success");
      writeCartToStorage(null);
    }, 2500);
  };

  if (status === "success") {
    return <CheckoutSuccess />;
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-stone-50 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-10">
          Secure Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-8 flex items-center">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm mr-3">
                  1
                </span>{" "}
                Traveler Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  required
                  placeholder="First Name"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow font-medium"
                />
                <input
                  required
                  placeholder="Last Name"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow font-medium"
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full md:col-span-2 bg-stone-50 border border-stone-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow font-medium"
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-8 flex items-center">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm mr-3">
                  2
                </span>{" "}
                Enhance Your Trip
              </h2>
              <div className="space-y-4">
                {UPSELL_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <label
                      key={item.key}
                      className={`flex items-start p-6 border-2 rounded-2xl cursor-pointer transition-all ${
                        upsells[item.key]
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-stone-100 hover:border-stone-200"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={upsells[item.key]}
                        onChange={(e) =>
                          setUpsells({
                            ...upsells,
                            [item.key]: e.target.checked,
                          })
                        }
                        className="w-5 h-5 text-emerald-600 rounded mt-1"
                      />
                      <div className="ml-4 flex-1">
                        <p className="font-bold text-stone-900 text-lg flex items-center">
                          <Icon className="w-5 h-5 mr-2 text-stone-400" />
                          {item.title}
                        </p>
                        <p className="text-stone-500 mt-1">{item.desc}</p>
                      </div>
                      <span className="font-bold text-emerald-600 text-lg">
                        +{formatPrice(item.priceUSD)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-8 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm mr-3">
                    3
                  </span>{" "}
                  Payment Gateway
                </div>
                <ShieldCheck className="text-emerald-500 w-6 h-6" />
              </h2>

              <form onSubmit={handlePayment}>
                <div className="p-6 border border-stone-200 rounded-2xl bg-stone-50 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-lg text-stone-900">
                      Credit Card
                    </span>
                    <CreditCard className="text-stone-400 w-6 h-6" />
                  </div>
                  <div className="space-y-4">
                    <input
                      required
                      placeholder="Card Number"
                      className="w-full bg-white border border-stone-200 rounded-xl p-4 outline-none focus:border-emerald-500 font-mono"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        required
                        placeholder="MM/YY"
                        className="w-full bg-white border border-stone-200 rounded-xl p-4 outline-none focus:border-emerald-500 font-mono"
                      />
                      <input
                        required
                        placeholder="CVC"
                        className="w-full bg-white border border-stone-200 rounded-xl p-4 outline-none focus:border-emerald-500 font-mono"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "processing"}
                  className="w-full bg-stone-900 hover:bg-emerald-600 text-white font-bold py-5 rounded-2xl transition-colors shadow-lg flex justify-center items-center text-xl disabled:opacity-70"
                >
                  {status === "processing" ? (
                    <span className="animate-pulse">Processing Token...</span>
                  ) : (
                    `Pay ${formatPrice(finalTotalUSD)} securely`
                  )}
                </button>
                <p className="text-center text-xs text-stone-500 mt-4 font-medium flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 mr-1 text-emerald-500" /> PCI
                  DSS Compliant IPG
                </p>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-[420px] shrink-0">
            <OrderSummary tour={tour} cart={cart} upsells={upsells} />
          </div>
        </div>
      </div>
    </div>
  );
}
