import { REGION_IMAGES } from "@/lib/images";
import type { Region } from "@/types/region";

export const REGIONS: Region[] = [
  {
    id: "cultural-triangle",
    name: "Cultural Triangle",
    image: REGION_IMAGES["cultural-triangle"],
    desc: "Ancient rock fortresses, sacred ruins, and deep heritage.",
  },
  {
    id: "southern-coast",
    name: "Southern Coast",
    image: REGION_IMAGES["southern-coast"],
    desc: "Colonial forts, pristine surfing bays, and blue whales.",
  },
  {
    id: "hill-country",
    name: "Hill Country",
    image: REGION_IMAGES["hill-country"],
    desc: "Misty tea estates, dramatic waterfalls, and cool climates.",
  },
  {
    id: "wildlife-parks",
    name: "Wildlife Reserves",
    image: REGION_IMAGES["wildlife-parks"],
    desc: "Apex predators, elephant herds, and untamed jungles.",
  },
];
