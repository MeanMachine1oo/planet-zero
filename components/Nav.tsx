"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoWhite, LogoColour } from "./Logos";
import type { SiteSettings } from "@/sanity/lib/types";

export function Nav({ settings }: { settings: SiteSettings }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-green/10"
          : ""
      }`}
    >
      <Link href="/" className="flex items-center h-8">
        {scrolled ? (
          <LogoColour className="h-8 w-auto" />
        ) : (
          <LogoWhite className="h-8 w-auto" />
        )}
      </Link>

      <ul className="hidden md:flex items-center gap-9 list-none">
        {settings?.navLinks?.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`text-[13px] font-normal tracking-wide transition-opacity ${
                scrolled
                  ? "text-pzblack/70 hover:text-pzblack"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={settings?.ctaHref || "#contact"}
            className="bg-green text-cream px-5 py-2.5 rounded-full text-[13px] font-medium transition-colors hover:bg-green-dark"
          >
            {settings?.ctaLabel || "Get in Touch"}
          </a>
        </li>
      </ul>
    </nav>
  );
}
