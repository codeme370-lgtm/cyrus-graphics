'use client'

import { useEffect, useMemo, useState } from 'react'
import { format } from 'date-fns'
import { RefreshCcw, Search } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Loading from '@/components/Loading'

export default function AdminCategoriesClient() {
  const [categories, setCategories] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const fetchCategories = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('/api/store/category')
      setCategories(data.categories || [])
    } catch (error) {
      toast.error(error?.response?.data?.error || error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories
    return categories.filter((category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.slug.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [categories, searchQuery])

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      await fetchCategories()
      toast.success('Categories refreshed')
    } catch (error) {
      toast.error(error?.response?.data?.error || error.message)
    } finally {
      setRefreshing(false)
    }
  }

  return loading ? (
    <Loading />
  ) : (
    <div className="min-h-screen bg-slate-50 text-slate-900 mb-28">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Category Management</p>
            <h1 className="text-3xl font-semibold text-slate-900 mt-2">Product Categories</h1>
            <p className="mt-3 text-slate-600 max-w-2xl leading-7">
              Review the marketplace category catalog, search by name or slug, and keep your product taxonomy aligned.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCcw size={16} />
              {refreshing ? 'Refreshing' : 'Refresh'}
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Total categories</p>
            <p className="mt-4 text-4xl font-semibold text-slate-900">{categories.length}</p>
            <p className="mt-2 text-sm text-slate-500">Live category catalog for the marketplace.</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Latest category</p>
            <p className="mt-4 text-2xl font-semibold text-slate-900">{categories[0]?.name || 'No categories yet'}</p>
            <p className="mt-2 text-sm text-slate-500">Latest entry added to the category catalog.</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Search</p>
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
              <Search size={16} className="text-slate-500" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search categories by name or slug"
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>
            <p className="mt-2 text-sm text-slate-500">Filtering {filteredCategories.length} of {categories.length} categories.</p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Category Catalog</h2>
              <p className="text-sm text-slate-500">Browse all product categories and metadata.</p>
            </div>
            <div className="text-sm text-slate-500">
              Updated {categories.length ? format(new Date(categories[0].createdAt), 'PPP') : 'never'}
            </div>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white">
            <table className="min-w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-5 py-4 uppercase tracking-[0.14em] text-xs">Category</th>
                  <th className="px-5 py-4 uppercase tracking-[0.14em] text-xs">Slug</th>
                  <th className="px-5 py-4 uppercase tracking-[0.14em] text-xs">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category) => (
                    <tr key={category.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 font-medium text-slate-900">{category.name}</td>
                      <td className="px-5 py-4 text-slate-500">{category.slug}</td>
                      <td className="px-5 py-4 text-slate-500">{format(new Date(category.createdAt), 'PP')}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="px-5 py-20 text-center text-slate-500">
                      No categories match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
