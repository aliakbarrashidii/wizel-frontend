import { Link } from 'react-router-dom';
import { Icon } from '../Icons';
import { SERVICES } from '../data/services';

export default function PortfolioSection({ preview = false }) {
  const items = preview ? SERVICES.slice(0, 6) : SERVICES;
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="eyebrow"><span className="dot" />نمونه کارها</span>
            <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', marginTop: 16 }}>آخرین نمونه‌کارهای ویزل</h2>
          </div>
          {preview && <Link to="/portfolio" className="btn btn-ghost btn-sm">مشاهده آرشیو کامل <Icon.ArrowLeft size={14} /></Link>}
        </div>
        <div className="pf-home-grid">
          {items.map((s, i) => (
            <Link key={s.id} to={`/portfolio/${s.id}`} className="fade-up pf-home-card" style={{ animationDelay: `${i * 0.06}s`, borderRadius: 18, overflow: 'hidden', background: 'var(--bg-1)', border: '1px solid var(--line)', textDecoration: 'none' }}>
              {/* Visual */}
              <div style={{ height: 180, background: s.gradient, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: 18 }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,rgba(255,255,255,.03) 0,rgba(255,255,255,.03) 1px,transparent 1px,transparent 16px)' }} />
                <div style={{ position: 'absolute', top: '50%', right: '50%', transform: 'translate(50%,-50%)', opacity: 0.12 }}>
                  <Icon.Briefcase size={120} style={{ color: '#fff' }} />
                </div>
                <div className="pf-overlay">
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>مشاهده نمونه کارها ←</span>
                </div>
                <span style={{ background: 'rgba(255,255,255,.18)', backdropFilter: 'blur(6px)', padding: '4px 12px', borderRadius: 999, fontSize: 12, fontWeight: 700, color: '#fff', position: 'relative', zIndex: 1 }}>{s.num}</span>
              </div>
              {/* Content */}
              <div style={{ padding: '18px 20px' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink-0)' }}>{s.title}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>{s.short}</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                  {s.tags.slice(0, 2).map(t => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .pf-home-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
        .pf-home-card{transition:transform .3s,border-color .3s;}
        .pf-home-card:hover{transform:translateY(-4px);border-color:rgba(30,123,255,.4)!important;}
        .pf-overlay{position:absolute;inset:0;background:rgba(6,42,99,.8);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .28s;}
        .pf-home-card:hover .pf-overlay{opacity:1;}
        @media(max-width:860px){.pf-home-grid{grid-template-columns:1fr 1fr;}}
        @media(max-width:540px){.pf-home-grid{grid-template-columns:1fr;}}
      `}</style>
    </section>
  );
}
