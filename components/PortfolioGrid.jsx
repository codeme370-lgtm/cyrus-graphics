"use client";
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

export default function PortfolioGrid({ initialItems = [] }) {
  const [items, setItems] = useState(initialItems || []);
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);

  const categories = useMemo(() => {
    const set = new Set(items.map(i => i.category));
    return ['All', ...Array.from(set)];
  }, [items]);

  useEffect(() => {
    // keep initial items in sync if changed server-side
    setItems(initialItems || []);
  }, [initialItems]);

  const filtered = items.filter(i => filter === 'All' ? true : i.category === filter);
  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {['All','Logos','Flyers','Branding','Printing','Billboards','Packaging','Events'].map(cat => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setVisibleCount(8); }}
              className={`${filter === cat ? 'bg-violet-600 text-white' : 'bg-white/60 text-neutral-800'} whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold shadow`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="hidden sm:block text-sm text-neutral-600">Showing {visible.length} of {filtered.length}</div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {visible.map(item => (
          <div key={item.id} className="rounded-lg bg-white shadow-md overflow-hidden">
            <div className="h-48 w-full bg-gray-100">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover"/>
            </div>
            <div className="p-3">
              <div className="text-sm font-semibold text-neutral-900">{item.title}</div>
              <div className="mt-1 text-xs text-neutral-600">{item.category}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center">
        {visibleCount < filtered.length ? (
          <button onClick={() => setVisibleCount(v => v + 8)} className="rounded-md bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-95">Load More</button>
        ) : (
          <div className="text-sm text-neutral-600">No more items</div>
        )}
      </div>
    </div>
  );
}
