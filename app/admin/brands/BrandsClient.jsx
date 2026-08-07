'use client'

import { useMemo, useState } from 'react'
import {
  CheckCircle,
  Circle,
  Filter,
  Search,
  Sparkles,
  Tag,
  ToggleLeft,
  ToggleRight,
  ChevronDown,
  Eye,
  MoreHorizontal,
} from 'lucide-react'

const initialBrands = [
  { id: 'brand-01', name: 'Apple', products: 24, status: 'Active', featured: true },
  { id: 'brand-02', name: 'Samsung', products: 17, status: 'Active', featured: true },
  { id: 'brand-03', name: 'Sony', products: 11, status: 'Inactive', featured: false },
  { id: 'brand-04', name: 'Dell', products: 14, status: 'Active', featured: true },
  { id: 'brand-05', name: 'HP', products: 9, status: 'Active', featured: false },
  { id: 'brand-06', name: 'Xiaomi', products: 7, status: 'Inactive', featured: false },
  { id: 'brand-07', name: 'ASUS', products: 20, status: 'Active', featured: true },
  { id: 'brand-08', name: 'Logitech', products: 8, status: 'Active', featured: false },
]

const statusOptions = ['All Statuses', 'Active', 'Inactive']

export default function AdminBrandsClient() {
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Statuses')
  const [brands, setBrands] = useState(initialBrands)

  const filteredBrands = useMemo(() => {
    return brands.filter((brand) => {
      const matchesQuery = brand.name.toLowerCase().includes(query.toLowerCase())
      const matchesStatus = statusFilter === 'All Statuses' || brand.status === statusFilter
      return matchesQuery && matchesStatus
    })
  }, [brands, query, statusFilter])

  const totalBrands = brands.length
  const activeBrands = brands.filter((brand) => brand.status === 'Active').length
  const inactiveBrands = brands.filter((brand) => brand.status === 'Inactive').length
  const featuredBrands = brands.filter((brand) => brand.featured).length
  const totalProducts = brands.reduce((sum, brand) => sum + brand.products, 0)

  const toggleFeatured = (id) => {
    setBrands((current) =>
      current.map((brand) =>
        brand.id === id ? { ...brand, featured: !brand.featured } : brand
      )
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Brand management</p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-900">Manage all brands</h1>
              <p className="mt-4 max-w-2xl text-slate-500">
                View and control brand visibility, featured status, and product coverage across your store.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-3 text-sm text-amber-700">
              <Sparkles size={18} className="text-amber-500" />
              Brand insights
            </div>
          </div>

          <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <StatCard label="Total Brands" value={totalBrands} icon={<Tag size={20} className="text-amber-500" />} />
            <StatCard label="Active Brands" value={activeBrands} icon={<CheckCircle size={20} className="text-emerald-500" />} />
            <StatCard label="Inactive Brands" value={inactiveBrands} icon={<Circle size={20} className="text-slate-400" />} />
            <StatCard label="Total Products" value={totalProducts} icon={<Filter size={20} className="text-sky-500" />} />
          </div>

          <section className="mt-10 rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3">
                <Search size={18} className="text-slate-500" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search brands"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
                  <Filter size={16} />
                  Status
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white px-4 py-3">
                  <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value)}
                    className="bg-transparent text-sm text-slate-900 outline-none"
                  >
                    {statusOptions.map((option) => (
                      <option key={option} value={option} className="bg-white text-slate-900">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-white">
              <table className="min-w-full border-collapse text-left text-sm text-slate-900">
                <thead className="bg-slate-100 text-xs uppercase tracking-[0.28em] text-slate-500">
                  <tr>
                    <th className="px-6 py-4 font-medium text-slate-500">#</th>
                    <th className="px-6 py-4 font-medium text-slate-500">Brand</th>
                    <th className="px-6 py-4 font-medium text-slate-500">Products</th>
                    <th className="px-6 py-4 font-medium text-slate-500">Status</th>
                    <th className="px-6 py-4 font-medium text-slate-500">Featured</th>
                    <th className="px-6 py-4 font-medium text-slate-500 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredBrands.map((brand, index) => (
                    <tr key={brand.id} className="bg-white transition hover:bg-slate-50">
                      <td className="whitespace-nowrap px-6 py-5 text-slate-500">{index + 1}</td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 ring-1 ring-amber-200">
                            {brand.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">{brand.name}</p>
                            <p className="text-xs text-slate-500">Top electronics brand</p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-5 text-slate-700">{brand.products}</td>
                      <td className="whitespace-nowrap px-6 py-5">
                        <span className={brand.status === 'Active' ? 'rounded-full bg-emerald-100 px-3 py-1 text-emerald-700' : 'rounded-full bg-slate-100 px-3 py-1 text-slate-500'}>
                          {brand.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-5">
                        <button
                          onClick={() => toggleFeatured(brand.id)}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-amber-400"
                        >
                          {brand.featured ? <ToggleRight size={16} className="text-amber-500" /> : <ToggleLeft size={16} className="text-slate-500" />}
                          {brand.featured ? 'Featured' : 'Off'}
                        </button>
                      </td>
                      <td className="px-6 py-5 text-right text-slate-500">
                        <div className="inline-flex items-center justify-end gap-2">
                          <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-amber-400">
                            <Eye size={16} /> View
                          </button>
                          <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-amber-400">
                            <MoreHorizontal size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredBrands.length === 0 && (
              <div className="mt-6 rounded-[22px] border border-slate-200 bg-white px-6 py-10 text-center text-slate-500">
                No brands match your filters.
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

function StatCard({ label, value, icon }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-100 text-slate-700">
          {icon}
        </div>
      </div>
    </div>
  )
}
