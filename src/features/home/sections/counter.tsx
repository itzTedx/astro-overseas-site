import { NumberCounter } from "@/components/custom/number-counter";
import { Separator } from "@/components/ui/separator";

export const Counter = () => {
  return (
    <section className="container max-w-6xl py-24 text-center">
      <h3 className="text-3xl font-medium">
        Astro overseas has assisted over 4,600+ clients in securing permits
      </h3>
      <div className="flex items-center justify-between pt-9 font-sofia-condensed text-blue-700">
        <div className="">
          <NumberCounter suffix="+" className="text-6xl">
            {79000}
          </NumberCounter>
          <p className="uppercase">Trusted Clients</p>
        </div>
        <Separator className="h-16 bg-blue-700" orientation="vertical" />
        <div className="">
          <NumberCounter suffix="+" className="text-6xl">
            {50}
          </NumberCounter>
          <p className="uppercase">Countries</p>
        </div>
        <Separator className="h-16 bg-blue-700" orientation="vertical" />
        <div className="">
          <NumberCounter suffix="+" className="text-6xl">
            {200}
          </NumberCounter>
          <p className="uppercase">Agents</p>
        </div>
        <Separator className="h-16 bg-blue-700" orientation="vertical" />
        <div className="">
          <NumberCounter suffix="+" className="text-6xl">
            {2000}
          </NumberCounter>
          <p className="uppercase">Experts</p>
        </div>
      </div>
    </section>
  );
};
