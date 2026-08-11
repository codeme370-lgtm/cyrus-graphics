'use client'

import Link from 'next/link'
import { ArrowRight, Check, Gift, Palette, Search, Sparkles, Tag, TrendingUp } from 'lucide-react'

const brandCards = [
  {
    name: 'Brand Identity',
    title: 'Identity Kits',
    description: 'From logos to full brand systems for growing businesses.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    accent: 'from-amber-500/80 via-orange-500/70 to-yellow-500/80',
  },
  {
    name: 'Business Cards',
    title: 'Print Essentials',
    description: 'Premium cards, stationery and branded collateral for teams.',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    accent: 'from-violet-500/80 via-purple-500/70 to-fuchsia-600/80',
  },
  {
    name: 'Packaging',
    title: 'Packaging Design',
    description: 'Shelf-ready packaging and labels that elevate your product story.',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    accent: 'from-blue-500/80 via-cyan-500/70 to-sky-600/80',
  },
  {
    name: 'Signage',
    title: 'Point of Sale',
    description: 'Wayfinding, banners and signage designed to grab attention.',
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
    accent: 'from-emerald-500/80 via-teal-500/70 to-cyan-600/80',
  },
]

const featurePills = ['Branding', 'Packaging', 'Print', 'Digital Design', 'Corporate Identity', 'Event Materials']

export default function BrandsContent() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-slate-900">
      <section className="relative overflow-hidden bg-[#0d0d0f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.2),transparent_25%),radial-gradient(circle_at_left,rgba(168,85,247,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">Home / Brands</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Our Creative Brands</h1>
            <p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
              We help businesses express their identity through design-led solutions that look premium and work beautifully across print and digital touchpoints.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {featurePills.map((pill) => (
                <span key={pill} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">Design categories</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Creative solutions</h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 md:flex">
            <Search size={16} className="text-amber-500" /> Search designs
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {brandCards.map((item) => (
            <article key={item.name} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)]">
              <div className="relative h-60 overflow-hidden bg-slate-200">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
                <img src={item.image} alt={item.name} className="h-full w-full object-cover mix-blend-multiply opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">{item.name}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                <Link href="/products" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-amber-600">
                  See options <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-6 py-12 md:grid-cols-3">
          <div className="rounded-[24px] border border-slate-200 bg-[#f5f5f2] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <Palette size={20} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Brand-first thinking</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">We craft visual identities that feel premium and consistent across every channel.</p>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-[#f5f5f2] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Performance-driven design</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Our materials are optimized for conversion, awareness and strong business presentation.</p>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-[#f5f5f2] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <Tag size={20} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Flexible production</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Whether it is digital, print, packaging or signage, we tailor the right format for your audience.</p>
          </div>
        </div>
      </section>
    </main>
  )
}


