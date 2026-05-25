"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { filterTours } from "@/lib/data/tours";
import { TourCard } from "@/components/ui/TourCard";

interface ToursListingProps {
  searchQuery?: string;
}

export function ToursListing({ searchQuery = "" }: ToursListingProps) {
  const filteredTours = filterTours(searchQuery);
  const displayQuery = searchQuery.trim();

  return (
    <div className="min-h-screen pt-32 pb-24 bg-stone-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-serif font-bold text-stone-900 mb-4">
            Curated Collection
          </h1>
          {displayQuery ? (
            <p className="text-lg text-stone-600">
              Showing results for{" "}
              <span className="font-bold text-emerald-600">
                &quot;{displayQuery}&quot;
              </span>
            </p>
          ) : (
            <p className="text-lg text-stone-600">
              Filter and find your perfect day tour or multi-day retreat.
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} variant="listing" />
          ))}
          {filteredTours.length === 0 && (
            <div className="col-span-3 text-center py-20 bg-white rounded-3xl border border-stone-200">
              <Search className="w-12 h-12 text-stone-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-stone-900">
                No matching tours found.
              </h3>
              <Link
                href="/tours"
                className="text-emerald-600 font-bold mt-4 inline-block hover:underline"
              >
                View all tours
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
