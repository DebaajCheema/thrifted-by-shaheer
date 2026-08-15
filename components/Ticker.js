export default function Ticker({ text = "THRIFTED BY SHAHEER", repeat = 8 }) {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/15 bg-black py-3">
      <div className="ticker-track flex whitespace-nowrap">
        {Array.from({ length: repeat }).map((_, i) => (
          <span
            key={i}
            className="mx-8 font-mono text-xs uppercase tracking-[0.3em] text-white/70"
          >
            {text}
            <span className="mx-8 text-white/30">◆</span>
            <span className="text-white/70">@thriftedbyshaheer</span>
            <span className="mx-8 text-white/30">◆</span>
          </span>
        ))}
      </div>
      <style>{`
        .ticker-track {
          display: inline-flex;
          animation: ticker-scroll 30s linear infinite;
        }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}