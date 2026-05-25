import { TOURS } from "@/lib/data/tours";
import { TourCard } from "@/components/ui/TourCard";

export function TrendingToursSection() {
  return (
    <section className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">
            Bespoke Itineraries
          </span>
          <h2 className="text-4xl font-serif font-bold text-stone-900">
            Trending Experiences
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TOURS.map((tour) => (
            <TourCard key={tour.id} tour={tour} variant="home" />
          ))}
        </div>
      </div>
    </section>
  );
}
