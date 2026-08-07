import AdminOrdersClient from './OrdersClient'

export const metadata = {
  title: "Manage Orders - Admin",
  description: "Admin panel for managing customer orders and fulfillment on Cyrus Graphics.",

  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminOrdersPage() {
  return <AdminOrdersClient />
}
