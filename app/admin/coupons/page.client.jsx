'use client'

import { useEffect, useState } from "react"
import { format } from "date-fns"
import toast from "react-hot-toast"
import { DeleteIcon } from "lucide-react"
import axios from "axios"

export default function AdminCoupons() {
    const [coupons, setCoupons] = useState([])

    const [newCoupon, setNewCoupon] = useState({
        code: '',
        description: '',
        discount: '',
        forNewUser: false,
        forMember: false,
        isPublic: false,
        expiresAt: new Date()
    })

    const fetchCoupons = async () => {
        //add the api call to fetch coupons
        try {
            const {data} = await axios.get('/api/admin/coupon');
            setCoupons(data.coupons);
        } catch (error) {
           toast.error(error?.response?.data?.error || error.message); 
        }
    }

    const handleAddCoupon = async (e) => {
        e.preventDefault()
        // add a coupon
        try {
           const couponPayload = {
             ...newCoupon,
             discount: Number(newCoupon.discount),
             expiresAt: newCoupon.expiresAt
           }

           const {data} = await axios.post('/api/admin/coupon',{coupon: couponPayload});
           toast.success(data.message);
           // lets fetch the coupons again
           fetchCoupons();
        } catch (error) {
            toast.error(error?.response?.data?.error || error.message);
        }
    }

    const handleChange = (e) => {
        setNewCoupon({ ...newCoupon, [e.target.name]: e.target.value })
    }

    const deleteCoupon = async (code) => {
        // api call to delete a coupon
        try{
        //we need a windows form to confirm deletion
        const confirm = window.confirm("Are you sure you want to delete this coupon?");
        //if not confirmed, return
        if (!confirm) return;
        const {data} = await axios.delete(`/api/admin/coupon?code=${code}`);
        //fetch coupons again
        fetchCoupons();
        toast.success("coupon deleted successfully");
        } catch (error) {
            toast.error(error?.response?.data?.error || error.message);
        }


    }

    useEffect(() => {
        fetchCoupons();
    }, [])

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 mb-40 px-6 py-10">
            <div className="mx-auto max-w-5xl space-y-10">
                <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold text-slate-900">Add <span className="text-amber-500">Coupons</span></h2>
                    <form onSubmit={(e) => toast.promise(handleAddCoupon(e), { loading: "Adding coupon..." })} className="mt-8 grid gap-6 text-sm">
                        <div className="grid gap-4 md:grid-cols-2">
                            <input type="text" placeholder="Coupon Code" className="w-full p-3 border border-slate-200 rounded-2xl bg-slate-50 text-slate-900 outline-none"
                                name="code" value={newCoupon.code} onChange={handleChange} required
                            />
                            <input type="number" placeholder="Coupon Discount (%)" min={1} max={100} className="w-full p-3 border border-slate-200 rounded-2xl bg-slate-50 text-slate-900 outline-none"
                                name="discount" value={newCoupon.discount} onChange={handleChange} required
                            />
                        </div>
                        <input type="text" placeholder="Coupon Description" className="w-full p-3 border border-slate-200 rounded-2xl bg-slate-50 text-slate-900 outline-none"
                            name="description" value={newCoupon.description} onChange={handleChange} required
                        />

                        <label className="space-y-2 text-sm text-slate-700">
                            <span>Coupon Expiry Date</span>
                            <input type="date" className="w-full p-3 border border-slate-200 rounded-2xl bg-slate-50 text-slate-900 outline-none"
                                name="expiresAt" value={format(newCoupon.expiresAt, 'yyyy-MM-dd')} onChange={handleChange}
                            />
                        </label>

                        <div className="grid gap-4 md:grid-cols-2">
                            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-amber-500" 
                                    name="forNewUser" checked={newCoupon.forNewUser}
                                    onChange={(e) => setNewCoupon({ ...newCoupon, forNewUser: e.target.checked })}
                                />
                                <span className="text-slate-700">For New User</span>
                            </label>
                            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-amber-500" 
                                    name="forMember" checked={newCoupon.forMember}
                                    onChange={(e) => setNewCoupon({ ...newCoupon, forMember: e.target.checked })}
                                />
                                <span className="text-slate-700">For Member</span>
                            </label>
                        </div>

                        <button className="mt-2 inline-flex items-center justify-center rounded-3xl bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
                            Add Coupon
                        </button>
                    </form>
                </section>

                <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold text-slate-900">List <span className="text-amber-500">Coupons</span></h2>
                    <div className="overflow-x-auto mt-6 rounded-3xl border border-slate-200 bg-slate-50">
                        <table className="min-w-full text-sm text-slate-900">
                            <thead className="bg-white">
                                <tr>
                                    <th className="py-3 px-4 text-left font-semibold text-slate-600">Code</th>
                                    <th className="py-3 px-4 text-left font-semibold text-slate-600">Description</th>
                                    <th className="py-3 px-4 text-left font-semibold text-slate-600">Discount</th>
                                    <th className="py-3 px-4 text-left font-semibold text-slate-600">Expires At</th>
                                    <th className="py-3 px-4 text-left font-semibold text-slate-600">New User</th>
                                    <th className="py-3 px-4 text-left font-semibold text-slate-600">For Member</th>
                                    <th className="py-3 px-4 text-left font-semibold text-slate-600">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {coupons.map((coupon) => (
                                    <tr key={coupon.code} className="hover:bg-slate-100 transition-colors">
                                        <td className="py-3 px-4 font-medium text-slate-900">{coupon.code}</td>
                                        <td className="py-3 px-4 text-slate-900">{coupon.description}</td>
                                        <td className="py-3 px-4 text-slate-900">{coupon.discount}%</td>
                                        <td className="py-3 px-4 text-slate-900">{format(coupon.expiresAt, 'yyyy-MM-dd')}</td>
                                        <td className="py-3 px-4 text-slate-900">{coupon.forNewUser ? 'Yes' : 'No'}</td>
                                        <td className="py-3 px-4 text-slate-900">{coupon.forMember ? 'Yes' : 'No'}</td>
                                        <td className="py-3 px-4 text-slate-900">
                                            <DeleteIcon onClick={() => toast.promise(deleteCoupon(coupon.code), { loading: "Deleting coupon..." })} className="w-5 h-5 text-red-500 hover:text-red-800 cursor-pointer" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}
