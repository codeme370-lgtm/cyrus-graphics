export const metadata = {
  title: "Request a Quote - Cyrus Graphics",
  description: "Submit your printing or branding project details to receive a custom quote from Cyrus Graphics.",
  keywords: ["request quote", "printing quote", "branding quote", "Cyrus Graphics"],
};

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen bg-[#050710] text-slate-100">
      <section className="py-16">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-orange-400">Request a Quote</p>
              <h1 className="mt-4 text-5xl font-semibold text-white">Get a tailored quote for your print or branding project.</h1>
              <p className="mt-6 max-w-2xl text-slate-300 leading-8">Tell us your project goals, quantity, and timeline — our team will respond with pricing and recommendations.</p>
            </div>
            <div className="rounded-[2.5rem] border border-white/10 bg-[#06101e]/90 p-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold text-white">Quote details</h2>
              <p className="mt-3 text-slate-400">Need help defining your print order? We’ll guide you through material, finish, and design options.</p>
              <div className="mt-8 space-y-4">
                <div className="rounded-3xl bg-[#07131d] p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Turnaround</p>
                  <p className="mt-2 text-white">Fast production options with same-day proofs.</p>
                </div>
                <div className="rounded-3xl bg-[#07131d] p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Support</p>
                  <p className="mt-2 text-white">Dedicated account support for every order.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[3rem] border border-white/10 bg-[#06101b]/90 p-8 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)]">
            <form className="grid gap-6 md:grid-cols-2">
              <input placeholder="Full Name" className="rounded-3xl border border-white/10 bg-[#07101a] px-5 py-4 text-slate-100 outline-none" />
              <input type="email" placeholder="Email Address" className="rounded-3xl border border-white/10 bg-[#07101a] px-5 py-4 text-slate-100 outline-none" />
              <input placeholder="Company / Brand" className="rounded-3xl border border-white/10 bg-[#07101a] px-5 py-4 text-slate-100 outline-none" />
              <input placeholder="Project Deadline" className="rounded-3xl border border-white/10 bg-[#07101a] px-5 py-4 text-slate-100 outline-none" />
              <textarea rows={6} placeholder="Project details and requirements" className="col-span-full rounded-[2rem] border border-white/10 bg-[#07101a] px-5 py-4 text-slate-100 outline-none resize-none" />
              <button type="submit" className="col-span-full rounded-3xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-orange-400">Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
