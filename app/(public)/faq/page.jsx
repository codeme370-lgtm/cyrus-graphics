export const metadata = {
  title: "FAQ - Cyrus Graphics",
  description: "Find answers to frequently asked questions about printing, orders, and delivery at Cyrus Graphics.",
  keywords: ["faq", "printing questions", "order questions", "Cyrus Graphics"],
};

const faqs = [
  { question: 'How do I request a quote?', answer: 'Use the Request a Quote page or send us a message through the contact form.' },
  { question: 'What are your delivery times?', answer: 'Delivery depends on the product type and location, but most orders ship within 3-5 business days.' },
  { question: 'Can you help with artwork setup?', answer: 'Yes. Our design team can prepare files or review your existing artwork to ensure print-ready quality.' },
  { question: 'Do you offer rush printing?', answer: 'We offer fast-track production options for urgent orders — ask our team for availability.' },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#050710] text-slate-100">
      <section className="py-16">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-orange-400">FAQ</p>
            <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Frequently asked questions about our printing services.</h1>
            <p className="mt-6 text-slate-300 leading-8">If you need further help, our support team is ready to answer your questions.</p>
          </div>

          <div className="mt-16 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-[2rem] border border-white/10 bg-[#06101a]/90 p-6">
                <summary className="cursor-pointer text-lg font-semibold text-white">{faq.question}</summary>
                <p className="mt-4 text-slate-300 leading-7">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
