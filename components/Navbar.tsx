"use client";

import { useState } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { site } from "@/lib/site";

const navLinks = [
  { label: "Storia", href: "#storia" },
  { label: "Servizi", href: "#servizi" },
  { label: "Galleria", href: "#galleria" },
  { label: "Recensioni", href: "#recensioni" },
  { label: "Contatti", href: "#contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll via Framer Motion (niente addEventListener manuale).
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  // Sfondo solido quando si scrolla o quando il menu mobile è aperto.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-soft ${
        solid
          ? "border-b border-terra/40 bg-panna/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-site flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={`font-serif text-2xl font-semibold tracking-wide transition-colors duration-500 ${
            solid ? "text-inchiostro" : "text-panna"
          }`}
        >
          Ricci <span className="text-oro">&</span> Capricci
        </Link>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-oro ${
                  solid ? "text-fumo" : "text-panna/90"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.phoneHref}
              className={`rounded-full border px-5 py-2.5 text-xs uppercase tracking-wider transition-colors duration-300 ${
                solid
                  ? "border-inchiostro bg-inchiostro text-panna hover:bg-fumo"
                  : "border-panna/70 text-panna hover:bg-panna hover:text-inchiostro"
              }`}
            >
              Chiama ora
            </a>
          </li>
        </ul>

        {/* Toggle mobile */}
        <button
          type="button"
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors md:hidden ${
            solid ? "text-inchiostro hover:bg-sabbia/60" : "text-panna hover:bg-panna/10"
          }`}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-terra/40 bg-panna md:hidden">
          <ul className="container-site flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg text-fumo transition-colors hover:text-oro"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pb-3 pt-2">
              <a
                href={site.phoneHref}
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Chiama ora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
