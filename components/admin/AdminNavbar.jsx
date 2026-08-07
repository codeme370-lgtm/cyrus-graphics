'use client'

import Link from "next/link"
import { useAuth } from "@/context/AuthContext";
import { Menu } from "lucide-react"
import { usePathname } from 'next/navigation'


const AdminNavbar = ({ onMenuClick }) => {
const pathname = usePathname()
const title = pathname === '/admin' ? 'Dashboard' : pathname.split('/').filter(Boolean).slice(-1)[0]?.replace(/-/g,' ').replace(/\b\w/g, (c) => c.toUpperCase()) || 'Dashboard'
const {user, signOut}=useAuth()

    return (
        <div className="flex items-center justify-between px-8 py-4 border-b border-slate-200 bg-white text-slate-900">
            <div className="flex items-center gap-4">
                <button onClick={onMenuClick} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition hover:bg-slate-200" aria-label="Open menu">
                    <Menu size={22} />
                </button>
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 font-bold">CG</div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-amber-500">CYRUS GRAPHICS</p>
                        <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <p className="text-sm text-slate-700">Hi, {user?.fullName || user?.name || user?.email}</p>
                <button 
                    onClick={signOut}
                    className="rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default AdminNavbar