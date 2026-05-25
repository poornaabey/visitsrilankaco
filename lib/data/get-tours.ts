import { unstable_noStore as noStore } from "next/cache";
import { TOURS } from "@/lib/data/tours";
import type { Tour } from "@/types/tour";

const TRENDING_LOAD_MS = 450;

/**
 * Simulates fetching trending tours (static data today; ready for a real API later).
 * Uses noStore so Suspense can stream the skeleton on each request.
 */
export async function getTrendingTours(): Promise<Tour[]> {
  noStore();
  await new Promise((resolve) => setTimeout(resolve, TRENDING_LOAD_MS));
  return TOURS;
}
