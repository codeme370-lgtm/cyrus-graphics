export const metadata = {
  title: "Track Your Order - Cyrus Graphics",
  description: "Track the status of your printing order with Cyrus Graphics using your order number.",
  keywords: ["track order", "order status", "printing order", "Cyrus Graphics"],
};

export default function TrackOrderPage() {
  return (
    <main className="min-h-screen bg-[#050710] text-slate-100">
      <section className="py-16">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="rounded-[3rem] border border-white/10 bg-[#06101b]/90 p-10 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)]">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-400">Track Your Order</p>
            <h1 className="mt-4 text-5xl font-semibold text-white">Follow the progress of your print job in real time.</h1>
            <p className="mt-6 text-slate-300 leading-8">Enter your order number and email address to view the latest delivery status and expected completion date.</p>

            <form className="mt-10 grid gap-6 sm:grid-cols-2">
              <input placeholder="Order Number" className="rounded-3xl border border-white/10 bg-[#07101a] px-5 py-4 text-slate-100 outline-none" />
              <input type="email" placeholder="Email Address" className="rounded-3xl border border-white/10 bg-[#07101a] px-5 py-4 text-slate-100 outline-none" />
              <button className="sm:col-span-2 rounded-3xl bg-sky-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-sky-400">Track Order</button>
            </form>

            <div className="mt-12 rounded-[2rem] border border-white/10 bg-[#07131f] p-6">
              <h2 className="text-2xl font-semibold text-white">Popular order updates</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-[#08101e] p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Production</p>
                  <p className="mt-2 text-slate-300">Your files are being processed and proofed.</p>
                </div>
                <div className="rounded-3xl bg-[#08101e] p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Shipping</p>
                  <p className="mt-2 text-slate-300">Your printed materials are on the way to your address.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
