"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: ReactNode;
  children: ReactNode;
}

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-2xl p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 bg-stone-100 rounded-full p-2"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">
          {title}
        </h2>
        {description && (
          <div className="text-stone-600 mb-8">{description}</div>
        )}
        {children}
      </div>
    </div>
  );
}
