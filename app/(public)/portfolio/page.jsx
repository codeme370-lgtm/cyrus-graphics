import PortfolioGrid from '../../../components/PortfolioGrid';
import { portfolioItems } from '../../../lib/portfolioData';

export const metadata = {
  title: "Portfolio - Cyrus Graphics",
  description: "Explore Cyrus Graphics' portfolio of print design, packaging, and branding projects.",
  keywords: ["portfolio", "print design", "branding work", "Cyrus Graphics"],
};

export default async function PortfolioPage() {
  const data = { items: portfolioItems };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="relative overflow-hidden bg-[url('/cyrus-graphics-logo.svg')] bg-cover bg-right py-14">
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-neutral-600">Our Portfolio</p>
            <h1 className="mt-4 text-4xl font-semibold text-neutral-900 sm:text-5xl">Our Portfolio</h1>
            <p className="mt-4 text-neutral-700">Browse projects across logos, flyers, packaging, billboards and more — showcasing our print and branding work.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-20">
        <PortfolioGrid initialItems={data.items || []} />
      </section>
    </main>
  );
}
