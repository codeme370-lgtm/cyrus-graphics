import StaffClient from './StaffClient'

export const metadata = {
  title: "Staff Management - Admin",
  description: "Manage staff members and team on Cyrus Graphics.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminStaffPage() {
  return <StaffClient />
}
