'use client'

import { storesDummyData } from "@/assets/assets"
import StoreInfo from "@/components/admin/StoreInfo"
import Loading from "@/components/Loading"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"

export default function AdminApprove() {
    // admin approve page is public — fetch without auth token

    const [stores, setStores] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchStores = async () => {
        //make the api call to get stores pending approval
        try {
            const {data} = await axios.get('/api/admin/stores/pending');
            setStores(data.stores);
        } catch (error) {
            toast.error(error?.response?.data?.error || error.message);
        }
        setLoading(false)
    }

    const handleApprove = async ({ storeId, status }) => {
        // api call to approve or reject store
        try {
            await axios.post('/api/admin/approve-store', { storeId, status });
            //update the stores list
            setStores((prevStores) => prevStores.filter((store) => store.id !== storeId));
            toast.success(`Store ${status === 'approved' ? 'approved' : 'rejected'} successfully`);
            await fetchStores();
        } catch (error) {
            toast.error(error?.response?.data?.error || error.message);
        }
    }

        useEffect(() => {
            fetchStores()
        }, [])

    return !loading ? (
        <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-10">
            <div className="mx-auto max-w-6xl space-y-8">
                <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                    <h1 className="text-2xl font-semibold text-slate-900">Approve <span className="text-amber-500">Stores</span></h1>
                    <p className="mt-3 text-sm text-slate-600">Review pending seller applications and approve stores for publishing.</p>
                </section>

                {stores.length ? (
                    <div className="space-y-4">
                        {stores.map((store) => (
                            <div key={store.id} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm flex max-md:flex-col gap-4 md:items-end">
                                {/* Store Info */}
                                <StoreInfo store={store} />

                                {/* Actions */}
                                <div className="flex gap-3 pt-2 flex-wrap">
                                    <button onClick={() => toast.promise(handleApprove({ storeId: store.id, status: 'approved' }), { loading: "approving" })} className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-sm">
                                        Approve
                                    </button>
                                    <button onClick={() => toast.promise(handleApprove({ storeId: store.id, status: 'rejected' }), { loading: 'rejecting' })} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm">
                                        Reject
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm flex items-center justify-center h-80">
                        <h1 className="text-3xl text-slate-400 font-medium">No Application Pending</h1>
                    </div>
                )}
            </div>
        </main>
    ) : <Loading />
}
