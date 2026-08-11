'use client'

import { useState, useMemo } from 'react'
import { Search, Plus, Eye, Edit2, Trash2, MoreVertical, X, PackagePlus, FolderPlus, Tags, BriefcaseBusiness } from 'lucide-react'

const sampleProducts = [
  {
    id: 1,
    name: 'Business Card (Blanks)',
    category: 'Business Cards',
    price: 100.00,
    stock: 500,
    status: 'In Stock',
    image: '🎴'
  },
  {
    id: 2,
    name: 'T-Shirt (Blanks)',
    category: 'T-Shirts',
    price: 45.00,
    stock: 120,
    status: 'In Stock',
    image: '👕'
  },
  {
    id: 3,
    name: 'Mug (Custom-Prints)',
    category: 'Promotional Items',
    price: 25.00,
    stock: 80,
    status: 'In Stock',
    image: '☕'
  },
  {
    id: 4,
    name: 'Roll-up-Banner',
    category: 'Banners',
    price: 100.00,
    stock: 40,
    status: 'In Stock',
    image: '📋'
  },
  {
    id: 5,
    name: 'Sticker (Blank)',
    category: 'Stickers',
    price: 10.00,
    stock: 100,
    status: 'In Stock',
    image: '🏷️'
  },
  {
    id: 6,
    name: 'Flyer (A5)',
    category: 'Flyers',
    price: 50.00,
    stock: 250,
    status: 'In Stock',
    image: '📄'
  },
  {
    id: 7,
    name: 'Brochure (Tri-fold)',
    category: 'Brochures',
    price: 75.00,
    stock: 0,
    status: 'Out of Stock',
    image: '📑'
  },
]

const statusColors = {
  'In Stock': 'bg-green-100 text-green-700',
  'Low Stock': 'bg-yellow-100 text-yellow-700',
  'Out of Stock': 'bg-red-100 text-red-700',
  'Discontinued': 'bg-slate-100 text-slate-700',
}

export default function ProductsClient() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('All Status')
  const [quickAddOpen, setQuickAddOpen] = useState(false)
  const [quickAddType, setQuickAddType] = useState('product')
  const [quickAddForm, setQuickAddForm] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
  })

  const quickAddOptions = [
    { key: 'product', label: 'Add Product', icon: PackagePlus },
    { key: 'category', label: 'Add Category', icon: FolderPlus },
    { key: 'brand', label: 'Add Brand', icon: Tags },
    { key: 'service', label: 'Add Service', icon: BriefcaseBusiness },
  ]

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = filterStatus === 'All Status' || product.status === filterStatus
      
      return matchesSearch && matchesStatus
    })
  }, [searchTerm, filterStatus])

  const stats = useMemo(() => {
    const total = sampleProducts.length
    const inStock = sampleProducts.filter(p => p.status === 'In Stock').length
    const lowStock = sampleProducts.filter(p => p.status === 'Low Stock').length
    const outOfStock = sampleProducts.filter(p => p.status === 'Out of Stock').length

    return { total, inStock, lowStock, outOfStock }
  }, [])

  const handleQuickAddSubmit = (event) => {
    event.preventDefault()
    setQuickAddOpen(false)
    setQuickAddForm({ name: '', category: '', price: '', stock: '', description: '' })
  }

  const renderQuickAddForm = () => {
    if (quickAddType === 'category') {
      return (
        <div className="space-y-4">
          <label className="block text-sm text-slate-700">
            <span className="mb-2 block font-medium">Category Name</span>
            <input
              value={quickAddForm.name}
              onChange={(event) => setQuickAddForm((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Business Cards"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
          </label>
          <label className="block text-sm text-slate-700">
            <span className="mb-2 block font-medium">Description</span>
            <textarea
              value={quickAddForm.description}
              onChange={(event) => setQuickAddForm((prev) => ({ ...prev, description: event.target.value }))}
              rows={4}
              placeholder="Describe this product category"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
          </label>
        </div>
      )
    }

    if (quickAddType === 'brand') {
      return (
        <div className="space-y-4">
          <label className="block text-sm text-slate-700">
            <span className="mb-2 block font-medium">Brand Name</span>
            <input
              value={quickAddForm.name}
              onChange={(event) => setQuickAddForm((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Cyrus Graphics"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
          </label>
          <label className="block text-sm text-slate-700">
            <span className="mb-2 block font-medium">Notes</span>
            <textarea
              value={quickAddForm.description}
              onChange={(event) => setQuickAddForm((prev) => ({ ...prev, description: event.target.value }))}
              rows={4}
              placeholder="Add brand notes or packaging detail"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
          </label>
        </div>
      )
    }

    if (quickAddType === 'service') {
      return (
        <div className="space-y-4">
          <label className="block text-sm text-slate-700">
            <span className="mb-2 block font-medium">Service Name</span>
            <input
              value={quickAddForm.name}
              onChange={(event) => setQuickAddForm((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Brand Identity Kit"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
          </label>
          <label className="block text-sm text-slate-700">
            <span className="mb-2 block font-medium">Service Price</span>
            <input
              value={quickAddForm.price}
              onChange={(event) => setQuickAddForm((prev) => ({ ...prev, price: event.target.value }))}
              placeholder="GH₵ 1500"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
          </label>
          <label className="block text-sm text-slate-700">
            <span className="mb-2 block font-medium">Description</span>
            <textarea
              value={quickAddForm.description}
              onChange={(event) => setQuickAddForm((prev) => ({ ...prev, description: event.target.value }))}
              rows={4}
              placeholder="Describe the service package"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
          </label>
        </div>
      )
    }

    return (
      <div className="space-y-4">
        <label className="block text-sm text-slate-700">
          <span className="mb-2 block font-medium">Product Name</span>
          <input
            value={quickAddForm.name}
            onChange={(event) => setQuickAddForm((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="Business Card Package"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-slate-700">
            <span className="mb-2 block font-medium">Category</span>
            <input
              value={quickAddForm.category}
              onChange={(event) => setQuickAddForm((prev) => ({ ...prev, category: event.target.value }))}
              placeholder="Business Cards"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
          </label>
          <label className="block text-sm text-slate-700">
            <span className="mb-2 block font-medium">Price</span>
            <input
              value={quickAddForm.price}
              onChange={(event) => setQuickAddForm((prev) => ({ ...prev, price: event.target.value }))}
              placeholder="GH₵ 150"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
          </label>
        </div>
        <label className="block text-sm text-slate-700">
          <span className="mb-2 block font-medium">Stock</span>
          <input
            value={quickAddForm.stock}
            onChange={(event) => setQuickAddForm((prev) => ({ ...prev, stock: event.target.value }))}
            placeholder="120"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          />
        </label>
        <label className="block text-sm text-slate-700">
          <span className="mb-2 block font-medium">Description</span>
          <textarea
            value={quickAddForm.description}
            onChange={(event) => setQuickAddForm((prev) => ({ ...prev, description: event.target.value }))}
            rows={4}
            placeholder="Describe the product"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          />
        </label>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Header with Title and Button */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Products Management
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setQuickAddOpen((prev) => !prev)}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Add Product</span>
          </button>
        </div>

        {quickAddOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm"
              onClick={() => setQuickAddOpen(false)}
            />
            <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">Quick Add</p>
                  <h2 className="mt-2 text-xl font-bold text-slate-900">Create new item</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setQuickAddOpen(false)}
                  className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  aria-label="Close quick add panel"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="border-b border-slate-200 px-5 py-4">
                <div className="grid grid-cols-2 gap-2">
                  {quickAddOptions.map(({ key, label, icon: Icon }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setQuickAddType(key)}
                      className={`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                        quickAddType === key ? 'bg-amber-100 text-amber-800' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleQuickAddSubmit} className="flex flex-1 flex-col gap-5 overflow-y-auto p-5">
                {renderQuickAddForm()}

                <div className="mt-auto flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setQuickAddOpen(false)}
                    className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-2xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-700"
                  >
                    Save item
                  </button>
                </div>
              </form>
            </aside>
          </>
        )}


        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {/* Total Products */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">Total Products</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">{stats.total}</p>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m0 0l8-4m0 0l8 4m0 0v10l-8 4-8-4V7m8 4v10m-8-4l8 4m8-4l-8 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* In Stock */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">In Stock</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600">{stats.inStock}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Low Stock */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">Low Stock</p>
                <p className="text-2xl sm:text-3xl font-bold text-yellow-600">{stats.lowStock}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 0a2 2 0 100-4 2 2 0 000 4zm0-12a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Out of Stock */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">Out of Stock</p>
                <p className="text-2xl sm:text-3xl font-bold text-red-600">{stats.outOfStock}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search product name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm bg-white cursor-pointer"
          >
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
            <option>Discontinued</option>
          </select>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Product</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Category</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Price</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Stock</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Status</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-slate-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition">
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 rounded-lg flex items-center justify-center text-xl">
                          {product.image}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-900">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700">{product.category}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-slate-900">
                      GH₵ {product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-slate-900">{product.stock}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${statusColors[product.status]}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-1.5 hover:bg-slate-100 rounded transition" title="View">
                          <Eye className="w-4 h-4 text-slate-500 hover:text-slate-700" />
                        </button>
                        <button className="p-1.5 hover:bg-slate-100 rounded transition" title="Edit">
                          <Edit2 className="w-4 h-4 text-slate-500 hover:text-slate-700" />
                        </button>
                        <button className="p-1.5 hover:bg-slate-100 rounded transition" title="Delete">
                          <Trash2 className="w-4 h-4 text-slate-500 hover:text-red-700" />
                        </button>
                        <button className="p-1.5 hover:bg-slate-100 rounded transition" title="More options">
                          <MoreVertical className="w-4 h-4 text-slate-500 hover:text-slate-700" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Info */}
        <div className="mt-6 flex items-center justify-between px-4 sm:px-6 py-4">
          <p className="text-xs sm:text-sm text-slate-600">
            Showing {filteredProducts.length} of {sampleProducts.length} products
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
              Previous
            </button>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-purple-600 text-white rounded-lg">
              1
            </button>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
