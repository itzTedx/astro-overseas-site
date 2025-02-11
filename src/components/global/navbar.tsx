import Link from "next/link";

import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="z-50 border-b border-white bg-white/80 py-4 backdrop-blur-xl">
      <div className="container flex items-center justify-between">
        <Logo />
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contact us now</Link>
        </Button>
      </div>
    </nav>
  );
};
