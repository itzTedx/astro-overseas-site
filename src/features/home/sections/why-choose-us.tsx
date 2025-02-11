import Image from "next/image";

import { IconRocket } from "@/assets/icons";

import TimedAccordion from "../components/timed-accordion";

export const WhyChooseUs = () => {
  return (
    <section className="container grid grid-cols-2 gap-6 rounded-2xl p-16 shadow-blue-glow">
      <div>
        <h3 className="text-balance text-3xl font-semibold">
          Why Choose Astro Overseas? - Your Gateway to Global Opportunities
        </h3>
        <div className="pt-8">
          <TimedAccordion />
        </div>
      </div>
      <div className="relative flex h-[48rem] items-end justify-center overflow-hidden rounded-2xl p-12">
        <div className="relative z-10 max-w-sm space-y-2 rounded-xl bg-white px-6 py-4 shadow-xl">
          <div className="flex items-center">
            <IconRocket />
            <h5 className="ml-3 font-semibold">Expertise That Opens Doors</h5>
          </div>
          <p className="text-sm">
            With years of experience in visa and immigration services, we
            simplify your journey to working, studying, or settling abroad.
          </p>
        </div>
        <Image
          src="/images/expertise.jpg"
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};
