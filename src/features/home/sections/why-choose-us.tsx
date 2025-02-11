import Image from "next/image";

import { IconRocket } from "@/assets/icons";

import TimedAccordion from "../components/timed-accordion";

export const WhyChooseUs = () => {
  return (
    <section
      className="container grid gap-6 rounded-2xl md:grid-cols-2 md:p-16 md:shadow-blue-glow"
      aria-label="Why Choose Astro Overseas"
    >
      <div>
        <h2 className="text-balance text-xl font-semibold md:text-3xl">
          Why Choose Astro Overseas? - Your Gateway to Global Opportunities
        </h2>
        <div className="pt-6 md:pt-8">
          <TimedAccordion />
        </div>
      </div>
      <article className="relative flex h-96 items-end justify-center overflow-hidden rounded-2xl p-6 md:h-[48rem] md:p-12">
        <div className="relative z-10 max-w-sm space-y-1 rounded-xl bg-white px-3 py-2 shadow-xl md:space-y-2 md:px-6 md:py-4">
          <header className="flex items-center">
            <IconRocket aria-hidden="true" className="max-md:size-8" />
            <h3 className="ml-2 font-semibold md:ml-3">
              Expertise That Opens Doors
            </h3>
          </header>
          <p className="text-xs font-light md:text-sm">
            With years of experience in visa and immigration services, we
            simplify your journey to working, studying, or settling abroad.
          </p>
        </div>
        <Image
          src="/images/expertise.jpg"
          fill
          alt="Professional immigration consultants working with clients"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </article>
    </section>
  );
};
