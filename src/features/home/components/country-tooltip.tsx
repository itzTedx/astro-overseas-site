import { memo } from "react";

import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CountryTooltipProps {
  name: string;
  Flag: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

export const commonPositions = [
  "General worker",
  "Heavy Duty Driver",
  "Fabrication & Fitters",
  "Welders",
  "Industrial Electricians",
  "Taxi Driver",
  "Light Duty Driver",
] as const;

export const CountryTooltip = memo(function CountryTooltip({
  name,
  Flag,
  className,
}: CountryTooltipProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={className}
            aria-label={`View ${name} opportunities`}
          >
            <Flag />
          </button>
        </TooltipTrigger>
        <TooltipContent className="space-y-3 p-6">
          <div className="flex items-center gap-3">
            <Flag className="h-12 w-auto rounded-md border" />
            <div>
              <p className="text-xs tracking-tighter text-neutral-500">
                Visa & Immigration Services
              </p>
              <h4 className="font-semibold">{name}</h4>
            </div>
          </div>
          <Separator />
          <div>
            <h5 className="text-xs text-neutral-400">Positions Available</h5>
            <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
              {commonPositions.map((position) => (
                <li key={position}>{position}</li>
              ))}
            </ul>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});
