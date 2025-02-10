import { DashedLogo } from "@/assets/dashed-logo";
import { FlagHungary } from "@/assets/flags";

export const Countries = () => {
  return (
    <section className="bg-split-white-blue">
      <div className="container rounded-2xl bg-blue-50 p-14">
        <h3 className="text-3xl font-medium">
          Unlock Global Opportunities with Astro Overseas
        </h3>
        <p>
          Find job opportunities in top European countries with Astro Overseas.
          Connect with trusted employers and take the next step in your
          international career.
        </p>
        <div>
          <FlagHungary />
          <DashedLogo />
        </div>
      </div>
    </section>
  );
};
