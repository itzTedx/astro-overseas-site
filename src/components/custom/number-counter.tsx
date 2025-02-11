"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import NumberFlow from "@number-flow/react";
import { useInView } from "motion/react";

import { cn } from "@/lib/utils";

type NumberProps = number | `${number}`;

export const NumberCounter = memo(function NumberCounter({
  className,
  suffix,
  children,
  delayInMs = 100,
}: {
  className?: string;
  suffix?: string;
  children: NumberProps;
  delayInMs?: number;
}) {
  const [number, setNumber] = useState<NumberProps>(0);
  const ref = useRef(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });

  const updateNumber = useCallback(() => {
    setNumber(children);
  }, [children]);

  const spinTiming = useMemo(
    () => ({ duration: 1200, easing: "ease-in-out" }),
    []
  );

  useEffect(() => {
    if (isInView) {
      timeoutRef.current = setTimeout(updateNumber, delayInMs);
    } else {
      setNumber(0);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isInView, delayInMs, updateNumber]);

  return (
    <NumberFlow
      ref={ref}
      suffix={suffix}
      value={Number(number)}
      spinTiming={spinTiming}
      className={cn(className)}
    />
  );
});
