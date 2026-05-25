"use client";

import { Modal } from "@/components/ui/Modal";

interface TailorModalProps {
  open: boolean;
  onClose: () => void;
  tourTitle: string;
}

export function TailorModal({ open, onClose, tourTitle }: TailorModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Tailor-Make this Itinerary"
      description={
        <p>
          Customize <span className="font-bold">&quot;{tourTitle}&quot;</span> to
          fit your exact preferences.
        </p>
      }
    >
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert(
            "Inquiry sent to our Concierge team. We will respond within 24 hours.",
          );
          onClose();
        }}
      >
        <div>
          <label className="block font-bold text-stone-900 mb-2">
            What aspects do you want to modify?
          </label>
          <textarea
            rows={3}
            placeholder="e.g., Upgrade to boutique 5-star hotels, extend duration to 10 days..."
            className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-bold text-stone-900 mb-2">
              Estimated Budget / Person
            </label>
            <select className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 outline-none font-medium">
              <option>Select Budget</option>
              <option>$500 - $1,500</option>
              <option>$1,500 - $3,000</option>
              <option>$3,000+ (Luxury)</option>
            </select>
          </div>
          <div>
            <label className="block font-bold text-stone-900 mb-2">
              Target Travel Month
            </label>
            <input
              type="month"
              className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 outline-none font-medium text-stone-700"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition shadow-md text-lg"
        >
          Send Inquiry to Concierge
        </button>
      </form>
    </Modal>
  );
}
