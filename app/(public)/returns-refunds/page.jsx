export const metadata = {
  title: "Returns & Refunds - Cyrus Graphics",
  description: "Learn how Cyrus Graphics handles order returns, refunds, and customer satisfaction guarantees.",
  keywords: ["returns", "refunds", "policy", "Cyrus Graphics"],
};

const policies = [
  { title: '30-Day Returns', details: 'If your order arrives damaged or not as described, contact us within 30 days for a return or exchange.' },
  { title: 'Refund Process', details: 'Refunds are issued after we receive the returned items and verify the condition.' },
  { title: 'Shipping Policy', details: 'Return shipping may be covered for faulty items or incorrect orders.' },
];

export default function ReturnsRefundsPage() {
  return (
    <main className="min-h-screen bg-[#050710] text-slate-100">
      <section className="py-16">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-orange-400">Returns & Refunds</p>
            <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Our commitment to customer satisfaction.</h1>
            <p className="mt-6 text-slate-300 leading-8">We want every print order to meet your expectations, and we make returns and refunds easy when something goes wrong.</p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {policies.map((policy) => (
              <div key={policy.title} className="rounded-[2rem] border border-white/10 bg-[#06101a]/90 p-6">
                <h2 className="text-xl font-semibold text-white">{policy.title}</h2>
                <p className="mt-4 text-slate-300 leading-7">{policy.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
