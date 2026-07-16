import { useEffect, useState } from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../sections/CTASection';
import { Icon } from '../Icons';
import { api } from '../utils/api';

function formatDate(d) {
  return new Date(d).toLocaleDateString('fa-IR', { year:'numeric', month:'long', day:'numeric' });
}

const CATS = ['همه', 'سئو', 'طراحی', 'مارکتینگ', 'محتوا', 'اپلیکیشن'];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState('همه');
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.getBlogs()
      .then(d => setPosts(d))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter(p => {
    const matchCat = cat === 'همه' || p.tag === cat;
    const matchSearch = !search || p.title.includes(search) || p.content?.includes(search);
    return matchCat && matchSearch && p.published;
  });

  const COLORS = ['linear-gradient(135deg,#1e7bff,#062a63)', 'linear-gradient(135deg,#6b4fff,#1a0a5e)', 'linear-gradient(135deg,#1e9b6b,#07391f)', 'linear-gradient(135deg,#ff8c42,#8b3a00)', 'linear-gradient(135deg,#ff6b9d,#8b0045)', 'linear-gradient(135deg,#f0c040,#7a5f00)'];

  return (
    <>
      <PageHero eyebrow="وبلاگ ویزل" title="دانش دیجیتال، به زبان ساده" subtitle="آخرین مقالات و راهنماهای تیم ویزل در حوزه دیجیتال مارکتینگ، طراحی و توسعه وب." breadcrumb={[{ label: 'وبلاگ' }]} />
      <section className="section">
        <div className="container">
          {/* Filter + Search */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 36, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {CATS.map(c => (
                <button key={c} onClick={() => setCat(c)} style={{ padding: '7px 16px', borderRadius: 999, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', background: cat === c ? 'var(--brand)' : 'var(--bg-2)', color: cat === c ? '#fff' : 'var(--ink-1)', border: `1px solid ${cat === c ? 'var(--brand)' : 'var(--line-strong)'}`, transition: 'all .2s' }}>{c}</button>
              ))}
            </div>
            <div style={{ position: 'relative' }}>
              <Icon.Grid size={14} style={{ position: 'absolute', top: '50%', right: 12, transform: 'translateY(-50%)', color: 'var(--ink-2)' }} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="جستجو..." style={{ padding: '9px 36px 9px 14px', background: 'var(--bg-1)', border: '1px solid var(--line-strong)', borderRadius: 10, color: 'var(--ink-0)', fontSize: 14, outline: 'none', width: 200 }} />
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div style={{ textAlign: 'center', padding: 60, color: 'var(--ink-2)' }}>
              <div style={{ fontSize: 32 }}>⏳</div>
              <p style={{ marginTop: 12 }}>در حال بارگذاری...</p>
            </div>
          )}

          {/* Empty state */}
          {!loading && filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 60, background: 'var(--bg-1)', borderRadius: 16, border: '1px solid var(--line)' }}>
              <div style={{ fontSize: 40 }}>📝</div>
              <h3 style={{ marginTop: 16 }}>هنوز پستی وجود ندارد</h3>
              <p style={{ marginTop: 8 }}>از پنل مدیریت پست جدید اضافه کنید.</p>
            </div>
          )}

          {/* Posts grid */}
          {!loading && filtered.length > 0 && (
            <div className="blog-grid">
              {filtered.map((p, i) => (
                <article key={p._id} className="fade-up glass-card" style={{ overflow: 'hidden', animationDelay: `${i * .06}s` }}>
                  <div style={{ height: 180, background: COLORS[i % COLORS.length], display: 'grid', placeItems: 'center', fontSize: 13, color: 'rgba(255,255,255,.25)', letterSpacing: 3, fontWeight: 700 }}>WIZEL BLOG</div>
                  <div style={{ padding: '20px 18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      {p.tag && <span className="tag">{p.tag}</span>}
                      <span style={{ fontSize: 12, color: 'var(--ink-2)', display: 'flex', alignItems: 'center', gap: 4 }}><Icon.Clock size={12} />{formatDate(p.createdAt)}</span>
                    </div>
                    <h3 style={{ fontSize: 16, lineHeight: 1.7 }}>{p.title}</h3>
                    <p style={{ marginTop: 10, fontSize: 13.5, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {p.content}
                    </p>
                    <div style={{ marginTop: 14, display: 'flex', justifyContent: 'flex-end' }}>
                      <span style={{ fontSize: 13, color: 'var(--brand)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}>ادامه مطلب <Icon.ArrowLeft size={13} /></span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <CTASection simple />
      <style>{`.blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}@media(max-width:860px){.blog-grid{grid-template-columns:1fr 1fr;}}@media(max-width:560px){.blog-grid{grid-template-columns:1fr;}}`}</style>
    </>
  );
}