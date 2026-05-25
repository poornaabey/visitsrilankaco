import { ToursListing } from "@/components/tours/ToursListing";

interface ToursPageProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function ToursPage({ searchParams }: ToursPageProps) {
  const params = await searchParams;
  return <ToursListing searchQuery={params.search ?? ""} />;
}
