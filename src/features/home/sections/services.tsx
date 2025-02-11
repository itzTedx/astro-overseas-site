"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";

import { IconCircleCheck } from "@tabler/icons-react";

import { PrimaryButton } from "@/components/custom/primary-button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { SERVICES, SERVICES_FEATURE } from "../constant";

const ServiceFeature = memo(({ feature }: { feature: string }) => (
  <li className="flex items-center gap-2 rounded-full border border-blue-50/10 bg-blue-50/10 px-5 py-4 text-xl">
    <IconCircleCheck aria-hidden="true" />
    {feature}
  </li>
));
ServiceFeature.displayName = "ServiceFeature";

const ServiceCard = memo(
  ({
    service,
    isActive,
    onClick,
  }: {
    service: (typeof SERVICES)[0];
    isActive: boolean;
    onClick: () => void;
  }) => (
    <li
      role="tab"
      aria-selected={isActive}
      tabIndex={0}
      className={cn(
        "cursor-pointer rounded-full px-7 py-4 text-2xl font-medium text-background transition-colors",
        isActive ? "bg-blue-700" : "bg-foreground"
      )}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {service.title}
    </li>
  )
);
ServiceCard.displayName = "ServiceCard";

export const Services = () => {
  const [active, setActive] = useState(1);
  const activeItem = SERVICES.find((s) => s.id === active) || SERVICES[0];

  return (
    <section
      id="services"
      className="bg-[#040E30] py-24"
      aria-label="Our Services"
    >
      <div className="container grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col justify-between gap-6 rounded-3xl bg-white p-14">
          <h2 className="text-[3.25rem] font-semibold leading-tight">
            Find the Perfect Visa Solution for Your Travel, Work, or Business
            Needs
          </h2>
          <ul role="tablist" className="flex flex-wrap gap-4">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.id}
                service={s}
                isActive={active === s.id}
                onClick={() => setActive(s.id)}
              />
            ))}
          </ul>
        </div>
        {activeItem && (
          <div className="overflow-hidden rounded-3xl bg-white">
            <div className="relative h-[25rem] w-full">
              <Image
                src={activeItem.image}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={active === 1}
                alt={`${activeItem.title} service illustration`}
                className="object-cover"
              />
            </div>
            <div className="relative z-10 space-y-3 bg-white p-6">
              <h3 className="text-2xl font-semibold text-blue-700">
                {activeItem.title}
              </h3>
              <p className="text-sm text-neutral-600">
                {activeItem.description}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="container grid grid-cols-2 items-center justify-center gap-16 pt-24 text-white">
        <div className="space-y-6">
          <h2 className="text-6xl font-semibold leading-tight">
            We help Making your dream into Reality
          </h2>
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
          <Link
            href="/"
            className="block text-blue-200 hover:underline"
            aria-label="Learn more about our visa services"
          >
            Learn more about our Visa Services
          </Link>
        </div>
        <div className="space-y-12">
          <ul className="flex flex-wrap gap-6">
            {SERVICES_FEATURE.map((feature) => (
              <ServiceFeature key={feature} feature={feature} />
            ))}
          </ul>
          <Separator className="bg-blue-50/30" />
          <div className="grid grid-cols-2 items-center gap-6">
            <h3 className="text-balance text-2xl font-semibold leading-relaxed">
              Get Your Own Visa Within 30 Days
            </h3>
            <PrimaryButton className="ml-auto w-fit">Contact Now</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};
