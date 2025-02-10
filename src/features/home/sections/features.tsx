import AvatarGroup from "@/components/custom/avatar-group";
import { NumberCounter } from "@/components/custom/number-counter";

import { ReviewStar } from "../components/review-star";

export const Features = () => {
  return (
    <div className="bg-blue-50 py-24">
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
      <div className="container grid grid-cols-3">
        <div className="flex flex-col items-center gap-10 rounded-xl border border-blue-700 bg-white px-8 py-10 text-center">
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
      </div>
    </div>
  );
};
