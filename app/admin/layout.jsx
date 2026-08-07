import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Cyrus Graphics - Admin",
    description: "Cyrus Graphics - Admin",
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        }
    }
};

export default function RootAdminLayout({ children }) {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    )
}

