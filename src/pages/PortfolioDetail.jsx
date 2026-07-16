import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import PageHero from '../components/PageHero';
import CTASection from '../sections/CTASection';
import { api } from '../utils/api';

const COLORS = ['#1e7bff','#6b4fff','#ff6b9d','#1e9b6b','#ff8c42','#f0c040'];

export default function PortfolioDetail() {
  const { id } = useParams();
  const s = SERVICES.find(x => x.id === id) || SERVICES[0];
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getPortfolio(id)
      .then(data => setItems(data))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <PageHero eyebrow="نمونه کارها" title={`نمونه کارهای ${s.title}`} subtitle={s.short} breadcrumb={[{ label: 'نمونه کارها', to: '/portfolio' }, { label: s.title }]} />
      <section className="section">
        <div className="container">
          {loading && (
            <div style={{ textAlign: 'center', padding: 60, color: 'var(--ink-2)' }}>
              <div style={{ fontSize: 32 }}>⏳</div>
              <p style={{ marginTop: 12 }}>در حال بارگذاری...</p>
            </div>
          )}

          {!loading && items.length === 0 && (
            <div style={{ textAlign: 'center', padding: 60, background: 'var(--bg-1)', borderRadius: 16, border: '1px solid var(--line)' }}>
              <div style={{ fontSize: 40 }}>🖼️</div>
              <h3 style={{ marginTop: 16 }}>نمونه کاری در این دسته وجود ندارد</h3>
              <p style={{ marginTop: 8 }}>از پنل مدیریت نمونه کار اضافه کنید.</p>
            </div>
          )}

          {!loading && items.length > 0 && (
            <div className="pd-grid">
              {items.map((it, i) => (
                <div key={it._id} style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--line)', background: 'var(--bg-1)', transition: 'transform .3s,border-color .3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(30,123,255,.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--line)'; }}>
                  {/* Image or gradient placeholder */}
                  {it.imageUrl
                    ? <img src={it.imageUrl} alt={it.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                    : <div style={{ height: 200, background: `linear-gradient(135deg,${COLORS[i % COLORS.length]},${COLORS[(i+2) % COLORS.length]}44)`, display: 'grid', placeItems: 'center', fontSize: 13, color: 'rgba(255,255,255,.3)', letterSpacing: 2 }}>WIZEL</div>
                  }
                  <div style={{ padding: '16px 18px' }}>
                    <div style={{ fontSize: 15, fontWeight: 700 }}>{it.title}</div>
                    {it.description && <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 6 }}>{it.description}</div>}
                    <div style={{ fontSize: 12, color: 'var(--brand)', marginTop: 6 }}>{s.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: 36, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to={`/packages/${s.id}`} className="btn btn-primary">مشاهده تعرفه این سرویس</Link>
            <Link to="/portfolio" className="btn btn-ghost">← بازگشت به نمونه کارها</Link>
          </div>
        </div>
      </section>
      <CTASection simple />
      <style>{`@media(max-width:780px){.pd-grid{grid-template-columns:1fr 1fr!important;}}@media(max-width:480px){.pd-grid{grid-template-columns:1fr!important;}}.pd-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}`}</style>
    </>
  );
}