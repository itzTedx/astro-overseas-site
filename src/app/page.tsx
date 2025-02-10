import { Countries } from "@/features/home/sections/countries";
import { Features } from "@/features/home/sections/features";
import { Hero } from "@/features/home/sections/hero";
import { Services } from "@/features/home/sections/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Countries />
    </main>
  );
}
