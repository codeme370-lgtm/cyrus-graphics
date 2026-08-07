export const metadata = {
  title: "Pricing - Cyrus Graphics",
  description: "Compare Cyrus Graphics printing and packaging pricing packages for business cards, marketing materials, and brand launch kits.",
  keywords: ["pricing", "print pricing", "business cards", "packaging", "branding", "Cyrus Graphics"],
  openGraph: {
    title: "Pricing - Cyrus Graphics",
    description: "Find the right printing package for your brand, from business cards to large format signage.",
    url: "/pricing",
    siteName: "Cyrus Graphics",
    type: "website"
  }
};

const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || 'GHS';

const plans = [
  {
    name: 'Starter Print Kit',
    price: `${currency}1,150`,
    description: 'Perfect for new businesses needing business cards, flyers, and door hangers.',
    features: [
      '250 business cards',
      '500 flyers',
      'Full-color double side print',
      'Standard paper stock',
    ],
    cta: 'Choose Starter',
  },
  {
    name: 'Brand Launch Package',
    price: `${currency}2,650`,
    description: 'A complete set of brand collateral including stationery, packaging inserts, and marketing materials.',
    features: [
      'Business cards and letterheads',
      'Presentation folders',
      'Product labels',
      'Packaging design support',
    ],
    cta: 'Choose Launch',
  },
  {
    name: 'Retail Packaging Suite',
    price: `${currency}4,900`,
    description: 'Custom retail packaging, point-of-sale visuals, and promotional signage for stores.',
    features: [
      'Custom boxes and sleeves',
      'Labels & stickers',
      'Shelf talkers and posters',
      'Fast track production',
    ],
    cta: 'Choose Premium',
  },
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Pricing</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Affordable print packages for growing brands.</h1>
        <p className="mt-4 text-base leading-8 text-slate-400">Choose a package for business cards, marketing materials, or packaging with optional design and premium finishing upgrades.</p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <section key={plan.name} className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-lg shadow-black/40">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">{plan.name}</p>
            <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">{plan.cta}</button>
          </section>
        ))}
      </div>

      <section className="mt-20 rounded-[2.5rem] border border-slate-800 bg-slate-900/80 p-10 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.7)]">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Need a custom quote?</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Build a package designed specifically for your brand.</h2>
            <p className="mt-4 text-slate-400 leading-7">If your project needs custom dielines, packaging engineering, or large-format signage, our team will tailor the right solution and deliver a detailed estimate.</p>
          </div>
          <div className="space-y-4 rounded-3xl border border-amber-500/10 bg-slate-950/90 p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Flexible upgrades</p>
              <p className="mt-2 text-slate-300 leading-7">Switch to premium paper, matte or gloss lamination, custom foiling, and luxury packaging finishes.</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Rush production</p>
              <p className="mt-2 text-slate-300 leading-7">Need prints fast? Ask about accelerated proofing and delivery options.</p>
            </div>
            <button className="mt-4 w-full rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">Get a Custom Quote</button>
          </div>
        </div>
      </section>
    </main>
  );
}
