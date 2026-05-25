"use client";

import { useRouter } from "next/navigation";
import { MapPin, Search } from "lucide-react";
import { useState, type FormEvent } from "react";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { HERO_IMAGE } from "@/lib/images";

export function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleGlobalSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      router.push(`/tours?search=${encodeURIComponent(q)}`);
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <RemoteImage
          src={HERO_IMAGE}
          alt="Panoramic view of Sri Lankan temple and landscape at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105 animate-slow-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/40 to-stone-900/90" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-20 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-sm">
          Curated Micro-Trips & Retreats
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight text-shadow-lg">
          Experience the{" "}
          <span className="italic text-emerald-400">Authentic</span> Sri Lanka
        </h1>

        <form
          onSubmit={handleGlobalSearch}
          className="bg-white p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row shadow-2xl max-w-3xl mx-auto mt-10 transform transition-all hover:scale-[1.02]"
        >
          <div className="flex-1 flex items-center px-6 py-4 border-b md:border-b-0 md:border-r border-stone-200">
            <MapPin className="text-emerald-600 w-6 h-6 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="w-full focus:outline-none text-stone-900 font-bold text-lg placeholder-stone-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl md:rounded-full px-10 py-4 m-1 font-bold flex items-center justify-center text-lg transition-colors"
          >
            Search <Search className="ml-2 w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
