import { HeroSection } from "@/components/home/HeroSection";
import { RegionsSection } from "@/components/home/RegionsSection";
import { TrendingToursSection } from "@/components/home/TrendingToursSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 animate-fade-in">
      <HeroSection />
      <RegionsSection />
      <TrendingToursSection />
    </div>
  );
}
