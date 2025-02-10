import AvatarGroup from "@/components/custom/avatar-group";
import { NumberCounter } from "@/components/custom/number-counter";

import { ReviewStar } from "../components/review-star";
import { FEATURES, MAIN_FEATURES } from "../constant";

export const Features = () => {
  return (
    <section id="features" className="bg-blue-50 py-24">
      <div className="container space-y-4 text-center">
        <h2 className="text-4xl font-medium">
          Seamless <span className="text-blue-700">Visa Solutions</span> Backed
          by Expertise
        </h2>
        <p className="text-neutral-600">
          Smooth, stress-free visa processing with expert guidance and
          personalized
          <br /> support. Your journey to Europe starts here.
        </p>
      </div>
      <div className="container grid grid-cols-3 gap-10 pt-24">
        <div className="shadow-blue-glow flex flex-col items-center gap-12 rounded-xl border border-blue-700 bg-white px-8 py-10 text-center">
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
          <AvatarGroup />
          <ReviewStar />
        </div>
        <div className="col-span-2 flex flex-col justify-between">
          <ul className="grid grid-cols-2">
            {MAIN_FEATURES.map(({ title, description, Icon }) => (
              <li key={title} className="space-y-3 p-4">
                <Icon />
                <h4 className="text-xl font-semibold">{title}</h4>
                <p className="text-lg">{description}</p>
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-3 gap-4 px-4">
            {FEATURES.map((feat) => (
              <li key={feat.title}>
                <h5 className="font-semibold">{feat.title}</h5>
                <p className="text-sm">{feat.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
