import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { SERVICES } from '../data/services';
import { Icon } from '../Icons';

export default function Portfolio() {
  const [q, setQ] = useState('');
  const filtered = SERVICES.filter(s =>
    s.title.includes(q) || s.tags.some(t => t.includes(q))
  );

  return (
    <>
      <PageHero eyebrow="نمونه کارها" title="آرشیو کامل نمونه‌کارهای ویزل" subtitle="در این صفحه پروژه‌های شاخص ویزل برای حوزه‌های مختلف قرار گرفته‌اند." breadcrumb={[{ label: 'نمونه کارها' }]} />
      <section className="section">
        <div className="container">
          {/* Stats */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 36, flexWrap: 'wrap' }}>
            <div style={{ background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: 12, padding: '14px 22px', textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--brand)' }} className="ltr">{SERVICES.length}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>دسته‌بندی نمونه کار</div>
            </div>
            <div style={{ background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: 12, padding: '14px 22px', textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--brand)' }} className="ltr">+120</div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>پروژه انجام شده</div>
            </div>
          </div>

          {/* Search */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginBottom: 36, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>جستجوی نمونه کار بر اساس نام سرویس یا برچسب</span>
            <div style={{ position: 'relative', flex: 1, maxWidth: 340 }}>
              <Icon.Grid size={16} style={{ position: 'absolute', top: '50%', right: 14, transform: 'translateY(-50%)', color: 'var(--ink-2)' }} />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="مثلاً: سایت، گرافیک، سئو..." style={{ width: '100%', padding: '12px 42px 12px 16px', background: 'var(--bg-1)', border: '1px solid var(--line-strong)', borderRadius: 12, color: 'var(--ink-0)', fontSize: 14, outline: 'none' }} />
            </div>
          </div>

          {/* Category cards */}
          <div style={{ display: 'grid', gap: 20 }}>
            {filtered.map((s, i) => (
              <div key={s.id} className="fade-up" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: 18, padding: '24px 28px', display: 'flex', gap: 24, alignItems: 'center', animationDelay: `${i * 0.05}s`, transition: 'border-color .3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(30,123,255,.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--line)'}>
                {/* Gradient thumb */}
                <div style={{ width: 80, height: 80, borderRadius: 16, background: s.gradient, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <Icon.Briefcase size={32} style={{ color: '#fff', opacity: 0.85 }} />
                </div>
                {/* Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                    <div>
                      <h3 style={{ fontSize: 19 }}>نمونه کارهای {s.title}</h3>
                      <p style={{ marginTop: 6, fontSize: 14 }}>{s.short}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                    {s.tags.map(t => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
                  </div>
                </div>
                {/* Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
                  <Link to={`/portfolio/${s.id}`} className="btn btn-primary btn-sm" style={{ justifyContent: 'center', minWidth: 160 }}>
                    مشاهده نمونه کارها
                  </Link>
                  <Link to={`/services/${s.id}`} className="btn btn-ghost btn-sm" style={{ justifyContent: 'center' }}>
                    اطلاعات سرویس
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
