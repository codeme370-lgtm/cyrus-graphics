'use client'

import { useState, useMemo } from 'react'
import { Search, Plus, Eye, Edit2, Trash2, Mail, Phone, ShoppingBag, TrendingUp } from 'lucide-react'

const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || 'GH₵'

const dummyCustomers = [
  { 
    id: 1, 
    name: 'John Marshall', 
    email: 'john@email.com', 
    phone: '024 732 6897',
    totalOrders: 12,
    totalSpent: 3400,
    status: 'Active',
    avatar: 'JM'
  },
  { 
    id: 2, 
    name: 'Ava Bustinra', 
    email: 'ava@email.com', 
    phone: '024 235 9678',
    totalOrders: 6,
    totalSpent: 2350,
    status: 'Active',
    avatar: 'AB'
  },
  { 
    id: 3, 
    name: 'Kali Alexi', 
    email: 'kali@email.com', 
    phone: '024 544 8788',
    totalOrders: 20,
    totalSpent: 7680,
    status: 'Active',
    avatar: 'KA'
  },
  { 
    id: 4, 
    name: 'Attencia Berkson', 
    email: 'attencia@email.com', 
    phone: '024 496 7660',
    totalOrders: 8,
    totalSpent: 5500,
    status: 'Active',
    avatar: 'AB'
  },
  { 
    id: 5, 
    name: 'Serenity Lill', 
    email: 'stl@email.com', 
    phone: '024 047 0001',
    totalOrders: 21,
    totalSpent: 12330,
    status: 'Active',
    avatar: 'SL'
  },
  { 
    id: 6, 
    name: 'Marcus Johnson', 
    email: 'marcus@email.com', 
    phone: '024 111 2233',
    totalOrders: 5,
    totalSpent: 1800,
    status: 'Active',
    avatar: 'MJ'
  },
  { 
    id: 7, 
    name: 'Sarah Williams', 
    email: 'sarah@email.com', 
    phone: '024 444 5555',
    totalOrders: 15,
    totalSpent: 6200,
    status: 'Inactive',
    avatar: 'SW'
  },
]

const avatarColors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-cyan-500',
]

export default function CustomersClient() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const filteredCustomers = useMemo(() => {
    return dummyCustomers.filter((customer) => {
      const matchesSearch = 
        customer.name.toLowerCase().includes(search.toLowerCase()) ||
        customer.email.toLowerCase().includes(search.toLowerCase()) ||
        customer.phone.includes(search)
      const matchesStatus = statusFilter === 'All' || customer.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [search, statusFilter])

  const stats = useMemo(() => {
    return {
      totalCustomers: dummyCustomers.length,
      activeCustomers: dummyCustomers.filter(c => c.status === 'Active').length,
      totalRevenue: dummyCustomers.reduce((sum, c) => sum + c.totalSpent, 0),
      avgOrderValue: dummyCustomers.reduce((sum, c) => sum + c.totalSpent, 0) / dummyCustomers.length,
    }
  }, [])

  const getAvatarColor = (index) => avatarColors[index % avatarColors.length]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Customers</h1>
            <p className="text-sm text-slate-600 mt-1">View and manage all customers</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm transition">
            <Plus size={18} /> Add Customer
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-600 uppercase">Total Customers</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">{stats.totalCustomers}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-600 uppercase">Active Customers</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">{stats.activeCustomers}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div>
              <p className="text-xs font-medium text-slate-600 uppercase">Total Revenue</p>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">{currency} {stats.totalRevenue.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div>
              <p className="text-xs font-medium text-slate-600 uppercase">Avg. Spent/Customer</p>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">{currency} {stats.avgOrderValue.toFixed(0)}</p>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search customer..."
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
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Name</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Email</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Phone</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Total Orders</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Total Spent</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Status</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((customer, index) => (
                    <tr key={customer.id} className="hover:bg-slate-50 transition">
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${getAvatarColor(index)}`}>
                            {customer.avatar}
                          </div>
                          <span className="text-sm font-semibold text-slate-900">{customer.name}</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-slate-700">{customer.email}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-slate-700">{customer.phone}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-slate-900">{customer.totalOrders}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-slate-900">{currency} {customer.totalSpent.toLocaleString()}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          customer.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {customer.status}
                        </span>
                      </td>
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
                      No customers found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Info */}
        <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
          <span>Showing {filteredCustomers.length} of {dummyCustomers.length} customers</span>
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
