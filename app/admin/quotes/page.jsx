import QuotesClient from './QuotesClient'

export const metadata = {
  title: "Quotes Management - Admin",
  description: "Manage customer quotes and pricing requests on Cyrus Graphics.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminQuotesPage() {
  return <QuotesClient />
}
