"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";
import { X, ShoppingBag } from "lucide-react";
import { CATEGORIES } from "@/lib/products";

const NAV_LINKS = [
  { label: "Archive", path: "/" },
  ...CATEGORIES.map((c) => ({ label: c, path: `/shop/${c}` })),
];

export default function Navbar() {
  const { count, setIsOpen } = useCart();
  const [vaultOpen, setVaultOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-10 py-4">
          <Link href="/" className="group flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="Thrifted by Shaheer"
              className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-heading text-sm md:text-base font-black uppercase tracking-[0.15em] text-white">
              Thrifted
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              by Shaheer
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
            >
              Archive
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setVaultOpen(true)}
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-white border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300"
            >
              Vault
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="relative text-white hover:text-white/70 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] bg-black transition-all duration-500 ${
          vaultOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 md:px-10 py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            Vault Menu
          </span>
          <button
            onClick={() => setVaultOpen(false)}
            className="text-white hover:rotate-90 transition-transform duration-300"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex h-full flex-col justify-center px-5 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setVaultOpen(false)}
                className="group flex items-baseline gap-4 border-b border-white/10 py-5 overflow-hidden"
              >
                <span className="font-mono text-xs text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight text-white/80 group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-col md:flex-row gap-4 md:gap-10 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
            <span>@thriftedbyshaheer</span>
            <span>+92 318 4690194</span>
            <span>Curated Luxury Archive</span>
          </div>
        </div>
      </div>
    </>
  );
}