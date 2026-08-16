"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [togglingId, setTogglingId] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(() => {
        checkIfLoggedIn();
      });
  }, []);

  const checkIfLoggedIn = async () => {
    try {
      const res = await fetch("/api/admin/check");
      const data = await res.json();
      if (data.loggedIn) {
        setLoggedIn(true);
        loadProducts();
      }
    } catch {
      // ignore
    }
    setChecking(false);
  };

  const loadProducts = async () => {
    setLoadingProducts(true);
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch {
      setProducts([]);
    }
    setLoadingProducts(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setLoggedIn(true);
        loadProducts();
      } else {
        setError("Incorrect password");
      }
    } catch {
      setError("Something went wrong. Try again.");
    }
  };

  const handleToggle = async (productId) => {
    setTogglingId(productId);
    try {
      const res = await fetch("/api/toggle-stock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (data.success) {
        setProducts((prev) =>
          prev.map((p) => (p.id === productId ? data.product : p))
        );
      }
    } catch {
      // ignore
    }
    setTogglingId(null);
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-5">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm border border-white/10 p-8"
        >
          <h1 className="font-heading text-2xl font-black uppercase tracking-tight text-white mb-6 text-center">
            Admin Login
          </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-transparent border border-white/20 text-white px-4 py-3 font-mono text-sm mb-4 focus:outline-none focus:border-white/50"
          />
          {error && (
            <p className="text-red-400 font-mono text-xs mb-4">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-white text-black font-mono text-xs uppercase tracking-[0.25em] py-3 hover:bg-white/80 transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] px-5 md:px-10 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl font-black uppercase tracking-tight text-white mb-8">
          Manage Stock
        </h1>

        {loadingProducts ? (
          <p className="font-mono text-sm text-white/50">Loading products...</p>
        ) : (
          <div className="space-y-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border border-white/10 px-5 py-4"
              >
                <div>
                  <p className="font-mono text-sm text-white">{product.name}</p>
                  <p className="font-mono text-xs text-white/40">
                    {product.category} - PKR {Number(product.price).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => handleToggle(product.id)}
                  disabled={togglingId === product.id}
                  className={`font-mono text-xs uppercase tracking-[0.15em] px-4 py-2 border rounded-full transition-colors ${
                    product.status === "sold"
                      ? "border-red-400 text-red-400"
                      : "border-white text-white"
                  } disabled:opacity-40`}
                >
                  {togglingId === product.id
                    ? "..."
                    : product.status === "sold"
                    ? "Sold Out"
                    : "In Stock"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}