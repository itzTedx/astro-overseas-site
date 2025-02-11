import Image from "next/image";

import { LogoIcon } from "@/assets/logo";

export const Feedbacks = () => {
  return (
    <section className="container grid grid-cols-3 gap-6 py-24">
      <div className="relative">
        <div className="absolute right-0 top-[10%] z-10 flex size-16 translate-x-1/2 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-xl">
          <LogoIcon />
        </div>
        <Image
          src="/images/feedback.jpg"
          fill
          alt=""
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="container col-span-2 max-w-3xl space-y-12 py-12">
        <div>
          <h3 className="text-3xl font-medium">
            See What Our Happy Clients Say
          </h3>
          <p className="pt-3">
            Discover how Astro Overseas has helped professionals secure work
            permits and visas with ease. Our clients trust us for a smooth,
            hassle-free immigration experience—hear their success stories!
          </p>
        </div>

        <div itemScope itemType="https://schema.org/Review">
          <blockquote
            itemProp="reviewBody"
            className="pb-9 text-3xl font-medium leading-relaxed"
          >
            “Astro Overseas made my visa process stress-free and
            straightforward. Their expert guidance helped me secure my European
            work permit faster than I expected!”
          </blockquote>
          <p className="border-l-4 border-blue-700 pl-2">
            <strong itemProp="author" className="block">
              Ahmed R,
            </strong>

            <span itemProp="jobTitle" className="text-sm font-light">
              Happy Client
            </span>
          </p>
          <meta itemProp="datePublished" content="2025-02-10" />
        </div>
        <div className="h-1"></div>
      </div>
    </section>
  );
};
