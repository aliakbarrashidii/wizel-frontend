import { Link } from 'react-router-dom';
import PageHero  from '../components/PageHero';
import TeamSection from '../sections/TeamSection';
import CTASection  from '../sections/CTASection';
import { Icon }  from '../Icons';

const STATS = [['۸+','سال تجربه'],['+۱۲۰','پروژه موفق'],['+۶۰','برند فعال'],['۹۸٪','رضایت مشتری']];
const VALUES = [
  { I:Icon.Award,  t:'کیفیت بی‌타compromise', d:'هرگز کیفیت را به خاطر سود کوتاه‌مدت فدا نمی‌کنیم.' },
  { I:Icon.Users,  t:'مشارکت واقعی',         d:'مشتری را شریک می‌دانیم، نه صرفاً کارفرما.' },
  { I:Icon.Globe,  t:'نگاه جهانی',           d:'استانداردهای جهانی، اجرای بومی.' },
  { I:Icon.Zap,    t:'نوآوری مداوم',         d:'هر روز با جدیدترین فناوری‌ها آشنا می‌شویم.' },
];

export default function About() {
  return <>
    <PageHero eyebrow="درباره ویزل" title="داستان یک آژانس متفاوت" subtitle="ویزل با یک باور ساده آغاز شد: کسب‌وکارهای ایرانی لایق بهترین تجربه دیجیتال هستند." breadcrumb={[{label:'درباره ما'}]}/>
    <section className="section">
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:70, alignItems:'center' }} className="about-grid">
          <div className="fade-up">
            <span className="eyebrow"><span className="dot"/>داستان ما</span>
            <h2 style={{ fontSize:'clamp(24px,4vw,38px)', marginTop:18, lineHeight:1.3 }}>از یک ایده تا یک تیم حرفه‌ای</h2>
            <p style={{ marginTop:18, fontSize:16, lineHeight:1.9 }}>ویزل در سال ۱۳۹۶ با هدف ارائه خدمات دیجیتال باکیفیت به کسب‌وکارهای ایرانی آغاز به کار کرد. از همان روز اول باور داشتیم که کسب‌وکار ایرانی نیاز به شریکی دارد که درد او را بفهمد — نه فقط پروژه بگیرد و تحویل دهد.</p>
            <p style={{ marginTop:14, fontSize:16, lineHeight:1.9 }}>امروز تیم ویزل با بیش از ۶ متخصص تمام‌وقت، در کنار ده‌ها کسب‌وکار ایرانی ایستاده و هر روز مسیر دیجیتال آن‌ها را هموارتر می‌کند.</p>
            <Link to="/team" className="btn btn-ghost" style={{ marginTop:28 }}>آشنایی با تیم <Icon.ArrowLeft size={14}/></Link>
          </div>
          <div className="fade-up" style={{ animationDelay:'.12s' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              {STATS.map(([n,l])=>(
                <div key={l} style={{ background:'var(--bg-1)', border:'1px solid var(--line-strong)', borderRadius:18, padding:'28px 22px', textAlign:'center' }}>
                  <div className="ltr" style={{ fontSize:36, fontWeight:800, color:'var(--brand)', fontFamily:"'Space Grotesk'" }}>{n}</div>
                  <div style={{ fontSize:13.5, color:'var(--ink-2)', marginTop:8 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:860px){.about-grid{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
      </div>
    </section>
    <section className="section" style={{ background:'var(--bg-1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
      <div className="container">
        <div className="fade-up" style={{ maxWidth:560, marginBottom:52 }}>
          <span className="eyebrow"><span className="dot"/>ارزش‌های ما</span>
          <h2 style={{ fontSize:'clamp(24px,4vw,38px)', marginTop:18 }}>چیزی که ما را ویزل می‌کند</h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }} className="v-grid">
          {VALUES.map(v=>(
            <div key={v.t} className="glass-card" style={{ padding:'26px 20px' }}>
              <span style={{ width:46,height:46,borderRadius:12,display:'grid',placeItems:'center',background:'rgba(30,123,255,.1)',color:'var(--brand)',border:'1px solid rgba(30,123,255,.2)' }}><v.I size={20}/></span>
              <h3 style={{ fontSize:16, marginTop:16 }}>{v.t}</h3>
              <p style={{ marginTop:8, fontSize:14 }}>{v.d}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:860px){.v-grid{grid-template-columns:1fr 1fr!important;}}@media(max-width:520px){.v-grid{grid-template-columns:1fr!important;}}`}</style>
      </div>
    </section>
    <TeamSection preview/>
    <CTASection simple/>
  </>;
}
