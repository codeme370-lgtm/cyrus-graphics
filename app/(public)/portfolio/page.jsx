import Link from "next/link";

export const metadata = {
  title: "Portfolio - Cyrus Graphics",
  description: "Explore Cyrus Graphics' portfolio of print design, packaging, and branding projects.",
  keywords: ["portfolio", "print design", "branding work", "Cyrus Graphics"],
};

const portfolioItems = [
  { title: 'Premium Business Cards', subtitle: 'Luxury finishes, bold color, elegant designs.' },
  { title: 'Product Packaging', subtitle: 'Custom boxes and labels for retail products.' },
  { title: 'Event Branding', subtitle: 'Posters, flyers, and signage for live events.' },
  { title: 'Corporate Brochures', subtitle: 'Professional printed brochures for brand storytelling.' },
  { title: 'Promotional Merchandise', subtitle: 'Branded shirts, mugs, and giveaways.' },
  { title: 'Signage & Displays', subtitle: 'Large format printing for storefronts and exhibitions.' },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050710] text-slate-100">
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.16),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_22%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Our Portfolio</p>
            <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Projects that bring brands to life.</h1>
            <p className="mt-6 text-slate-300 leading-8">See how Cyrus Graphics transforms print campaigns, packaging, and brand experiences with thoughtful design and top-quality production.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="rounded-full bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Explore Services</Link>
              <Link href="/request-quote" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">Book a Project</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#06101a]/90 p-8 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-sky-500/40">
              <div className="h-56 rounded-[2rem] bg-gradient-to-br from-slate-800 via-[#050712] to-slate-900 p-6 text-slate-200">
                <div className="mb-4 inline-flex rounded-full bg-slate-900/70 px-3 py-2 text-xs uppercase tracking-[0.32em] text-sky-300">Featured</div>
                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-slate-400 leading-7">{item.subtitle}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300">Branding</span>
                <Link href="/contact" className="text-sm font-semibold text-sky-300 hover:text-white">See details →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
