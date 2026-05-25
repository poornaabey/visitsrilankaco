"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";
import { DEFAULT_IMAGE_FALLBACK } from "@/lib/images";
import { cn } from "@/lib/cn";

export type RemoteImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

/**
 * Next/Image wrapper that swaps to a fallback URL when the primary source fails.
 */
export function RemoteImage({
  src,
  alt,
  fallbackSrc = DEFAULT_IMAGE_FALLBACK,
  className,
  onError,
  ...props
}: RemoteImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setUsingFallback(false);
  }, [src]);

  const handleError: ImageProps["onError"] = (event) => {
    if (!usingFallback && currentSrc !== fallbackSrc) {
      setUsingFallback(true);
      setCurrentSrc(fallbackSrc);
    }
    onError?.(event);
  };

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      className={cn("object-cover", className)}
      onError={handleError}
    />
  );
}
