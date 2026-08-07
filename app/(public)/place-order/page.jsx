import Link from "next/link";

export const metadata = {
  title: "Place an Order - Cyrus Graphics",
  description: "Place a new printing order with Cyrus Graphics and choose the best production options for your brand.",
  keywords: ["place order", "printing order", "Cyrus Graphics", "order print"],
};

const steps = [
  { title: 'Choose Your Service', description: 'Select the printing or branding service you need.' },
  { title: 'Share Your Brief', description: 'Provide artwork details, quantities, and timeline.' },
  { title: 'Approve Proofs', description: 'Review digital proofs and request refinements.' },
  { title: 'Receive Your Order', description: 'We print, pack and deliver your finished materials.' },
];

export default function PlaceOrderPage() {
  return (
    <main className="min-h-screen bg-[#050710] text-slate-100">
      <section className="py-16">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-orange-400">Place an Order</p>
              <h1 className="mt-4 text-5xl font-semibold text-white">Launch your printing order in four simple steps.</h1>
              <p className="mt-6 max-w-2xl text-slate-300 leading-8">Cyrus Graphics makes it easy to order business cards, packaging, branding materials, and promotional print with expert support at every stage.</p>
            </div>
            <div className="rounded-[2.5rem] border border-white/10 bg-[#06101e]/90 p-8">
              <h2 className="text-2xl font-semibold text-white">Order support</h2>
              <p className="mt-4 text-slate-400">Need help choosing the right print option? Our production advisors are ready to assist.</p>
              <div className="mt-8 space-y-4">
                <div className="rounded-3xl bg-[#07131d] p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Fast Turnaround</p>
                  <p className="mt-2 text-white">Quick proofs and reliable delivery.</p>
                </div>
                <div className="rounded-3xl bg-[#07131d] p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Flexible Quantities</p>
                  <p className="mt-2 text-white">Small runs and large orders both welcome.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 xl:grid-cols-2">
            <div className="rounded-[3rem] border border-white/10 bg-[#06101b]/90 p-8 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-3xl font-semibold text-white">How it works</h2>
              <div className="mt-8 space-y-6">
                {steps.map((step, index) => (
                  <div key={step.title} className="rounded-[2rem] border border-white/10 bg-[#07101f] p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-500 text-xl font-semibold text-white">{index + 1}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        <p className="mt-2 text-slate-400">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[3rem] border border-white/10 bg-[#06101b]/90 p-8 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-3xl font-semibold text-white">Start a new order</h2>
              <p className="mt-4 text-slate-400">Select your product type and share your project details to receive a custom proposal.</p>
              <div className="mt-8 space-y-4">
                <button className="w-full rounded-3xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-orange-400">Order Business Cards</button>
                <button className="w-full rounded-3xl bg-slate-900/90 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">Order Packaging</button>
                <button className="w-full rounded-3xl bg-slate-900/90 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">Order Signage</button>
              </div>
              <div className="mt-10 rounded-3xl bg-[#07131d] p-6 text-slate-300">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Need a custom solution?</p>
                <p className="mt-3">Reach out and we’ll create the perfect print package for your campaign.</p>
                <Link href="/contact" className="mt-6 inline-flex items-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">Contact our team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
