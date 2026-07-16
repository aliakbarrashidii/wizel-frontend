import { Link } from 'react-router-dom';
import { Icon } from '../Icons';
import { SERVICES } from '../data/services';
export default function ServicesSection(){
  return(
    <section id="services" className="section">
      <div className="container">
        <div className="fade-up" style={{maxWidth:620,marginBottom:54}}>
          <span className="eyebrow"><span className="dot"/>خدمات ویزل</span>
          <h2 style={{fontSize:'clamp(28px,4vw,42px)',marginTop:18}}>هر چیزی که برای حضور دیجیتال نیاز دارید</h2>
          <p style={{marginTop:14,fontSize:16}}>از اولین خط کد تا آخرین کلیک تبلیغاتی، تیم ویزل کنار شماست.</p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s,i)=>(
            <div key={s.id} className="fade-up glass-card svc-card" style={{padding:'28px 22px',animationDelay:`${i*.06}s`}}>
              <span style={{width:50,height:50,borderRadius:13,display:'grid',placeItems:'center',background:`${s.color}18`,color:s.color,border:`1px solid ${s.color}35`,flexShrink:0}}><Icon.Zap size={22}/></span>
              <h3 style={{fontSize:18,marginTop:18}}>{s.title}</h3>
              <p style={{marginTop:10,fontSize:14.5}}>{s.desc}</p>
              <Link to={`/services/${s.id}`} className="svc-link">اطلاعات بیشتر <Icon.ArrowLeft size={14}/></Link>
            </div>
          ))}
        </div>
      </div>
      <style>{`.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}.svc-link{display:inline-flex;align-items:center;gap:7px;margin-top:18px;font-size:13.5px;color:var(--ink-2);font-weight:600;opacity:0;transform:translateX(-6px);transition:opacity .25s,transform .25s,color .25s;}.svc-card:hover .svc-link{opacity:1;transform:translateX(0);color:var(--brand);}@media(max-width:900px){.svc-grid{grid-template-columns:1fr 1fr;}}@media(max-width:600px){.svc-grid{grid-template-columns:1fr;}}`}</style>
    </section>
  );
}
