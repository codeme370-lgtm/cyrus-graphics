'use client'

import { Mail, Phone, MapPin, Send, MessageSquare, LifeBuoy, Headphones } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@cyrusgraphics.com",
    description: "Our customer team supports print enquiries."
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+233 24 860 8602",
    description: "Mon - Fri: 9:00 AM - 6:00 PM"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    details: "Chat with our production team",
    description: "Available during business hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Customer support available online",
    description: "Fast quote response via email or phone"
  }
];

const ContactPageClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder: hook up to API later
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#050714] text-slate-100">
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-6 py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">Contact Us</h1>
            <p className="text-slate-400 mt-3">Get in touch with Cyrus Graphics — we're here to help with print, design, and branding.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 items-start">
            {/* Left column: contact details */}
            <aside className="space-y-6">
              <div className="rounded-2xl bg-white p-6 text-slate-900 shadow">
                <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-yellow-500 mt-1">📍</div>
                    <div>
                      <p className="font-semibold">Visit Us</p>
                      <p className="text-slate-600">Accra, Ghana</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-yellow-500 mt-1">📞</div>
                    <div>
                      <p className="font-semibold">Call</p>
                      <p className="text-slate-600">+233 24 860 8602</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-yellow-500 mt-1">✉️</div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-slate-600">hello@cyrusgraphics.com</p>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-slate-600">
                    <p><span className="font-semibold">Hours:</span> Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 inline-flex items-center justify-center text-slate-700">f</a>
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 inline-flex items-center justify-center text-slate-700">in</a>
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 inline-flex items-center justify-center text-slate-700">ig</a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Middle column: form */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl bg-white p-8 shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Send a Message</h3>
                <p className="text-sm text-slate-600 mb-4">Fill out the form and we'll get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full px-4 py-3 rounded border border-slate-200 bg-white text-slate-900 focus:outline-none" />
                    <input name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="w-full px-4 py-3 rounded border border-slate-200 bg-white text-slate-900 focus:outline-none" />
                  </div>
                  <input name="phone" placeholder="Phone Number" className="w-full px-4 py-3 rounded border border-slate-200 bg-white text-slate-900 focus:outline-none" />
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Your Message" className="w-full px-4 py-3 rounded border border-slate-200 bg-white text-slate-900 focus:outline-none resize-none" />
                  <div className="flex items-center gap-3">
                    <button type="submit" className="inline-flex items-center gap-2 rounded bg-yellow-400 hover:bg-yellow-500 px-5 py-3 font-semibold text-slate-900">
                      Send Message
                    </button>
                    {submitted && <div className="text-sm text-emerald-600">Thanks — we'll get back to you soon.</div>}
                  </div>
                </form>
              </div>
            </div>

            {/* Right column: map */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow">
                <iframe
                  title="Cyrus Graphics location"
                  className="w-full h-96"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.123456789!2d-0.2083!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a1b1b1b1b1%3A0xabcdef1234567890!2sAccra!5e0!3m2!1sen!2sgh!4v1690000000000"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPageClient;
