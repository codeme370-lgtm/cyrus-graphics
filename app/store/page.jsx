import PageClient from './page.client'

export const metadata = {
  title: "Seller Dashboard - Cyrus Graphics",
  description: "Manage your Cyrus Graphics seller store. View orders, products, and analytics in one place.",
  robots: {
    index: false,
    follow: false
  }
};

export default function Page() {
  return <PageClient />;
}
