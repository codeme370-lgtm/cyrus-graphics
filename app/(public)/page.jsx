import Link from "next/link";
import { LayoutGrid, Megaphone, Package, PenTool, Printer, Sparkles, CheckCircle } from "lucide-react";
import { assets } from "@/assets/assets";

const services = [
  { title: 'Graphic Design', icon: PenTool, description: 'Logo, brochure, poster and identity design that brings your vision to life.' },
  { title: 'Printing Press', icon: Printer, description: 'High-quality print for flyers, business cards, brochures, and campaigns.' },
  { title: 'Branding', icon: Sparkles, description: 'Complete brand systems with packaging, stationery and marketing assets.' },
  { title: 'Large Format', icon: LayoutGrid, description: 'Banners, signage and displays for events, retail and outdoor impact.' },
  { title: 'Promotional Items', icon: Megaphone, description: 'Branded giveaways, packaging and merch for memorable campaigns.' },
  { title: 'Packaging', icon: Package, description: 'Custom boxes, labels and retail packaging with premium finishes.' },
];

const whyChoose = [
  'High-Quality Prints',
  'Fast Turnaround',
  'Creative Designs',
  'Customer Satisfaction',
  'Professional Team',
  'Affordable Pricing',
];

const recentProjects = [
  { title: 'Ad Design', image: assets.ban1 },
  { title: 'Printing', image: assets.ban2 },
  { title: 'Branding', image: assets.ban3 },
  { title: 'Packaging', image: assets.ban4 },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06070e] text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.1),_transparent_20%)]" />
        <div className="relative mx-auto max-w-[1440px] px-6 py-28 sm:py-32">
          <div className="grid gap-12 xl:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Cyrus Graphics</p>
              <h1 className="mt-5 text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                Designing Ideas. <span className="text-[#ffd32a]">Printing Excellence.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                Cyrus Graphics is your one-stop destination for creative graphic design and professional printing services delivered on time, every time.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/request-quote" className="inline-flex items-center justify-center rounded-full bg-[#ffd32a] px-10 py-4 text-sm font-semibold text-slate-950 shadow-[0_22px_68px_-30px_rgba(255,211,42,0.75)] transition hover:bg-[#ffce2d]">
                  Get a Quote
                </Link>
                <Link href="/portfolio" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-950/60 px-10 py-4 text-sm font-semibold text-slate-100 transition hover:bg-slate-950/80">
                  View Our Work
                </Link>
              </div>
              <div className="mt-14 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 px-7 py-8 shadow-[0_24px_60px_-40px_rgba(255,255,255,0.18)] backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Projects Delivered</p>
                  <p className="mt-4 text-3xl font-semibold text-white">2,500+</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 px-7 py-8 shadow-[0_24px_60px_-40px_rgba(255,255,255,0.18)] backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Satisfied Clients</p>
                  <p className="mt-4 text-3xl font-semibold text-white">500+</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[660px] overflow-hidden rounded-[3rem] border border-white/10 bg-slate-900/80 shadow-[0_44px_120px_-40px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-8 top-8 h-52 w-52 rounded-[2rem] bg-white/5 blur-3xl" />
                <div className="absolute right-8 top-16 h-48 w-48 rounded-[2rem] border border-white/10 bg-slate-950/75 blur-2xl" />
                <div className="absolute -left-6 bottom-10 h-40 w-40 rounded-[2rem] bg-white/10 shadow-[0_0_100px_0_rgba(255,255,255,0.08)] blur-xl" />
              </div>
              <div className="relative h-[560px] w-full overflow-hidden">
                <img
                  src={assets.ba4}
                  alt="Cyrus Graphics hero"
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 8px)'
                  }}
                />
              </div>
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 shadow-lg shadow-slate-950/30">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                    <span className="text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Trusted</p>
                    <p className="text-sm font-semibold">Studio Partner</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
                <div className="rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 backdrop-blur-xl shadow-xl shadow-slate-950/50">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Trusted Studio</p>
                  <p className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Professional print and packaging services for brands that want premium polish.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-400">Our Services</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Everything your brand needs in one print-ready studio.</h2>
          <p className="mt-4 text-slate-400">From graphic design and large format printing to packaging and promotional materials, our team delivers polished results for every project.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-slate-900/90">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-slate-400 leading-7">{service.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#07080f] py-20">
        <div className="absolute left-0 top-0 h-64 w-full bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.12),_transparent_28%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.32em] text-amber-400">Why Choose Cyrus Graphics?</p>
              <h2 className="mt-5 text-4xl font-semibold text-white">Professional print, powerful design, and a team that delivers every time.</h2>
              <p className="mt-6 text-slate-400 leading-8">We combine creative strategy, premium materials, and fast production so you can launch campaigns with confidence.</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="mt-1 rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                      <CheckCircle size={18} />
                    </div>
                    <p className="text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <img
                src={assets.ba3}
                alt="Cyrus Graphics project"
                className="h-[520px] w-full rounded-[2rem] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 rounded-b-[2rem] bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-amber-300">Creative team</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Expert guidance from brief to delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-amber-400">Recent Projects</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">See our recent print and branding work.</h2>
          </div>
          <Link href="/portfolio" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
            View Portfolio
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {recentProjects.map((project) => (
            <div key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-amber-400/30">
              <img src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Project</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-400">Creative print, packaging and branding work built to stand out in every campaign.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

