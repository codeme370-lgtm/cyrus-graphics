'use client'

import { useState, useMemo } from 'react'
import { Search, Plus, Eye, Edit2, Trash2, MoreVertical, Star } from 'lucide-react'

const sampleReviews = [
  {
    id: 1,
    customer: 'John Monash',
    rating: 5,
    review: 'Great quality and fast delivery!',
    status: 'Approved',
    date: 'May 12, 2024'
  },
  {
    id: 2,
    customer: 'Alma Soaning',
    rating: 5,
    review: 'Very professional and creative',
    status: 'Approved',
    date: 'May 11, 2024'
  },
  {
    id: 3,
    customer: 'Kafi Agere',
    rating: 5,
    review: 'Excellent customer service!',
    status: 'Pending',
    date: 'May 11, 2024'
  },
  {
    id: 4,
    customer: 'Serenity Ltd',
    rating: 5,
    review: 'Will work with them again',
    status: 'Approved',
    date: 'May 10, 2024'
  },
  {
    id: 5,
    customer: 'Tech Startups',
    rating: 4,
    review: 'Good work, slightly delayed',
    status: 'Approved',
    date: 'May 09, 2024'
  },
  {
    id: 6,
    customer: 'Creative Agency',
    rating: 5,
    review: 'Outstanding design and execution',
    status: 'Approved',
    date: 'May 08, 2024'
  },
  {
    id: 7,
    customer: 'Small Business Co',
    rating: 4,
    review: 'Great service, competitive pricing',
    status: 'Pending',
    date: 'May 07, 2024'
  },
]

const statusColors = {
  'Approved': 'bg-green-100 text-green-700',
  'Pending': 'bg-yellow-100 text-yellow-700',
  'Rejected': 'bg-red-100 text-red-700',
}

export default function ReviewsClient() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('All Status')

  const filteredReviews = useMemo(() => {
    return sampleReviews.filter(review => {
      const matchesSearch = review.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.review.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = filterStatus === 'All Status' || review.status === filterStatus
      
      return matchesSearch && matchesStatus
    })
  }, [searchTerm, filterStatus])

  const stats = useMemo(() => {
    const total = sampleReviews.length
    const approved = sampleReviews.filter(r => r.status === 'Approved').length
    const pending = sampleReviews.filter(r => r.status === 'Pending').length
    const avgRating = (sampleReviews.reduce((sum, r) => sum + r.rating, 0) / sampleReviews.length).toFixed(1)

    return { total, approved, pending, avgRating }
  }, [])

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {[...Array(5 - rating)].map((_, i) => (
          <Star key={i + rating} className="w-4 h-4 text-slate-300" />
        ))}
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
              Reviews
            </h1>
          </div>
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition">
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Add Review</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {/* Total Reviews */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">Total Reviews</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">{stats.total}</p>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-slate-600" />
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

          {/* Avg Rating */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">Avg Rating</p>
                <p className="text-2xl sm:text-3xl font-bold text-amber-600">{stats.avgRating}</p>
              </div>
              <div className="bg-amber-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-amber-600 fill-amber-600" />
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
              placeholder="Search by customer or review text..."
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
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
        </div>

        {/* Reviews Table */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Customer</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Rating</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Review</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Status</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Date</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-slate-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredReviews.map((review, index) => (
                  <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-slate-900">{review.customer}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      {renderStars(review.rating)}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700 max-w-xs truncate">{review.review}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${statusColors[review.status]}`}>
                        {review.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700">{review.date}</td>
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
            Showing {filteredReviews.length} of {sampleReviews.length} reviews
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
