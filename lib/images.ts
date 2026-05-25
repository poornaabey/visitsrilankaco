/** Default placeholder when a remote image fails to load */
export const DEFAULT_IMAGE_FALLBACK =
  "https://images.pexels.com/photos/3601420/pexels-photo-3601420.jpeg?auto=compress&cs=tinysrgb&w=1200";

export const HERO_IMAGE =
  "https://images.pexels.com/photos/3601420/pexels-photo-3601420.jpeg?auto=compress&cs=tinysrgb&w=1920";

export const REGION_IMAGES = {
  "cultural-triangle":
    "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=800",
  "southern-coast":
    "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
  "hill-country":
    "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=800",
  "wildlife-parks":
    "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800",
} as const;

/** Returns a fallback URL when the primary source is missing or invalid. */
export function getImageFallback(primary?: string | null): string {
  if (!primary || primary.trim() === "") {
    return DEFAULT_IMAGE_FALLBACK;
  }
  return primary;
}
