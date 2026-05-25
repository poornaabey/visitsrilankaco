import Link from "next/link";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { ArrowRight, Award, MapPin } from "lucide-react";
import { getToursByExpert } from "@/lib/data/tours";
import type { Expert } from "@/types/expert";

interface ExpertProfileViewProps {
  expert: Expert;
}

export function ExpertProfileView({ expert }: ExpertProfileViewProps) {
  const expertTours = getToursByExpert(expert.id);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-stone-50 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-stone-100 flex flex-col md:flex-row gap-12 items-center md:items-start mb-16">
          <RemoteImage
            src={expert.image}
            alt={`Portrait of ${expert.name}, ${expert.role}`}
            width={256}
            height={256}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-emerald-50 shadow-lg shrink-0"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-3">
              {expert.name}
            </h1>
            <p className="text-xl md:text-2xl text-emerald-600 font-bold mb-6">
              {expert.role}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              {expert.bio}
            </p>
            <div className="flex flex-wrap gap-3">
              {expert.certs.map((cert) => (
                <span
                  key={cert}
                  className="bg-stone-100 border border-stone-200 text-stone-700 px-5 py-2.5 rounded-xl font-bold flex items-center"
                >
                  <Award className="w-5 h-5 mr-2 text-emerald-600" /> {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">
          Curated by {expert.name}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {expertTours.map((tour) => (
            <Link
              href={`/tour/${tour.id}`}
              key={tour.id}
              className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all block group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-stone-900 group-hover:text-emerald-600 transition-colors leading-snug max-w-[80%]">
                  {tour.title}
                </h3>
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <span className="text-stone-500 font-medium flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-emerald-600" /> {tour.location}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
