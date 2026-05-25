import Link from "next/link";
import {
  CheckCircle2,
  Compass,
  Facebook,
  Globe,
  Instagram,
  ShieldCheck,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Compass className="h-6 w-6 text-emerald-500" />
              <span className="ml-2 text-xl font-serif font-bold text-white">
                visitsrilanka.co
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              A holistic niche tour platform specializing in inbound micro-trips,
              sustainable eco-tourism, and bespoke tailor-made itineraries.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              Experiences
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/tours" className="hover:text-emerald-400 transition">
                  Cultural Heritage
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-emerald-400 transition">
                  Wildlife Tracking
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-emerald-400 transition">
                  Ayurveda Retreats
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-emerald-400 transition">
                  Culinary Journeys
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/guide" className="hover:text-emerald-400 transition">
                  Travel Information
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-emerald-400 transition">
                  Concierge Desk
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              Secure Platform
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <ShieldCheck className="w-4 h-4 mr-3 text-emerald-500" /> SSL
                Encrypted Payments
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-3 text-emerald-500" /> Instant
                API Confirmations
              </li>
              <li className="flex items-center">
                <Globe className="w-4 h-4 mr-3 text-emerald-500" /> Multi-Currency
                Support
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
          <p>&copy; 2026 VisitSriLanka.co. Engineered for holistic travel.</p>
        </div>
      </div>
    </footer>
  );
}
