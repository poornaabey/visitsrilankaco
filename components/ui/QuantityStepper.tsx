"use client";

import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  label: string;
  sublabel?: string;
  priceLabel?: string;
  value: number;
  min?: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export function QuantityStepper({
  label,
  sublabel,
  priceLabel,
  value,
  onDecrease,
  onIncrease,
}: QuantityStepperProps) {
  return (
    <div className="flex items-center justify-between bg-stone-50 border border-stone-200 rounded-xl p-3">
      <div>
        <p className="font-bold text-stone-900">
          {label}
          {sublabel && (
            <span className="text-xs font-normal text-stone-500">
              {" "}
              {sublabel}
            </span>
          )}
        </p>
        {priceLabel && (
          <p className="text-xs text-stone-500">{priceLabel}</p>
        )}
      </div>
      <div className="flex items-center space-x-4 bg-white p-1 rounded-lg border border-stone-200 shadow-sm">
        <button
          type="button"
          onClick={onDecrease}
          className="w-8 h-8 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="font-bold w-4 text-center">{value}</span>
        <button
          type="button"
          onClick={onIncrease}
          className="w-8 h-8 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded"
          aria-label={`Increase ${label}`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
