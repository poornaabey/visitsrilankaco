import type { Tour } from "@/types/tour";

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
    image:
      "https://images.unsplash.com/photo-1586220138973-199fbf7f45c2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539224357482-132d73507204?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1588168233777-6f61b7fcf711?auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1610486022838-8d4889c0b8de?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1539224357482-132d73507204?auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1545389336-eaee230ef1e8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579690184232-f1730043c749?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1566324838663-8a38b556c5d1?auto=format&fit=crop&w=600&q=80",
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
