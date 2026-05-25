"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import { useApp } from "@/providers/AppProvider";
import type { Tour } from "@/types/tour";
import { cn } from "@/lib/cn";

interface TourCardProps {
  tour: Tour;
  variant?: "home" | "listing";
}

export function TourCard({ tour, variant = "listing" }: TourCardProps) {
  const { formatPrice } = useApp();
  const isHome = variant === "home";

  return (
    <Link
      href={`/tour/${tour.id}`}
      className={cn(
        "overflow-hidden border shadow-sm hover:shadow-xl transition-all group flex flex-col",
        isHome
          ? "bg-stone-50 rounded-3xl border-stone-100"
          : "bg-white rounded-3xl border-stone-200",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          isHome ? "h-64" : "h-56",
        )}
      >
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className={cn(
            "absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider",
            isHome
              ? "bg-white/95 backdrop-blur text-emerald-800"
              : "bg-stone-900/90 backdrop-blur text-white",
          )}
        >
          {tour.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        {isHome && (
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center">
              <Clock className="w-3 h-3 mr-1" /> {tour.duration}
            </span>
            <span className="text-xs font-bold flex items-center text-stone-700">
              <Star className="w-4 h-4 text-amber-500 mr-1 fill-current" />{" "}
              {tour.rating}
            </span>
          </div>
        )}
        <h3 className="text-xl font-bold text-stone-900 mb-2 leading-snug group-hover:text-emerald-600 transition-colors">
          {tour.title}
        </h3>
        {!isHome && (
          <span className="text-sm text-stone-500 flex items-center mb-6">
            <MapPin className="w-4 h-4 mr-1 text-emerald-600" /> {tour.location}
          </span>
        )}
        <div
          className={cn(
            "mt-auto flex items-center justify-between border-t",
            isHome ? "pt-6 border-stone-200" : "pt-4 border-stone-100",
          )}
        >
          {isHome ? (
            <>
              <div>
                <span className="text-xs text-stone-500 block font-medium">
                  From
                </span>
                <span className="font-bold text-xl text-stone-900">
                  {formatPrice(tour.price)}
                </span>
              </div>
              <span className="bg-stone-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold group-hover:bg-emerald-600 transition-colors">
                Explore
              </span>
            </>
          ) : (
            <>
              <span className="font-bold text-2xl text-emerald-600">
                {formatPrice(tour.price)}
              </span>
              <span className="text-stone-900 font-bold flex items-center text-sm hover:text-emerald-600 transition">
                Details <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
