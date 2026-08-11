import ClientReviewsSection from "@/components/ClientReviewsSection";

export const metadata = {
  title: "Client Reviews - Cyrus Graphics",
  description: "Read what our clients say about their design and print experience with Cyrus Graphics. See testimonials from satisfied brands.",
  keywords: ["client reviews", "testimonials", "graphic design", "printing", "Cyrus Graphics"],
};

export default function ClientReviewsPage() {
  return (
    <main className="min-h-screen bg-[#06070e] text-slate-100">
      <ClientReviewsSection />
    </main>
  );
}
