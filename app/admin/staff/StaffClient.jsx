'use client'

import { useState, useMemo } from 'react'
import { Search, Plus, Eye, Edit2, Trash2, MoreVertical } from 'lucide-react'

const sampleStaff = [
  {
    id: 1,
    name: 'Richard Mcintath',
    role: 'Designer',
    email: 'richard@cyrus.com',
    phone: '034 111 222',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Maryna D.',
    role: 'Designer',
    email: 'mayena@cyrus.com',
    phone: '034 222 333',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Isaac T.',
    role: 'Print Operator',
    email: 'isaac@cyrus.com',
    phone: '034 333 4444',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Yan B.',
    role: 'Delivery Agent',
    email: 'yani@cyrus.com',
    phone: '034 444 5555',
    status: 'Active'
  },
  {
    id: 5,
    name: 'Alaina D.',
    role: 'Customer Service',
    email: 'alaina@cyrus.com',
    phone: '034 555 6666',
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Manager',
    email: 'james@cyrus.com',
    phone: '034 666 7777',
    status: 'Active'
  },
  {
    id: 7,
    name: 'Sarah Johnson',
    role: 'Account Manager',
    email: 'sarah@cyrus.com',
    phone: '034 777 8888',
    status: 'Inactive'
  },
]

const statusColors = {
  'Active': 'bg-green-100 text-green-700',
  'Inactive': 'bg-slate-100 text-slate-700',
  'On Leave': 'bg-yellow-100 text-yellow-700',
}

export default function StaffClient() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('All Status')

  const filteredStaff = useMemo(() => {
    return sampleStaff.filter(staff => {
      const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.role.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = filterStatus === 'All Status' || staff.status === filterStatus
      
      return matchesSearch && matchesStatus
    })
  }, [searchTerm, filterStatus])

  const stats = useMemo(() => {
    const total = sampleStaff.length
    const active = sampleStaff.filter(s => s.status === 'Active').length
    const inactive = sampleStaff.filter(s => s.status === 'Inactive').length

    return { total, active, inactive }
  }, [])

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Header with Title and Button */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Staff Management
            </h1>
          </div>
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition">
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Add Staff</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {/* Total Staff */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">Total Staff</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">{stats.total}</p>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 12H9m0 0l3-3m-3 3l-3-3m3 3l-3 3m3-3l3 3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Active */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">Active</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600">{stats.active}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Inactive */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-1">Inactive</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-600">{stats.inactive}</p>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              placeholder="Search by name, email, or role..."
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
            <option>Active</option>
            <option>Inactive</option>
            <option>On Leave</option>
          </select>
        </div>

        {/* Staff Table */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Staff</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Role</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Email</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Phone</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-700">Status</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-slate-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStaff.map((staff, index) => (
                  <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-slate-900">{staff.name}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700">{staff.role}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700 break-all">{staff.email}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-700">{staff.phone}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${statusColors[staff.status]}`}>
                        {staff.status}
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
            Showing {filteredStaff.length} of {sampleStaff.length} staff members
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
