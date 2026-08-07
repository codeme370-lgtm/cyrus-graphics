'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { X, Home, SquarePlus, SquarePen, LayoutList, ShoppingBag } from 'lucide-react'

const StoreDrawer = ({ open, onClose, storeInfo }) => {
    const drawerLinks = [
        { name: 'Dashboard', href: '/store', icon: Home },
        { name: 'Add Product', href: '/store/add-product', icon: SquarePlus },
        { name: 'Manage Product', href: '/store/manage-product', icon: SquarePen },
        { name: 'Orders', href: '/store/orders', icon: LayoutList },
        { name: 'Back to Shop', href: '/shop', icon: ShoppingBag },
    ]

    const pathname = usePathname()

    return (
        <>
            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-slate-950/40 transition-opacity ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
                onClick={onClose} 
                style={{ zIndex: 40 }} 
            />

            {/* Drawer panel (left side) */}
            <aside 
                className={`fixed top-0 left-0 h-full w-80 sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`} 
                aria-hidden={!open} 
                style={{ zIndex: 50 }}
            >
                <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-500 text-slate-950 font-bold">CG</div>
                            <div>
                                <div className="text-sm font-semibold text-slate-900">Cyrus Graphics Store</div>
                                <div className="text-xs uppercase tracking-[0.24em] text-amber-500">Seller Dashboard</div>
                            </div>
                        </div>
                        <button 
                            onClick={onClose} 
                            aria-label="Close menu" 
                            className="p-2 rounded-lg hover:bg-slate-100 text-slate-900"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <nav className="flex-1 overflow-auto border-t border-slate-200 pt-4">
                        <ul className="space-y-2">
                            {drawerLinks.map((link, index) => {
                                const active = pathname === link.href
                                return (
                                    <li key={index}>
                                        <Link 
                                            href={link.href} 
                                            className={`flex items-center gap-3 rounded-3xl px-4 py-3 transition ${active ? 'bg-amber-50 text-slate-900 shadow-sm' : 'text-slate-700 hover:bg-slate-100'}`}
                                            onClick={onClose}
                                        >
                                            <link.icon size={20} className="text-amber-500" /> 
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    <div className="mt-6">
                        <Link 
                            href="/" 
                            className="block w-full text-center px-4 py-3 bg-amber-500 text-slate-950 rounded-3xl font-semibold hover:bg-amber-400 transition"
                        >
                            Back to Homepage
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default StoreDrawer
