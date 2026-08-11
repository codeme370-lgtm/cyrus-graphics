"use client"

import Loading from "@/components/Loading"
import { CircleDollarSignIcon, ShoppingBasketIcon, TrendingUp, Package, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import RevenueChart from "@/components/admin/RevenueChart"
import OrdersDonutChart from "@/components/admin/OrdersDonutChart"

export default function AdminClient(){
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || 'GH₵'

    const [loading, setLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState({
        products: 0,
        revenue: 0,
        orders: 0,
        stores: 0,
        allOrders: [],
        pendingOrders: 0,
        deliveredOrders: 0,
        shippedOrders: 0,
    })

    const fetchDashboardData = async () => {
        try {
            const response = await axios.get('/api/admin/dashboard');
            setDashboardData(response.data.dashboardData);
        } catch (error) {
            toast.error(error?.response?.data?.error || error.message);
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchDashboardData()
    }, [])

    if (loading) return <Loading />

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total Orders Card */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-600">Total Orders</p>
                            <p className="text-3xl font-bold text-slate-900 mt-2">{dashboardData?.orders || 248}</p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <ShoppingBasketIcon className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                </div>

                {/* Revenue Card */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-600">Revenue</p>
                            <p className="text-3xl font-bold text-slate-900 mt-2">{currency}12,580</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <CircleDollarSignIcon className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                </div>

                {/* Pending Orders Card */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-600">Pending Orders</p>
                            <p className="text-3xl font-bold text-slate-900 mt-2">{dashboardData?.pendingOrders || 1642}</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Clock className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                </div>

                {/* Products Card */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-600">Total Products</p>
                            <p className="text-3xl font-bold text-slate-900 mt-2">{dashboardData?.products || 189}</p>
                        </div>
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                            <Package className="w-6 h-6 text-amber-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Stat 1 */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-slate-500 uppercase">Orders Completed</p>
                            <p className="text-2xl font-bold text-slate-900 mt-2">45</p>
                        </div>
                    </div>
                </div>

                {/* Stat 2 */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-slate-500 uppercase">In Progress</p>
                            <p className="text-2xl font-bold text-slate-900 mt-2">12</p>
                        </div>
                    </div>
                </div>

                {/* Stat 3 */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase">Total Revenue</p>
                        <p className="text-2xl font-bold text-slate-900 mt-2">{currency}186,420</p>
                    </div>
                </div>

                {/* Stat 4 */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                    <div>
                        <p className="text-xs font-medium text-slate-500 uppercase">Growth Rate</p>
                        <div className="flex items-center gap-2 mt-2">
                            <p className="text-2xl font-bold text-slate-900">+15.6%</p>
                            <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Overview Chart */}
                <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-900 mb-6">Revenue Overview</h2>
                    <RevenueChart />
                </div>

                {/* Orders Overview Donut Chart */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-900 mb-6">Orders Overview</h2>
                    <OrdersDonutChart 
                        pending={dashboardData?.pendingOrders || 58}
                        shipped={dashboardData?.shippedOrders || 128}
                        delivered={dashboardData?.deliveredOrders || 248}
                    />
                </div>
            </div>
        </div>
    )
}

