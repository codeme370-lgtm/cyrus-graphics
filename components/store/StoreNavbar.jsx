"use client"
import Link from "next/link"
import { Menu, Bell } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Pusher from "pusher-js"
import toast from "react-hot-toast"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"


const StoreNavbar = ({ onMenuClick }) => {
    const { user, signOut } = useAuth()
    const [unreadCount, setUnreadCount] = useState(0)
    const [deliveryReportCount, setDeliveryReportCount] = useState(0)
    const [showDropdown, setShowDropdown] = useState(false)
    const [recentAlerts, setRecentAlerts] = useState([])
    const router = useRouter()
    const containerRef = useRef(null)

    const [pulse, setPulse] = useState(false)
    const [pusherClient, setPusherClient] = useState(null)

    const fetchRecent = async () => {
        try {
            const { data } = await axios.get('/api/store/address-alerts', {
                headers: { Authorization: `Bearer ${token}` }
            })
            const alerts = (data.alerts || [])
            setRecentAlerts(alerts.slice(0, 5))
            setUnreadCount(alerts.filter(a => !a.isRead).length)
            // fetch delivery report count too
            try {
                const dr = await axios.get('/api/store/delivery-reports', { headers: { Authorization: `Bearer ${token}` } })
                setDeliveryReportCount((dr.data.reports || []).length)
            } catch (e) {
                console.warn('Failed to fetch delivery reports', e)
            }
            return alerts[0]?.storeId || null
        } catch (err) {
            console.warn('Failed to fetch recent alerts', err)
            return null
        }
    }

    useEffect(() => {
        let channel
        const init = async () => {
            const storeId = await fetchRecent()
            if (!storeId) return
            if (!pusherClient) {
                const p = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
                    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
                    authEndpoint: "/api/pusher/auth"
                })
                setPusherClient(p)
                channel = p.subscribe(`private-store-${storeId}`)
                    channel.bind('addressChange', (payload) => {
                        setRecentAlerts(prev => {
                            const next = [payload, ...prev.filter(a => a.id !== payload.id)].slice(0, 5)
                            return next
                        })
                        setUnreadCount(c => c + 1)
                        setPulse(true)
                        setTimeout(() => setPulse(false), 2000)
                    })
                    // Listen for delivery report events and show them in the same alerts dropdown
                    channel.bind('deliveryReport', (payload) => {
                        const reportAlert = {
                            id: payload.id || `dr-${Date.now()}`,
                            storeId: payload.storeId,
                            isRead: false,
                            createdAt: payload.createdAt || new Date().toISOString(),
                            user: payload.user ? { name: payload.user.name || payload.userId } : { name: 'Customer' },
                            order: { id: payload.orderId },
                            type: 'deliveryReport',
                            status: payload.status
                        }
                        setRecentAlerts(prev => {
                            const next = [reportAlert, ...prev.filter(a => a.id !== reportAlert.id)].slice(0, 5)
                            return next
                        })
                        setUnreadCount(c => c + 1)
                        setPulse(true)
                        setTimeout(() => setPulse(false), 2000)
                        toast.success('Delivery report received')
                    })
            }
        }
        init()
        return () => {
            if (channel && pusherClient) {
                pusherClient.unsubscribe(channel.name)
            }
        }
    }, [pusherClient])

    // close dropdown on outside click
    useEffect(() => {
        const onClick = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    }, [])

    return (
        <div className="flex items-center justify-between bg-white border-b border-slate-200 px-6 py-4 shadow-sm">
            <div className="flex items-center gap-4">
                <button onClick={onMenuClick} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition hover:bg-slate-200" aria-label="Open menu">
                    <Menu size={20} />
                </button>
                <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-amber-500">Cyrus Graphics</p>
                    <h1 className="text-xl font-semibold text-slate-900">Store Manager</h1>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div ref={containerRef} className="relative">
                    <button
                        onClick={async () => {
                            const opening = !showDropdown
                            setShowDropdown(opening)
                            if (opening) await fetchRecent()
                        }}
                        className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition hover:bg-slate-200"
                        aria-label="Address change alerts"
                    >
                        <Bell size={18} />
                        {unreadCount > 0 && (
                            <span className={`absolute -top-1 -right-1 inline-flex items-center justify-center h-5 min-w-[1.25rem] rounded-full bg-amber-500 px-1.5 text-[10px] font-semibold text-slate-950 ${pulse ? 'animate-pulse' : ''}`}>
                                {unreadCount}
                            </span>
                        )}
                        {deliveryReportCount > 0 && (
                            <span className="absolute -bottom-1 -right-1 inline-flex items-center justify-center h-5 w-5 rounded-full bg-slate-900 text-[10px] font-semibold text-white">
                                {deliveryReportCount}
                            </span>
                        )}
                    </button>

                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-80 rounded-3xl border border-slate-200 bg-white shadow-lg z-50">
                            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                                <span className="font-medium text-slate-900">Address Changes</span>
                                <button onClick={() => { setShowDropdown(false); router.push('/store/address-changes') }} className="text-sm text-amber-600 hover:underline">View all</button>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {recentAlerts.length === 0 ? (
                                    <div className="p-4 text-sm text-slate-500">No recent address changes</div>
                                ) : recentAlerts.map(alert => (
                                    <div key={alert.id} className={`cursor-pointer border-b border-slate-100 px-4 py-3 hover:bg-slate-50 ${!alert.isRead ? 'bg-amber-50' : ''}`}>
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="text-sm font-medium text-slate-900">{alert.user?.name || alert.order?.user?.name || 'Customer'}</div>
                                            <div className="text-xs text-slate-500">{new Date(alert.createdAt).toLocaleString()}</div>
                                        </div>
                                        <div className="mt-1 text-xs text-slate-600">
                                            Order #{alert.order?.id?.slice(0, 8) || 'N/A'} • {alert.isRead ? 'Verified' : 'Pending'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="text-right">
                    <p className="text-sm font-medium text-slate-900">Hi, {user?.name || 'Seller'}</p>
                    <button onClick={signOut} className="text-sm font-semibold text-amber-600 hover:text-amber-500">Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default StoreNavbar