"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { SERVICES } from "../constant";

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
              <p className="text-neutral-600">{activeItem.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
