'use client'

import { useState, useMemo } from 'react'
import { Plus, Eye, Edit2, Trash2, Search } from 'lucide-react'
import Image from 'next/image'

const dummyPortfolios = [
  {
    id: 1,
    name: 'Logo Design - CleanTech',
    category: 'Logos',
    image: '/api/placeholder/300/250',
    date: 'May 15, 2024',
    description: 'Modern logo design for CleanTech startup'
  },
  {
    id: 2,
    name: 'Brochure - Serenity Ltd',
    category: 'Branding',
    image: '/api/placeholder/300/250',
    date: 'May 8, 2024',
    description: 'Professional brochure design with brand guidelines'
  },
  {
    id: 3,
    name: 'Roll Up Banner - EventX',
    category: 'Printing',
    image: '/api/placeholder/300/250',
    date: 'May 6, 2024',
    description: 'Eye-catching roll-up banner for event promotion'
  },
  {
    id: 4,
    name: 'Business Cards - Bright Ltd',
    category: 'Packaging',
    image: '/api/placeholder/300/250',
    date: 'May 4, 2024',
    description: 'Premium business card design and printing'
  },
  {
    id: 5,
    name: 'Brand Identity Package',
    category: 'Branding',
    image: '/api/placeholder/300/250',
    date: 'Apr 28, 2024',
    description: 'Complete brand identity including logo and guidelines'
  },
  {
    id: 6,
    name: 'Packaging Design - Tech Pro',
    category: 'Packaging',
    image: '/api/placeholder/300/250',
    date: 'Apr 25, 2024',
    description: 'Custom product packaging design'
  },
  {
    id: 7,
    name: 'Billboard Campaign',
    category: 'Banners',
    image: '/api/placeholder/300/250',
    date: 'Apr 20, 2024',
    description: 'Large format billboard advertisement design'
  },
  {
    id: 8,
    name: 'Corporate Stationery',
    category: 'Printing',
    image: '/api/placeholder/300/250',
    date: 'Apr 18, 2024',
    description: 'Complete corporate stationery suite'
  },
]

const categories = ['All', 'Logos', 'Branding', 'Printing', 'Banners', 'Packaging']

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filteredPortfolios = useMemo(() => {
    return dummyPortfolios.filter((portfolio) => {
      const matchesCategory = activeCategory === 'All' || portfolio.category === activeCategory
      const matchesSearch = 
        portfolio.name.toLowerCase().includes(search.toLowerCase()) ||
        portfolio.description.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Portfolio Management</h1>
            <p className="text-sm text-slate-600 mt-1">View and manage all portfolio projects</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm transition">
            <Plus size={18} /> Add Project
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-lg font-medium text-sm transition ${
                activeCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        {filteredPortfolios.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredPortfolios.map((portfolio) => (
              <div
                key={portfolio.id}
                className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-slate-200 h-48 sm:h-56">
                  <img
                    src={portfolio.image}
                    alt={portfolio.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
                    <button className="p-2.5 bg-white rounded-lg hover:bg-slate-100 transition text-slate-900" title="View">
                      <Eye size={20} />
                    </button>
                    <button className="p-2.5 bg-white rounded-lg hover:bg-slate-100 transition text-slate-900" title="Edit">
                      <Edit2 size={20} />
                    </button>
                    <button className="p-2.5 bg-white rounded-lg hover:bg-slate-100 transition text-slate-900" title="Delete">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">
                    {portfolio.name}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex px-2.5 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded">
                      {portfolio.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-3 line-clamp-2">
                    {portfolio.description}
                  </p>
                  <p className="text-xs text-slate-500">{portfolio.date}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-12 text-center">
            <p className="text-slate-500 text-lg">No portfolio projects found</p>
          </div>
        )}

        {/* Results Info */}
        {filteredPortfolios.length > 0 && (
          <div className="mt-6 text-center text-sm text-slate-600">
            Showing {filteredPortfolios.length} of {dummyPortfolios.length} projects
          </div>
        )}
      </div>
    </main>
  )
}
