"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav({ isPhone = false, onToggle }) {
  const pathname = usePathname();
  const linkClass = (href) => (pathname === href ? "text-label-md text-primary-500" : null);

  return (
    <nav className="overflow-y-auto">
      <ul className={isPhone ? "*:py-6 divide-y" : "hidden md:flex gap-x-6 md:gap-x-8 text-body-lg text-neutral-700 transition-colors"}>
        <li className={linkClass("/")} onClick={onToggle}>
          <Link href="/">Home</Link>
        </li>
        <li className={linkClass("/about-us")} onClick={onToggle}>
          <Link href="/about-us">About Us</Link>
        </li>
        <li className={linkClass("/contact")} onClick={onToggle}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={linkClass("/pricing")} onClick={onToggle}>
          <Link href="/pricing">Pricing</Link>
        </li>
      </ul>
    </nav>
  );
}
