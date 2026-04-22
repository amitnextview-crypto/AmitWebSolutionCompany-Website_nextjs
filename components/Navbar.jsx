"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "../lib/siteContent";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-400/10 text-sm font-bold text-amber-200">
            AW
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-white/60">
              AMIT WEB SOLUTION
            </p>
            <p className="text-sm text-slate-300">{company.tagline}</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`${company.whatsapp}?text=Hi%20Amit%2C%20I%20want%20to%20build%20a%20project`}
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            Get Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
        >
          {open ? "X" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-200"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`${company.whatsapp}?text=Hi%20Amit%2C%20I%20want%20to%20build%20a%20project`}
              className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-slate-950"
              onClick={() => setOpen(false)}
            >
              Start on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
