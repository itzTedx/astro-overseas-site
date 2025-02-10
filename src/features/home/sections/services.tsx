"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { IconCircleCheck } from "@tabler/icons-react";

import { PrimaryButton } from "@/components/custom/primary-button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { SERVICES, SERVICES_FEATURE } from "../constant";

export const Services = () => {
  const [active, setActive] = useState(1);

  function handleOnClick(index: number) {
    setActive(index);
  }

  console.log(active);

  const activeItem = SERVICES.find((s) => s.id === active) || SERVICES[0];
  return (
    <section id="services" className="bg-[#040E30] py-24">
      <div className="container grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col justify-between gap-6 rounded-3xl bg-white p-14">
          <h3 className="text-[3.25rem] font-semibold leading-tight">
            Find the Perfect Visa Solution for Your Travel, Work, or Business
            Needs
          </h3>
          <ul className="flex flex-wrap gap-4">
            {SERVICES.map((s) => (
              <li
                key={s.title}
                className={cn(
                  "cursor-pointer rounded-full px-7 py-4 text-2xl font-medium text-background transition-colors",
                  active === s.id ? "bg-blue-700" : "bg-foreground"
                )}
                onClick={() => handleOnClick(s.id)}
              >
                {s.title}
              </li>
            ))}
          </ul>
        </div>
        {activeItem && (
          <div className="overflow-hidden rounded-3xl bg-white">
            <div className="relative h-[25rem] w-full">
              <Image
                src={activeItem.image}
                fill
                alt=""
                className="object-cover"
              />
            </div>
            <div className="relative z-10 space-y-3 bg-white p-6">
              <h4 className="text-2xl font-semibold text-blue-700">
                {activeItem.title}
              </h4>
              <p className="text-sm text-neutral-600">
                {activeItem.description}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="container grid grid-cols-2 items-center justify-center gap-16 py-24 text-white">
        <div className="space-y-6">
          <h3 className="text-6xl font-semibold leading-tight">
            We help Making your dream into Reality
          </h3>
          <div className="space-y-3 text-2xl font-light leading-relaxed">
            <p>
              Astro Overseas is a leading immigration consultancy in Dubai,
              specializing in European work permits and visas.
            </p>
            <p>
              With a trusted global network, we help professionals like truck
              drivers, welders, and general workers secure jobs and residency in
              Europe through a hassle-free visa process.
            </p>
          </div>
          <Link href="#" className="block text-blue-200 hover:underline">
            Learn more about our Visa Services
          </Link>
        </div>
        <div className="space-y-12">
          <ul className="flex flex-wrap gap-6">
            {SERVICES_FEATURE.map((s) => (
              <li
                key={s}
                className="flex items-center gap-2 rounded-full border border-blue-50/10 bg-blue-50/10 px-5 py-4 text-xl"
              >
                <IconCircleCheck />
                {s}
              </li>
            ))}
          </ul>
          <Separator className="bg-blue-50/30" />
          <div className="grid grid-cols-2 items-center gap-6">
            <h4 className="text-balance text-2xl font-semibold leading-relaxed">
              Get Your Own Visa Within 30 Days
            </h4>
            <PrimaryButton className="ml-auto w-fit">Contact Now</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};
