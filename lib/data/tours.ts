import { REGION_IMAGES } from "@/lib/images";
import type { Tour } from "@/types/tour";

const P = "https://images.pexels.com/photos";

export const TOURS: Tour[] = [
  {
    id: "sigiriya-ancient",
    type: "day",
    title: "Sigiriya Ancient Rock Fortress",
    regionId: "cultural-triangle",
    location: "Dambulla District",
    duration: "8 Hours",
    rating: 4.9,
    reviews: 312,
    price: 120,
    category: "Culture",
    expertId: "dr-senanayake",
    image: `${REGION_IMAGES["cultural-triangle"]}&h=1200`,
    gallery: [
      `${P}/3601420/pexels-photo-3601420.jpeg?auto=compress&cs=tinysrgb&w=600`,
      `${P}/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600`,
    ],
    description:
      "Bypass the massive crowds with our expert historian. Discover ancient hydraulic engineering, marvel at the mirror wall, and enjoy a traditional village culinary experience post-climb.",
    highlights: [
      "VIP Sunrise Access",
      "Archaeological Museum Tour",
      "Village Clay-Pot Lunch",
    ],
    included: [
      "Expert historian guide",
      "All monument entrance fees",
      "Lunch & Refreshments",
      "Air-conditioned transport",
    ],
  },
  {
    id: "yala-leopard-safari",
    type: "day",
    title: "Yala Premium Leopard Tracking",
    regionId: "wildlife-parks",
    location: "Yala National Park",
    duration: "12 Hours",
    rating: 5.0,
    reviews: 420,
    price: 250,
    category: "Wildlife",
    expertId: "ruwan-biologist",
    image: `${REGION_IMAGES["wildlife-parks"]}&h=1200`,
    gallery: [
      `${P}/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600`,
      `${P}/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=600`,
    ],
    description:
      "Venture deep into Block 1 & 5 of Yala National Park. Travel in a custom-modified 4x4 designed for wildlife photography, led by a biologist who tracks behavior rather than just chasing sightings.",
    highlights: [
      "Custom 4x4 Photography Jeep",
      "Ethical Wildlife Tracking",
      "Bush Picnic Breakfast",
    ],
    included: [
      "Senior Biologist Guide",
      "Park Entry & Jeep Fees",
      "Binoculars & Field Guides",
      "Meals",
    ],
  },
  {
    id: "ayurveda-retreat-7d",
    type: "package",
    title: "7-Day Holistic Ayurveda Retreat",
    regionId: "southern-coast",
    location: "Bentota South",
    duration: "7 Days",
    rating: 4.9,
    reviews: 215,
    price: 1850,
    category: "Wellness",
    expertId: "dr-fernando",
    image: `${P}/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1200`,
    gallery: [
      `${REGION_IMAGES["southern-coast"]}&h=600`,
      `${REGION_IMAGES["hill-country"]}&h=600`,
    ],
    description:
      "A complete mental and physical reset. Supervised by certified Ayurvedic doctors, this immersive retreat utilizes ancient dosha-specific therapies to rejuvenate your core system.",
    highlights: [
      "In-depth Dosha Consultation",
      "Daily Shirodhara & Herbal Baths",
      "Sunrise Beach Yoga",
      "Organic Plant-based Diet",
    ],
    included: [
      "Luxury Eco-Villa Accommodation",
      "All Prescribed Treatments",
      "Full Board Organic Meals",
      "Private Airport Transfers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Assessment",
        desc: "Private transfer to the retreat. Initial consultation with Dr. Fernando for pulse diagnosis.",
      },
      {
        day: 2,
        title: "Detoxification Start",
        desc: "Morning yoga, followed by full-body Abhyanga massage and herbal steam bath.",
      },
      {
        day: "3-6",
        title: "Deep Rejuvenation",
        desc: "Daily regimen of meditation, tailored Ayurvedic treatments, and beach walks.",
      },
      {
        day: 7,
        title: "Integration & Departure",
        desc: "Final consultation, lifestyle prescription for home, and departure transfer.",
      },
    ],
  },
];

export function getTourById(id: string): Tour | undefined {
  return TOURS.find((t) => t.id === id);
}

export function filterTours(query: string): Tour[] {
  const q = query.trim().toLowerCase();
  if (!q) return TOURS;
  return TOURS.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.location.toLowerCase().includes(q),
  );
}

export function getToursByExpert(expertId: string): Tour[] {
  return TOURS.filter((t) => t.expertId === expertId);
}
