import PrintingJobsClient from './PrintingJobsClient'

export const metadata = {
  title: "Printing Jobs - Admin",
  description: "Manage printing jobs and production workflow on Cyrus Graphics.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPrintingJobsPage() {
  return <PrintingJobsClient />
}
