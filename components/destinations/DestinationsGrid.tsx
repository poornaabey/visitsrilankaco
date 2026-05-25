import Link from "next/link";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { REGIONS } from "@/lib/data/regions";

export function DestinationsGrid() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 animate-fade-in min-h-screen">
      <h1 className="text-5xl font-serif font-bold text-stone-900 mb-12">
        Destination Hubs
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {REGIONS.map((r) => (
          <Link
            href={`/tours?search=${encodeURIComponent(r.name.toLowerCase())}`}
            key={r.id}
            id={r.id}
            className="relative h-96 rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow scroll-mt-32"
          >
            <RemoteImage
              src={r.image}
              alt={`${r.name} destination — ${r.desc}`}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/20 transition" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <h2 className="text-4xl font-serif font-bold text-white mb-4">
                {r.name}
              </h2>
              <p className="text-white text-lg max-w-md font-medium shadow-sm">
                {r.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
