import { Fragment, memo } from "react";

import { NumberCounter } from "@/components/custom/number-counter";
import { Separator } from "@/components/ui/separator";

const COUNTER_DATA = [
  { value: 79000, label: "Trusted Clients" },
  { value: 50, label: "Countries" },
  { value: 200, label: "Agents" },
  { value: 2000, label: "Experts" },
] as const;

export const Counter = memo(() => {
  return (
    <section className="container max-w-6xl py-24 text-center">
      <h3 className="text-3xl font-medium">
        Astro overseas has assisted over 4,600+ clients in securing permits
      </h3>
      <div className="flex items-center justify-between gap-4 pt-9 font-sofia-condensed text-blue-700">
        {COUNTER_DATA.map(({ value, label }, i) => (
          <Fragment key={label}>
            <div>
              <NumberCounter suffix="+" className="text-6xl">
                {value}
              </NumberCounter>
              <p className="uppercase">{label}</p>
            </div>

            {i < COUNTER_DATA.length - 1 && (
              <Separator className="h-16 bg-blue-700" orientation="vertical" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
});

Counter.displayName = "Counter";
