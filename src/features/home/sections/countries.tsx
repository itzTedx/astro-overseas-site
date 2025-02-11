import { memo } from "react";

import { DashedLogo } from "@/assets/dashed-logo";
import * as Flags from "@/assets/flags";

import { CountryTooltip } from "../components/country-tooltip";

export const Countries = memo(function Countries() {
  return (
    <section className="bg-split-white-blue" aria-labelledby="countries-title">
      <div className="container rounded-2xl bg-blue-100 p-6 md:p-14">
        <h2 id="countries-title" className="text-2xl font-medium md:text-4xl">
          Unlock Global Opportunities with Astro Overseas
        </h2>
        <p className="text-balance pt-3 md:text-xl">
          Find job opportunities in top European countries with Astro Overseas.
          Connect with trusted employers and take the next step in your
          international career.
        </p>

        <div className="pt-16 md:hidden">
          <div className="flex flex-wrap items-center justify-center gap-3 px-9">
            <Flags.FlagHungary className="h-auto w-20" />
            <Flags.FlagLuxembourg className="h-auto w-20" />
            <Flags.FlagNorway className="h-auto w-20" />
            <Flags.FlagFinland className="h-auto w-20" />
            <Flags.FlagLatvia className="h-auto w-20" />
            <Flags.FlagSweden className="h-auto w-20" />
          </div>

          <div className="mx-auto w-fit pt-4">
            <DashedLogo className="h-12 w-auto" />
          </div>
          <div className="flex flex-col items-center -space-y-1.5 pt-6">
            <p className="font-sofia-condensed text-xl italic text-blue-700">
              Your Trusted Place
            </p>
            <svg
              width="115"
              height="11"
              viewBox="0 0 115 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0.5 10C7.72 5.56281 40.628 -2.17057 114.5 2.3934"
                stroke="#1D4ED8"
              />
            </svg>
          </div>
        </div>

        <div className="container hidden max-w-3xl pt-16 md:block">
          <div className="container mx-auto flex max-w-2xl justify-between px-9">
            <CountryTooltip name="Hungary" Flag={Flags.FlagHungary} />
            <CountryTooltip name="Luxembourg" Flag={Flags.FlagLuxembourg} />
          </div>

          <div className="inline-flex w-full justify-between py-12">
            <CountryTooltip name="Norway" Flag={Flags.FlagNorway} />
            <CountryTooltip
              name="Finland"
              Flag={Flags.FlagFinland}
              className="-translate-y-9"
            />
            <CountryTooltip name="Latvia" Flag={Flags.FlagLatvia} />
          </div>

          <div className="container mx-auto flex max-w-xl justify-between">
            <CountryTooltip name="Sweden" Flag={Flags.FlagSweden} />
            <CountryTooltip name="Lithuania" Flag={Flags.FlagLithuania} />
          </div>

          <div className="mx-auto w-fit pt-4">
            <DashedLogo />
          </div>
          <div className="flex flex-col items-center -space-y-1.5 pt-6">
            <p className="font-sofia-condensed text-xl italic text-blue-700">
              Your Trusted Place
            </p>
            <svg
              width="115"
              height="11"
              viewBox="0 0 115 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0.5 10C7.72 5.56281 40.628 -2.17057 114.5 2.3934"
                stroke="#1D4ED8"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
});
