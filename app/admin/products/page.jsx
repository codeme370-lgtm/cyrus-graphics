import Link from 'next/link'

export const metadata = {
  title: "Manage Products - Admin",
  description: "Admin panel for managing product listings and inventory on Cyrus Graphics.",

  robots: {
    index: false,
    follow: false
  }
};

export default function AdminProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-amber-500">Dashboard & Products</p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-950">Products</h1>
              <p className="mt-2 text-sm text-slate-500">Browse, manage, and edit your catalog from one place.</p>
            </div>
            <Link
              href="/admin/products/add-product"
              className="inline-flex items-center justify-center rounded-3xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Add Product
            </Link>
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-10 text-center text-slate-700">
            <p className="text-xl font-semibold text-slate-950">Product management coming soon</p>
            <p className="mt-2 max-w-2xl mx-auto text-sm text-slate-500">This page is a placeholder for the full product catalog experience. Use the Add Product section to create new products in the admin panel.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
