import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import { AuthProvider } from "@/context/AuthContext";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";
import "./globals.css";

export const metadata = {
    metadataBase: new URL("https://www.cyrusgraphics.com"),
    title: "Cyrus Graphics - Print, Packaging & Branding",
    description: "Cyrus Graphics delivers premium print, packaging, branding, and design solutions for businesses.",
    keywords: ["Cyrus Graphics", "print services", "branding", "packaging", "design", "business cards", "flyers"],
    verification: {
        google: "mtDIJBRWYPYjWGn7noYLQ7eNfdsH5xfvwUUBJ3lQc_k"
    },
    icons: [
        { rel: 'icon', url: '/favicon.ico' },
        { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            noarchive: false,
        }
    },
    openGraph: {
        title: "Cyrus Graphics - Print, Packaging & Branding",
        description: "Create premium printed materials with Cyrus Graphics. Business cards, packaging, labels, and branding services.",
        url: "/",
        siteName: "Cyrus Graphics",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "Cyrus Graphics - Print and Branding Studio",
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Cyrus Graphics - Print, Packaging & Branding",
        description: "Create premium printed materials with Cyrus Graphics. Business cards, packaging, labels, and branding services.",
        images: ["/logo.png"]
    },
    other: {
        "application/ld+json": JSON.stringify([
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Cyrus Graphics",
                "url": "https://www.cyrusgraphics.com",
                "logo": "https://www.cyrusgraphics.com/logo.png",
                "description": "A full-service print and branding studio offering business cards, packaging, signage, and marketing collateral.",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+233 24 860 8602",
                    "contactType": "customer service"
                },
                "sameAs": [
                    "https://www.facebook.com/cyrusgraphics",
                    "https://www.twitter.com/cyrusgraphics",
                    "https://www.instagram.com/cyrusgraphics"
                ]
            },
            {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Cyrus Graphics",
                "url": "https://www.cyrusgraphics.com",
                "description": "Create premium printed materials with Cyrus Graphics. Business cards, packaging, labels, and branding services.",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.cyrusgraphics.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            }
        ])
    }
};

export const viewport = {
    width: 'device-width',
    initialScale: 1
};

export default function RootLayout({ children }) {
    return (
        <AuthProvider>
        <html lang="en">
            <body className="antialiased" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>
                <StoreProvider>
                    <Toaster />
                    <PageTransitionWrapper>
                        {children}
                    </PageTransitionWrapper>
                </StoreProvider>
            </body>
        </html>
        </AuthProvider>
    );
}
