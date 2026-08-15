"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

const CATEGORY_MANIFESTOS = {
  Tops: "Worn-in canvas. Each thread carries a decade of style.",
  Bottoms: "Utility redefined. Cuts sourced from forgotten closets.",
  Caps: "Crowns of the culture. Curved, faded, archived.",
  Shoes: "Soles with stories. Sneakers that walked before you.",
  Outerwear: "Armor for the era. Heavy fabric, heavier history.",
};

export default function Shop() {
  const params = useParams();
  const category = params.category;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const filtered = PRODUCTS.filter((p) => p.category === category);
    setProducts(filtered);
    setLoading(false);
  }, [category]);

  const manifesto = CATEGORY_MANIFESTOS[category] || "Curated luxury artifacts.";

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24">
      <section className="px-5 md:px-10 py-16 md:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
          >
            - Archive
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mt-6 mb-4">
            Categorical Vault
          </p>
          <h1 className="font-heading text-6xl md:text-[14vw] font-black uppercase tracking-[-0.04em] leading-[0.85]">
            {category}
          </h1>
          <p className="font-mono text-sm md:text-base text-white/50 mt-6 max-w-xl leading-relaxed">
            {manifesto}
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
              {loading ? "Scanning archive..." : `${products.length} relics found`}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
              Sort: Latest
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[3/4] bg-white/5 animate-pulse" />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="border border-white/10 p-16 text-center">
              <p className="font-heading text-3xl font-black uppercase text-white/40">
                Vault Empty
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30 mt-4">
                No relics in this category yet. Curation in progress.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}