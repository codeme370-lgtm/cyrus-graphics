import Link from "next/link";
import { assets } from "@/assets/assets";

export const metadata = {
  title: "Services - Cyrus Graphics",
  description: "Explore Cyrus Graphics' full range of printing, branding, packaging, and design services.",
  keywords: ["printing services", "branding", "design services", "Cyrus Graphics", "packaging"],
};

const sidebarItems = [
  'Graphic Design',
  'Printing Press',
  'Branding',
  'Large Format Printing',
  'Promotional Items',
  'Packaging',
];

const serviceCards = [
  { title: 'Logo Design', subtitle: 'Unique and creative logos', image: assets.ban1 },
  { title: 'Flyer Design', subtitle: 'Eye-catching flyer layouts', image: assets.ban2 },
  { title: 'Poster Design', subtitle: 'Professional poster designs', image: assets.ban3 },
  { title: 'Business Cards', subtitle: 'Premium business card concepts', image: assets.ban4 },
  { title: 'Brochure Design', subtitle: 'Tri-fold, bi-fold and more', image: assets.ban5 },
  { title: 'Social Media Designs', subtitle: 'Engaging social media creatives', image: assets.ba1 },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-100 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,209,58,0.18),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_28%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20">
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Our Services</p>
              <div className="space-y-3">
                <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">Our Services</h1>
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                  <span>Home</span>
                  <span className="text-slate-500">/</span>
                  <span>Services</span>
                </div>
              </div>
              <p className="max-w-xl text-lg leading-8 text-slate-300">We offer a wide range of creative and printing services tailored to meet your needs, from design concepts to production-ready files and finished print materials.</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.85)]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.2),transparent_40%)] pointer-events-none" />
              <img src={assets.ba4} alt="Printing process" className="h-[280px] w-full rounded-[1.5rem] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <aside className="rounded-[2rem] border border-slate-200/10 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.25)]">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Services</p>
            <div className="mt-6 space-y-3">
              {sidebarItems.map((item, index) => (
                <button
                  key={item}
                  className={`w-full rounded-3xl px-5 py-4 text-left text-sm font-semibold transition ${index === 0 ? 'bg-slate-950 text-white shadow-[0_10px_30px_-20px_rgba(15,23,42,0.5)]' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {serviceCards.map((card) => (
                <div key={card.title} className="flex flex-col overflow-hidden rounded-[2rem] border border-slate-200/10 bg-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.25)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_-35px_rgba(15,23,42,0.25)]">
                  <div className="relative h-52 overflow-hidden">
                    <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                    <p className="mt-3 text-slate-500">{card.subtitle}</p>
                    <Link href="/request-quote" className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
                      Explore
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[2.5rem] bg-slate-950 px-8 py-10 text-white shadow-[0_40px_120px_-40px_rgba(15,23,42,0.55)]">
              <div className="grid gap-6 lg:grid-cols-[1.5fr_0.7fr] lg:items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Custom service</p>
                  <h2 className="mt-4 text-3xl font-semibold">Need a custom design or print?</h2>
                  <p className="mt-3 max-w-2xl text-slate-300">Our team is ready to bring your ideas to life with tailored creative and production solutions.</p>
                </div>
                <div className="flex items-center justify-start lg:justify-end">
                  <Link href="/request-quote" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
