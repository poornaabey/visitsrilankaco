import { Suspense } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { RegionsSection } from "@/components/home/RegionsSection";
import { TrendingToursFallback } from "@/components/home/TrendingToursFallback";
import { TrendingToursSection } from "@/components/home/TrendingToursSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 animate-fade-in">
      <HeroSection />
      <RegionsSection />
      <Suspense fallback={<TrendingToursFallback />}>
        <TrendingToursSection />
      </Suspense>
    </div>
  );
}
