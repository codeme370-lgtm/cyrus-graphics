import DeliveriesClient from './DeliveriesClient'

export const metadata = {
  title: "Deliveries Management - Admin",
  description: "Manage deliveries and shipping on Cyrus Graphics.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminDeliveriesPage() {
  return <DeliveriesClient />
}
