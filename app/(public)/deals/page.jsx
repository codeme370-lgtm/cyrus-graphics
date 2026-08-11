import Link from 'next/link'
import { ArrowRight, BadgePercent, CheckCircle2, Clock3, Sparkles } from 'lucide-react'

const deals = [
  {
    title: 'Corporate Branding Bundle',
    oldPrice: 'GHS 2,800',
    newPrice: 'GHS 2,200',
    description: 'Logo design, business cards and company stationery package.',
    badge: 'Save 22%',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Event Signage Pack',
    oldPrice: 'GHS 1,600',
    newPrice: 'GHS 1,150',
    description: 'Flags, banners and directional signage for launches and events.',
    badge: 'Hot Deal',
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Packaging Starter Kit',
    oldPrice: 'GHS 3,200',
    newPrice: 'GHS 2,500',
    description: 'Label design, packaging mockups and retail-friendly print files.',
    badge: 'Limited',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
]

const perks = [
  'Fast turnaround for repeat orders',
  'Priority support for new design projects',
  'Custom pricing for bulk print runs',
  'Free mockup review before production',
]

export const metadata = {
  title: 'Deals - Cyrus Graphics',
  description: 'Explore current print and branding promotions from Cyrus Graphics.',
}

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-slate-900">
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">Current offers</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Creative deals & promotions</h1>
            <p className="mt-5 max-w-xl text-base text-slate-300">
              Save on branding, printing and packaging packages designed to help your business stand out.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16">
        <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            {deals.map((deal) => (
              <article key={deal.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.06)]">
                <div className="grid gap-0 md:grid-cols-[1.05fr_1.35fr]">
                  <div className="relative h-full min-h-[220px] overflow-hidden bg-slate-200">
                    <img src={deal.image} alt={deal.title} className="h-full w-full object-cover" />
                    <div className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
                      {deal.badge}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-amber-600">
                      <BadgePercent size={18} />
                      <span className="text-xs font-semibold uppercase tracking-[0.25em]">Limited time</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-slate-900">{deal.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{deal.description}</p>

                    <div className="mt-5 flex items-end gap-4">
                      <div>
                        <p className="text-sm text-slate-400 line-through">{deal.oldPrice}</p>
                        <p className="text-3xl font-bold text-slate-900">{deal.newPrice}</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                        <Clock3 size={14} /> Save now
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link href="/request-quote" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300">
                        Get quote <ArrowRight size={16} />
                      </Link>
                      <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100">
                        View products
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3 text-amber-700">
              <Sparkles size={18} />
              <p className="text-xs font-semibold uppercase tracking-[0.25em]">Why choose us</p>
            </div>

            <div className="mt-5 space-y-4">
              {perks.map((perk) => (
                <div key={perk} className="flex items-start gap-3 rounded-2xl bg-[#f7f6f3] p-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 size={14} />
                  </div>
                  <p className="text-sm leading-6 text-slate-700">{perk}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] bg-[#111111] p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">Need a custom quote?</p>
              <p className="mt-3 text-xl font-semibold">Tell us your project goal.</p>
              <Link href="/request-quote" className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-900">
                Request a quote <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
