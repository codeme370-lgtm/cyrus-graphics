import Link from "next/link";
import { Award, Users, Sparkles, ShieldCheck, Star } from "lucide-react";

export const metadata = {
    title: "About Cyrus Graphics - Design & Print Excellence",
    description: "Cyrus Graphics delivers premium print, packaging, branding, and design services for businesses.",
    keywords: ["Cyrus Graphics", "about", "print services", "branding", "packaging"],
};

const values = [
    { title: 'Design Excellence', desc: "We craft polished print and brand experiences that make an impression.", icon: Sparkles },
    { title: 'Quality Materials', desc: "Premium papers, finishes and packaging built to last.", icon: Award },
    { title: 'Fast Turnaround', desc: "Quick production with reliable delivery for every order.", icon: ShieldCheck },
    { title: 'Clear Communication', desc: "Transparent quotes and updates through every step.", icon: Users },
    { title: 'Customer Focus', desc: "Your brand goals guide every creative and production decision.", icon: Star },
    { title: 'Creative Support', desc: "Design guidance, file prep, and proofing from our expert team.", icon: Sparkles },
];

const team = [
    { name: 'Evelyn Clark', role: 'Founder & Creative Director', image: '/images/team/alex.jpg' },
    { name: 'Marcus Reed', role: 'Production Manager', image: '/images/team/sophia.jpg' },
    { name: 'Amina Yusuf', role: 'Brand Strategist', image: '/images/team/daniel.jpg' },
    { name: 'Rita Mensah', role: 'Customer Success Lead', image: '/images/team/emily.jpg' },
    { name: 'Samuel Ofori', role: 'Print Specialist', image: '/images/team/michael.jpg' },
    { name: 'Nadia Williams', role: 'Account Manager', image: '/images/team/olivia.jpg' },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#050712] text-slate-100">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_30%),linear-gradient(180deg,rgba(7,9,22,0.88),rgba(5,7,16,0.98))]" />
                <div className="relative mx-auto max-w-[1400px] px-6 py-16">
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
                        <div>
                            <p className="text-sm uppercase tracking-[0.28em] text-amber-400">ABOUT CYRUS GRAPHICS</p>
                            <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Designing Ideas. <span className="text-amber-400">Printing Excellence.</span></h1>
                            <p className="mt-6 max-w-2xl text-slate-300 leading-relaxed">Cyrus Graphics is a full-service print and branding studio. We combine creative design, premium production, and fast service to help businesses present their best.</p>

                            <div className="mt-8 flex gap-6 flex-wrap">
                                <div className="rounded-2xl bg-[#0b0f1a]/60 p-5">
                                    <div className="text-3xl font-bold text-white">2,500+</div>
                                    <p className="text-sm text-slate-400 mt-1">Projects Delivered</p>
                                </div>
                                <div className="rounded-2xl bg-[#0b0f1a]/60 p-5">
                                    <div className="text-3xl font-bold text-white">1,200+</div>
                                    <p className="text-sm text-slate-400 mt-1">Customers Served</p>
                                </div>
                                <div className="rounded-2xl bg-[#0b0f1a]/60 p-5">
                                    <div className="text-3xl font-bold text-white">10+</div>
                                    <p className="text-sm text-slate-400 mt-1">Years of Experience</p>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link href="/services" className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">Our Services</Link>
                                <Link href="/request-quote" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Request a Quote</Link>
                            </div>
                        </div>

                        <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                            <div className="relative rounded-[2rem] bg-[#06101b] p-8">
                                <div className="inline-flex rounded-full bg-amber-500/15 px-4 py-2 text-xs uppercase tracking-[0.32em] text-amber-300">Studio Expertise</div>
                                <h2 className="mt-6 text-3xl font-semibold text-white">Printing, packaging, branding and creative support in one place.</h2>
                                <p className="mt-4 text-slate-400 leading-7">From business cards and brochures to retail packaging and event signage, we deliver premium printed materials that support your brand story.</p>
                                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-[1.8rem] border border-white/10 bg-[#07111f] p-5">
                                        <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Fast Proofs</p>
                                        <p className="mt-3 text-white">Quick design review and approval so production starts sooner.</p>
                                    </div>
                                    <div className="rounded-[1.8rem] border border-white/10 bg-[#07111f] p-5">
                                        <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Premium Finish</p>
                                        <p className="mt-3 text-white">Choice of textures, coatings, and custom packaging options.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-[1400px] px-6 py-12">
                <h2 className="text-3xl font-semibold text-white mb-8">Our Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((v, i) => {
                        const Icon = v.icon;
                        return (
                            <div key={i} className="rounded-2xl border border-white/6 bg-[#071021] p-6">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-300 mb-4">
                                    <Icon />
                                </div>
                                <h4 className="font-semibold mb-2 text-white">{v.title}</h4>
                                <p className="text-sm text-slate-400">{v.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className="mx-auto max-w-[1400px] px-6 py-12">
                <h2 className="text-3xl font-semibold text-white mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {team.map((m, i) => (
                        <div key={i} className="rounded-2xl bg-[#071021] p-6 text-center">
                            <div className="mx-auto h-28 w-28 rounded-full bg-slate-800 overflow-hidden flex items-center justify-center mb-4">
                                <img src={m.image} alt={m.name} className="object-cover h-full w-full" />
                            </div>
                            <div className="text-sm font-semibold text-white">{m.name}</div>
                            <div className="text-xs text-slate-400">{m.role}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-8">
                <div className="bg-gradient-to-r from-amber-500/15 to-slate-900 py-8">
                    <div className="mx-auto max-w-[1400px] px-6 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex gap-8 items-center flex-wrap">
                            <div className="text-center">
                                <div className="text-2xl font-bold">10+</div>
                                <div className="text-sm opacity-90">Years of Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold">2,500+</div>
                                <div className="text-sm opacity-90">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold">500+</div>
                                <div className="text-sm opacity-90">Happy Clients</div>
                            </div>
                        </div>
                        <div>
                            <Link href="/request-quote" className="inline-flex items-center gap-2 rounded-full bg-slate-950/90 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">Request a Quote</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

