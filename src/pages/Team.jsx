import PageHero    from '../components/PageHero';
import TeamSection  from '../sections/TeamSection';
import CTASection   from '../sections/CTASection';
import { Icon }     from '../Icons';

const VALUES = [
  { I:Icon.Zap,    t:'سرعت و کیفیت',      d:'هرگز کیفیت رو فدای سرعت نمی‌کنیم — هر دو رو با هم داریم.' },
  { I:Icon.Users,  t:'تیم‌محوری',          d:'موفقیت مشتری، موفقیت کل تیم ویزل است.' },
  { I:Icon.Award,  t:'شفافیت کامل',        d:'در هر مرحله از پروژه می‌دانید کجا هستیم و چرا.' },
  { I:Icon.Globe,  t:'نگاه جهانی',         d:'استانداردهای جهانی، اجرای متناسب با بازار ایران.' },
];

export default function Team() {
  return <>
    
    <TeamSection preview={false}/>
    <section className="section" style={{ background:'var(--bg-1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
      <div className="container">
        <div className="fade-up" style={{ maxWidth:560, marginBottom:52 }}>
          <span className="eyebrow"><span className="dot"/>ارزش‌های ما</span>
          <h2 style={{ fontSize:'clamp(24px,4vw,38px)', marginTop:18 }}>اصولی که روی آن‌ها نمی‌توان چانه زد</h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }} className="val-grid">
          {VALUES.map(v=>(
            <div key={v.t} className="glass-card" style={{ padding:'28px 22px' }}>
              <span style={{ width:46,height:46,borderRadius:12,display:'grid',placeItems:'center',background:'rgba(30,123,255,.1)',color:'var(--brand)',border:'1px solid rgba(30,123,255,.2)' }}><v.I size={20}/></span>
              <h3 style={{ fontSize:17, marginTop:16 }}>{v.t}</h3>
              <p style={{ marginTop:8, fontSize:14 }}>{v.d}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:860px){.val-grid{grid-template-columns:1fr 1fr!important;}}@media(max-width:520px){.val-grid{grid-template-columns:1fr!important;}}`}</style>
      </div>
    </section>
    <CTASection simple/>
  </>;
}
