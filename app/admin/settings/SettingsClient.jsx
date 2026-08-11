'use client'

import { Settings, CreditCard, Truck, Mail, Globe, Lock } from 'lucide-react'

const settingsCategories = [
  {
    id: 1,
    title: 'General Settings',
    description: 'Business info, contact details...',
    icon: Settings,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    id: 2,
    title: 'Payment Settings',
    description: 'Payments methods, billing...',
    icon: CreditCard,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 3,
    title: 'Shipping Settings',
    description: 'Shipping zones, rates...',
    icon: Truck,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-100',
    iconColor: 'text-cyan-600'
  },
  {
    id: 4,
    title: 'Email Settings',
    description: 'Email templates, notifications...',
    icon: Mail,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    id: 5,
    title: 'Website Settings',
    description: 'Website config, SEO...',
    icon: Globe,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    id: 6,
    title: 'Backup & Security',
    description: 'Security, backups, logs...',
    icon: Lock,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-600'
  },
]

export default function SettingsClient() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Settings</h1>
          <p className="text-sm text-slate-600 mt-2">Manage your admin panel and system settings</p>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {settingsCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="group bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition cursor-pointer overflow-hidden"
              >
                {/* Icon Section */}
                <div className={`flex items-center justify-center py-10 ${category.bgColor}`}>
                  <Icon className={`w-16 h-16 sm:w-20 sm:h-20 ${category.iconColor}`} />
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {category.description}
                  </p>
                </div>

                {/* Hover overlay arrow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-slate-900 transition"></div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
