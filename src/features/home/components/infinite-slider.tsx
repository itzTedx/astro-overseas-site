"use client";

import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { animate, motion, useMotionValue } from "motion/react";

import { cn } from "@/lib/utils";

import { useMeasure } from "../hooks/use-measure";

type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
  ariaLabel = "Image gallery marquee",
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(1);

  const contentSize = useMemo(() => {
    const size = direction === "horizontal" ? width : height;
    return (size ?? 0) + gap;
  }, [direction, width, height, gap]);

  const handleHoverStart = useCallback(() => {
    if (durationOnHover) {
      setIsTransitioning(true);
      setCurrentDuration(durationOnHover);
    }
  }, [durationOnHover]);

  const handleHoverEnd = useCallback(() => {
    if (durationOnHover) {
      setIsTransitioning(true);
      setCurrentDuration(duration);
    }
  }, [durationOnHover, duration]);

  useEffect(() => {
    if (!key) return;

    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const controls = isTransitioning
      ? animate(translation, [translation.get(), to], {
          ease: "linear",
          duration:
            currentDuration * Math.abs((translation.get() - to) / contentSize),
          onComplete: () => {
            setIsTransitioning(false);
            setKey((prevKey) => prevKey + 1);
          },
        })
      : animate(translation, [from, to], {
          ease: "linear",
          duration: currentDuration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          repeatDelay: 0,
          onRepeat: () => {
            translation.set(from);
          },
        });

    return controls.stop;
  }, [
    key,
    translation,
    currentDuration,
    contentSize,
    isTransitioning,
    reverse,
  ]);

  return (
    <div
      className={cn("overflow-hidden", className)}
      role="region"
      aria-label={ariaLabel}
      aria-live="polite"
    >
      <motion.div
        className="flex w-max items-center"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
          willChange: "transform",
        }}
        ref={ref}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        aria-hidden="true"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
