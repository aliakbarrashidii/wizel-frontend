import { Link } from 'react-router-dom';
import NetworkCanvas from './NetworkCanvas';

export default function PageHero({ eyebrow, title, subtitle, breadcrumb = [] }) {
  return (
    <section style={{ position:'relative', padding:'140px 0 72px', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, opacity:0.35 }}><NetworkCanvas density={100}/></div>
      <div style={{
        position:'absolute', top:0, right:0, width:500, height:500,
        background:'radial-gradient(circle,var(--brand-glow),transparent 70%)',
        filter:'blur(22px)', pointerEvents:'none', opacity:.7,
      }}/>
      <div className="container" style={{ position:'relative', zIndex:1 }}>
        {breadcrumb.length > 0 && (
          <div style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'var(--ink-2)', marginBottom:20 }}>
            <Link to="/" style={{ color:'var(--ink-2)' }}>خانه</Link>
            {breadcrumb.map(b => (
              <span key={b.label} style={{ display:'flex', alignItems:'center', gap:8 }}>
                <span>/</span>
                {b.to ? <Link to={b.to} style={{ color:'var(--ink-2)' }}>{b.label}</Link> : <span style={{ color:'var(--ink-1)' }}>{b.label}</span>}
              </span>
            ))}
          </div>
        )}
        <div className="fade-up">
          {eyebrow && <span className="eyebrow" style={{ marginBottom:16 }}><span className="dot"/>{eyebrow}</span>}
          <h1 style={{ fontSize:'clamp(28px,5vw,52px)', marginTop:eyebrow?16:0 }}>{title}</h1>
          {subtitle && <p style={{ marginTop:14, fontSize:17, maxWidth:580 }}>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
