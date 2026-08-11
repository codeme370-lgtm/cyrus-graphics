import Link from 'next/link';

export const metadata = {
  title: 'Notifications - Cyrus Graphics',
  description: 'View your account notifications and updates.',
};

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-800 bg-slate-900/90 p-10 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.9)]">
        <h1 className="text-4xl font-semibold text-white">Notifications</h1>
        <p className="mt-4 text-slate-400">Check your latest account alerts and messages.</p>
        <div className="mt-8">
          <Link href="/profile" className="inline-flex rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">Back to profile</Link>
        </div>
      </div>
    </main>
  )
}
