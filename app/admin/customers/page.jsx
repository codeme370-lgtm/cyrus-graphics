import CustomersClient from './CustomersClient'

export const metadata = {
  title: "Manage Customers - Admin",
  description: "Admin panel for managing customers on Cyrus Graphics.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminCustomersPage() {
  return <CustomersClient />
}
