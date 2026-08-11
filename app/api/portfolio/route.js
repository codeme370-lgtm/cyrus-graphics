export async function GET(request) {
  const items = [
    { id: 1, title: 'Brand Identity — Apex Co', category: 'Logos', image: '/portfolio/logo1.svg' },
    { id: 2, title: 'Product Brochure — Fresh Foods', category: 'Flyers', image: '/portfolio/flyer1.svg' },
    { id: 3, title: 'Retail Packaging — PureBox', category: 'Packaging', image: '/portfolio/packaging1.svg' },
    { id: 4, title: 'Billboard Campaign — City Ads', category: 'Billboards', image: '/portfolio/billboard1.svg' },
    { id: 5, title: 'Event Poster — Summer Fest', category: 'Branding', image: '/portfolio/branding1.svg' },
    { id: 6, title: 'Product Labels — Organic Line', category: 'Printing', image: '/portfolio/printing1.svg' },
    { id: 7, title: 'Corporate Stationery — Nova', category: 'Branding', image: '/portfolio/branding1.svg' },
    { id: 8, title: 'Event Stand — Expo 2026', category: 'Events', image: '/portfolio/events1.svg' },
    { id: 9, title: 'Flyer Series — Local Market', category: 'Flyers', image: '/portfolio/flyer1.svg' },
    { id: 10, title: 'Label Redesign — Beverages', category: 'Packaging', image: '/portfolio/packaging1.svg' }
  ];

  return new Response(JSON.stringify({ items }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
