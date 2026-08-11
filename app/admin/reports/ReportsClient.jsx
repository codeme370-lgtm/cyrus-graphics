'use client'

import { BarChart3, ShoppingCart, TrendingUp, Users, DollarSign, Activity, ChevronRight } from 'lucide-react'

const reports = [
  {
    id: 1,
    title: 'Sales Report',
    description: 'View Reports',
    icon: BarChart3,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    id: 2,
    title: 'Order Report',
    description: 'View Reports',
    icon: ShoppingCart,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 3,
    title: 'Pricing Report',
    description: 'View Pricing',
    icon: TrendingUp,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    id: 4,
    title: 'Customer Report',
    description: 'View Performance',
    icon: Users,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    id: 5,
    title: 'Revenue Report',
    description: 'View Revenue',
    icon: DollarSign,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 6,
    title: 'Analytics Report',
    description: 'View Analytics',
    icon: Activity,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
]

export default function ReportsClient() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Reports</h1>
          <p className="text-sm text-slate-600 mt-2">View and generate comprehensive business reports</p>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => {
            const Icon = report.icon
            return (
              <div
                key={report.id}
                className="group bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer"
              >
                {/* Header with gradient background */}
                <div className={`bg-gradient-to-br ${report.color} h-32 sm:h-40 flex items-center justify-center relative overflow-hidden`}>
                  {/* Background decoration */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
                  </div>
                  
                  {/* Icon */}
                  <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-white relative z-10" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {report.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-600">
                      {report.description}
                    </p>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`h-1 bg-gradient-to-r ${report.color}`}></div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
