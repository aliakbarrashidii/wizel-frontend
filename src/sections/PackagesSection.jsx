import { Link } from 'react-router-dom';
import { Icon } from '../Icons';
import { SERVICES } from '../data/services';

export default function PackagesSection() {
  return (
    <section id="packages" className="section" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="container">
        <div className="fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="eyebrow"><span className="dot" />پکیج‌ها</span>
            <h2 style={{ fontSize: 'clamp(24px,4vw,38px)', marginTop: 16 }}>پرفروش‌ترین پکیج‌های ویزل</h2>
          </div>
          <Link to="/packages" style={{ fontSize: 14, color: 'var(--ink-1)', display: 'flex', alignItems: 'center', gap: 6 }}>
            همه پکیج‌ها <Icon.ArrowLeft size={14} />
          </Link>
        </div>
        {/* Desktop: horizontal scroll | Mobile: vertical grid */}
        <div className="pkg-wrap">
          {SERVICES.map((s) => (
            <Link key={s.id} to={`/packages/${s.id}`} className="pkg-card" style={{ background: s.gradient }}>
              <div style={{ width: 46, height: 46, borderRadius: 13, background: 'rgba(255,255,255,.15)', display: 'grid', placeItems: 'center', color: '#fff', marginBottom: 'auto' }}>
                <Icon.Zap size={22} />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{s.title}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,.55)' }}>{s.packagesCount} پکیج</span>
                  <span className="pkg-arrow"><Icon.ArrowLeft size={14} /></span>
                </div>
              </div>
              <span className="pkg-line" />
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        /* Desktop: horizontal scroll row */
        .pkg-wrap{display:flex;gap:18px;overflow-x:auto;padding-bottom:8px;scroll-snap-type:x proximity;scrollbar-width:none;}
        .pkg-wrap::-webkit-scrollbar{display:none;}
        .pkg-card{position:relative;flex:0 0 220px;height:200px;border-radius:18px;scroll-snap-align:start;padding:20px;display:flex;flex-direction:column;overflow:hidden;border:1px solid rgba(255,255,255,.08);transition:transform .3s,box-shadow .3s;text-decoration:none;}
        .pkg-card:hover{transform:translateY(-5px);box-shadow:0 22px 48px -20px rgba(30,123,255,.5);}
        .pkg-arrow{width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.16);display:grid;place-items:center;color:#fff;transition:background .25s;}
        .pkg-card:hover .pkg-arrow{background:#fff;color:var(--brand-deep);}
        .pkg-line{position:absolute;bottom:0;left:0;right:0;height:3px;background:rgba(255,255,255,.85);transform:scaleX(.2);transform-origin:right;transition:transform .35s;}
        .pkg-card:hover .pkg-line{transform:scaleX(1);}
        /* Mobile: vertical 2-column grid */
        @media(max-width:640px){
          .pkg-wrap{display:grid!important;grid-template-columns:1fr 1fr;overflow:visible;}
          .pkg-card{flex:none!important;height:auto!important;min-height:160px;}
        }
        @media(max-width:380px){
          .pkg-wrap{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  );
}
