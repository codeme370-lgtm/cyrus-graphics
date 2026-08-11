'use client'

import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Eye,
  FileText,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Sparkles,
  Trash2,
} from 'lucide-react'

const initialPosts = [
  {
    id: 'post-01',
    title: '5 Tips for a Perfect Business Card Design',
    category: 'Design Tips',
    status: 'Published',
    date: 'May 10, 2024',
    views: 1832,
  },
  {
    id: 'post-02',
    title: 'Choosing the Right Paper for Printing',
    category: 'Printing Tips',
    status: 'Published',
    date: 'May 9, 2024',
    views: 1420,
  },
  {
    id: 'post-03',
    title: 'Branding Your Business with the Right Visual Identity',
    category: 'Branding',
    status: 'Published',
    date: 'May 8, 2024',
    views: 1865,
  },
  {
    id: 'post-04',
    title: 'How to Prepare Files for Professional Printing',
    category: 'Guide',
    status: 'Published',
    date: 'May 7, 2024',
    views: 2320,
  },
  {
    id: 'post-05',
    title: 'Enhancing Customer Trust Through Packaging Design',
    category: 'Packaging',
    status: 'Draft',
    date: 'May 6, 2024',
    views: 508,
  },
  {
    id: 'post-06',
    title: 'Modern Billboard Signage Ideas for Retail Stores',
    category: 'Marketing',
    status: 'Scheduled',
    date: 'May 14, 2024',
    views: 760,
  },
]

const categoryOptions = ['All Categories', 'Design Tips', 'Printing Tips', 'Branding', 'Guide', 'Packaging', 'Marketing']
const statusOptions = ['All Statuses', 'Published', 'Draft', 'Scheduled']

export default function BlogPostsClient() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All Categories')
  const [status, setStatus] = useState('All Statuses')
  const [posts, setPosts] = useState(initialPosts)

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesQuery =
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === 'All Categories' || post.category === category
      const matchesStatus = status === 'All Statuses' || post.status === status
      return matchesQuery && matchesCategory && matchesStatus
    })
  }, [category, posts, query, status])

  const totalPosts = posts.length
  const publishedPosts = posts.filter((post) => post.status === 'Published').length
  const draftPosts = posts.filter((post) => post.status === 'Draft').length
  const scheduledPosts = posts.filter((post) => post.status === 'Scheduled').length
  const totalViews = posts.reduce((sum, post) => sum + post.views, 0)

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.04)] md:p-8">
          <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">Blog Management</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Manage blog posts</h1>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1d2736] px-4 py-3 text-sm font-medium text-white shadow-lg shadow-slate-200 transition hover:bg-[#0f172a]">
              <Plus size={18} />
              Add New Post
            </button>
          </header>

          <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Total Posts" value={totalPosts} tone="slate" icon={<FileText size={18} />} />
            <StatCard label="Published" value={publishedPosts} tone="emerald" icon={<CheckCircle2 size={18} />} />
            <StatCard label="Draft" value={draftPosts} tone="amber" icon={<Clock3 size={18} />} />
            <StatCard label="Total Views" value={formatViews(totalViews)} tone="violet" icon={<Eye size={18} />} />
          </section>

          <section className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-4 md:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <Search size={18} className="text-slate-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search blog posts"
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <FilterSelect label="Category" value={category} onChange={setCategory} options={categoryOptions} />
                <FilterSelect label="Status" value={status} onChange={setStatus} options={statusOptions} />
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left text-sm text-slate-700">
                  <thead className="bg-slate-100 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    <tr>
                      <th className="px-5 py-4">Title</th>
                      <th className="px-5 py-4">Category</th>
                      <th className="px-5 py-4">Status</th>
                      <th className="px-5 py-4">Date</th>
                      <th className="px-5 py-4">Views</th>
                      <th className="px-5 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredPosts.map((post) => (
                      <tr key={post.id} className="transition hover:bg-slate-50">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 text-xs font-semibold text-white">
                              {post.title.slice(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">{post.title}</p>
                              <p className="text-xs text-slate-500">Cyrus Graphics</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-slate-600">{post.category}</td>
                        <td className="px-5 py-4">
                          <span className={getStatusBadge(post.status)}>{post.status}</span>
                        </td>
                        <td className="px-5 py-4 text-slate-600">{post.date}</td>
                        <td className="px-5 py-4 text-slate-600">{formatViews(post.views)}</td>
                        <td className="px-5 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                              <Pencil size={14} />
                              Edit
                            </button>
                            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                              <Eye size={14} />
                              View
                            </button>
                            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-rose-200 hover:text-rose-600">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredPosts.length === 0 && (
                <div className="px-6 py-10 text-center text-sm text-slate-500">No blog posts match the selected filters.</div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

function StatCard({ label, value, tone, icon }) {
  const toneMap = {
    slate: 'border-slate-200 bg-slate-50 text-slate-900',
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    amber: 'border-amber-200 bg-amber-50 text-amber-700',
    violet: 'border-violet-200 bg-violet-50 text-violet-700',
  }

  return (
    <div className={`rounded-[24px] border p-4 ${toneMap[tone]}`}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900">{value}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">{icon}</div>
      </div>
    </div>
  )
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{label}</label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full min-w-[150px] bg-transparent text-sm text-slate-700 outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

function getStatusBadge(status) {
  const shared = 'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium'

  if (status === 'Published') {
    return `${shared} bg-emerald-100 text-emerald-700`
  }

  if (status === 'Draft') {
    return `${shared} bg-amber-100 text-amber-700`
  }

  return `${shared} bg-sky-100 text-sky-700`
}

function formatViews(value) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
}
