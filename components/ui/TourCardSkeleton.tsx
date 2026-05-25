import { cn } from "@/lib/cn";

export function TourCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-stone-100 bg-stone-50 overflow-hidden animate-pulse",
        className,
      )}
      aria-hidden
    >
      <div className="h-64 bg-stone-200" />
      <div className="p-6 space-y-4">
        <div className="flex justify-between">
          <div className="h-3 w-20 rounded bg-stone-200" />
          <div className="h-3 w-12 rounded bg-stone-200" />
        </div>
        <div className="h-6 w-4/5 rounded bg-stone-200" />
        <div className="h-6 w-3/5 rounded bg-stone-200" />
        <div className="pt-6 border-t border-stone-200 flex justify-between items-center">
          <div className="space-y-2">
            <div className="h-3 w-10 rounded bg-stone-200" />
            <div className="h-7 w-24 rounded bg-stone-200" />
          </div>
          <div className="h-10 w-24 rounded-xl bg-stone-200" />
        </div>
      </div>
    </div>
  );
}

export function TourCardSkeletonGrid({ count = 3 }: { count?: number }) {
  return (
    <div
      className="grid md:grid-cols-3 gap-8"
      role="status"
      aria-label="Loading tours"
    >
      {Array.from({ length: count }).map((_, i) => (
        <TourCardSkeleton key={i} />
      ))}
      <span className="sr-only">Loading trending experiences…</span>
    </div>
  );
}
