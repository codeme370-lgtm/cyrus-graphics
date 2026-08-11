'use client'

import { Plus, Eye, Pencil, Trash2, FileText, Palette, Tag, Layers, Package, Sparkles } from 'lucide-react'

const services = [
  {
    id: 1,
    name: 'Graphic Design',
    description: '12 Services',
    icon: Palette,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 2,
    name: 'Printing Services',
    description: '8 Services',
    icon: FileText,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 3,
    name: 'Branding',
    description: '10 Services',
    icon: Tag,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    id: 4,
    name: 'Large Format Printing',
    description: '5 Services',
    icon: Layers,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 5,
    name: 'Promotional Items',
    description: '15 Services',
    icon: Package,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    id: 6,
    name: 'Packaging',
    description: '7 Services',
    icon: Package,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
]

export default function ServicesClient() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Header with Title and Button */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Services Management
            </h1>
          </div>
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition">
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Add Service</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                {/* Icon Section */}
                <div className={`flex items-center justify-center py-8 ${service.bgColor}`}>
                  <Icon className={`w-16 h-16 sm:w-20 sm:h-20 ${service.iconColor}`} />
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6">
                    {service.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button className="flex-1 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium text-sm rounded-lg transition border border-purple-200">
                      View
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-500 hover:text-slate-700" title="Edit">
                      <Pencil className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg transition text-slate-500 hover:text-red-600" title="Delete">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State Alternative (if no services) */}
        {services.length === 0 && (
          <div className="bg-white rounded-lg border border-slate-200 p-12 text-center">
            <Sparkles className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-lg font-semibold text-slate-900 mb-2">No services yet</p>
            <p className="text-slate-600 mb-6">Start by creating your first service category</p>
            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition">
              Create First Service
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
