export const metadata = {
  title: "Admin Dashboard - Cyrus Graphics",
  description: "Admin dashboard for managing Cyrus Graphics store. Monitor orders, products, revenue, and stores.",

  robots: {
    index: false,
    follow: false
  }
};

import AdminClient from './AdminClient'

export default function AdminDashboardPage(){
  return <div className="min-h-screen bg-slate-50">
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <AdminClient />
      </div>
    </div>
  </div>
}
