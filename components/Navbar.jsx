"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "../lib/siteContent";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="brand-mark flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white">
            AWS
          </span>
          <span className="text-sm font-bold tracking-wide text-slate-950 sm:text-base">
            {company.name}
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-blue-700">
              {link.label}
            </Link>
          ))}
          <a href={`${company.whatsapp}?text=Hi%20Amit%2C%20I%20want%20to%20discuss%20a%20software%20project`} className="btn-primary">
            Get Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-sm font-bold text-slate-800 lg:hidden"
        >
          {open ? "X" : "Menu"}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`${company.whatsapp}?text=Hi%20Amit%2C%20I%20want%20to%20discuss%20a%20software%20project`}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Get Quote
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
