import { CheckCircle2, FileText, Palmtree } from "lucide-react";

export function GuideContent() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6 text-center">
          Essential Guide
        </h1>
        <p className="text-center text-stone-600 text-xl mb-16">
          Logistical intelligence for the modern inbound traveler.
        </p>

        <div className="space-y-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-200">
            <h3 className="text-2xl font-bold text-stone-900 mb-4 flex items-center">
              <FileText className="mr-3 text-emerald-600 w-6 h-6" /> ETA & Visas
            </h3>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              All international visitors require an Electronic Travel Authorization
              (ETA). Ensure your passport is valid for at least 6 months from the
              date of arrival.
            </p>
            <button
              type="button"
              className="bg-emerald-50 text-emerald-700 px-6 py-3 rounded-xl font-bold hover:bg-emerald-100 transition-colors"
            >
              Official ETA Portal →
            </button>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-200">
            <h3 className="text-2xl font-bold text-stone-900 mb-4 flex items-center">
              <Palmtree className="mr-3 text-emerald-600 w-6 h-6" /> Climate Routing
            </h3>
            <p className="text-stone-600 text-lg leading-relaxed mb-4">
              Sri Lanka experiences dual monsoons, making it a year-round destination
              if routed correctly:
            </p>
            <ul className="space-y-3 bg-stone-50 p-6 rounded-2xl border border-stone-100">
              <li className="flex items-center text-stone-700">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />
                <strong className="mr-2">West & South Coasts:</strong> Prime season
                December - April.
              </li>
              <li className="flex items-center text-stone-700">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />
                <strong className="mr-2">East Coast:</strong> Prime season May -
                October.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
