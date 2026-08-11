import ReviewsClient from './ReviewsClient'

export const metadata = {
  title: "Reviews Management - Admin",
  description: "Manage customer reviews and ratings on Cyrus Graphics.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminReviewsPage() {
  return <ReviewsClient />
}
