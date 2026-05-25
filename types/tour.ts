export type TourType = "day" | "package";

export interface ItineraryDay {
  day: number | string;
  title: string;
  desc: string;
}

export interface Tour {
  id: string;
  type: TourType;
  title: string;
  regionId: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  category: string;
  expertId: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  included: string[];
  itinerary?: ItineraryDay[];
}
