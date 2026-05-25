import { notFound } from "next/navigation";
import { ExpertProfileView } from "@/components/expert/ExpertProfileView";
import { EXPERTS } from "@/lib/data/experts";

interface ExpertPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return Object.keys(EXPERTS).map((id) => ({ id }));
}

export default async function ExpertPage({ params }: ExpertPageProps) {
  const { id } = await params;
  const expert = EXPERTS[id];

  if (!expert) {
    notFound();
  }

  return <ExpertProfileView expert={expert} />;
}
