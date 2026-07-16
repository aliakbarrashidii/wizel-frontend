import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { SERVICES } from '../data/services';
import { Icon } from '../Icons';

export default function Packages() {
  const [q, setQ] = useState('');
  const filtered = SERVICES.filter(s => s.title.includes(q) || s.tags.some(t => t.includes(q)));
  const totalPkg = SERVICES.reduce((a, s) => a + s.packagesCount, 0);

  return (
    <>
      <PageHero eyebrow="تعرفه‌ها" title="تعرفه خدمات ویزل" subtitle="تمام پکیج‌های اصلی و تخصصی ویزل در یک صفحه جمع‌آوری شده‌اند." breadcrumb={[{ label: 'تعرفه‌ها' }]} />
      <section className="section">
        <div className="container">
          {/* Stats */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 36, flexWrap: 'wrap' }}>
            <div style={{ background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: 12, padding: '16px 26px', textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--brand)' }} className="ltr">{totalPkg}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>پکیج قیمت‌گذاری شده</div>
            </div>
            <div style={{ background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: 12, padding: '16px 26px', textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--brand)' }} className="ltr">{SERVICES.length}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>سرویس فعال</div>
            </div>
          </div>

          {/* Search */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginBottom: 32, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>جستجوی سرویس</span>
            <div style={{ position: 'relative', flex: 1, maxWidth: 320 }}>
              <Icon.Grid size={15} style={{ position: 'absolute', top: '50%', right: 13, transform: 'translateY(-50%)', color: 'var(--ink-2)' }} />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="نام سرویس را وارد کنید..." style={{ width: '100%', padding: '11px 38px 11px 14px', background: 'var(--bg-1)', border: '1px solid var(--line-strong)', borderRadius: 12, color: 'var(--ink-0)', fontSize: 14, outline: 'none' }} />
            </div>
          </div>

          {/* Service rows */}
          <div style={{ display: 'grid', gap: 18 }}>
            {filtered.map((s, i) => (
              <div key={s.id} className="fade-up" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: 18, padding: '24px 28px', animationDelay: `${i * 0.05}s`, transition: 'border-color .3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(30,123,255,.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--line)'}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  {/* Number */}
                  <div className="ltr" style={{ fontSize: 13, fontWeight: 800, color: 'var(--brand)', opacity: 0.7, minWidth: 28, fontFamily: "'Space Grotesk'" }}>{s.num}</div>
                  {/* Icon */}
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: s.gradient, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Icon.Zap size={24} style={{ color: '#fff' }} />
                  </div>
                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 20 }}>{s.title}</h3>
                    <p style={{ marginTop: 6, fontSize: 14 }}>{s.short}</p>
                    <div style={{ display: 'flex', gap: 16, marginTop: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ fontSize: 13, color: 'var(--brand)' }}>{s.packagesCount} پکیج فعال</span>
                      <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>شروع قیمت از</span>
                      <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink-0)' }} className="ltr">{s.startPrice} <span style={{ fontSize: 12, fontWeight: 400 }}>تومان</span></span>
                    </div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
                      {s.tags.map(t => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
                    </div>
                  </div>
                  {/* Buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0, alignSelf: 'center' }}>
                    <Link to={`/packages/${s.id}`} className="btn btn-primary btn-sm" style={{ justifyContent: 'center', minWidth: 150 }}>مشاهده تعرفه</Link>
                    <Link to={`/services/${s.id}`} className="btn btn-ghost btn-sm" style={{ justifyContent: 'center' }}>اطلاعات سرویس</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
