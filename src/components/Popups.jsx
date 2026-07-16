import { useEffect, useState } from 'react';
import { Icon } from '../Icons';

export default function Popups() {
  const [w, setW] = useState(false);
  const [q, setQ] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setW(true), 1500);
    const t2 = setTimeout(() => setQ(true), 3000);
    const t3 = setTimeout(() => setW(false), 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const card = { background:'var(--bg-1)', border:'1px solid var(--line-strong)', borderRadius:16, padding:'16px 18px', boxShadow:'0 24px 48px -20px rgba(0,0,0,.65)', position:'relative' };
  const closeBtn = { position:'absolute', top:10, left:10, width:22, height:22, borderRadius:'50%', background:'var(--bg-3)', border:'1px solid var(--line-strong)', color:'var(--ink-1)', display:'grid', placeItems:'center', cursor:'pointer' };

  return (
    <div style={{ position:'fixed', bottom:18, left:18, zIndex:95, display:'flex', flexDirection:'column', gap:12, width:'min(320px,calc(100vw - 36px))' }}>
      {w && (
        <div className="fade-up" style={card}>
          <button aria-label="بستن" style={closeBtn} onClick={()=>setW(false)}><Icon.X size={12}/></button>
          <div style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
            <span style={{ width:38,height:38,borderRadius:10,flexShrink:0,background:'linear-gradient(135deg,var(--brand),var(--brand-deep))',display:'grid',placeItems:'center',color:'#fff',fontWeight:700,fontFamily:"'Space Grotesk'" }}>W</span>
            <div>
              <h4 style={{ fontSize:14.5 }}>ویزل؛ خوش اومدی! 👋</h4>
              <p style={{ fontSize:13,marginTop:4 }}>از همین الان کنارتیم تا بهترین تجربه دیجیتال رو با هم بسازیم.</p>
            </div>
          </div>
        </div>
      )}
      {q && (
        <div className="fade-up" style={{...card, animationDelay:'.05s'}}>
          <button aria-label="بستن" style={closeBtn} onClick={()=>setQ(false)}><Icon.X size={12}/></button>
          <div style={{ display:'flex', gap:12, alignItems:'center' }}>
            <span style={{ width:42,height:42,borderRadius:'50%',flexShrink:0,background:'var(--bg-2)',border:'1px solid var(--line-strong)',display:'grid',placeItems:'center',color:'var(--brand)' }}><Icon.Phone size={18}/></span>
            <div>
              <h4 style={{ fontSize:14.5 }}>در یک دقیقه تماس بگیریم؟</h4>
              <p style={{ fontSize:13,marginTop:4 }}>تیم ویزل آماده مشاوره رایگانه.</p>
            </div>
          </div>
          <a href="/contact" className="btn btn-primary" style={{ marginTop:14,width:'100%',justifyContent:'center',padding:'10px 18px',fontSize:13.5 }}>ارتباط سریع</a>
        </div>
      )}
    </div>
  );
}
