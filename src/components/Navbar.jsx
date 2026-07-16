import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../Icons';

const NAV=[
  {to:'/',label:'خانه',I:Icon.Home},
  {to:'/services',label:'خدمات',I:Icon.Grid},
  {to:'/packages',label:'پکیج‌ها',I:Icon.Tag},
  {to:'/portfolio',label:'نمونه کارها',I:Icon.Briefcase},
  {to:'/team',label:'تیم ما',I:Icon.Users},
  {to:'/about',label:'درباره ما',I:Icon.Award},
  {to:'/blog',label:'وبلاگ',I:Icon.Message},
  {to:'/contact',label:'تماس',I:Icon.Phone},
];

function Logo({mobile=false}){
  const [err,setErr]=useState(false);
  return(
    <Link to="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:800,fontSize:20}}>
      {!err
        ?<img src="/logo.png" alt="ویزل" height={34} style={{width:'auto',height:34}} onError={()=>setErr(true)}/>
        :<span style={{width:34,height:34,borderRadius:9,flexShrink:0,background:'linear-gradient(135deg,var(--brand),var(--brand-deep))',display:'grid',placeItems:'center',fontFamily:"'Space Grotesk'",fontWeight:700,fontSize:15,color:'#fff'}}>W</span>
      }
     
    </Link>
  );
}

export default function Navbar(){
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  const {pathname}=useLocation();
  useEffect(()=>{const f=()=>setScrolled(window.scrollY>10);window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f);},[]);
  useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow='';};},[open]);
  useEffect(()=>setOpen(false),[pathname]);
  const IB={width:38,height:38,display:'grid',placeItems:'center',borderRadius:10,background:'var(--bg-2)',border:'1px solid var(--line-strong)',color:'var(--ink-0)'};
  return(
    <>
      {/* ═══ MOBILE BAR (only on mobile) ═══ */}
      <header className="mob-bar" style={{
        position:'fixed',top:12,left:14,right:14,zIndex:110,
        display:'flex',alignItems:'center',justifyContent:'space-between',
        padding:'10px 14px',borderRadius:18,
        background:scrolled?'rgba(7,16,30,0.88)':'rgba(7,16,30,0.6)',
        backdropFilter:'blur(18px)',border:'1px solid var(--line-strong)',
        boxShadow:scrolled?'0 12px 32px -16px rgba(0,0,0,.6)':'none',
        transition:'all .3s',
      }}>
        <a href="tel:+982100000000" style={IB}><Icon.Phone size={17}/></a>
        <Logo mobile={true}/>
        <button onClick={()=>setOpen(true)} style={IB}><Icon.Menu size={19}/></button>
      </header>

      {/* ═══ DRAWER ═══ */}
      <div className={`drw-ov${open?' open':''}`} onClick={()=>setOpen(false)}/>
      <nav className={`drw-pn${open?' open':''}`}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
          <Logo mobile={false}/>
          <button onClick={()=>setOpen(false)} style={IB}><Icon.X/></button>
        </div>
        <div style={{display:'grid',gap:10}}>
          {NAV.map(n=>{
            const a=pathname===n.to;
            return(
              <Link key={n.to} to={n.to} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'13px 16px',borderRadius:12,fontSize:15,fontWeight:600,background:a?'linear-gradient(135deg,var(--brand),var(--brand-deep))':'var(--bg-1)',border:a?'1px solid transparent':'1px solid var(--line-strong)',color:a?'#fff':'var(--ink-0)'}}>
                {n.label}<n.I size={18}/>
              </Link>
            );
          })}
        </div>
        <Link to="/contact" className="btn btn-primary" style={{marginTop:24,justifyContent:'center',width:'100%'}}>شروع پروژه</Link>
        <div style={{marginTop:'auto',paddingTop:28,textAlign:'center',fontSize:12,color:'var(--ink-2)'}}><span className="ltr">Powered by WIZEL v1.0</span></div>
      </nav>

      {/* ═══ DESKTOP DOCK (hidden on mobile via CSS) ═══ */}
      <nav className="dk-dock" style={{
        position:'fixed',top:'50%',right:20,transform:'translateY(-50%)',zIndex:100,
        flexDirection:'column',alignItems:'center',gap:4,
        background:'rgba(10,22,38,0.85)',backdropFilter:'blur(18px)',
        border:'1px solid var(--line-strong)',borderRadius:22,padding:'14px 9px',
      }}>
        <Logo mobile={false}/>
        <div style={{width:'100%',height:1,background:'var(--line)',margin:'10px 0'}}/>
        {NAV.map(n=>{const a=pathname===n.to;return(
          <Link key={n.to} to={n.to} className="dk-item" title={n.label} style={{width:40,height:40,borderRadius:11,display:'grid',placeItems:'center',color:a?'#fff':'var(--ink-1)',position:'relative',background:a?'linear-gradient(135deg,var(--brand),var(--brand-deep))':'transparent'}}>
            <n.I size={18}/><span className="dk-tip">{n.label}</span>
          </Link>
        );})}
      </nav>

      <style>{`
        /* Mobile: show bar, hide dock */
        .mob-bar{display:flex;} .dk-dock{display:none;}
        /* Desktop: hide bar, show dock */
        @media(min-width:901px){
          .mob-bar{display:none!important;}
          .dk-dock{display:flex!important;}
        }
        .logo-text{display:inline-block;}
        .drw-ov{position:fixed;inset:0;background:rgba(2,6,14,.65);backdrop-filter:blur(3px);z-index:119;opacity:0;pointer-events:none;transition:opacity .3s;}
        .drw-ov.open{opacity:1;pointer-events:auto;}
        .drw-pn{position:fixed;top:0;bottom:0;right:0;width:min(88vw,360px);z-index:120;background:var(--bg-1);border-left:1px solid var(--line-strong);padding:20px 18px 24px;display:flex;flex-direction:column;transform:translateX(110%);transition:transform .36s cubic-bezier(.2,.8,.2,1);overflow-y:auto;}
        .drw-pn.open{transform:translateX(0);}
        .dk-item{transition:background .25s,color .25s;}
        .dk-item:hover{background:var(--bg-3)!important;color:var(--ink-0)!important;}
        .dk-tip{position:absolute;right:calc(100% + 12px);top:50%;transform:translateY(-50%);background:var(--bg-2);border:1px solid var(--line-strong);padding:5px 12px;border-radius:8px;font-size:13px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .18s;}
        .dk-item:hover .dk-tip{opacity:1;}
      `}</style>
    </>
  );
}
