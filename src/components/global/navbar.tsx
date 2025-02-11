import Link from "next/link";
import React from "react";

import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white bg-white/80 py-2.5 backdrop-blur-xl">
      <nav
        className="container flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="Home page">
          <Logo />
        </Link>
        <Button asChild variant="outline" size="lg">
          <Link href="/" aria-label="Contact us">
            Contact us now
          </Link>
        </Button>
      </nav>
    </header>
  );
};

// Add React.memo to prevent unnecessary re-renders
export default React.memo(Navbar);
