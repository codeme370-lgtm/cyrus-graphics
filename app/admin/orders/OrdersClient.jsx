'use client'

import { useState, useMemo } from 'react'
import { Search, Plus, Eye, Edit2, Trash2, MoreVertical, Download, Filter } from 'lucide-react'

const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || 'GH₵'

const dummyOrders = [
  { id: 'PORC0216', customer: 'John Marshall', service: 'Business Cards', amount: '395.00', status: 'Completed', date: 'May 12, 2024' },
  { id: 'PORC0215', customer: 'Ava Brown', service: 'Flyers Printing', amount: '490.00', status: 'Pending', date: 'May 12, 2024' },
  { id: 'PORC0212', customer: 'Kali Adam', service: 'Roll Up Banner', amount: '310.00', status: 'Approving', date: 'May 11, 2024' },
  { id: 'PORC0211', customer: 'Serenity Lid', service: 'Brochure Design', amount: '78.00', status: 'Approved', date: 'May 11, 2024' },
  { id: 'PORC0210', customer: 'Nana Yaa', service: 'Logo Printing', amount: '245.00', status: 'Processing', date: 'May 10, 2024' },
  { id: 'PORC0218', customer: 'Attencia Berkson', service: 'Logo Design', amount: '454.00', status: 'Completed', date: 'May 9, 2024' },
  { id: 'PORC0916', customer: 'Marshal A Sind', service: 'Invoice Printing', amount: '256.00', status: 'Completed', date: 'May 8, 2024' },
]

const statusMap = {
  'Completed': { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
  'Pending': { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
  'Approving': { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
  'Approved': { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
  'Processing': { bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-500' },
  'Cancelled': { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500' },
}

export default function AdminOrdersClient() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const filteredOrders = useMemo(() => {
    return dummyOrders.filter((order) => {
      const matchesSearch = 
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.service.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = statusFilter === 'All' || order.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [search, statusFilter])

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Orders Management</h1>
            <p className="text-sm text-slate-600 mt-1">View and manage all customer orders</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm transition">
            <Plus size={18} /> New Order
          </button>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search Order ID, Customer, Service..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Approving">Approving</option>
              <option value="Approved">Approved</option>
              <option value="Processing">Processing</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Order ID</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Customer</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Service</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Amount</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Status</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Date</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50 transition">
                      <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-slate-900">{order.id}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-slate-700">{order.customer}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-slate-700">{order.service}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-slate-900">{currency} {order.amount}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${statusMap[order.status]?.bg} ${statusMap[order.status]?.text}`}>
                          <span className={`w-2 h-2 rounded-full ${statusMap[order.status]?.dot}`}></span>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-slate-700">{order.date}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-600" title="View">
                            <Eye size={18} />
                          </button>
                          <button className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-600" title="Edit">
                            <Edit2 size={18} />
                          </button>
                          <button className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-600" title="Delete">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center text-slate-500">
                      No orders found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Info */}
        <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
          <span>Showing {filteredOrders.length} of {dummyOrders.length} orders</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition">Previous</button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition">Next</button>
          </div>
        </div>
      </div>
    </main>
  )
}

