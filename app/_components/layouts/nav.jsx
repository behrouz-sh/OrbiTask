"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav({ isPhone = false, onToggle, them }) {
  const pathname = usePathname();
  const linkClass = (href) => (pathname === href ? "text-label-md text-primary-500" : null);

  return (
    <nav className="overflow-y-auto">
      <ul className={isPhone ? "divide-y" : `hidden md:flex gap-x-6 md:gap-x-8 text-body-lg  ${them === "dark" ? "text-neutral-700" : "text-white"} transition-colors`}>
        <li className={linkClass("/")} onClick={onToggle}>
          <Link href="/" className="block md:inline py-6 md:py-0">
            Home
          </Link>
        </li>
        <li className={linkClass("/about-us")} onClick={onToggle}>
          <Link href="/about-us" className="block md:inline py-6 md:py-0">
            About Us
          </Link>
        </li>
        <li className={linkClass("/contact")} onClick={onToggle}>
          <Link href="/contact" className="block md:inline py-6 md:py-0">
            Contact
          </Link>
        </li>
        <li className={linkClass("/pricing")} onClick={onToggle}>
          <Link href="/pricing" className="block md:inline py-6 md:py-0">
            Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
}
