export const adminData = {
  categories: [
    { id: 'cat-01', name: 'Business Cards', slug: 'business-cards', status: 'Active', createdAt: '2024-05-01T00:00:00.000Z' },
    { id: 'cat-02', name: 'Flyers', slug: 'flyers', status: 'Active', createdAt: '2024-05-03T00:00:00.000Z' },
    { id: 'cat-03', name: 'Banners', slug: 'banners', status: 'Draft', createdAt: '2024-05-05T00:00:00.000Z' },
  ],

  brands: [
    { id: 'brand-01', name: 'Cyrus Studio', description: 'Premium print brand', status: 'Active', featured: true },
    { id: 'brand-02', name: 'PrintPro', description: 'Commercial printing', status: 'Active', featured: false },
    { id: 'brand-03', name: 'BrandCraft', description: 'Packaging & branding', status: 'Inactive', featured: false },
  ],

  services: [
    { id: 'service-01', title: 'Business Card Printing', description: 'Premium card design and print', price: 45, status: 'Active' },
    { id: 'service-02', title: 'Large Format Printing', description: 'Posters, banners and signage', price: 180, status: 'Active' },
    { id: 'service-03', title: 'Brand Identity', description: 'Logo and visual identity packages', price: 420, status: 'Draft' },
  ],

  attributes: [
    { id: 'attr-01', name: 'Material', type: 'select', values: ['Matte', 'Glossy', 'Textured'], status: 'Active' },
    { id: 'attr-02', name: 'Finish', type: 'select', values: ['UV', 'Laminate', 'Foil'], status: 'Active' },
    { id: 'attr-03', name: 'Size', type: 'select', values: ['A4', 'A3', 'A2'], status: 'Draft' },
  ],

  reviews: [
    { id: 'review-01', customer: 'Jane Doe', product: 'Business Card Pack', rating: 5, comment: 'Excellent quality and delivery.', status: 'Approved' },
    { id: 'review-02', customer: 'Michael A.', product: 'Poster Set', rating: 4, comment: 'Great visuals but slightly delayed.', status: 'Pending' },
    { id: 'review-03', customer: 'Grace K.', product: 'Flyer Bundle', rating: 5, comment: 'Very professional service.', status: 'Approved' },
  ],

  blogPosts: [
    { id: 'blog-01', title: '5 Tips for a Perfect Business Card Design', category: 'Design Tips', status: 'Published', date: '2024-05-10', views: 1832 },
    { id: 'blog-02', title: 'Choosing the Right Paper for Printing', category: 'Printing Tips', status: 'Published', date: '2024-05-09', views: 1420 },
    { id: 'blog-03', title: 'Branding Your Business with the Right Visual Identity', category: 'Branding', status: 'Published', date: '2024-05-08', views: 1865 },
  ],

  pages: [
    { id: 'page-01', title: 'About Us', slug: 'about-us', status: 'Published', updatedAt: '2024-05-02T00:00:00.000Z' },
    { id: 'page-02', title: 'Contact', slug: 'contact', status: 'Published', updatedAt: '2024-05-04T00:00:00.000Z' },
    { id: 'page-03', title: 'Shipping Policy', slug: 'shipping-policy', status: 'Draft', updatedAt: '2024-05-06T00:00:00.000Z' },
  ],

  banners: [
    { id: 'banner-01', title: 'Mega Sale', location: 'Homepage', status: 'Active', startDate: '2024-05-10', endDate: '2024-05-20' },
    { id: 'banner-02', title: 'Summer Branding', location: 'Sidebar', status: 'Draft', startDate: '2024-05-18', endDate: '2024-05-25' },
  ],

  newsletterSubscribers: [
    { id: 'sub-01', email: 'hello@cyrusgraphics.com', status: 'Subscribed', createdAt: '2024-05-01T00:00:00.000Z' },
    { id: 'sub-02', email: 'design@studio.com', status: 'Subscribed', createdAt: '2024-05-02T00:00:00.000Z' },
    { id: 'sub-03', email: 'biz@brand.com', status: 'Unsubscribed', createdAt: '2024-05-03T00:00:00.000Z' },
  ],

  portfolioProjects: [
    { id: 'portfolio-01', title: 'Brand Refresh', category: 'Branding', status: 'Published', client: 'Luma Labs' },
    { id: 'portfolio-02', title: 'Retail Signage', category: 'Print', status: 'Published', client: 'North Peak' },
    { id: 'portfolio-03', title: 'Packaging Concept', category: 'Packaging', status: 'Draft', client: 'Harvest Foods' },
  ],

  users: [
    { id: 'user-01', name: 'Admin User', email: 'admin@cyrusgraphics.com', role: 'admin', status: 'Active' },
    { id: 'user-02', name: 'Seller Manager', email: 'seller@cyrusgraphics.com', role: 'seller', status: 'Active' },
    { id: 'user-03', name: 'Customer One', email: 'customer@example.com', role: 'customer', status: 'Inactive' },
  ],

  settings: {
    siteName: 'Cyrus Graphics',
    contactEmail: 'hello@cyrusgraphics.com',
    supportPhone: '+2348000000000',
    currency: 'NGN',
    taxEnabled: true,
    maintenanceMode: false,
  },

  paymentMethods: [
    { id: 'pm-01', name: 'Paystack', type: 'card', status: 'Active' },
    { id: 'pm-02', name: 'Bank Transfer', type: 'bank', status: 'Active' },
    { id: 'pm-03', name: 'Cash on Delivery', type: 'cash', status: 'Inactive' },
  ],

  shippingMethods: [
    { id: 'sm-01', name: 'Express', price: 2500, status: 'Active' },
    { id: 'sm-02', name: 'Standard', price: 1500, status: 'Active' },
    { id: 'sm-03', name: 'Pickup', price: 0, status: 'Inactive' },
  ],

  taxSettings: {
    defaultRate: 7.5,
    country: 'NG',
    enabled: true,
  },

  permissions: [
    { id: 'perm-01', name: 'Manage Products', group: 'Inventory', grantedTo: 'Seller' },
    { id: 'perm-02', name: 'Approve Orders', group: 'Operations', grantedTo: 'Admin' },
    { id: 'perm-03', name: 'Send Newsletter', group: 'Marketing', grantedTo: 'Admin' },
  ],

  activityLogs: [
    { id: 'log-01', action: 'Published blog post', actor: 'Admin User', timestamp: '2024-05-12T09:10:00.000Z' },
    { id: 'log-02', action: 'Updated banner campaign', actor: 'Seller Manager', timestamp: '2024-05-11T14:05:00.000Z' },
    { id: 'log-03', action: 'Approved store', actor: 'Admin User', timestamp: '2024-05-10T16:45:00.000Z' },
  ],

  systemStatus: {
    api: 'Healthy',
    database: 'Connected',
    queue: 'Running',
    storage: 'Operational',
  },

  reports: [
    { id: 'report-01', name: 'Sales Overview', type: 'Summary', generatedAt: '2024-05-12T00:00:00.000Z' },
    { id: 'report-02', name: 'Orders by Channel', type: 'Marketing', generatedAt: '2024-05-11T00:00:00.000Z' },
  ],
}

export function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`
}
