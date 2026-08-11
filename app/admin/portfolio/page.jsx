import PortfolioClient from './PortfolioClient'

export const metadata = {
  title: "Portfolio Management - Admin",
  description: "Admin panel for managing portfolio projects on Cyrus Graphics.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPortfolioPage() {
  return <PortfolioClient />
}
