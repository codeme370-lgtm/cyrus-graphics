'use client'

import { useState, useMemo } from 'react'
import { Plus, Eye, Edit2, Trash2, MoreVertical } from 'lucide-react'

const sampleJobs = [
  {
    id: 'JPL-00034',
    orderId: 'ORD-00123',
    item: 'Flyers',
    quantity: 1000,
    status: 'Printing',
    operator: 'Kamara A.'
  },
  {
    id: 'JPL-00033',
    orderId: 'ORD-00122',
    item: 'Brochures',
    quantity: 500,
    status: 'Quality Check',
    operator: 'Jan B.'
  },
  {
    id: 'JPL-00032',
    orderId: 'ORD-00121',
    item: 'T-Shirts',
    quantity: 100,
    status: 'Printing',
    operator: 'Kamara A.'
  },
  {
    id: 'JPL-00031',
    orderId: 'ORD-00120',
    item: 'Business Cards',
    quantity: 1000,
    status: 'Completed',
    operator: 'Yan E.'
  },
  {
    id: 'JPL-00030',
    orderId: 'ORD-00119',
    item: 'Memo Bests',
    quantity: 200,
    status: 'Printing',
    operator: 'Kamara A.'
  },
]

const statusColors = {
  'Printing': 'bg-blue-100 text-blue-700 dot-blue-400',
  'Quality Check': 'bg-yellow-100 text-yellow-700 dot-yellow-400',
  'Completed': 'bg-green-100 text-green-700 dot-green-400',
  'On Hold': 'bg-red-100 text-red-700 dot-red-400',
}

const statusDotColors = {
  'Printing': 'bg-blue-400',
  'Quality Check': 'bg-yellow-400',
  'Completed': 'bg-green-400',
  'On Hold': 'bg-red-400',
}

export default function PrintingJobsClient() {
  const [activeTab, setActiveTab] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredJobs = useMemo(() => {
    return sampleJobs.filter(job => {
      const matchesSearch = job.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.item.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesTab = activeTab === 'All' || job.status === activeTab
      
      return matchesSearch && matchesTab
    })
  }, [searchTerm, activeTab])

  const stats = useMemo(() => {
    const total = sampleJobs.length
    const printing = sampleJobs.filter(j => j.status === 'Printing').length
    const qualityCheck = sampleJobs.filter(j => j.status === 'Quality Check').length
    const completed = sampleJobs.filter(j => j.status === 'Completed').length

    return { total, printing, qualityCheck, completed }
  }, [])

  const tabs = ['All', 'Printing', 'Quality Check', 'Completed', 'On Hold']

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Header with Title and Button */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Printing Jobs
            </h1>
          </div>
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition">
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Create Job</span>
          </button>
        </div>

        {/* Status Tabs */}
        <div className="mb-8 flex flex-wrap gap-2 sm:gap-3 border-b border-slate-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition ${
                activeTab === tab
                  ? 'bg-purple-100 text-purple-700 border border-purple-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Column Headers and Info */}
        <div className="mb-6 flex items-center justify-between px-4 sm:px-6">
          <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-600">
            <span>Job ID</span>
            <span>Order ID</span>
            <span>Item</span>
            <span>Quantity</span>
            <span>Status</span>
            <span>Operator</span>
          </div>
        </div>

        {/* Printing Jobs List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm hover:shadow-md transition flex items-center justify-between"
            >
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-4">
                <div>
                  <p className="text-xs text-slate-600 mb-1">Job ID</p>
                  <p className="text-sm sm:text-base font-semibold text-slate-900">{job.id}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Order ID</p>
                  <p className="text-sm sm:text-base font-medium text-slate-700">{job.orderId}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Item</p>
                  <p className="text-sm sm:text-base text-slate-700">{job.item}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Quantity</p>
                  <p className="text-sm sm:text-base font-medium text-slate-900">{job.quantity.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Status</p>
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[job.status]}`}>
                    <span className={`w-2 h-2 rounded-full ${statusDotColors[job.status]}`}></span>
                    {job.status}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Operator</p>
                  <p className="text-sm sm:text-base text-slate-700">{job.operator}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 ml-2 sm:ml-4">
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
            </div>
          ))}
        </div>

        {/* Pagination Info */}
        <div className="mt-8 flex items-center justify-between px-4 sm:px-6 py-4">
          <p className="text-xs sm:text-sm text-slate-600">
            Showing {filteredJobs.length} of {sampleJobs.length} jobs
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
