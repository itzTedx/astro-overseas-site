import Image from "next/image";

import { LogoIcon } from "@/assets/logo";

export const Feedbacks = () => {
  return (
    <section
      className="container grid gap-6 py-24 md:grid-cols-3"
      aria-labelledby="testimonials-heading"
    >
      <div className="relative aspect-[3/4] h-full">
        <div className="absolute right-0 top-full z-10 flex size-12 -translate-x-1/3 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-xl max-md:-translate-y-1/2 md:top-[10%] md:size-16 md:translate-x-1/2">
          <LogoIcon aria-hidden="true" className="max-md:size-6" />
        </div>
        <Image
          src="/images/feedback.jpg"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          alt="Happy clients working with Astro Overseas"
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="container max-w-3xl space-y-9 py-6 md:col-span-2 md:space-y-12 md:py-12">
        <header>
          <h2
            id="testimonials-heading"
            className="text-2xl font-medium md:text-3xl"
          >
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
          <span itemProp="ratingValue" className="sr-only">
            5
          </span>
          <blockquote
            itemProp="reviewBody"
            className="pb-4 text-xl font-medium !leading-relaxed md:pb-9 md:text-3xl"
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
              Happy Client
            </span>
            <meta itemProp="datePublished" content="2024-02-10" />
          </footer>
        </div>
      </div>
    </section>
  );
};
