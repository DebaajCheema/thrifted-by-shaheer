import Link from "next/link";

export default function AboutUs() {
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
            04 - The Manifesto
          </p>
          <h1 className="font-heading text-6xl md:text-[12vw] font-black uppercase tracking-[-0.04em] leading-[0.85]">
            About
            <br />
            Us
          </h1>
        </div>
      </section>

      <section className="px-5 md:px-10 py-20 md:py-32 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
            Who Are We?
          </p>
          <p className="font-heading text-2xl md:text-4xl font-black uppercase tracking-tight leading-[1.1] mb-8">
            Thrifted by Shaheer is a curated luxury archive redefining the second-hand market.
          </p>
          <div className="space-y-6 font-mono text-sm md:text-base text-white/60 leading-relaxed">
            <p>
              Founded as a passion project, Thrifted by Shaheer treats every garment as a
              masterpiece of fashion history. We curate one-of-one vintage garments and
              accessories, presenting them through a premium, high-contrast aesthetic that
              elevates thrift into luxury.
            </p>
            <p>
              Our culture is built on simplicity, authenticity, and a deep respect for the
              stories woven into every piece. The customer is at the heart of our model -
              we are committed to providing a shopping experience that evolves with what our
              community wants more and better of.
            </p>
            <p>
              Every artifact in our archive is authenticated, archived, and elevated. This
              is not resale. This is preservation.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 py-20 md:py-32 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
            Vision
          </p>
          <p className="font-heading text-3xl md:text-5xl font-black uppercase tracking-[-0.02em] leading-[1.05]">
            We curate simple lifestyle choices that let you{" "}
            <span className="text-white/40">tell your own stories.</span>
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-12">
            Core Values
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-px border border-white/10">
            {[
              { name: "Inclusivity", desc: "Fashion for every story, every body, every era." },
              { name: "Authenticity", desc: "Every piece verified. Every origin traced." },
              { name: "Ownership", desc: "We stand behind every artifact we archive." },
              { name: "Excellence", desc: "Curation without compromise. Quality above all." },
              { name: "Simplicity", desc: "Clean design, honest process, no noise." },
              { name: "Integrity", desc: "Transparent sourcing. Fair pricing. Real relationships." },
            ].map((value, i) => (
              <div key={value.name} className="border border-white/10 p-8 md:p-10 -m-px">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">
                  {value.name}
                </h3>
                <p className="font-mono text-xs text-white/50 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-5 md:px-10 py-16 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white underline underline-offset-4"
          >
            - Back to Archive
          </Link>
        </div>
      </footer>
    </div>
  );
}