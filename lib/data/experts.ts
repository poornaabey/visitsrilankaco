import type { ExpertMap } from "@/types/expert";

export const EXPERTS: ExpertMap = {
  "dr-senanayake": {
    id: "dr-senanayake",
    name: "Dr. Senanayake",
    role: "Resident Historian",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Former Head of Archaeology with over 30 years excavating the Cultural Triangle.",
    certs: ["SLTDA Elite Guide", "PhD in Ancient History"],
  },
  "ruwan-biologist": {
    id: "ruwan-biologist",
    name: "Ruwan",
    role: "Wildlife Biologist",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=400&q=80",
    bio: "NatGeo featured photographer and dedicated leopard conservationist.",
    certs: ["Wildlife Dept Certified", "First Aid Responder"],
  },
  "dr-fernando": {
    id: "dr-fernando",
    name: "Dr. Fernando",
    role: "Chief Ayurvedic Physician",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
    bio: "4th generation Ayurvedic healer specializing in Dosha mapping and holistic recovery.",
    certs: ["BAMS (Hons)", "Ayurveda Medical Board"],
  },
};
