import PaymentsClient from './PaymentsClient'

export const metadata = {
  title: "Payments - Admin",
  description: "Admin panel for managing payments on Cyrus Graphics.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPaymentsPage() {
  return <PaymentsClient />
}
