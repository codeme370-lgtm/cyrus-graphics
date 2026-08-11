const categories = [
  {
    name: 'All Products',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    accent: 'from-amber-400/90 via-orange-500/80 to-yellow-500/80',
  },
  {
    name: 'Invitation Cards',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    accent: 'from-fuchsia-500/80 via-purple-500/80 to-violet-600/80',
  },
  {
    name: 'Business Cards',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    accent: 'from-sky-500/80 via-cyan-500/80 to-indigo-600/80',
  },
  {
    name: 'Roll-up Banners',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    accent: 'from-emerald-500/80 via-teal-500/80 to-cyan-600/80',
  },
  {
    name: 'Promotional Gifts',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    accent: 'from-rose-500/80 via-pink-500/80 to-orange-600/80',
  },
  {
    name: 'Office Stationery',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
    accent: 'from-lime-500/80 via-emerald-500/80 to-green-600/80',
  },
  {
    name: 'Custom Prints',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
    accent: 'from-red-500/80 via-orange-500/80 to-yellow-500/80',
  },
  {
    name: 'Corporate Branding',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    accent: 'from-violet-500/80 via-indigo-500/80 to-sky-600/80',
  },
]

const productRows = [
  { name: 'Information Cards', price: 'From GHS 1,500', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80' },
  { name: 'Business Cards', price: 'From GHS 600', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' },
  { name: 'Roll Up Banner', price: 'From GHS 2,100', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Mug Printing', price: 'From GHS 2,500', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80' },
  { name: 'Pens Printing', price: 'From GHS 1,500', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80' },
  { name: 'Notepads', price: 'From GHS 1,500', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80' },
  { name: 'ID Cards', price: 'From GHS 1,300', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80' },
  { name: 'Stickers', price: 'From GHS 900', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80' },
]

export const metadata = {
  title: 'Products - Cyrus Graphics',
  description: 'Browse Cyrus Graphics product categories and custom print solutions.',
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-900">
      <header className="border-b border-slate-200 bg-[#0e0e0f] text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500 text-sm font-black text-black">
              CG
            </div>
            <div>
              <div className="text-xl font-black uppercase tracking-wide">Cyrus</div>
              <div className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.45em] text-amber-400">
                Graphics
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 lg:flex">
            <a href="/" className="transition hover:text-white">Home</a>
            <a href="/about" className="transition hover:text-white">About</a>
            <a href="/services" className="transition hover:text-white">Services</a>
            <a href="/portfolio" className="transition hover:text-white">Portfolio</a>
            <a href="/pricing" className="transition hover:text-white">Pricing</a>
            <a href="/blog" className="transition hover:text-white">Blog</a>
            <a href="/products" className="font-semibold text-white">Our Products</a>
            <a href="/contact" className="transition hover:text-white">Contact</a>
          </nav>

          <button className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-300">
            Get a Quote
          </button>
        </div>
      </header>

      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,10,12,0.65), rgba(10,10,12,0.72)), url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-24 md:py-28">
          <div className="max-w-2xl text-white">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-slate-300">Home / Products</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Products</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:py-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-slate-900">Categories</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((item, index) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover mix-blend-multiply opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-slate-800">{item.name}</h3>
                {index === 0 ? (
                  <p className="mt-2 text-xs text-slate-500">View all our print solutions</p>
                ) : (
                  <p className="mt-2 text-xs text-slate-500">From {index + 1} options</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productRows.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(15,23,42,0.12)]"
            >
              <div className="h-56 overflow-hidden bg-slate-200">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-slate-800">{product.name}</h3>
                <p className="mt-2 text-sm font-medium text-amber-600">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
