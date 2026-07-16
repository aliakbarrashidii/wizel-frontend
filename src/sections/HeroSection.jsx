import { Link } from 'react-router-dom';
import NetworkCanvas from '../components/NetworkCanvas';

const STATS = [['+120','پروژه اجرا شده'],['+60','برند فعال'],['98٪','رضایت مشتری'],['24/7','پشتیبانی']];

export default function HeroSection() {
  return (
    <section id="top" style={{ position:'relative', paddingTop:140, paddingBottom:100, overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, opacity:.5 }}><NetworkCanvas/></div>
      <div style={{ position:'absolute', top:'-8%', right:'-8%', width:580, height:580, background:'radial-gradient(circle,var(--brand-glow),transparent 68%)', filter:'blur(24px)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:'-10%', left:'-5%', width:360, height:360, background:'radial-gradient(circle,rgba(6,42,99,.55),transparent 70%)', pointerEvents:'none' }}/>

      <div className="container" style={{ position:'relative', zIndex:2 }}>
        <div className="fade-up" style={{ maxWidth:900 }}>
          <span className="eyebrow"><span className="dot"/>آژانس دیجیتال ویزل</span>
          <h1 style={{ fontSize:'clamp(36px,6.5vw,72px)', marginTop:24, lineHeight:1.1 }}>
            برندتان را به زبان
            <span style={{ background:'linear-gradient(120deg,var(--brand-light),var(--brand))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', padding:'0 10px' }}>دیجیتال</span>
            ترجمه می‌کنیم
          </h1>
          <p style={{ fontSize:18, marginTop:24, maxWidth:600 }}>
            ویزل از طراحی سایت و اپلیکیشن تا گرافیک، سئو و تبلیغات — یک تیم برای کل مسیر دیجیتال کسب‌وکار شما.
          </p>
          <div style={{ display:'flex', gap:14, marginTop:38, flexWrap:'wrap' }}>
            <Link to="/contact" className="btn btn-primary">درخواست مشاوره رایگان</Link>
            <Link to="/portfolio" className="btn btn-ghost">مشاهده نمونه کارها</Link>
          </div>
        </div>

        <div className="fade-up" style={{
          marginTop:80, display:'grid', gridTemplateColumns:'repeat(4,1fr)',
          border:'1px solid var(--line)', borderRadius:18, overflow:'hidden', animationDelay:'.15s',
        }}>
          {STATS.map(([n,l],i)=>(
            <div key={l} style={{
              background:'var(--bg-1)', padding:'26px 20px', textAlign:'center',
              borderLeft: i<3?'1px solid var(--line)':'none',
            }}>
              <div className="ltr" style={{ fontSize:28, fontWeight:800, color:'var(--brand)', fontFamily:"'Space Grotesk'" }}>{n}</div>
              <div style={{ fontSize:13, color:'var(--ink-2)', marginTop:6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:720px){.stat-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
    </section>
  );
}
