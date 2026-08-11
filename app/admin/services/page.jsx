import ServicesClient from './ServicesClient'

export const metadata = {
  title: "Services Management - Admin",
  description: "Manage all services offered on Cyrus Graphics.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminServicesPage() {
  return <ServicesClient />
}
