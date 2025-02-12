import type { Metadata } from "next";
import { Manrope, Sofia_Sans_Condensed } from "next/font/google";

import { Footer } from "@/components/global/footer";
import { Navbar } from "@/components/global/navbar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const sofia = Sofia_Sans_Condensed({
  variable: "--font-sofia-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astro Overseas - UAE's #1 Ranked Immigration Consultant",
  description:
    "With expertise in immigration services, we specialize in securing work permits and permanent residency visas for Canada and Europe.",
  keywords:
    "study abroad, international education, university admissions, visa processing, career counseling, immigration, europe, residency visa, work permits",
  openGraph: {
    title: "Astro Overseas - UAE's #1 Ranked Immigration Consultant",
    description:
      "With expertise in immigration services, we specialize in securing work permits and permanent residency visas for Canada and Europe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          manrope.className,
          sofia.variable,
          "scroll-smooth antialiased"
        )}
      >
        <Navbar />
        {children}

        <Footer />

        <Toaster />
      </body>
    </html>
  );
}
