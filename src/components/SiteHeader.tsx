"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useRef, type RefObject } from "react";

const primary = [
  ["Visit", "/visit"],
  ["The Echo", "/how-it-works"],
  ["Story", "/history"],
  ["Explore Nearby", "/things-to-do-nearby"],
  ["Renovation", "/renovation"],
];

export function SiteHeader() {
  const moreMenuRef = useRef<HTMLDetailsElement>(null);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const menus = [moreMenuRef.current, mobileMenuRef.current];

    const handlePointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return;

      menus.forEach((menu) => {
        if (menu?.open && !menu.contains(event.target as Node)) menu.open = false;
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      const openMenu = menus.find((menu) => menu?.open);
      if (!openMenu) return;

      event.preventDefault();
      openMenu.open = false;
      openMenu.querySelector<HTMLElement>("summary")?.focus();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = (menu: RefObject<HTMLDetailsElement | null>) => {
    if (menu.current) menu.current.open = false;
  };

  return (
    <header className="site-header">
      <div className="shell nav-row">
        <Link className="brand" href="/">
          <span className="brand-rings" aria-hidden="true"><i /></span>
          <span><strong>Center of the Universe</strong><small>Tulsa, Oklahoma</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primary.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <details ref={moreMenuRef} className="more-menu">
            <summary>More</summary>
            <div onClick={() => closeMenu(moreMenuRef)}>
              <Link href="/artificial-cloud">Artificial Cloud</Link>
              <Link href="/map">Map</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/fun-facts">Fun facts</Link>
              <Link href="/tulsa-king">Tulsa King</Link>
              <Link href="/about">About</Link>
            </div>
          </details>
        </nav>
        <details ref={mobileMenuRef} className="mobile-menu">
          <summary aria-label="Open navigation"><Menu size={22} /></summary>
          <nav aria-label="Mobile navigation" onClick={() => closeMenu(mobileMenuRef)}>
            {[...primary, ["Artificial Cloud", "/artificial-cloud"], ["Map", "/map"], ["FAQ", "/faq"], ["About", "/about"]].map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
