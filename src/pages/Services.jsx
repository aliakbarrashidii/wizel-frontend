import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../sections/CTASection';
import { SERVICES } from '../data/services';
import { Icon } from '../Icons';

function ServiceCard({ s, i }) {
  return (
    <div className="fade-up svc-hero-card" style={{ borderRadius: 20, overflow: 'hidden', background: 'var(--bg-1)', border: '1px solid var(--line)', animationDelay: `${i * 0.07}s` }}>
      {/* Hero visual */}
      <div style={{ height: 220, background: s.gradient, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Diagonal pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,rgba(255,255,255,.04) 0,rgba(255,255,255,.04) 1px,transparent 1px,transparent 14px)' }} />
        {/* Big icon watermark */}
        <div style={{ position: 'absolute', bottom: -20, right: -10, opacity: 0.12 }}>
          <Icon.Grid size={180} style={{ color: '#fff' }} />
        </div>
        {/* SERVICE label */}
        <div style={{ position: 'absolute', top: 18, right: 20, fontSize: 11, fontWeight: 700, letterSpacing: 3, color: 'rgba(255,255,255,.65)', fontFamily: "'Space Grotesk'" }}>SERVICE</div>
        {/* Num */}
        <div style={{ position: 'absolute', top: 16, left: 20 }} className="ltr">
          <span style={{ fontSize: 12, fontWeight: 800, color: 'rgba(255,255,255,.4)', fontFamily: "'Space Grotesk'" }}>{s.num}</span>
        </div>
        {/* Center icon */}
        <div style={{ width: 80, height: 80, borderRadius: 20, background: 'rgba(255,255,255,.15)', display: 'grid', placeItems: 'center', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.2)', position: 'relative', zIndex: 1 }}>
          <Icon.Globe size={38} style={{ color: '#fff' }} />
        </div>
      </div>
      {/* Content */}
      <div style={{ padding: '24px 22px' }}>
        <h3 style={{ fontSize: 20 }}>{s.title}</h3>
        <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.8 }}>{s.desc}</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
          {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
          <Link to={`/portfolio/${s.id}`} className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
            مشاهده نمونه کارها
          </Link>
          <Link to={`/services/${s.id}`} className="btn btn-ghost btn-sm" style={{ justifyContent: 'center' }}>
            بیشتر بخوانید <Icon.ArrowLeft size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <PageHero eyebrow="خدمات ویزل" title="راه‌حل‌های جامع دیجیتال برای کسب‌وکار شما" subtitle="از اولین خط کد تا آخرین کلیک تبلیغاتی، تیم ویزل کنار شماست." breadcrumb={[{ label: 'خدمات' }]} />
      <section className="section">
        <div className="container">
          <div className="svc-hero-grid">
            {SERVICES.map((s, i) => <ServiceCard key={s.id} s={s} i={i} />)}
          </div>
        </div>
      </section>
      <CTASection simple />
      <style>{`.svc-hero-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}@media(max-width:900px){.svc-hero-grid{grid-template-columns:1fr 1fr;}}@media(max-width:580px){.svc-hero-grid{grid-template-columns:1fr;}}.svc-hero-card:hover{transform:translateY(-4px);}`}</style>
    </>
  );
}
