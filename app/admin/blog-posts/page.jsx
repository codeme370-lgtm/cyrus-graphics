import BlogPostsClient from './BlogPostsClient'

export const metadata = {
  title: 'Blog Management - Admin',
  description: 'Admin panel for managing blog posts on Cyrus Graphics.',

  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminBlogPostsPage() {
  return <BlogPostsClient />
}
