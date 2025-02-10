import { DashedLogo } from "@/assets/dashed-logo";
import {
  FlagFinland,
  FlagHungary,
  FlagLatvia,
  FlagLithuania,
  FlagLuxembourg,
  FlagNorway,
  FlagSweden,
} from "@/assets/flags";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Countries = () => {
  return (
    <section className="bg-split-white-blue">
      <div className="container rounded-2xl bg-blue-100 p-14">
        <h3 className="text-4xl font-medium">
          Unlock Global Opportunities with Astro Overseas
        </h3>
        <p className="text-balance pt-3 text-xl">
          Find job opportunities in top European countries with Astro Overseas.
          Connect with trusted employers and take the next step in your
          international career.
        </p>
        <div className="container max-w-3xl pt-16">
          <div className="container mx-auto flex max-w-2xl justify-between px-9">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <FlagHungary />
                </TooltipTrigger>
                <TooltipContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <FlagHungary className="h-12 w-auto rounded-md border" />
                    <div className="">
                      <p className="text-xs tracking-tighter text-neutral-500">
                        Visa & Immigration Services
                      </p>
                      <h4 className="font-semibold">Hungary</h4>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h5 className="text-xs text-neutral-400">
                      Positions Available
                    </h5>
                    <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
                      <li>General worker</li>
                      <li>Heavy Duty Driver</li>
                      <li>Fabrication & Fitters</li>
                      <li>Welders</li>
                      <li>Industrial Electricians</li>
                      <li>Taxi Driver</li>
                      <li>Light Duty Driver</li>
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <FlagLuxembourg />
                </TooltipTrigger>
                <TooltipContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <FlagLuxembourg className="h-12 w-auto rounded-md border" />
                    <div className="">
                      <p className="text-xs tracking-tighter text-neutral-500">
                        Visa & Immigration Services
                      </p>
                      <h4 className="font-semibold">Luxembourg</h4>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h5 className="text-xs text-neutral-400">
                      Positions Available
                    </h5>
                    <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
                      <li>General worker</li>
                      <li>Heavy Duty Driver</li>
                      <li>Fabrication & Fitters</li>
                      <li>Welders</li>
                      <li>Industrial Electricians</li>
                      <li>Taxi Driver</li>
                      <li>Light Duty Driver</li>
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="inline-flex w-full justify-between py-12">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <FlagNorway />
                </TooltipTrigger>
                <TooltipContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <FlagNorway className="h-12 w-auto rounded-md border" />
                    <div className="">
                      <p className="text-xs tracking-tighter text-neutral-500">
                        Visa & Immigration Services
                      </p>
                      <h4 className="font-semibold">Norway</h4>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h5 className="text-xs text-neutral-400">
                      Positions Available
                    </h5>
                    <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
                      <li>General worker</li>
                      <li>Heavy Duty Driver</li>
                      <li>Fabrication & Fitters</li>
                      <li>Welders</li>
                      <li>Industrial Electricians</li>
                      <li>Taxi Driver</li>
                      <li>Light Duty Driver</li>
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="-translate-y-9">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <FlagFinland />
                  </TooltipTrigger>
                  <TooltipContent className="space-y-3 p-6">
                    <div className="flex items-center gap-3">
                      <FlagFinland className="h-12 w-auto rounded-md border" />
                      <div className="">
                        <p className="text-xs tracking-tighter text-neutral-500">
                          Visa & Immigration Services
                        </p>
                        <h4 className="font-semibold">Finland</h4>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h5 className="text-xs text-neutral-400">
                        Positions Available
                      </h5>
                      <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
                        <li>General worker</li>
                        <li>Heavy Duty Driver</li>
                        <li>Fabrication & Fitters</li>
                        <li>Welders</li>
                        <li>Industrial Electricians</li>
                        <li>Taxi Driver</li>
                        <li>Light Duty Driver</li>
                      </ul>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <FlagLatvia />
                </TooltipTrigger>
                <TooltipContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <FlagLatvia className="h-12 w-auto rounded-md border" />
                    <div className="">
                      <p className="text-xs tracking-tighter text-neutral-500">
                        Visa & Immigration Services
                      </p>
                      <h4 className="font-semibold">Latvia</h4>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h5 className="text-xs text-neutral-400">
                      Positions Available
                    </h5>
                    <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
                      <li>General worker</li>
                      <li>Heavy Duty Driver</li>
                      <li>Fabrication & Fitters</li>
                      <li>Welders</li>
                      <li>Industrial Electricians</li>
                      <li>Taxi Driver</li>
                      <li>Light Duty Driver</li>
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="container mx-auto flex max-w-xl justify-between">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <FlagSweden />
                </TooltipTrigger>
                <TooltipContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <FlagSweden className="h-12 w-auto rounded-md border" />
                    <div className="">
                      <p className="text-xs tracking-tighter text-neutral-500">
                        Visa & Immigration Services
                      </p>
                      <h4 className="font-semibold">Sweden</h4>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h5 className="text-xs text-neutral-400">
                      Positions Available
                    </h5>
                    <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
                      <li>General worker</li>
                      <li>Heavy Duty Driver</li>
                      <li>Fabrication & Fitters</li>
                      <li>Welders</li>
                      <li>Industrial Electricians</li>
                      <li>Taxi Driver</li>
                      <li>Light Duty Driver</li>
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <FlagLithuania />
                </TooltipTrigger>
                <TooltipContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <FlagLithuania className="h-12 w-auto rounded-md border" />
                    <div className="">
                      <p className="text-xs tracking-tighter text-neutral-500">
                        Visa & Immigration Services
                      </p>
                      <h4 className="font-semibold">Lithuania</h4>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h5 className="text-xs text-neutral-400">
                      Positions Available
                    </h5>
                    <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
                      <li>General worker</li>
                      <li>Heavy Duty Driver</li>
                      <li>Fabrication & Fitters</li>
                      <li>Welders</li>
                      <li>Industrial Electricians</li>
                      <li>Taxi Driver</li>
                      <li>Light Duty Driver</li>
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
};
