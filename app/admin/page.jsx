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
  return (
    <>
      <AdminClient />
    </>
  )
}

