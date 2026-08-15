"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Ticker from "@/components/Ticker";
import ProductCard from "@/components/ProductCard";
import { AtSign, Phone, ArrowDown } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

const CATEGORY_INFO = {
  Tops: {
    manifesto: "Worn-in canvas. Each thread carries a decade.",
    image: "/images/categories/tops.jpg",
  },
  Bottoms: {
    manifesto: "Utility redefined. Cuts sourced from forgotten closets.",
    image: "/images/categories/bottoms.jpg",
  },
  Caps: {
    manifesto: "Crowns of the culture. Curved, faded, archived.",
    image: "/images/categories/caps.jpg",
  },
  Shoes: {
    manifesto: "Soles with stories. Sneakers that walked before you.",
    image: "/images/categories/shoes.jpg",
  },
  Outerwear: {
    manifesto: "Armor for the era. Heavy fabric, heavier history.",
    image: "/images/categories/outerwear.jpg",
  },
};

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const featured = PRODUCTS.filter(
      (p) => p.featured && p.status === "available"
    ).slice(0, 6);
    setProducts(featured);
    setLoading(false);
  }, []);

  return (
    <div className="bg-[#0A0A0A]">
      <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
        <div className="relative flex-1 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
          <div className="hero-scroll flex flex-col whitespace-nowrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="font-heading text-[26vw] md:text-[16vw] font-black uppercase tracking-[-0.05em] leading-none text-white/90"
              >
                SHAHEER
              </span>
            ))}
          </div>
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              Curated Luxury Archive
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 flex items-center gap-2">
              <ArrowDown size={12} className="animate-bounce" /> Scroll to Enter Vault
            </div>
          </div>
        </div>

        <div className="relative flex-1 min-h-[50vh] md:min-h-screen bg-black flex items-center justify-center p-8 md:p-16">
          <img
            src="/images/logo.jpg"
            alt="Thrifted by Shaheer"
            className="w-full max-w-[420px] aspect-square rounded-full object-cover ring-1 ring-white/15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 mb-2">
              Drop of the Week
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-[-0.03em] leading-none">
              The Relic
              <br />
              Collection
            </h1>
            <Link
              href="/shop/Shoes"
              className="inline-block mt-6 bg-white text-black font-mono text-[11px] uppercase tracking-[0.25em] px-6 py-3 hover:bg-transparent hover:text-white hover:border border border-white transition-all"
            >
              Enter Archive
            </Link>
          </div>
        </div>
        <style>{`
          .hero-scroll {
            animation: hero-scroll-v 20s linear infinite;
          }
          @keyframes hero-scroll-v {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); }
          }
        `}</style>
      </section>

      <Ticker />

      <section className="px-5 md:px-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12 md:mb-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
                01 - The Categorical Vault
              </p>
              <h2 className="font-heading text-5xl md:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9]">
                Browse
                <br />
                by Class
              </h2>
            </div>
            <p className="font-mono text-sm text-white/50 max-w-xs leading-relaxed">
              Each category is a curated manifesto. Selected, authenticated, and archived for the culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat}
                href={`/shop/${cat}`}
                data-cursor="hover"
                className="group relative block"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-white/5">
                  <img
                    src={CATEGORY_INFO[cat].image}
                    alt={cat}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.25em] text-white/70">
                    {String(i + 1).padStart(2, "0")} / {String(CATEGORIES.length).padStart(2, "0")}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {cat}
                  </h3>
                  <p className="font-mono text-xs text-white/40 mt-2 max-w-xs">
                    {CATEGORY_INFO[cat].manifesto}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section><section className="px-5 md:px-10 py-20 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
                02 - Selected Artifacts
              </p>
              <h2 className="font-heading text-5xl md:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9]">
                Featured
                <br />
                Relics
              </h2>
            </div>
            <Link
              href="/shop/Shoes"
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white underline underline-offset-4"
            >
              View Full Archive
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[3/4] bg-white/5 animate-pulse" />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="border border-white/10 p-12 text-center">
              <p className="font-heading text-2xl font-black uppercase text-white/40">
                Archive Loading
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30 mt-3">
                Relics being curated. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative px-5 md:px-10 py-20 md:py-32 border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none overflow-hidden whitespace-nowrap opacity-[0.04]">
          <span className="font-heading text-[20vw] font-black uppercase tracking-tight">
            @thriftedbyshaheer
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
              03 - The Manifesto
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-[-0.03em] leading-[0.95]">
              Thrifted
              <br />
              is not
              <br />
              <span className="text-white/40">Used.</span>
            </h2>
            <p className="font-mono text-sm text-white/50 mt-8 leading-relaxed max-w-md">
              Thrifted by Shaheer redefines the second-hand market as a premier destination
              for curated, one-of-one artifacts. Every garment is treated as a masterpiece
              of fashion history - authenticated, archived, and elevated.
            </p>
            <p className="font-mono text-sm text-white/50 mt-4 leading-relaxed max-w-md">
              This is curated luxury. This is the archive obsession.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Pieces Archived", value: "500+" },
              { label: "Categories", value: "06" },
              { label: "Authenticated", value: "100%" },
              { label: "One-of-One", value: "Always" },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/10 p-6 md:p-8">
                <p className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-5 md:px-10 py-16 md:py-24 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <img
                src="/images/logo.jpg"
                alt="Thrifted by Shaheer"
                className="w-16 h-16 rounded-full object-cover ring-1 ring-white/20 mb-5"
              />
              <h3 className="font-heading text-2xl font-black uppercase tracking-tight">
                Thrifted
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mt-1">
                by Shaheer
              </p>
              <p className="font-mono text-xs text-white/40 mt-6 max-w-xs leading-relaxed">
                Curated luxury archive. One-of-one artifacts, authenticated and elevated for the culture.
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">
                The Vault
              </p>
              <ul className="space-y-3">
                {CATEGORIES.map((c) => (
                  <li key={c}>
                    <Link
                      href={`/shop/${c}`}
                      className="font-mono text-xs uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors"
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">
                Contact
              </p>
              <Link
                href="https://www.instagram.com/thriftedbyshaheer"
                className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors mb-3"
              >
                <AtSign size={16} /> @thriftedbyshaheer
              </Link>
              <Link
                href="tel:+923184690194"
                className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors"
              >
                <Phone size={16} /> +92 318 4690194
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
                (c) {new Date().getFullYear()} Thrifted by Shaheer. All relics reserved.
              </p>
              <Link href="/about" className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/privacy-policy" className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
              Monochrome Relic Design System
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}