"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      const interactive = target.closest(
        'a, button, [data-cursor="hover"], input, textarea, select'
      );
      setHovering(!!interactive);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%) scale(${hovering ? 2.2 : 1})`,
        transition: "transform 0.18s ease-out, width 0.18s, height 0.18s",
      }}
    >
      <div
        className="rounded-full border border-white mix-blend-difference"
        style={{
          width: 28,
          height: 28,
          backgroundColor: hovering ? "rgba(255,255,255,0.15)" : "transparent",
          transition: "background-color 0.18s",
        }}
      />
    </div>
  );
}