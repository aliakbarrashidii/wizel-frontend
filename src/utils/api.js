const BASE = import.meta.env.VITE_API_URL || 'https://wizel-backend.onrender.com';

export async function apiFetch(path, options = {}) {
  const token = localStorage.getItem('wizel_admin_token');
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  if (!res.ok) throw new Error((await res.json()).message || 'خطا');
  return res.json();
}

export const api = {
  // Blog
  getBlogs: () => apiFetch('/api/blog'),
  createBlog: (data) => apiFetch('/api/blog', { method: 'POST', body: JSON.stringify(data) }),
  updateBlog: (id, data) => apiFetch(`/api/blog/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteBlog: (id) => apiFetch(`/api/blog/${id}`, { method: 'DELETE' }),

  // Portfolio
  getPortfolio: (category) => apiFetch(`/api/portfolio${category ? `?category=${category}` : ''}`),
  createPortfolio: (data) => apiFetch('/api/portfolio', { method: 'POST', body: JSON.stringify(data) }),
  deletePortfolio: (id) => apiFetch(`/api/portfolio/${id}`, { method: 'DELETE' }),

  // Services
  getServices: () => apiFetch('/api/services'),
  updateService: (id, data) => apiFetch(`/api/services/${id}`, { method: 'PUT', body: JSON.stringify(data) }),

  // Contact
  sendContact: (data) => apiFetch('/api/contact', { method: 'POST', body: JSON.stringify(data) }),

  // Admin stats
  getStats: () => apiFetch('/api/admin/stats'),
};
