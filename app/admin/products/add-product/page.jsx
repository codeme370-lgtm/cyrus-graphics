'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, CalendarDays, ImagePlus, ShoppingBag, ShieldCheck, Sparkles } from 'lucide-react'

const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || 'GHS'

const sections = ['Product Information', 'Pricing & Inventory', 'Shipping', 'SEO', 'Images & Media']
const categories = ['Electronics', 'Accessories', 'Computers', 'Smart Home', 'Wearables']
const brands = ['Cyrus Graphics', 'PulseGear', 'Nexa', 'Voltix', 'Aeris']
const productTypes = ['Simple Product', 'Variable Product', 'Digital Product']

export default function AdminAddProductPage() {
  const [activeSection, setActiveSection] = useState('Product Information')
  const [formState, setFormState] = useState({
    name: '',
    category: 'Electronics',
    brand: 'Cyrus Graphics',
    type: 'Simple Product',
    shortDescription: '',
    longDescription: '',
    price: '',
    salePrice: '',
    sku: '',
    stock: 'In Stock',
    quantity: '',
    weight: '',
    dimensions: '',
    shippingClass: 'Standard',
    seoTitle: '',
    seoDescription: '',
    slug: '',
    status: 'Draft',
    visibility: 'Visible',
    featured: false,
    newArrival: false,
    publishDate: '',
  })

  const summary = useMemo(() => ({
    name: formState.name || 'No product added',
    category: formState.category,
    brand: formState.brand,
    price: formState.price ? `${currency}${formState.price}` : '-',
    stock: formState.stock,
    status: formState.status.toLowerCase(),
  }), [formState])

  const handleChange = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Pricing & Inventory':
        return (
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              <span>Regular Price</span>
              <input
                value={formState.price}
                onChange={handleChange('price')}
                placeholder={`${currency}299.00`}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>Sale Price</span>
              <input
                value={formState.salePrice}
                onChange={handleChange('salePrice')}
                placeholder={`${currency}249.00`}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>SKU</span>
              <input
                value={formState.sku}
                onChange={handleChange('sku')}
                placeholder="CG-00123"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>Stock Status</span>
              <select
                value={formState.stock}
                onChange={handleChange('stock')}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              >
                <option>In Stock</option>
                <option>Out of Stock</option>
                <option>Pre-order</option>
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate-700 md:col-span-2">
              <span>Quantity</span>
              <input
                value={formState.quantity}
                onChange={handleChange('quantity')}
                placeholder="120"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              />
            </label>
          </div>
        )
      case 'Shipping':
        return (
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              <span>Weight</span>
              <input
                value={formState.weight}
                onChange={handleChange('weight')}
                placeholder="1.2 kg"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>Dimensions</span>
              <input
                value={formState.dimensions}
                onChange={handleChange('dimensions')}
                placeholder="25 x 15 x 8 cm"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700 md:col-span-2">
              <span>Shipping Class</span>
              <select
                value={formState.shippingClass}
                onChange={handleChange('shippingClass')}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              >
                <option>Standard</option>
                <option>Express</option>
                <option>International</option>
              </select>
            </label>
          </div>
        )
      case 'SEO':
        return (
          <div className="space-y-6">
            <label className="space-y-2 text-sm text-slate-700">
              <span>SEO Title</span>
              <input
                value={formState.seoTitle}
                onChange={handleChange('seoTitle')}
                placeholder="Premium Gaming Headset — Cyrus Graphics"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>SEO Description</span>
              <textarea
                value={formState.seoDescription}
                onChange={handleChange('seoDescription')}
                rows={4}
                placeholder="Add a short SEO-friendly description for search engines."
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>URL Slug</span>
              <input
                value={formState.slug}
                onChange={handleChange('slug')}
                placeholder="cyrus-graphics-gaming-headset"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              />
            </label>
          </div>
        )
      case 'Images & Media':
        return (
          <div className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 text-center text-slate-700">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-amber-500">
                <ImagePlus size={28} />
              </div>
              <p className="text-lg font-semibold text-slate-900">Drag & drop images here</p>
              <p className="mt-2 text-sm text-slate-600">Supported formats: JPG, PNG, WEBP. Max size: 5MB per image.</p>
              <button className="mt-5 rounded-3xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">Browse Files</button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {['Front view', 'Back view', 'In use'].map((label) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                  <div className="mb-4 h-28 rounded-3xl bg-slate-100" />
                  <p className="text-sm text-slate-700">{label}</p>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return (
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              <span>Product Name</span>
              <input
                value={formState.name}
                onChange={handleChange('name')}
                placeholder="Enter product name"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>Category</span>
              <select
                value={formState.category}
                onChange={handleChange('category')}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>Brand</span>
              <select
                value={formState.brand}
                onChange={handleChange('brand')}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              >
                {brands.map((brand) => (
                  <option key={brand}>{brand}</option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>Product Type</span>
              <select
                value={formState.type}
                onChange={handleChange('type')}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              >
                {productTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate-700 md:col-span-2">
              <span>Short Description</span>
              <textarea
                value={formState.shortDescription}
                onChange={handleChange('shortDescription')}
                rows={3}
                placeholder="Enter short description"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-700 md:col-span-2">
              <span>Full Description</span>
              <textarea
                value={formState.longDescription}
                onChange={handleChange('longDescription')}
                rows={6}
                placeholder="Enter full product description"
                className="w-full rounded-[30px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20"
              />
            </label>
          </div>
        )
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-amber-500">Dashboard & Products</p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-900">Add Product</h1>
              <p className="mt-2 text-sm text-slate-600">Create a new product with complete details, inventory, shipping, and SEO settings.</p>
            </div>
            <div className="inline-flex items-center gap-3 rounded-3xl bg-amber-100 px-4 py-3 text-sm text-amber-700">
              <ShoppingBag size={16} /> Product Builder
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.7fr_0.9fr]">
            <div className="space-y-6">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Sections</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-900">Product setup</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {sections.map((section) => (
                      <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        className={`rounded-full px-4 py-2 text-sm transition ${activeSection === section ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                      >
                        {section}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6">
                  {renderSectionContent()}
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Quick notes</p>
                    <p className="mt-2 text-sm text-slate-600">Use the section tabs to edit specific product details without leaving the page.</p>
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-2 text-xs text-amber-700">Save often</span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">Suggested prep</p>
                    <p className="mt-2 text-sm text-slate-700">Add images, SEO copy, and a clear product title.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">Best practice</p>
                    <p className="mt-2 text-sm text-slate-700">Use category and brand tags for faster search filtering.</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Publish</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">Ready to publish</p>
                  </div>
                  <ShieldCheck size={20} className="text-amber-500" />
                </div>

                <div className="mt-6 space-y-4">
                  <label className="space-y-2 text-sm text-slate-700">
                    <span>Status</span>
                    <select
                      value={formState.status}
                      onChange={handleChange('status')}
                      className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20 focus:ring"
                    >
                      <option>Draft</option>
                      <option>Published</option>
                    </select>
                  </label>

                  <label className="space-y-2 text-sm text-slate-700">
                    <span>Visibility</span>
                    <select
                      value={formState.visibility}
                      onChange={handleChange('visibility')}
                      className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20 focus:ring"
                    >
                      <option>Visible</option>
                      <option>Hidden</option>
                    </select>
                  </label>

                  <label className="flex items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
                    <div>
                      <p>Featured Product</p>
                    </div>
                    <input type="checkbox" checked={formState.featured} onChange={handleChange('featured')} className="h-5 w-5 rounded border-slate-300 bg-white text-amber-500" />
                  </label>

                  <label className="flex items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
                    <div>
                      <p>New Arrival</p>
                    </div>
                    <input type="checkbox" checked={formState.newArrival} onChange={handleChange('newArrival')} className="h-5 w-5 rounded border-slate-300 bg-white text-amber-500" />
                  </label>

                  <label className="space-y-2 text-sm text-slate-700">
                    <span>Publish Date</span>
                    <div className="relative">
                      <CalendarDays size={18} className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="date"
                        value={formState.publishDate}
                        onChange={handleChange('publishDate')}
                        className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-12 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-amber-500/20 focus:ring"
                      />
                    </div>
                  </label>
                </div>

                <div className="mt-6 space-y-3">
                  <button className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-amber-400">
                    Save as Draft
                  </button>
                  <button className="w-full rounded-3xl bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
                    Save & Publish
                  </button>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Product Summary</p>
                    <p className="mt-2 text-sm text-slate-600">Live preview of your product metadata.</p>
                  </div>
                  <Sparkles size={20} className="text-amber-500" />
                </div>

                <div className="mt-6 space-y-4 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                  <div className="h-32 rounded-[28px] bg-slate-200"></div>
                  <div className="space-y-2 text-sm text-slate-700">
                    <p className="font-semibold text-slate-900">{summary.name}</p>
                    <p>Category: <span className="text-slate-700">{summary.category}</span></p>
                    <p>Brand: <span className="text-slate-700">{summary.brand}</span></p>
                    <p>Price: <span className="text-slate-700">{summary.price}</span></p>
                    <p>Stock: <span className="text-slate-700">{summary.stock}</span></p>
                    <p>Status: <span className="text-slate-700 capitalize">{summary.status}</span></p>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Quick Actions</p>
                    <p className="mt-2 text-sm text-slate-600">Jump to common product tasks.</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  <button className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition hover:border-amber-400">
                    <ArrowRight size={16} /> Save Draft
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 rounded-3xl bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
                    <ArrowRight size={16} /> Preview Product
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}
