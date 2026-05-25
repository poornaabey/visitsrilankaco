import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans text-stone-900 antialiased selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
