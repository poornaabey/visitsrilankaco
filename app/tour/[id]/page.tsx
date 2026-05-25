import { notFound } from "next/navigation";
import { TourDetailView } from "@/components/tour/TourDetailView";
import { getTourById } from "@/lib/data/tours";

interface TourPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const { TOURS } = await import("@/lib/data/tours");
  return TOURS.map((tour) => ({ id: tour.id }));
}

export default async function TourPage({ params }: TourPageProps) {
  const { id } = await params;
  const tour = getTourById(id);

  if (!tour) {
    notFound();
  }

  return <TourDetailView tour={tour} />;
}
