import SettingsClient from './SettingsClient'

export const metadata = {
  title: "Settings - Admin",
  description: "Manage admin panel settings on Cyrus Graphics.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminSettingsPage() {
  return <SettingsClient />
}
