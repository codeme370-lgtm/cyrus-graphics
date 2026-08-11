import ProductsClient from './ProductsClient'

export const metadata = {
  title: "Products Management - Admin",
  description: "Manage products inventory on Cyrus Graphics.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminProductsPage() {
  return <ProductsClient />
}
