import { LogoWhite } from "./Logos";
import type { SiteSettings } from "@/sanity/lib/types";

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="bg-green-dark px-16 py-14 grid grid-cols-1 md:grid-cols-2 items-end gap-10">
      <div>
        <LogoWhite className="h-7 w-auto opacity-70 mb-3" />
        <p className="text-[13px] font-light text-cream/40">{settings?.footerTagline}</p>
      </div>
      <div className="md:text-right">
        <ul className="flex md:justify-end gap-6 list-none mb-3">
          <li><a href="https://planetzero.in" className="text-[12px] text-cream/35 hover:text-cream/70 transition-colors">planetzero.in</a></li>
          <li><a href="#product" className="text-[12px] text-cream/35 hover:text-cream/70 transition-colors">Product</a></li>
          <li><a href="#contact" className="text-[12px] text-cream/35 hover:text-cream/70 transition-colors">Contact</a></li>
        </ul>
        <p className="text-[11px] text-cream/20">© {new Date().getFullYear()} Planet Zero. All rights reserved.</p>
      </div>
    </footer>
  );
}
