import Image from "next/image";

import { PrimaryButton } from "@/components/custom/primary-button";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { InfiniteSlider } from "../components/infinite-slider";
import { HOME_SLIDER } from "../constant";

export const Hero = () => {
  return (
    <div>
      <header className="container flex flex-col items-center space-y-4 py-12 text-center">
        <h1 className="text-6xl font-medium leading-tight tracking-tighter">
          Turn Your Canada and Europe Dream <br /> into a Life-Changing
          Opportunity
        </h1>
        <p className="text-xl text-neutral-600">
          Seamless visa and immigration solutions to work and thrive in Europe.
          <br />
          From applications to approvals, we handle it all—so you can focus on
          your future.
        </p>
        <div className="flex gap-4 pt-10">
          <div className="flex flex-col gap-1 text-center">
            <PrimaryButton id="primary-button" className="w-fit">
              Get started today
            </PrimaryButton>
            <Label
              htmlFor="primary-button"
              className="text-xs font-normal text-neutral-500"
            >
              Begin your visa journey with ease.
            </Label>
          </div>
          <Button variant="outline" size="lg">
            Contact us now
          </Button>
        </div>
      </header>
      <InfiniteSlider
        durationOnHover={100}
        gap={36}
        duration={35}
        className="bg-gradient-to-t from-blue-50 to-transparent py-12"
      >
        {HOME_SLIDER.map((img) => (
          <div key={img.img} className="relative aspect-[3/4] w-[20rem]">
            <h2 className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-md bg-white px-3 py-1 text-foreground">
              {img.title}
            </h2>
            <Image
              src={img.img}
              fill
              alt=""
              className="rounded-2xl object-cover"
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
};
