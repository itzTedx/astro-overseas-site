import dynamic from "next/dynamic";
import { Suspense } from "react";

import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Features } from "@/features/home/sections/features";
import { Hero } from "@/features/home/sections/hero";

// Dynamically import less critical components
const Services = dynamic(
  () => import("@/features/home/sections/services").then((mod) => mod.Services),
  {
    loading: () => <LoadingSpinner />,
  }
);
const Countries = dynamic(
  () =>
    import("@/features/home/sections/countries").then((mod) => mod.Countries),
  {
    loading: () => <LoadingSpinner />,
  }
);
const Counter = dynamic(
  () => import("@/features/home/sections/counter").then((mod) => mod.Counter),
  {
    loading: () => <LoadingSpinner />,
  }
);
const WhyChooseUs = dynamic(
  () =>
    import("@/features/home/sections/why-choose-us").then(
      (mod) => mod.WhyChooseUs
    ),
  {
    loading: () => <LoadingSpinner />,
  }
);
const Feedbacks = dynamic(
  () =>
    import("@/features/home/sections/feedbacks").then((mod) => mod.Feedbacks),
  {
    loading: () => <LoadingSpinner />,
  }
);
const Faqs = dynamic(
  () => import("@/features/home/sections/faq").then((mod) => mod.Faqs),
  {
    loading: () => <LoadingSpinner />,
  }
);
const Cta = dynamic(
  () => import("@/components/global/cta").then((mod) => mod.Cta),
  {
    loading: () => <LoadingSpinner />,
  }
);

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />

      <Suspense fallback={<LoadingSpinner />}>
        <Services />
        <Countries />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Counter />
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Feedbacks />
        <Faqs />
        <Cta />
      </Suspense>
    </main>
  );
}
