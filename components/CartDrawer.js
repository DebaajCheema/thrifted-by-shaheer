"use client";

import Link from "next/link";
import { useCart } from "@/lib/CartContext";
import { X, Plus, Minus } from "lucide-react";

const WHATSAPP_NUMBER = "923184690194";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart, count } =
    useCart();

  const buildWhatsAppMessage = () => {
    let msg = "*New Order — Thrifted by Shaheer*\n\n";
    items.forEach((item, i) => {
      msg += `${i + 1}. ${item.name}\n`;
      msg += `   Size: ${item.size || "N/A"} × ${item.quantity}\n`;
      msg += `   Rs. ${(item.price * item.quantity).toLocaleString()}\n\n`;
    });
    msg += `*Total: Rs. ${total.toLocaleString()}*`;
    return encodeURIComponent(msg);
  };

  const handleWhatsAppOrder = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[201] w-full max-w-md bg-white text-black flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h2 className="font-heading text-xl font-black uppercase tracking-tight">
            Your Cart ({count})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#A9A9A9] hover:text-black transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>
        <div className="border-b border-[#EAEAEA]" />

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <p className="font-heading text-2xl font-black uppercase tracking-tight text-black/30">
              Cart Empty
            </p>
            <p className="text-sm text-[#8F949D] mt-3">No items selected yet</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-black text-white text-sm font-semibold uppercase tracking-wide px-8 py-3 hover:bg-black/85 transition-colors"
            >
              Browse Archive
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-[#EAEAEA] py-5">
                  <Link
                    href={`/product/${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="shrink-0"
                  >
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-20 h-24 object-cover bg-black/5"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className="font-heading text-base font-bold tracking-tight hover:underline block"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-[#8F949D] mt-1 uppercase tracking-wide">
                      {item.category} · Size {item.size || "N/A"}
                    </p>
                    <p className="font-heading text-base font-bold mt-2">
                      Rs. {item.price.toLocaleString()}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full border border-[#EAEAEA] flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-heading text-sm font-bold w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full border border-[#EAEAEA] flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                          aria-label="Increase"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-[#8F949D] hover:text-black underline underline-offset-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 pt-4 pb-6">
              <div className="border-t border-[#EAEAEA] pt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-base font-bold">Total</span>
                  <span className="font-heading text-base font-bold">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-black text-white font-heading text-sm font-bold uppercase tracking-wide py-4 hover:bg-black/85 transition-colors"
                >
                  Order on WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs text-[#8F949D] hover:text-black underline underline-offset-2 mt-3 transition-colors"
                >
                  Clear cart
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
}