'use client'

import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {
  Plus,
  Eye,
  Pencil,
  Trash2,
  FileText,
  Palette,
  Tag,
  Layers,
  Package,
  Sparkles,
  X,
} from 'lucide-react'

const serviceStyles = [
  { icon: Palette, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
  { icon: FileText, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
  { icon: Tag, bgColor: 'bg-orange-100', iconColor: 'text-orange-600' },
  { icon: Layers, bgColor: 'bg-indigo-100', iconColor: 'text-indigo-600' },
  { icon: Package, bgColor: 'bg-red-100', iconColor: 'text-red-600' },
  { icon: Package, bgColor: 'bg-purple-100', iconColor: 'text-purple-600' },
]

const defaultForm = {
  title: '',
  description: '',
  price: '',
  status: 'Active',
}

export default function ServicesClient() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [addOpen, setAddOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState(defaultForm)

  const fetchServices = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('/api/admin/services')
      setServices(data.services || [])
    } catch (error) {
      toast.error(error?.response?.data?.error || 'Failed to load services')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  const stats = useMemo(() => {
    const active = services.filter((service) => service.status === 'Active').length
    const draft = services.filter((service) => service.status === 'Draft').length

    return { total: services.length, active, draft }
  }, [services])

  const handleChange = (field) => (event) => {
    const value = event.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!form.title.trim()) {
      toast.error('Service title is required')
      return
    }

    try {
      setSubmitting(true)
      const { data } = await axios.post('/api/admin/services', {
        title: form.title.trim(),
        description: form.description.trim(),
        price: Number(form.price || 0),
        status: form.status,
      })

      setServices((prev) => [data.service, ...prev])
      setForm(defaultForm)
      setAddOpen(false)
      toast.success('Service created successfully')
    } catch (error) {
      toast.error(error?.response?.data?.error || 'Could not create service')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/services?id=${id}`)
      setServices((prev) => prev.filter((service) => service.id !== id))
      toast.success('Service deleted')
    } catch (error) {
      toast.error(error?.response?.data?.error || 'Could not delete service')
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Services Management</h1>
          </div>
          <button
            onClick={() => setAddOpen(true)}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Add Service</span>
          </button>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Total</p>
            <p className="mt-4 text-3xl font-bold text-slate-900">{stats.total}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Active</p>
            <p className="mt-4 text-3xl font-bold text-green-600">{stats.active}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Draft</p>
            <p className="mt-4 text-3xl font-bold text-amber-600">{stats.draft}</p>
          </div>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center text-slate-600">
            Loading services...
          </div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceStyles[index % serviceStyles.length].icon
              const style = serviceStyles[index % serviceStyles.length]

              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition overflow-hidden"
                >
                  <div className={`flex items-center justify-center py-8 ${style.bgColor}`}>
                    <Icon className={`w-16 h-16 sm:w-20 sm:h-20 ${style.iconColor}`} />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">{service.title}</h3>
                      <span className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${service.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {service.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-2">
                      {service.description || 'No description provided yet.'}
                    </p>
                    <p className="mb-6 text-sm font-semibold text-slate-900">
                      {service.price ? `GH₵ ${Number(service.price).toFixed(2)}` : 'Price not set'}
                    </p>

                    <div className="flex items-center gap-2">
                      <button className="flex-1 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium text-sm rounded-lg transition border border-purple-200">
                        View
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-500 hover:text-slate-700" title="Edit">
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition text-slate-500 hover:text-red-600"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-slate-200 p-12 text-center">
            <Sparkles className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-lg font-semibold text-slate-900 mb-2">No services yet</p>
            <p className="text-slate-600 mb-6">Start by creating your first service offering.</p>
            <button
              onClick={() => setAddOpen(true)}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition"
            >
              Create First Service
            </button>
          </div>
        )}
      </div>

      {addOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm" onClick={() => setAddOpen(false)} />
          <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">Service</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">Add new service</h2>
              </div>
              <button
                type="button"
                onClick={() => setAddOpen(false)}
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close add service panel"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-5 overflow-y-auto p-5">
              <label className="block text-sm text-slate-700">
                <span className="mb-2 block font-medium">Service title</span>
                <input
                  value={form.title}
                  onChange={handleChange('title')}
                  placeholder="Business Card Printing"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </label>

              <label className="block text-sm text-slate-700">
                <span className="mb-2 block font-medium">Description</span>
                <textarea
                  value={form.description}
                  onChange={handleChange('description')}
                  rows={4}
                  placeholder="Describe the service and what is included"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-slate-700">
                  <span className="mb-2 block font-medium">Price</span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.price}
                    onChange={handleChange('price')}
                    placeholder="150"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  />
                </label>

                <label className="block text-sm text-slate-700">
                  <span className="mb-2 block font-medium">Status</span>
                  <select
                    value={form.status}
                    onChange={handleChange('status')}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  >
                    <option value="Active">Active</option>
                    <option value="Draft">Draft</option>
                  </select>
                </label>
              </div>

              <div className="mt-auto flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setAddOpen(false)}
                  className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 rounded-2xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'Saving...' : 'Save service'}
                </button>
              </div>
            </form>
          </aside>
        </>
      )}
    </main>
  )
}
