import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      data-cursor="hover"
      className="group relative block"
    >
      <div className="relative overflow-hidden bg-black">
        <div className="aspect-[3/4] w-full overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
          />
        </div>
        {product.status === "sold" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <span className="font-heading text-2xl font-black uppercase tracking-tight text-white">
              Sold
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] bg-white/90 text-black px-2 py-1">
            {product.rarity || "Curated"}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
            {product.category}
          </p>
          <h3 className="font-heading text-sm font-bold uppercase tracking-tight text-white truncate">
            {product.name}
          </h3>
        </div>
        <p className="font-mono text-sm text-white whitespace-nowrap">
          PKR {Number(product.price).toLocaleString()}
        </p>
      </div>
    </Link>
  );
}