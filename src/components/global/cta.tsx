import { JSX, SVGProps } from "react";

import { IconCircleCheck } from "@tabler/icons-react";

import { IconMetalLogo } from "@/assets/logo";

import { PrimaryButton } from "../custom/primary-button";

const KEY_VALUES = [
  "Expert Guidance",
  "Fast & Reliable Processing",
  "Trusted Global Network",
];

export const Cta = () => {
  return (
    <section className="container relative mb-24 flex max-w-6xl items-center justify-center gap-24 rounded-3xl bg-blue-700 px-24 py-12 text-white">
      <IconMetalLogo className="absolute left-0 z-10 -translate-x-1/2" />
      <DashedLineLeft className="absolute left-9 z-0 translate-y-1.5" />
      <div className="col-span-2">
        <div className="space-y-1.5">
          <h5 className="text-5xl font-medium leading-none">
            Explore Your Path to Dream
          </h5>
          <p className="max-w-[56ch] text-lg font-light">
            Discover hassle-free visa solutions tailored to your needs. Whether
            you&apos;re seeking a work permit, residency, or study visa, Astro
            Overseas is here to guide you every step of the way.
          </p>
        </div>
        <ul className="mt-12 flex gap-6">
          {KEY_VALUES.map((v) => (
            <li
              key={v}
              className="flex items-center gap-2 text-nowrap rounded-lg border border-blue-50/20 bg-blue-50/10 px-2.5 py-1.5"
            >
              <IconCircleCheck className="size-4" />
              {v}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <DashedLineRight className="absolute -top-1/2 right-1/2 -translate-y-1.5" />
        <PrimaryButton inverse>Get started today</PrimaryButton>
        <p className="mt-1 text-center text-xs text-blue-300">
          Learn More About Our Visa Services
        </p>
        <DashedLine className="absolute right-0 top-1/2 -translate-y-2.5 translate-x-full" />
      </div>
    </section>
  );
};

const DashedLineLeft = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      width="41"
      height="175"
      viewBox="0 0 41 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 66.5H5.5C12.1274 66.5 17.5 61.1274 17.5 54.5V13C17.5 6.37258 22.8726 1 29.5 1H40"
        stroke="url(#paint0_linear_3_4)"
        strokeDasharray="6 6"
      />
      <path
        d="M0.5 81H5.71519C12.3426 81 17.7152 86.3726 17.7152 93V162C17.7152 168.627 23.0878 174 29.7152 174H40.5"
        stroke="url(#paint1_linear_3_4)"
        strokeDasharray="6 6"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3_4"
          x1="44"
          y1="67"
          x2="-0.5"
          y2="67"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BFDBFE" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3_4"
          x1="0.5"
          y1="81"
          x2="45"
          y2="81"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1D4ED8" />
          <stop offset="1" stopColor="#BFDBFE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const DashedLineRight = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      width="228"
      height="48"
      viewBox="0 0 228 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="220.5"
        cy="41"
        r="6"
        fill="#BFDBFE"
        stroke="#1D4ED8"
        strokeWidth="2"
      />
      <path
        d="M220.5 40.5003V13C220.5 6.37258 215.127 1 208.5 1H0.5"
        stroke="url(#paint0_linear_3_4)"
        strokeDasharray="4 4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3_4"
          x1="0.5"
          y1="1"
          x2="220.5"
          y2="0.999998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1D4ED8" />
          <stop offset="1" stopColor="#BFDBFE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const DashedLine = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      width="80"
      height="2"
      viewBox="0 0 80 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 1L79.5 1.00001"
        stroke="url(#paint0_linear_57_230)"
        strokeDasharray="4 4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_57_230"
          x1="0.5"
          y1="1.5"
          x2="79.5"
          y2="1.50001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BFDBFE" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
    </svg>
  );
};
