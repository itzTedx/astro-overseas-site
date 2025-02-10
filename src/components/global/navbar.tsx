import Link from "next/link";

import { Logo } from "@/assets/logo";

export const Navbar = () => {
  return (
    <nav className="container sticky top-0 flex items-center justify-between border-b border-white bg-white backdrop-blur-xl">
      <Logo />
      <Link href="/contact">Contact</Link>
    </nav>
  );
};
