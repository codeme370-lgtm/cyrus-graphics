import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export const metadata = {
  title: "Testimonials - Cyrus Graphics",
  description: "See what customers are saying about their print and branding experience with Cyrus Graphics.",
  keywords: ["testimonials", "customer reviews", "Cyrus Graphics"],
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#050710] text-slate-100">
      <section className="py-16">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-orange-400">Our Clients</p>
          <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Trusted by brands that want premium print and design.</h1>
          <p className="mt-6 text-slate-300 leading-8">Read how our team delivered standout print experiences and faster production for businesses across industries.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-20">
        <TestimonialsCarousel />
      </section>
    </main>
  );
}
