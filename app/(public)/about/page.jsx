import Link from "next/link";
import Image from "next/image";
import { Lightbulb, Award, Shield, Zap, Users } from "lucide-react";
import { assets } from "@/assets/assets";

export const metadata = {
    title: "About Us - Cyrus Graphics",
    description: "Learn about Cyrus Graphics, a creative design and printing company dedicated to delivering premium print solutions and branding services.",
    keywords: ["about us", "Cyrus Graphics", "design company", "print services"],
};

const coreValues = [
    { title: 'Creativity', icon: Lightbulb },
    { title: 'Quality', icon: Award },
    { title: 'Integrity', icon: Shield },
    { title: 'Innovation', icon: Zap },
    { title: 'Customer Focus', icon: Users },
];

const team = [
    { name: 'Richard N.', role: 'Creative Director', image: assets.profile_pic1 },
    { name: 'Melissa A.', role: 'Production Lead', image: assets.profile_pic2 },
    { name: 'Jason T.', role: 'Design Specialist', image: assets.profile_pic3 },
    { name: 'Emelia A.', role: 'Account Manager', image: assets.profile_pic1 },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#06070e] text-slate-100">
            {/* Hero Section with Banner */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={assets.ba4}
                        alt="Cyrus Graphics storefront"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 py-20 sm:py-32 lg:py-40">
                    <div className="space-y-4 sm:space-y-6">
                        <nav className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                            <Link href="/" className="hover:text-white transition">Home</Link>
                            <span>/</span>
                            <span className="text-amber-400">About Us</span>
                        </nav>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">About Us</h1>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Who We Are</h2>
                        <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                            Cyrus Graphics is a creative design and printing company dedicated to transforming brands through innovative design and premium print solutions.
                        </p>
                        <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                            With a passion for creativity, we combine cutting-edge design with top-quality printing to deliver outstanding results. Our team is committed to bringing your vision to life with precision, creativity, technology and unparalleled materials to exceed your expectations.
                        </p>
                    </div>
                    <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={assets.ba1}
                            alt="Team working on design and printing"
                            className="w-full h-64 sm:h-80 object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-16">
                <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Mission</h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        To provide high-quality graphic design and printing services that help businesses strengthen their brand presence and communicate their message effectively. We believe in delivering exceptional results that inspire, engage, and drive success for our clients.
                    </p>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-16">
                <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Vision</h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        To be the leading creative design and printing company in Africa, known for our innovation, quality, and customer-centric approach. We aspire to empower businesses with creative solutions that drive growth and create lasting impact in their industries.
                    </p>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">Core Values</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                    {coreValues.map((value, i) => {
                        const Icon = value.icon;
                        return (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="bg-amber-500/15 p-4 sm:p-6 rounded-full mb-3 sm:mb-4">
                                    <Icon size={24} className="text-amber-400 sm:size-32" />
                                </div>
                                <h4 className="text-white font-semibold text-sm sm:text-base">{value.title}</h4>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {team.map((member, i) => (
                        <div key={i} className="text-center">
                            <div className="mb-3 sm:mb-4 rounded-lg sm:rounded-xl overflow-hidden bg-slate-800 h-48 sm:h-64 flex items-center justify-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="text-white font-semibold text-sm sm:text-lg">{member.name}</h4>
                            <p className="text-slate-400 text-xs sm:text-sm mt-1">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-20">
                <div className="bg-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-12 md:p-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-1 sm:mb-2">850+</div>
                            <p className="text-slate-300 text-xs sm:text-sm">Projects Delivered</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-1 sm:mb-2">600+</div>
                            <p className="text-slate-300 text-xs sm:text-sm">Happy Clients</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-1 sm:mb-2">10+</div>
                            <p className="text-slate-300 text-xs sm:text-sm">Years Experience</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-1 sm:mb-2">25+</div>
                            <p className="text-slate-300 text-xs sm:text-sm">Team Members</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

