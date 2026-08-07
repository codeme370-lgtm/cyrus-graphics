import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Contact Cyrus Graphics - Get in Touch",
  description: "Contact Cyrus Graphics for print, branding, packaging, and design inquiries. We're ready to help with your next project.",
  keywords: ["contact Cyrus Graphics", "printing support", "branding help", "design services"],
  openGraph: {
    title: "Contact Cyrus Graphics - Get in Touch",
    description: "Reach out to Cyrus Graphics for printing, packaging, branding, and design services.",
    url: "/contact",
    siteName: "Cyrus Graphics",
    type: "website"
  }
};

const ContactPage = () => {
  return <ContactPageClient />;
};

export default ContactPage;
