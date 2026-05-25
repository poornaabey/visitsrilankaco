import type { ExpertMap } from "@/types/expert";

const P = "https://images.pexels.com/photos";

export const EXPERTS: ExpertMap = {
  "dr-senanayake": {
    id: "dr-senanayake",
    name: "Dr. Senanayake",
    role: "Resident Historian",
    image: `${P}/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400`,
    bio: "Former Head of Archaeology with over 30 years excavating the Cultural Triangle.",
    certs: ["SLTDA Elite Guide", "PhD in Ancient History"],
  },
  "ruwan-biologist": {
    id: "ruwan-biologist",
    name: "Ruwan",
    role: "Wildlife Biologist",
    image: `${P}/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400`,
    bio: "NatGeo featured photographer and dedicated leopard conservationist.",
    certs: ["Wildlife Dept Certified", "First Aid Responder"],
  },
  "dr-fernando": {
    id: "dr-fernando",
    name: "Dr. Fernando",
    role: "Chief Ayurvedic Physician",
    image: `${P}/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400`,
    bio: "4th generation Ayurvedic healer specializing in Dosha mapping and holistic recovery.",
    certs: ["BAMS (Hons)", "Ayurveda Medical Board"],
  },
};
