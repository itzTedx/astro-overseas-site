import Link from "next/link";

import { Logo } from "@/assets/logo";

export const Footer = () => {
  return (
    <footer className="bg-[#040E30] text-blue-50">
      <div className="container flex justify-between py-24">
        <div className="max-w-[40ch] space-y-7">
          <Logo className="brightness-[15] saturate-0" />
          <h5 className="sr-only">Astro Overseas</h5>
          <p>
            Unlock Your Global Opportunities: Work Permits and Permanent
            Residency Visas for Canada and Europe with Astro Overseas!
          </p>
        </div>
        <div className="max-w-[30ch] space-y-3">
          <h6>Contact</h6>
          <div className="flex flex-col gap-4">
            <Link href="mailto:info@astrooverseas.com">
              info@astrooverseas.com
            </Link>
            <Link href="/">
              #313, West Zone Building opposite Karama Centre, Al Karama, Dubai,
              United Arab Emirates
            </Link>
            <ul>
              <li>Mon - Sat: 8:00 am to 6:00 pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="border-t border-blue-950 p-2 text-center text-blue-800">
        Copyright © 2025. All Rights Reserved. Website Developed by{" "}
        <Link
          href="https://www.zironmedia.com?utm_source=astrooverseas"
          target="_blank"
        >
          <strong className="text-blue-700">Ziron Pro.</strong>
        </Link>
      </p>
    </footer>
  );
};
