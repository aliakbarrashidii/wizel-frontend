import { Link } from 'react-router-dom';
import { Icon } from '../Icons';
const SVC=['طراحی وب‌سایت','اپلیکیشن موبایل','گرافیک و برندبوک','سئو','تبلیغات دیجیتال','دیجیتال مارکتینگ'];
const LNK=[{to:'/about',l:'درباره ما'},{to:'/team',l:'تیم ما'},{to:'/portfolio',l:'نمونه کارها'},{to:'/packages',l:'پکیج‌ها'},{to:'/blog',l:'وبلاگ'},{to:'/contact',l:'تماس'}];
const SOC=[{I:Icon.Instagram,h:'#',l:'Instagram'},{I:Icon.Linkedin,h:'#',l:'LinkedIn'},{I:Icon.Youtube,h:'#',l:'YouTube'}];
export default function Footer(){
  return(
    <footer>
      <div style={{background:'linear-gradient(120deg,var(--brand-deep),var(--brand))'}}>
        <div className="container" style={{padding:'22px 28px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:18}}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            {SOC.map(s=><a key={s.l} href={s.h} aria-label={s.l} style={{width:34,height:34,borderRadius:'50%',background:'rgba(255,255,255,.14)',display:'grid',placeItems:'center',color:'#fff'}}><s.I size={16}/></a>)}
            <span style={{fontSize:14,fontWeight:600,color:'rgba(255,255,255,.9)'}}>ویزل در فضای مجازی</span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:14}}>
            <div style={{textAlign:'end'}}>
              <div style={{fontSize:13,color:'rgba(255,255,255,.88)'}}>متخصصان دیجیتال مارکتینگ منتظر تماس شما</div>
              <a href="tel:+982100000000" className="ltr" style={{fontSize:17,fontWeight:800,color:'#fff'}}>+98 21 0000 0000</a>
            </div>
            <span style={{width:44,height:44,borderRadius:'50%',background:'rgba(255,255,255,.16)',display:'grid',placeItems:'center',color:'#fff',flexShrink:0}}><Icon.Phone size={18}/></span>
          </div>
        </div>
      </div>
      <div className="container" style={{padding:'56px 28px 0'}}>
        <div className="ft-grid">
          <div>
            <Link to="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:800,fontSize:20}}>
              <span style={{width:34,height:34,borderRadius:9,background:'linear-gradient(135deg,var(--brand),var(--brand-deep))',display:'grid',placeItems:'center',fontFamily:"'Space Grotesk'",fontWeight:700,fontSize:16,color:'#fff',flexShrink:0}}>W</span>
              <span className="ltr">WIZEL</span>
            </Link>
            <p style={{marginTop:16,maxWidth:300,fontSize:14.5}}>آژانس دیجیتال ویزل — از طراحی برند تا رشد دیجیتال.</p>
          </div>
          <div>
            <h4 style={{fontSize:14,fontWeight:700,marginBottom:18}}>خدمات</h4>
            <ul style={{display:'grid',gap:10}}>{SVC.map(s=><li key={s}><Link to="/services" style={{fontSize:14,color:'var(--ink-1)',display:'flex',alignItems:'center',gap:8}}><span style={{width:5,height:5,borderRadius:'50%',background:'var(--brand)',flexShrink:0}}/>{s}</Link></li>)}</ul>
          </div>
          <div>
            <h4 style={{fontSize:14,fontWeight:700,marginBottom:18}}>سایت‌مپ</h4>
            <ul style={{display:'grid',gap:10}}>{LNK.map(l=><li key={l.to}><Link to={l.to} style={{fontSize:14,color:'var(--ink-1)',display:'flex',alignItems:'center',gap:8}}><span style={{width:5,height:5,borderRadius:'50%',background:'var(--brand)',flexShrink:0}}/>{l.l}</Link></li>)}</ul>
          </div>
          <div>
            <h4 style={{fontSize:14,fontWeight:700,marginBottom:18}}>تماس</h4>
            <div style={{display:'grid',gap:14}}>
              {[[Icon.Phone,'+98 21 0000 0000','tel:+982100000000'],[Icon.Mail,'info@wizel.ir','mailto:info@wizel.ir'],[Icon.Pin,'تهران، ایران','#']].map(([I,t,h])=>(
                <a key={t} href={h} style={{display:'flex',gap:10,alignItems:'flex-start',color:'var(--ink-1)',fontSize:14}}>
                  <I size={16} style={{color:'var(--brand)',marginTop:2,flexShrink:0}}/><span>{t}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{marginTop:52,paddingTop:22,borderTop:'1px solid var(--line)',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:10,fontSize:13,color:'var(--ink-2)',paddingBottom:28}}>
          <span>© {new Date().getFullYear()} ویزل. تمامی حقوق محفوظ است.</span>
          <span className="ltr">Design & Dev by WIZEL</span>
        </div>
      </div>
      <style>{`.ft-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;}@media(max-width:900px){.ft-grid{grid-template-columns:1fr 1fr;gap:36px;}}@media(max-width:580px){.ft-grid{grid-template-columns:1fr;gap:28px;}}`}</style>
    </footer>
  );
}
