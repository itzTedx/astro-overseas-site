import type { FC } from "react";
import { memo } from "react";

import AvatarGroup from "@/components/custom/avatar-group";
import { NumberCounter } from "@/components/custom/number-counter";

import { ReviewStar } from "../components/review-star";
import { FEATURES, MAIN_FEATURES } from "../constant";

interface FeatureItemProps {
  title: string;
  description: string;
  Icon?: FC;
}

const MemoizedAvatarGroup = memo(AvatarGroup);
const MemoizedReviewStar = memo(ReviewStar);

const MainFeatureItem = memo(
  ({ title, description, Icon }: FeatureItemProps) => (
    <li className="space-y-3 p-4" role="listitem">
      {Icon && <Icon aria-hidden="true" />}
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-lg">{description}</p>
    </li>
  )
);

MainFeatureItem.displayName = "MainFeatureItem";

const FeatureItem = memo(({ title, description }: FeatureItemProps) => (
  <li role="listitem">
    <h5 className="font-semibold">{title}</h5>
    <p className="text-sm">{description}</p>
  </li>
));

FeatureItem.displayName = "FeatureItem";

export const Features: FC = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Visa Solutions Services",
    description:
      "Professional visa processing and immigration services with expert guidance",
    provider: {
      "@type": "Organization",
      name: "Astro Overseas",
    },
  };

  return (
    <section
      id="features"
      className="bg-blue-50 py-24"
      aria-label="Features and Benefits"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container space-y-4 text-center">
        <h2 className="text-4xl font-medium">
          <span className="sr-only">Our Features: </span>
          Seamless <span className="text-blue-700">Visa Solutions</span> Backed
          by Expertise
        </h2>
        <p className="text-neutral-600">
          Smooth, stress-free visa processing with expert guidance and
          personalized
          <br /> support. Your journey to Europe starts here.
        </p>
      </div>

      <div className="container grid grid-cols-1 gap-6 pt-24 md:grid-cols-3 lg:gap-10">
        <div className="flex flex-col items-center gap-8 rounded-xl border border-blue-700 bg-white px-6 py-8 text-center shadow-blue-glow lg:gap-12 lg:px-8 lg:py-10">
          <div className="space-y-2">
            <p className="font-sofia-condensed text-xl uppercase text-blue-700">
              Creating great opportunities
            </p>
            <h3 className="text-4xl">We help Making your dream into Reality</h3>
          </div>
          <div className="">
            <NumberCounter
              suffix="+"
              className="font-sofia-condensed text-6xl text-blue-700"
            >
              {4600}
            </NumberCounter>
            <p className="text-xs text-neutral-500">
              Clients in securing work permits
              <br /> and residency visas
            </p>
          </div>
          <MemoizedAvatarGroup />
          <MemoizedReviewStar />
        </div>

        <div className="col-span-1 flex flex-col justify-between gap-8 md:col-span-2">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
            {MAIN_FEATURES.map((feature) => (
              <MainFeatureItem key={feature.title} {...feature} />
            ))}
          </ul>

          <ul
            className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3"
            role="list"
          >
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

Features.displayName = "Features";

export default Features;
