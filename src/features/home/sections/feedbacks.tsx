import Image from "next/image";

import { LogoIcon } from "@/assets/logo";

export const Feedbacks = () => {
  return (
    <section
      className="container grid grid-cols-3 gap-6 py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="relative aspect-[3/4] h-full">
        <div className="absolute right-0 top-[10%] z-10 flex size-16 translate-x-1/2 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-xl">
          <LogoIcon aria-hidden="true" />
        </div>
        <Image
          src="/images/feedback.jpg"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          alt="Happy clients working with Astro Overseas"
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="container col-span-2 max-w-3xl space-y-12 py-12">
        <header>
          <h2 id="testimonials-heading" className="text-3xl font-medium">
            See What Our Happy Clients Say
          </h2>
          <p className="pt-3">
            Discover how Astro Overseas has helped professionals secure work
            permits and visas with ease. Our clients trust us for a smooth,
            hassle-free immigration experience—hear their success stories!
          </p>
        </header>

        <div
          itemScope
          itemType="https://schema.org/Review"
          className="review-card"
        >
          <meta
            itemProp="itemReviewed"
            content="Astro Overseas Visa Services"
          />
          <meta itemProp="reviewRating" content="5" />
          <blockquote
            itemProp="reviewBody"
            className="pb-9 text-3xl font-medium leading-relaxed"
          >
            “Astro Overseas made my visa process stress-free and
            straightforward. Their expert guidance helped me secure my European
            work permit faster than I expected!”
          </blockquote>
          <footer className="border-l-4 border-blue-700 pl-2">
            <strong
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
              className="block"
            >
              <span itemProp="name">Ahmed R.</span>
            </strong>
            <span itemProp="jobTitle" className="text-sm font-light">
              Software Engineer
            </span>
            <meta itemProp="datePublished" content="2024-02-10" />
          </footer>
        </div>
      </div>
    </section>
  );
};
