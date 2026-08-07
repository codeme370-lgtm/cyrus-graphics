import StoreLayoutClient from './layout.client';

export const metadata = {
    title: "Cyrus Graphics - Store Dashboard",
    description: "Cyrus Graphics seller dashboard for managing products, orders, and store details.",
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        }
    }
};

export default function StoreLayout({ children }) {
    return <StoreLayoutClient>{children}</StoreLayoutClient>;
}
