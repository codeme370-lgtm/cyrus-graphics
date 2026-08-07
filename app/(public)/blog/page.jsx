import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog - Cyrus Graphics",
  description: "Read the latest printing, branding, and design insights from Cyrus Graphics.",
  keywords: ["blog", "printing tips", "branding advice", "Cyrus Graphics"],
};

const posts = [
  { title: 'How to Choose the Best Print Finish for Your Brand', excerpt: 'Discover which paper, coating, and finishing options will give your print materials the most impact.', tag: 'Design' },
  { title: 'Top 5 Packaging Trends for 2026', excerpt: 'From sustainable materials to bold colors, these packaging trends are shaping the market.', tag: 'Packaging' },
  { title: 'A Guide to Effective Business Card Design', excerpt: 'Learn how to design business cards that feel premium and leave a lasting impression.', tag: 'Branding' },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050710] text-slate-100">
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_22%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-orange-400">Latest Insights</p>
            <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Design, packaging and print stories from Cyrus Graphics.</h1>
            <p className="mt-6 text-slate-300 leading-8">Stay informed with practical advice, trend updates and ideas for better marketing materials.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[2.5rem] border border-white/10 bg-[#06101a]/90 p-8 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-orange-500/40">
              <span className="inline-flex rounded-full bg-orange-500/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-orange-300">{post.tag}</span>
              <h2 className="mt-6 text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-4 text-slate-400 leading-7">{post.excerpt}</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-white">
                Read article <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
