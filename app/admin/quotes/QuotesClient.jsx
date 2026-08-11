'use client'

import { useState, useMemo } from 'react'
import { Search, Plus, Eye, Edit2, Trash2, MoreVertical, Filter } from 'lucide-react'

const sampleQuotes = [
  {
    id: 'QRT-00036',
    customer: 'Ella K',
    service: 'Logo + Branding',
    amount: 450.00,
    status: 'Pending',
    date: 'May 10, 2024'
  },
  {
    id: 'QRT-00034',
    customer: 'Kevin Summers',
    service: 'Business Design',
    amount: 200.00,
    status: 'Pending',
    date: 'May 12, 2024'
  },
  {
    id: 'QRT-00033',
    customer: 'Adam Collins',
    service: 'T-Shirt Design',
    amount: 350.00,
    status: 'Approved',
    date: 'May 11, 2024'
  },
  {
    id: 'QRT-00032',
    customer: 'Genesis Clothing',
    service: 'T-Shirt Printing',
    amount: 2400.00,
    status: 'Approved',
    date: 'May 10, 2024'
  },
  {
    id: 'QRT-00031',
    customer: 'Bright Ltd',
    service: 'Roll-up Banner',
    amount: 450.00,
    status: 'Matched',
    date: 'May 09, 2024'
  },
  {
    id: 'QRT-00030',
    customer: 'Sarah Mitchell',
    service: 'Flyer Design',
    amount: 120.00,
    status: 'Pending',
    date: 'May 08, 2024'
  },
  {
    id: 'QRT-00029',
    customer: 'John Roberts',
    service: 'Web Design',
    amount: 5000.00,
    status: 'Approved',
    date: 'May 07, 2024'
  },
]

const statusColors = {
  'Pending': 'bg-yellow-100 text-yellow-700 dot-yellow-400',
  'Approved': 'bg-green-100 text-green-700 dot-green-400',
  'Matched': 'bg-yellow-100 text-yellow-700 dot-yellow-400',
  'Rejected': 'bg-red-100 text-red-700 dot-red-400',
}

export default function QuotesClient() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('All Status')

  const filteredQuotes = useMemo(() => {
    return sampleQuotes.filter(quote => {
      const matchesSearch = quote.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.service.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = filterStatus === 'All Status' || quote.status === filterStatus
      
      return matchesSearch && matchesStatus
    })
  }, [searchTerm, filterStatus])

  const stats = useMemo(() => {
    const total = sampleQuotes.length
    const pending = sampleQuotes.filter(q => q.status === 'Pending').length
    const approved = sampleQuotes.filter(q => q.status === 'Approved').length
    const rejected = sampleQuotes.filter(q => q.status === 'Rejected').length

    return { total, pending, approved, rejected }
  }, [])

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Header with Title and Button */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              03. Quotes Management
            </h1>
          </div>
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition">
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">New Quote</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {/* Total Quotes */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">Total Quotes</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">{stats.total}</p>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Pending */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">Pending</p>
                <p className="text-2xl sm:text-3xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Approved */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">Approved</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600">{stats.approved}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Rejected */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">Rejected</p>
                <p className="text-2xl sm:text-3xl font-bold text-red-600">0</p>
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
              placeholder="Search Quote ID, Customer, Service..."
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
            <option>Pending</option>
            <option>Approved</option>
            <option>Matched</option>
            <option>Rejected</option>
          </select>
        </div>

        {/* Quotes Table */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Quote ID</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Customer</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Service</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Amount</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Status</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Date</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-slate-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuotes.map((quote, index) => (
                  <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-slate-900">{quote.id}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700">{quote.customer}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700">{quote.service}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-slate-900">
                      GH₵ {quote.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${statusColors[quote.status]}`}>
                        <span className={`w-2 h-2 rounded-full ${quote.status === 'Pending' || quote.status === 'Matched' ? 'bg-yellow-400' : quote.status === 'Approved' ? 'bg-green-400' : 'bg-red-400'}`}></span>
                        {quote.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700">{quote.date}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-1.5 hover:bg-slate-100 rounded transition" title="View">
                          <Eye className="w-4 h-4 text-slate-500 hover:text-slate-700" />
                        </button>
                        <button className="p-1.5 hover:bg-slate-100 rounded transition" title="Edit">
                          <Edit2 className="w-4 h-4 text-slate-500 hover:text-slate-700" />
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
            Showing {filteredQuotes.length} of {sampleQuotes.length} quotes
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
