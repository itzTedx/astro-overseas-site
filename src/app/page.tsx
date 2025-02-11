import { Counter } from "@/features/home/sections/counter";
import { Countries } from "@/features/home/sections/countries";
import { Faqs } from "@/features/home/sections/faq";
import { Features } from "@/features/home/sections/features";
import { Feedbacks } from "@/features/home/sections/feedbacks";
import { Hero } from "@/features/home/sections/hero";
import { Services } from "@/features/home/sections/services";
import { WhyChooseUs } from "@/features/home/sections/why-choose-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Countries />
      <Counter />
      <WhyChooseUs />
      <Feedbacks />
      <Faqs />
    </main>
  );
}
