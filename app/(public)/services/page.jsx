import Link from "next/link";

export const metadata = {
  title: "Services - Cyrus Graphics",
  description: "Explore Cyrus Graphics' full range of printing, branding, packaging, and design services.",
  keywords: ["printing services", "branding", "design services", "Cyrus Graphics", "packaging"],
};

const services = [
  { title: 'Graphic Design', description: 'Brand identities, brochures, posters, and digital assets with creative precision.', icon: '🎨' },
  { title: 'Business Cards', description: 'Premium printed business cards that make a strong first impression.', icon: '💼' },
  { title: 'Packaging', description: 'Custom packaging solutions that elevate your product presence.', icon: '📦' },
  { title: 'Large Format', description: 'Banners, signage, and displays for events, retail, and outdoor impact.', icon: '📣' },
  { title: 'Promotional Items', description: 'Branded giveaways, apparel, and merch for memorable campaigns.', icon: '🎁' },
  { title: 'Digital Printing', description: 'Fast, full-color printing for flyers, brochures, and marketing collateral.', icon: '🖨️' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#07070c] text-slate-100">
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.16),_transparent_20%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.14),_transparent_24%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-orange-400">Our Services</p>
              <h1 className="text-5xl font-semibold text-white sm:text-6xl">Printing and branding services built for growing businesses.</h1>
              <p className="max-w-3xl text-slate-300 leading-8">From brand identity to finished packaging, Cyrus Graphics delivers polished print and digital design solutions that help businesses stand out.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/request-quote" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/10 transition hover:bg-orange-400">Request a Quote</Link>
                <Link href="/portfolio" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">View Portfolio</Link>
              </div>
            </div>
            <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Featured services</p>
              <div className="mt-8 grid gap-4">
                {services.slice(0, 3).map((service) => (
                  <div key={service.title} className="rounded-3xl border border-white/10 bg-[#06101c] p-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-500/15 text-2xl">{service.icon}</div>
                    <h2 className="mt-5 text-xl font-semibold text-white">{service.title}</h2>
                    <p className="mt-3 text-slate-300">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-14">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-orange-400">What we offer</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">A complete printing studio for every project.</h2>
          <p className="mt-4 max-w-3xl mx-auto text-slate-400">Whether you need premium packaging, event signage, or a fresh brand identity, our team handles each project with quality and speed.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#050710]/90 p-8 transition hover:-translate-y-1 hover:border-orange-500/40 hover:bg-[#080a12]">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-500/10 text-3xl">{service.icon}</div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-slate-400 leading-7">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-20">
        <div className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#08101d]/90 to-[#05060b]/90 p-10 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)]">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white">Ready to start your next print project?</h2>
              <p className="mt-4 text-slate-400 leading-8">Share your brief and we’ll build a tailored solution for your business, event, or campaign.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link href="/request-quote" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">Request a Quote</Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
