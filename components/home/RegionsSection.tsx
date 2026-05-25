import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { REGIONS } from "@/lib/data/regions";

export function RegionsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
            Discover by Region
          </h2>
          <p className="text-lg text-stone-600">
            Explore distinct ecosystems and heritage zones.
          </p>
        </div>
        <Link
          href="/destinations"
          className="hidden md:flex items-center font-bold text-emerald-600 hover:text-emerald-800 transition"
        >
          View All Map <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {REGIONS.map((region) => (
          <Link
            href={`/destinations#${region.id}`}
            key={region.id}
            className="group relative h-96 rounded-3xl overflow-hidden block shadow-sm hover:shadow-xl transition-shadow"
          >
            <Image
              src={region.image}
              alt={region.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />
            <div className="absolute bottom-8 left-6 right-6">
              <h3 className="text-white text-2xl font-serif font-bold mb-2">
                {region.name}
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                {region.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
