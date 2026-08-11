import ReportsClient from './ReportsClient'

export const metadata = {
  title: "Reports - Admin",
  description: "Admin panel for generating and viewing reports on Cyrus Graphics.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminReportsPage() {
  return <ReportsClient />
}
