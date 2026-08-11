'use client'

import { usePathname } from "next/navigation"
import {
    Home,
    Box,
    PlusCircle,
    ShoppingBag,
    Store,
    ShieldCheck,
    Ticket,
    Layers,
    Tag,
    SlidersHorizontal,
    Star,
    Users,
    RefreshCcw,
    Image as ImageIcon,
    Mail,
    FileText,
    Edit3,
    UserCheck,
    Key,
    CreditCard,
    Truck,
    Percent,
    Settings,
    Activity,
    ServerCog,
    ChevronDown,
    BarChart3,
    MessageSquare,
    Printer,
    Briefcase,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from '@/context/AuthContext';

const AdminSidebar = () => {
//let's get the user
const { user } = useAuth()
    const pathname = usePathname()

    const sections = [
        {
            title: null,
            links: [
                { name: 'Dashboard', href: '/admin', icon: Home },
            ]
        },
        {
            title: 'STORE MANAGEMENT',
            links: [
                { name: 'Products', href: '/admin/products', icon: Box },
                { name: 'Categories', href: '/admin/categories', icon: Layers },
                { name: 'Services', href: '/admin/services', icon: Briefcase },
                { name: 'Brands', href: '/admin/brands', icon: Tag },
                { name: 'Attributes', href: '/admin/attributes', icon: SlidersHorizontal },
                { name: 'Reviews', href: '/admin/reviews', icon: Star },
            ]
        },
        {
            title: 'PRODUCTION & OPERATIONS',
            links: [
                { name: 'Printing Jobs', href: '/admin/printing-jobs', icon: Printer },
            ]
        },
        {
            title: 'ORDERS & CUSTOMERS',
            links: [
                { name: 'Orders', href: '/admin/orders', icon: ShoppingBag },
                { name: 'Customers', href: '/admin/customers', icon: Users },
                { name: 'Quotes', href: '/admin/quotes', icon: MessageSquare },
                { name: 'Payments', href: '/admin/payments', icon: CreditCard },
                { name: 'Returns & Refunds', href: '/admin/returns', icon: RefreshCcw },
            ]
        },
        {
            title: 'MARKETING & CONTENT',
            links: [
                { name: 'Coupons', href: '/admin/coupons', icon: Ticket },
                { name: 'Banners', href: '/admin/banners', icon: ImageIcon },
                { name: 'Newsletter', href: '/admin/newsletter', icon: Mail },
                { name: 'Pages', href: '/admin/pages', icon: FileText },
                { name: 'Blog Posts', href: '/admin/blog-posts', icon: Edit3 },
                { name: 'Portfolio', href: '/admin/portfolio', icon: ImageIcon },
            ]
        },
        {
            title: 'REPORTS & ANALYTICS',
            links: [
                { name: 'Reports', href: '/admin/reports', icon: BarChart3 },
            ]
        },
        {
            title: 'SYSTEM & SETTINGS',
            links: [
                { name: 'Users & Roles', href: '/admin/users', icon: UserCheck },
                { name: 'Permissions', href: '/admin/permissions', icon: Key },
                { name: 'Payment Methods', href: '/admin/payment-methods', icon: CreditCard },
                { name: 'Shipping Methods', href: '/admin/shipping-methods', icon: Truck },
                { name: 'Taxes', href: '/admin/taxes', icon: Percent },
                { name: 'Settings', href: '/admin/settings', icon: Settings },
                { name: 'Activity Logs', href: '/admin/activity-logs', icon: Activity },
                { name: 'System Status', href: '/admin/system-status', icon: ServerCog },
            ]
        },
    ]

    return user && (
        <aside className="hidden xl:flex h-screen w-80 shrink-0 flex-col bg-white border-r border-slate-200 text-slate-900">
            <div className="px-6 py-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-500 text-slate-950 font-bold shadow-sm">
                        CG
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-slate-900">Cyrus Graphics</h1>
                        <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Admin Panel</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-2 pb-6 space-y-6">
                {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="space-y-3">
                        {section.title && (
                            <p className="px-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                                {section.title}
                            </p>
                        )}
                        <div className="space-y-1">
                            {section.links.map((link) => {
                                const active = pathname === link.href
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`group relative flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${active ? 'bg-amber-50 text-slate-900 shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
                                    >
                                        <span className={`absolute left-0 top-0 h-full w-1 rounded-r-full transition ${active ? 'bg-amber-500' : 'bg-transparent'}`} />
                                        <link.icon size={18} className="shrink-0 text-amber-500" />
                                        <span>{link.name}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t border-slate-200 px-6 py-6">
                <div className="flex items-center gap-3 rounded-[28px] border border-slate-200 bg-slate-50 p-4 shadow-sm">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-3xl border border-amber-500 bg-white flex items-center justify-center text-slate-900 font-semibold">
                        {user.fullName?.[0] || user.name?.[0] || 'A'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">{user.fullName || user.name || 'Admin'}</p>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-amber-500">Administrator</p>
                    </div>
                    <ChevronDown size={18} className="text-amber-500" />
                </div>
            </div>
        </aside>
    )
}

export default AdminSidebar