'use client'

import { useState, useMemo } from 'react'
import { Search, Plus, Eye, Edit2, Trash2, MoreVertical, Truck } from 'lucide-react'

const sampleDeliveries = [
  {
    id: 'DEL-00124',
    orderId: 'ORD-00123',
    customer: 'Alma Boateng',
    address: 'Accra, Madina',
    status: 'Out for Delivery',
    rider: 'Kofi Solar'
  },
  {
    id: 'DEL-00123',
    orderId: 'ORD-00122',
    customer: 'Kofi Asare',
    address: 'Kumasi, Adum',
    status: 'Delivered',
    rider: 'Yan Solar'
  },
  {
    id: 'DEL-00122',
    orderId: 'ORD-00121',
    customer: 'Serenity Ltd',
    address: 'Accra, Airport',
    status: 'Pending',
    rider: 'Kofi Solar'
  },
  {
    id: 'DEL-00121',
    orderId: 'ORD-00120',
    customer: 'Nana Yaw',
    address: 'Takoradi',
    status: 'Delivered',
    rider: 'Yan Solar'
  },
  {
    id: 'DEL-00120',
    orderId: 'ORD-00119',
    customer: 'Sarah Mitchell',
    address: 'Tema, Lakeside',
    status: 'Pending',
    rider: 'Kamara A.'
  },
]

const statusColors = {
  'Pending': 'bg-yellow-100 text-yellow-700 dot-yellow-400',
  'Out for Delivery': 'bg-blue-100 text-blue-700 dot-blue-400',
  'Delivered': 'bg-green-100 text-green-700 dot-green-400',
  'Failed': 'bg-red-100 text-red-700 dot-red-400',
}

const statusDotColors = {
  'Pending': 'bg-yellow-400',
  'Out for Delivery': 'bg-blue-400',
  'Delivered': 'bg-green-400',
  'Failed': 'bg-red-400',
}

export default function DeliveriesClient() {
  const [activeTab, setActiveTab] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDeliveries = useMemo(() => {
    return sampleDeliveries.filter(delivery => {
      const matchesSearch = delivery.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        delivery.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        delivery.customer.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesTab = activeTab === 'All' || delivery.status === activeTab
      
      return matchesSearch && matchesTab
    })
  }, [searchTerm, activeTab])

  const stats = useMemo(() => {
    const total = sampleDeliveries.length
    const pending = sampleDeliveries.filter(d => d.status === 'Pending').length
    const outForDelivery = sampleDeliveries.filter(d => d.status === 'Out for Delivery').length
    const delivered = sampleDeliveries.filter(d => d.status === 'Delivered').length

    return { total, pending, outForDelivery, delivered }
  }, [])

  const tabs = ['All', 'Pending', 'Out for Delivery', 'Delivered', 'Failed']

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Header with Title and Button */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Deliveries
            </h1>
          </div>
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition">
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">New Delivery</span>
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

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by Delivery ID, Order ID, or Customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>

        {/* Deliveries Table */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Delivery ID</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Order ID</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Customer</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Address</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Status</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Rider</th>
                </tr>
              </thead>
              <tbody>
                {filteredDeliveries.map((delivery, index) => (
                  <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-slate-900">{delivery.id}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700">{delivery.orderId}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700">{delivery.customer}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700">{delivery.address}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[delivery.status]}`}>
                        <span className={`w-2 h-2 rounded-full ${statusDotColors[delivery.status]}`}></span>
                        {delivery.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700">{delivery.rider}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Info */}
        <div className="mt-6 flex items-center justify-between px-4 sm:px-6 py-4">
          <p className="text-xs sm:text-sm text-slate-600">
            Showing {filteredDeliveries.length} of {sampleDeliveries.length} deliveries
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
