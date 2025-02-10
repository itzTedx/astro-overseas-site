import Link from "next/link";

import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="container sticky top-0 flex items-center justify-between border-b border-white bg-white/80 py-4 backdrop-blur-xl">
      <Logo />
      <Button asChild variant="outline" size="lg">
        <Link href="/contact">Contact us now</Link>
      </Button>
    </nav>
  );
};
