import Link from "next/link";
import { memo } from "react";

import { Logo } from "@/assets/logo";

const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Astro Overseas",
  email: "info@astrooverseas.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#313, West Zone Building opposite Karama Centre",
    addressLocality: "Al Karama, Dubai",
    addressCountry: "United Arab Emirates",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
};

export const Footer = memo(() => {
  return (
    <footer className="bg-[#040E30] text-blue-50" role="contentinfo">
      <script type="application/ld+json">
        {JSON.stringify(OrganizationSchema)}
      </script>
      <div className="container justify-between py-12 md:flex md:py-24">
        <div className="max-w-[40ch] space-y-7">
          <Link href="/" aria-label="Astro Overseas Home">
            <Logo className="brightness-[15] saturate-0" aria-hidden="true" />
          </Link>
          <h5 className="sr-">Astro Overseas</h5>
          <p>
            Unlock Your Global Opportunities: Work Permits and Permanent
            Residency Visas for Canada and Europe with Astro Overseas!
          </p>
        </div>
        <nav className="max-w-[30ch] space-y-3" aria-label="Footer Navigation">
          <h6>Contact</h6>
          <div className="flex flex-col gap-4">
            <Link
              href="mailto:info@astrooverseas.com"
              rel="noopener"
              aria-label="Email us at info@astrooverseas.com"
            >
              info@astrooverseas.com
            </Link>
            <address className="not-italic">
              <Link
                href="https://maps.google.com/?q=#313,+West+Zone+Building,+Al+Karama,+Dubai,+UAE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Google Maps"
              >
                #313, West Zone Building opposite Karama Centre, Al Karama,
                Dubai, United Arab Emirates
              </Link>
            </address>
            <dl>
              <dt className="sr-only">Business Hours</dt>
              <dd>Mon - Sat: 8:00 am to 6:00 pm</dd>
              <dd>Sunday: Closed</dd>
            </dl>
          </div>
        </nav>
      </div>
      <p className="border-t border-blue-950 p-2 text-center text-blue-200">
        <small>
          Copyright © {new Date().getFullYear()}. All Rights Reserved by Astro
          Overseas FZCO LLC. <br />
          Website Developed by{" "}
          <Link
            href="https://www.zironmedia.com?utm_source=astrooverseas"
            target="_blank"
            aria-label="Visit Ziron Pro website"
          >
            <strong className="text-blue-100">Ziron Pro.</strong>
          </Link>
        </small>
      </p>
    </footer>
  );
});

Footer.displayName = "Footer";
