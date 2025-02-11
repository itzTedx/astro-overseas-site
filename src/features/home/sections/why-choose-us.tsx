import Image from "next/image";

import { IconRocket } from "@/assets/icons";

import TimedAccordion from "../components/timed-accordion";

export const WhyChooseUs = () => {
  return (
    <section
      className="container grid grid-cols-2 gap-6 rounded-2xl p-16 shadow-blue-glow"
      aria-label="Why Choose Astro Overseas"
    >
      <div>
        <h2 className="text-balance text-3xl font-semibold">
          Why Choose Astro Overseas? - Your Gateway to Global Opportunities
        </h2>
        <div className="pt-8">
          <TimedAccordion />
        </div>
      </div>
      <article className="relative flex h-[48rem] items-end justify-center overflow-hidden rounded-2xl p-12">
        <div className="relative z-10 max-w-sm space-y-2 rounded-xl bg-white px-6 py-4 shadow-xl">
          <header className="flex items-center">
            <IconRocket aria-hidden="true" />
            <h3 className="ml-3 font-semibold">Expertise That Opens Doors</h3>
          </header>
          <p className="text-sm">
            With years of experience in visa and immigration services, we
            simplify your journey to working, studying, or settling abroad.
          </p>
        </div>
        <Image
          src="/images/expertise.jpg"
          fill
          alt="Professional immigration consultants working with clients"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 70vw"
        />
      </article>
    </section>
  );
};
