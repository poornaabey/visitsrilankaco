"use client";

import Link from "next/link";
import { RemoteImage } from "@/components/ui/RemoteImage";
import {
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";
import { EXPERTS } from "@/lib/data/experts";
import type { Tour } from "@/types/tour";
import { BookingSidebar } from "./BookingSidebar";

interface TourDetailViewProps {
  tour: Tour;
}

export function TourDetailView({ tour }: TourDetailViewProps) {
  const expert = EXPERTS[tour.expertId];

  return (
    <div className="min-h-screen bg-stone-50 pb-24 animate-fade-in">
      <div className="relative h-[65vh] w-full">
        <RemoteImage
          src={tour.image}
          alt={`${tour.title} — hero image, ${tour.location}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto">
          <span className="inline-block bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold uppercase mb-4 shadow-sm">
            {tour.type === "package" ? "Multi-Day Retreat" : "Day Tour"}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl">
            {tour.title}
          </h1>
          <div className="flex flex-wrap items-center text-stone-200 gap-4 text-sm font-bold">
            <span className="flex items-center bg-white/10 backdrop-blur px-4 py-2 rounded-xl">
              <MapPin className="w-5 h-5 mr-2 text-emerald-400" /> {tour.location}
            </span>
            <span className="flex items-center bg-white/10 backdrop-blur px-4 py-2 rounded-xl">
              <Clock className="w-5 h-5 mr-2 text-emerald-400" /> {tour.duration}
            </span>
            <span className="flex items-center bg-white/10 backdrop-blur px-4 py-2 rounded-xl">
              <Star className="w-5 h-5 mr-2 text-amber-400 fill-current" />{" "}
              {tour.rating} ({tour.reviews})
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              The Experience
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              {tour.description}
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center">
                <Star className="w-5 h-5 text-amber-500 mr-3" /> Highlights
              </h3>
              <ul className="space-y-4">
                {tour.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start text-stone-700 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mr-3" /> Included
              </h3>
              <ul className="space-y-4">
                {tour.included.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-center text-stone-700 font-medium"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-4" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
              {tour.gallery.map((img) => (
                <div key={img} className="relative h-64 rounded-3xl overflow-hidden shadow-sm">
                  <RemoteImage
                    src={img}
                    alt={`${tour.title} gallery photo`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 400px"
                  />
                </div>
              ))}
            </div>
          </section>

          {expert && (
            <Link
              href={`/expert/${expert.id}`}
              className="block bg-emerald-900 rounded-3xl p-8 md:p-10 text-white hover:bg-emerald-800 transition-colors group relative overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition">
                <Award className="w-32 h-32" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                <RemoteImage
                  src={expert.image}
                  alt={`${expert.name}, ${expert.role}`}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover border-2 border-emerald-400"
                />
                <div>
                  <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-sm mb-1">
                    Your Local Expert
                  </h4>
                  <h3 className="text-3xl font-serif font-bold mb-2">
                    {expert.name}
                  </h3>
                  <p className="text-emerald-100 font-medium">
                    {expert.role} · {expert.certs[0]}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="w-full lg:w-[440px] shrink-0">
          <BookingSidebar tour={tour} />
        </div>
      </div>
    </div>
  );
}
