'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, Download, Eye, MoreVertical } from 'lucide-react'

const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || 'GH₵'

const dummyPayments = [
  {
    id: 'PTRC00124',
    orderId: 'PORC00124',
    customer: 'John Marshall',
    amount: '350.00',
    method: 'Card',
    status: 'Paid',
    date: 'May 12, 2024'
  },
  {
    id: 'PTRC00123',
    orderId: 'PORC00123',
    customer: 'Ava Brown',
    amount: '450.00',
    method: 'PayStack',
    status: 'Pending',
    date: 'May 11, 2024'
  },
  {
    id: 'PTRC00122',
    orderId: 'PORC00122',
    customer: 'Kali Adam',
    amount: '280.00',
    method: 'Card',
    status: 'Pending',
    date: 'May 11, 2024'
  },
  {
    id: 'PTRC00121',
    orderId: 'PORC00121',
    customer: 'Serenity Lid',
    amount: '600.00',
    method: 'Bank Transfer',
    status: 'Paid',
    date: 'May 11, 2024'
  },
  {
    id: 'PTRC00120',
    orderId: 'PORC00120',
    customer: 'Nana Yaa',
    amount: '200.00',
    method: 'Card',
    status: 'Scheduled',
    date: 'May 10, 2024'
  },
]

const statusMap = {
  'Paid': { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
  'Pending': { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
  'Scheduled': { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500' },
  'Failed': { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500' },
  'Refunded': { bg: 'bg-slate-100', text: 'text-slate-800', dot: 'bg-slate-500' },
}

export default function PaymentsClient() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const filteredPayments = useMemo(() => {
    return dummyPayments.filter((payment) => {
      const matchesSearch = 
        payment.id.toLowerCase().includes(search.toLowerCase()) ||
        payment.orderId.toLowerCase().includes(search.toLowerCase()) ||
        payment.customer.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = statusFilter === 'All' || payment.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [search, statusFilter])

  const stats = useMemo(() => {
    return {
      total: dummyPayments.reduce((sum, p) => sum + parseFloat(p.amount), 0),
      pending: dummyPayments.filter(p => p.status === 'Pending').reduce((sum, p) => sum + parseFloat(p.amount), 0),
      scheduled: dummyPayments.filter(p => p.status === 'Scheduled').reduce((sum, p) => sum + parseFloat(p.amount), 0),
      paid: dummyPayments.filter(p => p.status === 'Paid').reduce((sum, p) => sum + parseFloat(p.amount), 0),
    }
  }, [])

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Payments</h1>
          <p className="text-sm text-slate-600 mt-1">Monitor and manage all payment transactions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Total */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-600 uppercase">Total</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                  {currency} {stats.total.toLocaleString('en-US', { minimumFractionDigits: 0 })}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">T</span>
              </div>
            </div>
          </div>

          {/* Pending */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-600 uppercase">Pending</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                  {currency} {stats.pending.toLocaleString('en-US', { minimumFractionDigits: 0 })}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 font-bold text-lg">P</span>
              </div>
            </div>
          </div>

          {/* Scheduled */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-600 uppercase">Scheduled</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                  {currency} {stats.scheduled.toLocaleString('en-US', { minimumFractionDigits: 0 })}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">S</span>
              </div>
            </div>
          </div>

          {/* Paid */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-600 uppercase">Paid</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                  {currency} {stats.paid.toLocaleString('en-US', { minimumFractionDigits: 0 })}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">D</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search transaction ID, order ID, customer..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm"
                />
              </div>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white text-sm"
            >
              <option value="All">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
        </div>

        {/* Payments Table */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Transaction ID</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Order ID</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Customer</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Amount</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Method</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Status</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Date</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredPayments.length > 0 ? (
                  filteredPayments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-slate-50 transition">
                      <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-slate-900">{payment.id}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-slate-700">{payment.orderId}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-slate-700">{payment.customer}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-slate-900">
                        {currency} {parseFloat(payment.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-slate-700">{payment.method}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${statusMap[payment.status]?.bg} ${statusMap[payment.status]?.text}`}>
                          <span className={`w-2 h-2 rounded-full ${statusMap[payment.status]?.dot}`}></span>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-slate-700">{payment.date}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-600">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-6 py-8 text-center text-slate-500">
                      No payments found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Info */}
        <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
          <span>Showing {filteredPayments.length} of {dummyPayments.length} payments</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition text-sm font-medium">Previous</button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium">1</button>
            <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition text-sm font-medium">Next</button>
          </div>
        </div>
      </div>
    </main>
  )
}
