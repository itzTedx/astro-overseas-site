import { useMemo } from "react";

import { IconCircleCheck } from "@tabler/icons-react";

import {
  DashedLine,
  DashedLineLeft,
  DashedLineRight,
} from "@/assets/dashed-lines";
import { IconMetalLogo } from "@/assets/logo";

import { PrimaryButton } from "../custom/primary-button";

const KEY_VALUES = [
  "Expert Guidance",
  "Fast & Reliable Processing",
  "Trusted Global Network",
] as const;

export const Cta = () => {
  const keyValuesList = useMemo(
    () =>
      KEY_VALUES.map((v) => (
        <li
          key={v}
          className="flex items-center gap-2 text-nowrap rounded-lg border border-blue-50/20 bg-blue-50/10 px-2.5 py-1.5"
          role="listitem"
        >
          <IconCircleCheck className="size-4" aria-hidden="true" />
          {v}
        </li>
      )),
    []
  );

  return (
    <section
      className="container relative flex max-w-6xl items-center justify-center gap-24 rounded-3xl bg-blue-700 px-6 py-12 text-white max-md:flex-col max-md:overflow-x-clip max-md:rounded-b-none md:mb-24 md:px-24"
      aria-label="Call to Action"
    >
      <IconMetalLogo
        className="absolute z-10 max-md:top-0 max-md:-translate-y-1/2 md:left-0 md:-translate-x-1/2"
        aria-hidden="true"
      />
      <DashedLineLeft
        className="absolute left-9 z-0 hidden translate-y-1.5 md:block"
        aria-hidden="true"
      />

      <div className="col-span-2">
        <div className="space-y-1.5">
          <h2 className="text-5xl font-medium leading-none">
            Explore Your Path to Dream
          </h2>
          <p className="max-w-[56ch] text-lg font-light">
            Discover hassle-free visa solutions tailored to your needs. Whether
            you&apos;re seeking a work permit, residency, or study visa, Astro
            Overseas is here to guide you every step of the way.
          </p>
        </div>
        <ul className="mt-12 flex flex-wrap gap-6" role="list">
          {keyValuesList}
        </ul>
      </div>

      <div className="relative">
        <DashedLineRight
          className="absolute -top-1/2 right-1/2 z-10 shrink-0 -translate-y-1.5"
          aria-hidden="true"
        />
        <PrimaryButton inverse>Get started today</PrimaryButton>
        <p className="mt-1 text-center text-xs text-blue-300">
          Learn More About Our Visa Services
        </p>
        <DashedLine
          className="absolute right-0 top-1/2 -translate-y-2.5 translate-x-full"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
