import Image from "next/image";

import { PrimaryButton } from "@/components/custom/primary-button";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { InfiniteSlider } from "../components/infinite-slider";
import { HOME_SLIDER } from "../constant";

export const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <header className="container flex flex-col items-center space-y-4 py-12 text-center">
        <h1
          className="text-6xl font-medium leading-tight tracking-tighter"
          itemProp="slogan"
        >
          <span className="block">Turn Your Canada and Europe Dream</span>
          <span className="block">into a Life-Changing Opportunity</span>
        </h1>
        <p
          className="max-w-3xl text-xl text-neutral-600"
          itemProp="description"
        >
          Seamless visa and immigration solutions to work and thrive in Europe.
          From applications to approvals, we handle it all—so you can focus on
          your future.
        </p>
        <div
          className="flex gap-4 pt-10"
          itemScope
          itemType="https://schema.org/Service"
        >
          <div className="flex flex-col gap-1 text-center">
            <PrimaryButton
              id="get-started-btn"
              className="w-fit"
              aria-label="Get started with visa application"
              itemProp="mainEntityOfPage"
            >
              Get started today
            </PrimaryButton>
            <Label
              htmlFor="get-started-btn"
              className="text-xs font-normal text-neutral-500"
              itemProp="offers"
            >
              Begin your visa journey with ease.
            </Label>
          </div>
          <Button
            variant="outline"
            size="lg"
            aria-label="Contact our support team"
            itemProp="contactPoint"
          >
            Contact us now
          </Button>
        </div>
      </header>

      <div
        className="bg-gradient-to-t from-blue-50 to-transparent py-12"
        itemScope
        itemType="https://schema.org/ImageGallery"
      >
        <InfiniteSlider
          durationOnHover={100}
          gap={36}
          duration={35}
          aria-label="Featured destinations"
        >
          {HOME_SLIDER.map((img) => (
            <div
              key={img.img}
              className="relative flex aspect-[3/4] w-[20rem] items-end justify-center p-6"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <h2
                className="relative z-10 text-nowrap rounded-md bg-white px-3 py-1 font-sofia-condensed uppercase text-blue-700"
                itemProp="name"
              >
                {img.title}
              </h2>
              <Image
                src={img.img}
                fill
                alt={`Featured destination: ${img.title}`}
                className="rounded-2xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                itemProp="contentUrl"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};
