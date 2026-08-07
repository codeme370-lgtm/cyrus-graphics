'use client'

import { useEffect, useState } from "react"
import Loading from "../Loading"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import AdminNavbar from "./AdminNavbar"
import AdminDrawer from "./AdminDrawer"
import AdminSidebar from "./AdminSidebar"
import axios from "axios"

const AdminLayout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900">
            <AdminSidebar />
            <AdminDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
            <div className="flex-1 flex flex-col">
                <AdminNavbar onMenuClick={() => setDrawerOpen(true)} />
                <main className="flex-1 overflow-y-auto bg-slate-50 p-6 sm:p-8">
                    <div className="mx-auto max-w-7xl">{children}</div>
                </main>
            </div>
        </div>
    )
}

export default AdminLayout