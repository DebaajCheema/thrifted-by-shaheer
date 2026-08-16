"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";
import { Check } from "lucide-react";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    setProduct(null);

    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const all = data.products || [];
        const found = all.find((p) => p.id === id);
        setProduct(found || null);

        if (found) {
          const rel = all
            .filter(
              (p) =>
                p.category === found.category &&
                p.status === "available" &&
                p.id !== found.id
            )
            .slice(0, 3);
          setRelated(rel);
        }
      })
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAcquire = () => {
    if (!product) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] pt-24">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] pt-24 px-5 text-center">
        <p className="font-heading text-4xl font-black uppercase text-white/40">404</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30 mt-4">
          Relic not found in archive
        </p>
        <Link
          href="/"
          className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-all"
        >
          Return to Archive
        </Link>
      </div>
    );
  }

  const specs = [
    { label: "Origin", value: product.origin },
    { label: "Estimated Era", value: product.era },
    { label: "Condition", value: product.condition_rating ? `${product.condition_rating}/10` : "" },
    { label: "Rarity", value: product.rarity },
    { label: "Size", value: product.size },
    { label: "Category", value: product.category },
  ].filter((s) => s.value);

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-20">
      <div className="px-5 md:px-10 py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
          <Link href="/" className="hover:text-white">Archive</Link>
          <span>/</span>
          <Link href={`/shop/${product.category}`} className="hover:text-white">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-white/70 truncate">{product.name}</span>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3 bg-black relative min-h-[60vh] md:min-h-screen">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full min-h-[60vh] md:min-h-screen object-cover"
          />
          {product.status === "sold" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <span className="font-heading text-6xl md:text-8xl font-black uppercase tracking-tight text-white rotate-[-8deg]">
                Sold
              </span>
            </div>
          )}
        </div>

        <div className="md:col-span-2 p-6 md:p-10 flex flex-col">
          <div className="flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              Relic Profile
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-[-0.03em] leading-[0.95] mt-3">
              {product.name}
            </h1>
            <p className="font-heading text-2xl md:text-3xl font-black mt-6">
              PKR {Number(product.price).toLocaleString()}
            </p>

            {product.description && (
              <p className="font-mono text-sm text-white/50 mt-6 leading-relaxed">
                {product.description}
              </p>
            )}

            <div className="mt-10 border-t border-white/10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mt-6 mb-4">
                Technical Spec Sheet
              </p>
              <dl className="divide-y divide-white/10">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-3">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                      {spec.label}
                    </dt>
                    <dd className="font-mono text-xs text-white text-right">
                      {String(spec.value)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-10">
            <button
              onClick={handleAcquire}
              disabled={product.status === "sold"}
              className="w-full bg-white text-black font-mono text-xs uppercase tracking-[0.25em] py-4 hover:bg-black hover:text-white border border-white transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check size={16} /> Added to Vault
                </>
              ) : product.status === "sold" ? (
                "Relic Acquired"
              ) : (
                "Acquire Piece"
              )}
            </button>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mt-4 text-center">
              One-of-one. When it is gone, it is gone.
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                More from {product.category}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/product/${r.id}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white/5">
                    <img
                      src={r.image_url}
                      alt={r.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex justify-between gap-2">
                    <h3 className="font-heading text-sm font-bold uppercase tracking-tight truncate">
                      {r.name}
                    </h3>
                    <p className="font-mono text-xs whitespace-nowrap">
                      PKR {Number(r.price).toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}