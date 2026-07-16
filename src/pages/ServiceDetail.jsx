import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { CALCULATORS, calcTotal, formatPrice } from '../data/calculator';
import { Icon } from '../Icons';

/* ─── helpers ─────────────────────────── */
const BRANDS = ['برند نمونه','شرکت آلفا','برند بتا','کسب‌وکار گاما','برند دلتا','شرکت امگا','برند زتا','شرکت اتا'];
const INP = {background:'var(--bg-0)',border:'1px solid var(--line-strong)',borderRadius:10,padding:'13px 15px',color:'var(--ink-0)',fontSize:14.5,outline:'none',width:'100%'};

/* ─── SERVICE DATA ─────────────────────── */
const SD = {
  'web-design':{
    intro:'برای کسب‌وکار خود یک وب‌سایت حرفه‌ای و کاربرپسند طراحی کنید تا برند خود را بهتر معرفی کرده و در بازار رقابتی دیجیتال حضوری قوی داشته باشید.',
    tags:['طراحی سایت در تهران','سایت شرکتی','سایت فروشگاهی کرج','طراحی سایت با سئو','طراحی سایت وردپرسی','طراحی سایت ریسپانسیو'],
    packages:[
      {name:'اقتصادی',price:'۵,۰۰۰,۰۰۰',tagline:'سایت خوب، قیمت خوب‌تر',features:[
        {t:'طراحی رابط و تجربه کاربری بر اساس برند',v:false},
        {t:'طراحی بنرهای گرافیکی متناسب با اهداف',v:false},
        {t:'ساخت آیکون‌های منحصربه‌فرد متناسب با برند',v:false},
        {t:'ارائه مستند اصول طراحی برای توسعه آتی',v:false},
        {t:'بررسی امکانات ضروری و پیشنهاد قابلیت‌های بهینه',v:true},
        {t:'شناسایی فرصت‌های تمایز و بهبود نسبت به رقبا',v:false},
        {t:'پیاده‌سازی سایت مدرن، امن و بهینه‌شده',v:true},
        {t:'طراحی واکنشگرا برای نمایش بهینه در تمامی دستگاه‌ها',v:true},
        {t:'سه ماه پشتیبانی هاست و دامنه IR توسط ویزل',v:true},
        {t:'پشتیبانی فنی یک هفته‌ای پس از تحویل وبسایت',v:true},
        {t:'آموزش نحوه مدیریت وبسایت از طریق ویدیوهای آموزشی',v:true},
        {t:'طراحی سئو محور اولیه برای رتبه بهتر در گوگل',v:false},
        {t:'اخذ مجوزهای قانونی (اینماد) جهت اعتماد سازی کاربران',v:false},
        {t:'طراحی لوگوموشن جذاب و حرفه‌ای برای برند شما',v:true},
        {t:'هزینه سئو ماه اول با ۱۰٪ تخفیف توسط ویزل',v:true},
      ]},
      {name:'حرفه‌ای',price:'۱۲,۰۰۰,۰۰۰',tagline:'به لیگ حرفه‌ای‌ها خوش اومدین...',popular:true,features:[
        {t:'طراحی رابط و تجربه کاربری بر اساس برند',v:true},
        {t:'طراحی بنرهای گرافیکی متناسب با اهداف شما',v:true},
        {t:'ساخت آیکون‌های منحصربه‌فرد متناسب با برند',v:true},
        {t:'ارائه مستند اصول طراحی برای توسعه آتی',v:true},
        {t:'بررسی امکانات ضروری و پیشنهاد قابلیت‌های بهینه',v:false},
        {t:'شناسایی فرصت‌های تمایز و بهبود نسبت به رقبا',v:true},
        {t:'پیاده‌سازی سایت مدرن، امن و بهینه‌شده',v:true},
        {t:'طراحی واکنشگرا برای نمایش بهینه در تمامی دستگاه‌ها',v:true},
        {t:'شش ماه پشتیبانی هاست و دامنه IR توسط ویزل',v:true},
        {t:'پشتیبانی فنی دو هفته‌ای پس از تحویل وبسایت',v:true},
        {t:'آموزش نحوه مدیریت وبسایت از طریق ویدیوهای آموزشی',v:true},
        {t:'طراحی سئو محور اولیه برای رتبه بهتر در گوگل',v:true},
        {t:'اخذ مجوزهای قانونی (اینماد) جهت اعتماد سازی کاربران',v:false},
        {t:'طراحی لوگوموشن جذاب و حرفه‌ای برای برند شما',v:true},
        {t:'هزینه سئو ماه اول با ۱۵٪ تخفیف توسط ویزل',v:true},
      ]},
      {name:'اختصاصی',price:'۲۵,۰۰۰,۰۰۰',tagline:'سایت خاص برای کسب و کار های آینده نگر',features:[
        {t:'طراحی رابط و تجربه کاربری بر اساس برند',v:true},
        {t:'طراحی بنرهای گرافیکی متناسب با اهداف شما',v:true},
        {t:'ساخت آیکون‌های منحصربه‌فرد متناسب با برند',v:true},
        {t:'ارائه مستند اصول طراحی برای توسعه آتی',v:true},
        {t:'بررسی امکانات ضروری و پیشنهاد قابلیت‌های بهینه',v:true},
        {t:'شناسایی فرصت‌های تمایز و بهبود نسبت به رقبا',v:true},
        {t:'پیاده‌سازی سایت مدرن، امن و بهینه‌شده',v:true},
        {t:'طراحی واکنشگرا برای نمایش بهینه در تمامی دستگاه‌ها',v:true},
        {t:'یک سال پشتیبانی هاست و دامنه IR و COM توسط ویزل',v:true},
        {t:'پشتیبانی فنی یک ماهه پس از تحویل وبسایت',v:true},
        {t:'آموزش نحوه مدیریت وبسایت از طریق ویدیوهای آموزشی حضوری',v:true},
        {t:'طراحی سئو محور اولیه برای رتبه بهتر در گوگل',v:true},
        {t:'اخذ مجوزهای قانونی (اینماد) جهت اعتماد سازی کاربران',v:true},
        {t:'طراحی لوگوموشن جذاب و حرفه‌ای برای برند شما',v:true},
        {t:'هزینه سئو ماه اول با ۲۰٪ تخفیف توسط ویزل',v:true},
      ]},
    ],
    subTypes:[
      {n:'۱',t:'طراحی سایت شرکتی:',d:'با طراحی سایت شرکتی حرفه‌ای، شما می‌توانید برند و خدمات خود را به شکلی جذاب و معتبر آنلاین معرفی کنید. این سایت‌ها به شما کمک می‌کنند تا ارتباط مستقیم و موثری با مشتریان و مخاطبان خود برقرار کنید.'},
      {n:'۲',t:'طراحی سایت فروشگاهی:',d:'اگر قصد راه‌اندازی فروشگاه آنلاین دارید، تیم ویزل برای شما سایت فروشگاهی کاربرپسند و حرفه‌ای طراحی می‌کند که به شما این امکان را می‌دهد که محصولات خود را به راحتی به فروش برسانید.'},
      {n:'۳',t:'طراحی سایت وردپرسی:',d:'سایت‌های وردپرسی یک انتخاب عالی برای افرادی هستند که به دنبال سایت‌های سریع، کم‌هزینه و کاربرپسند هستند. با استفاده از پلتفرم وردپرس، شما می‌توانید سایت خود را به راحتی مدیریت کنید.'},
      {n:'۴',t:'طراحی سایت ریسپانسیو:',d:'ما سایت‌های ریسپانسیو می‌کنیم که تجربه کاربری بهینه را در تمامی دستگاه‌ها از جمله موبایل و تبلت، فراهم کند. این ویژگی باعث می‌شود تا کاربران در هر شرایطی تجربه بهتری از سایت شما داشته باشند.'},
    ],
    contentSections:[
      {title:'اهمیت طراحی سایت برای کسب‌وکارها',body:'امروزه، در دنیای دیجیتال رقابت زیادی بین کسب‌وکارها وجود دارد. طراحی سایت برای کسب‌وکارها نه تنها موجب معرفی برند شما می‌شود بلکه یک ابزار بسیار مؤثر برای جذب مشتریان جدید است. اگر به دنبال ارتقاء کسب‌وکار خود هستید، طراحی سایت در تهران می‌تواند اولین قدم مهم برای شما باشد.'},
      {title:'مشاوره طراحی سایت',body:'مشاوره طراحی سایت به کسب‌وکارها این امکان را می‌دهد که پیش از شروع هرگونه طراحی یا توسعه، مسیر دقیق و منطقی ورود به دنیای آنلاین را مشخص کنند. در این مرحله، یک مشاور متخصص ابتدا ماهیت برند، نوع محصولات یا خدمات، پرسونای مخاطبان، موقعیت جغرافیایی و سطح رقابت در بازار را تحلیل می‌کند.'},
      {title:'طراحی سایت چیست؟',body:'طراحی سایت فرآیند ساخت و توسعه یک وب‌سایت حرفه‌ای برای نمایش در اینترنت است که شامل طراحی ظاهر وب‌سایت، تجربه کاربری (UX)، رابط کاربری (UI)، برنامه‌نویسی و همچنین بهینه‌سازی برای موتورهای جستجو (SEO) می‌شود.'},
    ],
    portfolio:[
      {title:'فروشگاه لینک'},{title:'فروشگاه آیفون استار'},{title:'فروشگاه گالری تاج'},{title:'شرکت ویزل'},
    ],
  }
};

/* ─── PACKAGE SPHERE ──────────────────── */
function Sphere({color,size=100}){
  return(
    <div style={{width:size,height:size,borderRadius:'50%',background:`radial-gradient(circle at 35% 35%, ${color}dd, ${color}44)`,boxShadow:`0 8px 32px ${color}55, inset 0 -4px 12px rgba(0,0,0,.3), inset 0 4px 8px rgba(255,255,255,.15)`,flexShrink:0}}/>
  );
}

/* ─── CALC OPTIONS ────────────────────── */
function ToggleOpt({opt,val,onChange}){
  return(
    <div style={{background:'var(--bg-1)',border:`1px solid ${val?'rgba(30,123,255,.4)':'var(--line)'}`,borderRadius:14,padding:'16px 18px',transition:'border-color .25s'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div style={{flex:1}}>
          <div style={{fontSize:15,fontWeight:600}}>{opt.label}</div>
          {opt.hint&&<div style={{fontSize:12.5,color:'var(--ink-2)',marginTop:3}}>{opt.hint}</div>}
        </div>
        <span style={{fontSize:11.5,fontWeight:700,color:opt.price===0?'#1e9b6b':'var(--brand)',background:opt.price===0?'rgba(30,155,107,.12)':'rgba(30,123,255,.12)',padding:'3px 10px',borderRadius:999,flexShrink:0,whiteSpace:'nowrap'}}>
          {opt.freeLabel||(opt.price?`+${formatPrice(opt.price)} ت`:'رایگان')}
        </span>
      </div>
      <div style={{marginTop:12,display:'flex',alignItems:'center',gap:10}}>
        <div onClick={()=>onChange(!val)} style={{width:46,height:24,borderRadius:12,background:val?'var(--brand)':'var(--bg-3)',cursor:'pointer',position:'relative',transition:'background .25s',border:`1px solid ${val?'var(--brand)':'var(--line-strong)'}`}}>
          <div style={{position:'absolute',width:18,height:18,borderRadius:'50%',background:'#fff',top:2,left:val?24:2,transition:'left .25s',boxShadow:'0 1px 4px rgba(0,0,0,.3)'}}/>
        </div>
        <span style={{fontSize:12.5,color:val?'var(--brand)':'var(--ink-2)',fontWeight:600}}>{val?'✓ فعال':'✗ غیرفعال'}</span>
      </div>
    </div>
  );
}

function SelectOpt({opt,val,onChange}){
  return(
    <div style={{background:'var(--bg-1)',border:`1px solid ${val!=null?'rgba(30,123,255,.4)':'var(--line)'}`,borderRadius:14,padding:'16px 18px'}}>
      <div style={{marginBottom:12}}>
        <div style={{fontSize:15,fontWeight:600}}>{opt.label}</div>
        {opt.hint&&<div style={{fontSize:12.5,color:'var(--ink-2)',marginTop:3}}>{opt.hint}</div>}
      </div>
      <div style={{display:'grid',gap:8}}>
        {opt.choices.map((c,i)=>(
          <div key={i} onClick={()=>onChange(i)} style={{padding:'10px 14px',borderRadius:10,border:`1px solid ${val===i?'var(--brand)':'var(--line-strong)'}`,background:val===i?'rgba(30,123,255,.1)':'var(--bg-2)',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',transition:'all .2s'}}>
            <span style={{fontSize:13.5,color:val===i?'var(--brand)':'var(--ink-0)'}}>{c.label}</span>
            <span style={{fontSize:12.5,fontWeight:700,color:c.price===0?'#1e9b6b':c.price>0?'var(--brand)':'#1e9b6b'}}>{c.price===0?'پایه':c.price>0?`+${formatPrice(c.price)}`:`${formatPrice(c.price)}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RangeOpt({opt,val,onChange}){
  const cost=val>0&&opt.pricePerUnit?val*opt.pricePerUnit:0;
  return(
    <div style={{background:'var(--bg-1)',border:`1px solid ${val>0?'rgba(30,123,255,.4)':'var(--line)'}`,borderRadius:14,padding:'16px 18px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:14}}>
        <div><div style={{fontSize:15,fontWeight:600}}>{opt.label}</div>{opt.hint&&<div style={{fontSize:12.5,color:'var(--ink-2)',marginTop:3}}>{opt.hint}</div>}</div>
        {opt.pricePerUnit&&<span style={{fontSize:12,color:'var(--ink-2)',flexShrink:0}}>هر واحد: {formatPrice(opt.pricePerUnit)}</span>}
      </div>
      <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'var(--ink-2)',marginBottom:8}}>
        <span>حداقل: {opt.min}</span>
        <span style={{color:'var(--brand)',fontWeight:800,fontSize:18}}>{val}</span>
        <span>حداکثر: {opt.max}</span>
      </div>
      <input type="range" min={opt.min} max={opt.max} value={val} onChange={e=>onChange(parseInt(e.target.value))} style={{width:'100%',accentColor:'var(--brand)'}}/>
      <div style={{marginTop:10,padding:'7px 12px',background:cost>0?'rgba(30,123,255,.08)':'rgba(30,155,107,.08)',borderRadius:8,textAlign:'center',fontSize:13,color:cost>0?'var(--brand)':'#1e9b6b',fontWeight:700}}>
        تأثیر قیمتی: {cost>0?`+${formatPrice(cost)} تومان`:'رایگان'}
      </div>
    </div>
  );
}

/* ─── REVIEWS ─────────────────────────── */
const REVIEWS=[
  {name:'احسان م.',text:'کارشون خوب بود راضی بودم',date:'۱۴۰۳/۰۲/۱۵'},
  {name:'زهرا ک.',text:'تیم حرفه‌ای و پاسخگو، از نتیجه کار راضیم.',date:'۱۴۰۳/۰۱/۲۸'},
];

/* ─── MAIN ─────────────────────────────── */
export default function ServiceDetail(){
  const {id}=useParams();
  const s=SERVICES.find(x=>x.id===id)||SERVICES[0];
  const d=SD[s.id]||SD['web-design'];
  const calc=CALCULATORS[s.id];

  // calculator state
  const initSel=()=>{
    if(!calc)return{};
    const sel={};
    for(const o of calc.options){
      if(o.type==='toggle')sel[o.id]=o.defaultVal??false;
      else if(o.type==='range')sel[o.id]=o.defaultVal??o.min;
      else sel[o.id]=null;
    }
    return sel;
  };
  const [sel,setSel]=useState(initSel);
  const total=calc?calcTotal(s.id,sel):0;
  const setV=(oid,v)=>setSel(p=>({...p,[oid]:v}));

  // review form
  const [rev,setRev]=useState({name:'',text:''});
  const [reviews,setReviews]=useState(REVIEWS);
  const [sent,setSent]=useState(false);

  const freeItems=calc?calc.options.filter(o=>o.freeLabel&&(o.type!=='toggle'||true)):[];

  return(
    <div style={{paddingTop:76}}>

      {/* ══ 1. HERO ══════════════════════════════ */}
      <section style={{padding:'60px 0 0',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:0,right:0,width:600,height:600,background:'radial-gradient(circle,var(--brand-glow),transparent 70%)',filter:'blur(24px)',opacity:.5,pointerEvents:'none'}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div style={{display:'flex',gap:6,fontSize:13,color:'var(--ink-2)',marginBottom:18}}>
            <Link to="/" style={{color:'var(--ink-2)'}}>صفحه اصلی</Link>
            <span>›</span><Link to="/services" style={{color:'var(--ink-2)'}}>خدمات</Link>
            <span>›</span><span style={{color:'var(--ink-1)'}}>{s.title}</span>
          </div>
          <div className="sd-hero-grid">
            {/* Left: Video */}
            <div style={{background:'var(--bg-1)',border:'1px solid var(--line)',borderRadius:20,overflow:'hidden'}}>
              <div style={{aspectRatio:'16/9',background:s.gradient,position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{position:'absolute',inset:0,backgroundImage:'repeating-linear-gradient(45deg,rgba(255,255,255,.03) 0,rgba(255,255,255,.03) 1px,transparent 1px,transparent 14px)'}}/>
                {['طراحی سایت','سئو سایت','مارکتینگ','برندینگ','طراحی لوگو','خدمات گرافیک','اسمارت بوک'].map((t,i)=>(
                  <span key={t} style={{position:'absolute',padding:'5px 12px',background:'rgba(255,255,255,.2)',backdropFilter:'blur(8px)',borderRadius:999,fontSize:11,fontWeight:700,color:'#fff',border:'1px solid rgba(255,255,255,.3)',
                    top:`${10+i*12}%`,[i%2===0?'right':'left']:`${5+i%3*6}%`,whiteSpace:'nowrap'}}>{t}</span>
                ))}
                <div style={{width:56,height:56,borderRadius:'50%',background:'rgba(255,255,255,.92)',display:'grid',placeItems:'center',cursor:'pointer',zIndex:1,boxShadow:'0 8px 24px rgba(0,0,0,.3)'}}>
                  <div style={{width:0,height:0,borderTop:'10px solid transparent',borderBottom:'10px solid transparent',borderLeft:`18px solid ${s.color}`,marginLeft:5}}/>
                </div>
                <div style={{position:'absolute',bottom:10,left:10,background:'rgba(0,0,0,.6)',color:'#fff',fontSize:11,fontWeight:700,padding:'3px 10px',borderRadius:6}} className="ltr">HD کیفیت</div>
              </div>
              <div style={{padding:'12px 16px',display:'flex',gap:10}}>
                {[{icon:'🏅',t:'اعتماد و اطمینان',s:'اطلاعات قانونی و گواهینامه‌ها'},{icon:'📲',t:'ارتباط با ما',s:'شبکه‌های اجتماعی و ارتباطی'}].map(c=>(
                  <div key={c.t} style={{flex:1,background:'var(--bg-2)',borderRadius:10,padding:'10px 12px',display:'flex',gap:10,alignItems:'center'}}>
                    <span style={{fontSize:20}}>{c.icon}</span>
                    <div><div style={{fontSize:12,fontWeight:700}}>{c.t}</div><div style={{fontSize:11,color:'var(--ink-2)'}}>{c.s}</div></div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Info */}
            <div>
              <h1 style={{fontSize:'clamp(24px,3.5vw,38px)',lineHeight:1.3}}>{s.title} برای کسب‌وکار شما</h1>
              <p style={{marginTop:12,fontSize:15.5,lineHeight:1.9}}>{d.intro}</p>
              <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:18}}>
                {d.tags.map(t=><span key={t} style={{padding:'5px 13px',borderRadius:999,background:'var(--bg-2)',border:'1px solid var(--line-strong)',fontSize:12.5,color:'var(--ink-1)'}}>• {t}</span>)}
              </div>
              <div style={{display:'flex',gap:10,marginTop:22,flexWrap:'wrap'}}>
                <a href="#calc" className="btn btn-primary" style={{justifyContent:'center'}}>💰 محاسبه قیمت</a>
                <a href="#packages" className="btn" style={{background:'var(--bg-2)',border:'1px solid var(--line-strong)',color:'var(--ink-0)',justifyContent:'center'}}>مشاهده تعرفه‌ها</a>
                <Link to={`/portfolio/${s.id}`} className="btn btn-primary" style={{background:s.gradient,justifyContent:'center'}}>نمونه کارها</Link>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:18}}>
                {['+98 21 0000 0000','+98 900 000 0000'].map((n,i)=>(
                  <a key={n} href="tel:+982100000000" style={{background:i===1?'var(--brand)':'var(--bg-2)',border:i===0?'1px solid var(--line-strong)':'none',borderRadius:10,padding:'11px 14px',display:'flex',gap:8,alignItems:'center',textDecoration:'none'}}>
                    <Icon.Phone size={15} style={{color:i===1?'#fff':'var(--brand)',flexShrink:0}}/>
                    <span className="ltr" style={{fontSize:14,fontWeight:700,color:i===1?'#fff':'var(--ink-0)'}}>{n}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. CLIENT LOGOS ═══════════════════════ */}
      <section style={{padding:'40px 0',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)',marginTop:40}}>
        <div className="container">
          <h3 style={{fontSize:15,color:'var(--ink-1)',marginBottom:24,textAlign:'right'}}>برندهایی که ویزل به همکاری با آن‌ها افتخار می‌کند</h3>
          <div style={{display:'flex',gap:16,flexWrap:'wrap',alignItems:'center'}}>
            {BRANDS.map((b,i)=>(
              <div key={i} style={{padding:'9px 18px',background:'var(--bg-1)',border:'1px solid var(--line)',borderRadius:10,fontSize:13,color:'var(--ink-2)'}}>
                <span style={{marginLeft:6}}>◆</span>{b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. DESCRIPTION + PACKAGES ═══════════ */}
      <section style={{padding:'60px 0 0'}} id="packages">
        <div className="container">
          <p style={{fontSize:15.5,lineHeight:2,maxWidth:900,margin:'0 auto 48px',textAlign:'justify'}}>
            اگر در شهر تهران فعالیت می‌کنید و به دنبال گسترش حضور آنلاین خود هستید، خدمات طراحی سایت در تهران می‌توانند نقطه شروعی قوی برای رشد دیجیتال شما باشد. طراحی یک وب‌سایت اختصاصی و حرفه‌ای، اولین گام برای ورود به بازار آنلاین و ارتباط مؤثر با مشتریان هدف است.
          </p>
          <h2 style={{fontSize:'clamp(22px,3vw,32px)',marginBottom:8,textAlign:'right'}}>پکیج‌های ویزل برای کسب‌وکار شما</h2>
          <div style={{width:60,height:3,background:s.gradient,borderRadius:2,marginBottom:36}}/>
          <div className="sd-pkg-grid">
            {d.packages.map((pkg,pi)=>{
              const colors=['#4da6ff','#1e7bff','#062a63'];
              return(
                <div key={pkg.name} style={{borderRadius:20,border:`1px solid ${pkg.popular?'rgba(30,123,255,.5)':'var(--line-strong)'}`,background:pkg.popular?'linear-gradient(155deg,rgba(30,123,255,.08),transparent)':'var(--bg-1)',position:'relative',display:'flex',flexDirection:'column',overflow:'hidden'}}>
                  {pkg.popular&&<div style={{background:'var(--brand)',color:'#fff',fontSize:12,fontWeight:700,padding:'4px',textAlign:'center'}}>محبوب‌ترین</div>}
                  <div style={{padding:'24px 20px 16px',textAlign:'center'}}>
                    <Sphere color={colors[pi]} size={90}/>
                    <div style={{fontSize:11,color:'var(--ink-2)',marginTop:12,fontWeight:600}}>شرکتی</div>
                    <h3 style={{fontSize:20,marginTop:6}}>{pkg.name}</h3>
                    <div style={{margin:'14px 0',padding:'12px',background:'var(--bg-2)',borderRadius:10}}>
                      <div style={{fontSize:11,color:'var(--ink-2)'}}>از</div>
                      <div style={{fontSize:22,fontWeight:800,color:'var(--brand)'}} className="ltr">{pkg.price}</div>
                      <div style={{fontSize:11,color:'var(--ink-2)'}}>تومان</div>
                    </div>
                    {pkg.tagline&&<div style={{fontSize:12.5,color:'var(--ink-2)',fontStyle:'italic'}}>{pkg.tagline}</div>}
                  </div>
                  <div style={{padding:'0 16px',flexGrow:1}}>
                    <ul style={{display:'grid',gap:9}}>
                      {pkg.features.map((f,fi)=>(
                        <li key={fi} style={{display:'flex',gap:10,alignItems:'flex-start',fontSize:13,color:f.v?'var(--ink-0)':'var(--ink-2)',opacity:f.v?1:0.55}}>
                          <span style={{width:18,height:18,borderRadius:'50%',background:f.v?'rgba(30,155,107,.15)':'rgba(255,80,80,.08)',border:`1px solid ${f.v?'rgba(30,155,107,.4)':'rgba(255,80,80,.3)'}`,display:'grid',placeItems:'center',flexShrink:0,marginTop:1,fontSize:10}}>
                            {f.v?<span style={{color:'#1e9b6b'}}>✓</span>:<span style={{color:'#ff6b6b'}}>✗</span>}
                          </span>
                          {f.t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{padding:'18px 16px'}}>
                    <Link to="/contact" className="btn btn-primary" style={{justifyContent:'center',width:'100%',background:pkg.popular?'linear-gradient(135deg,var(--brand),#1259c9)':s.gradient}}>سفارش این پکیج</Link>
                    <div style={{textAlign:'center',marginTop:8,fontSize:12,color:'var(--ink-2)',display:'flex',gap:4,alignItems:'center',justifyContent:'center'}}>
                      <Icon.Clock size={12}/>تحویل ۲۶ روز کاری
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{textAlign:'center',marginTop:24}}>
            <Link to="/packages" className="btn btn-ghost btn-sm">مشاهده همه پکیج‌ها و دسته‌ها <Icon.ArrowLeft size={14}/></Link>
          </div>
        </div>
      </section>

      {/* ══ 4. CONTENT SECTIONS ══════════════════ */}
      {d.contentSections.map((cs,i)=>(
        <section key={i} style={{padding:'48px 0 0'}}>
          <div className="container">
            <h2 style={{fontSize:'clamp(18px,2.5vw,26px)',marginBottom:6,textAlign:'right'}}>{cs.title}</h2>
            <div style={{width:50,height:3,background:s.gradient,borderRadius:2,marginBottom:20}}/>
            <p style={{fontSize:15,lineHeight:2,textAlign:'justify',maxWidth:1000}}>{cs.body}</p>
          </div>
        </section>
      ))}

      {/* ══ 5. SERVICE TYPES ═════════════════════ */}
      <section style={{padding:'60px 0'}}>
        <div className="container">
          <div className="sd-types-grid">
            <div>
              <h2 style={{fontSize:'clamp(20px,3vw,28px)',marginBottom:6}}>خدمات {s.title} ویزل</h2>
              <div style={{width:50,height:3,background:s.gradient,borderRadius:2,marginBottom:28}}/>
              <div style={{display:'grid',gap:14}}>
                {d.subTypes.map(st=>(
                  <div key={st.n} style={{background:'var(--bg-1)',border:'1px solid var(--line)',borderRadius:14,padding:'18px 20px'}}>
                    <h3 style={{fontSize:15.5,marginBottom:8,display:'flex',gap:10,alignItems:'center'}}>
                      <span style={{width:28,height:28,borderRadius:'50%',background:'rgba(30,123,255,.15)',border:'1px solid rgba(30,123,255,.3)',display:'grid',placeItems:'center',fontSize:13,fontWeight:800,color:'var(--brand)',flexShrink:0}}>{st.n}</span>
                      {st.t}
                    </h3>
                    <p style={{fontSize:14,lineHeight:1.85,color:'var(--ink-1)'}}>{st.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:14}}>
              {[{t:'طراحی خلاقانه و حرفه‌ای',d:'سایت‌هایی که نه تنها جذاب، بلکه بهینه برای جذب مخاطب طراحی می‌شوند.'},{t:'بهینه‌سازی سایت برای سئو',d:'تمامی وب‌سایت‌ها به طور کامل برای موتورهای جستجو بهینه‌سازی می‌شوند.'},{t:'پشتیبانی و مشاوره پس از طراحی',d:'از شروع تا پایان پروژه، کنارتان هستیم و مشاوره دیجیتال مارکتینگ ارائه می‌دهیم.'},{t:'طراحی ریسپانسیو با موبایل',d:'تمامی سایت‌های طراحی‌شده ریسپانسیو ساخته می‌شوند تا در تمامی دستگاه‌ها عملکرد عالی داشته باشند.'}].map((v,i)=>(
                <div key={i} style={{background:'var(--bg-1)',border:'1px solid var(--line)',borderRadius:14,padding:'16px 18px',display:'flex',gap:12,alignItems:'flex-start'}}>
                  <span style={{width:28,height:28,borderRadius:'50%',background:'rgba(30,123,255,.12)',border:'1px solid rgba(30,123,255,.25)',display:'grid',placeItems:'center',fontSize:12,fontWeight:800,color:'var(--brand)',flexShrink:0}}>{i+1}</span>
                  <div><div style={{fontSize:15,fontWeight:700}}>{v.t}:</div><p style={{marginTop:6,fontSize:13.5}}>{v.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. PORTFOLIO PREVIEW ═════════════════ */}
      <section style={{padding:'48px 0',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <h2 style={{fontSize:'clamp(20px,3vw,28px)',textAlign:'center',marginBottom:6}}>نمونه کارهای ما</h2>
          <p style={{textAlign:'center',fontSize:14,color:'var(--ink-2)',marginBottom:32}}>مجموعه‌ای از پروژه‌های موفق ما در این حوزه</p>
          <div className="sd-portfolio-grid">
            {d.portfolio.map((p,i)=>(
              <div key={i} style={{borderRadius:16,overflow:'hidden',border:'1px solid var(--line)',background:'var(--bg-1)',transition:'transform .3s,border-color .3s'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.borderColor='rgba(30,123,255,.4)';}}
                onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.borderColor='var(--line)';}}>
                <div style={{height:180,background:s.gradient,opacity:0.7+i*0.08,display:'grid',placeItems:'center',fontSize:12,color:'rgba(255,255,255,.3)',letterSpacing:2}}>WIZEL</div>
                <div style={{padding:'12px 14px'}}>
                  <div style={{fontSize:14,fontWeight:700}}>{p.title}</div>
                  <div style={{fontSize:12,color:'var(--brand)',marginTop:3}}>{s.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:22}}>
            <Link to={`/portfolio/${s.id}`} className="btn btn-primary" style={{background:s.gradient}}>
              <Icon.Briefcase size={16}/>مشاهده همه نمونه کارها
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 7. PRICE CALCULATOR ══════════════════ */}
      {calc&&(
        <section id="calc" style={{padding:'60px 0',background:'var(--bg-1)',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
          <div className="container">
            <h2 style={{fontSize:'clamp(22px,3vw,32px)',marginBottom:4}}>{calc.title}</h2>
            <div style={{width:60,height:3,background:s.gradient,borderRadius:2,marginBottom:8}}/>
            <p style={{fontSize:14,color:'var(--ink-2)',marginBottom:36}}>قیمت پایه: <span style={{color:'var(--brand)',fontWeight:700}} className="ltr">{calc.basePriceLabel}</span> تومان — گزینه‌های مورد نیاز را انتخاب کنید</p>
            <div className="sd-calc-grid">
              {/* Options */}
              <div style={{display:'grid',gap:14,overflowY:'auto',maxHeight:700,paddingLeft:8}}>
                {calc.options.map(opt=>(
                  <div key={opt.id}>
                    {opt.type==='toggle'&&<ToggleOpt opt={opt} val={sel[opt.id]} onChange={v=>setV(opt.id,v)}/>}
                    {opt.type==='select'&&<SelectOpt opt={opt} val={sel[opt.id]} onChange={v=>setV(opt.id,v)}/>}
                    {opt.type==='range'&&<RangeOpt opt={opt} val={sel[opt.id]} onChange={v=>setV(opt.id,v)}/>}
                  </div>
                ))}
              </div>
              {/* Summary */}
              <div style={{position:'sticky',top:100}}>
                <div style={{background:'var(--bg-0)',border:'1px solid var(--line-strong)',borderRadius:20,overflow:'hidden'}}>
                  <div style={{background:s.gradient,padding:'18px 20px'}}>
                    <div style={{fontSize:15,fontWeight:700,color:'#fff'}}>خلاصه قیمت</div>
                  </div>
                  <div style={{padding:'18px 16px'}}>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:10}}>
                      <span style={{fontSize:13,color:'var(--ink-2)'}}>قیمت پایه</span>
                      <span style={{fontSize:13,color:'var(--ink-1)'}} className="ltr">{calc.basePriceLabel}</span>
                    </div>
                    {freeItems.map(item=>(
                      <div key={item.id} style={{display:'flex',justifyContent:'space-between',marginBottom:8,padding:'5px 10px',background:'rgba(30,155,107,.08)',borderRadius:8}}>
                        <span style={{fontSize:12,color:'var(--ink-1)'}}>{item.label}</span>
                        <span style={{fontSize:12,color:'#1e9b6b',fontWeight:700}}>رایگان</span>
                      </div>
                    ))}
                    <div style={{borderTop:'2px dashed var(--brand)',margin:'16px 0',paddingTop:16,textAlign:'center'}}>
                      <div style={{fontSize:32,fontWeight:800,color:'var(--brand)',fontFamily:"'Space Grotesk'"}} className="ltr">{formatPrice(total)}</div>
                      <div style={{fontSize:13,color:'var(--ink-2)',marginTop:4}}>تومان</div>
                    </div>
                    <Link to="/contact" className="btn btn-primary" style={{justifyContent:'center',width:'100%',background:s.gradient}}>سفارش این پکیج</Link>
                    <div style={{textAlign:'center',marginTop:8,fontSize:12,color:'var(--ink-2)',display:'flex',gap:4,alignItems:'center',justifyContent:'center'}}>
                      <Icon.Clock size={12}/>تحویل ۲۶ روز کاری
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══ 8. CONTACT FORM + REVIEWS ════════════ */}
      <section style={{padding:'60px 0'}}>
        <div className="container">
          <div className="sd-bottom-grid">
            {/* Reviews */}
            <div>
              <h3 style={{fontSize:18,marginBottom:6}}>نظرات کاربران ({reviews.length})</h3>
              <div style={{width:40,height:2,background:s.gradient,borderRadius:2,marginBottom:20}}/>
              <div style={{display:'grid',gap:12}}>
                {reviews.map((r,i)=>(
                  <div key={i} style={{background:'var(--bg-1)',border:'1px solid var(--line)',borderRadius:14,padding:'16px 18px',display:'flex',gap:14,alignItems:'flex-start'}}>
                    <div style={{width:42,height:42,borderRadius:'50%',background:s.gradient,display:'grid',placeItems:'center',flexShrink:0,fontSize:13,fontWeight:700,color:'#fff'}}>{r.name[0]}</div>
                    <div style={{flex:1}}>
                      <div style={{display:'flex',justifyContent:'space-between'}}>
                        <span style={{fontSize:14,fontWeight:700}}>{r.name}</span>
                        <span style={{fontSize:12,color:'var(--ink-2)'}} className="ltr">{r.date}</span>
                      </div>
                      <p style={{marginTop:6,fontSize:14}}>{r.text}</p>
                      <button style={{marginTop:8,fontSize:12,color:'var(--ink-2)',background:'none',border:'none',cursor:'pointer'}}>پاسخ به این نظر</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Review Form */}
            <div>
              <h3 style={{fontSize:18,marginBottom:6}}>ارسال نظر</h3>
              <div style={{width:40,height:2,background:s.gradient,borderRadius:2,marginBottom:20}}/>
              {sent?(
                <div style={{background:'rgba(30,155,107,.1)',border:'1px solid rgba(30,155,107,.3)',borderRadius:14,padding:24,textAlign:'center'}}>
                  <div style={{fontSize:32}}>✅</div>
                  <p style={{marginTop:8,color:'#1e9b6b',fontWeight:600}}>نظر شما ثبت شد!</p>
                </div>
              ):(
                <div style={{background:'var(--bg-1)',border:'1px solid var(--line)',borderRadius:16,padding:'22px 20px',display:'grid',gap:12}}>
                  <input placeholder="نام خود را وارد نمایید" value={rev.name} onChange={e=>setRev(p=>({...p,name:e.target.value}))} style={{...INP,padding:'12px 14px'}}/>
                  <textarea placeholder="نظر خود را وارد نمایید..." rows={4} value={rev.text} onChange={e=>setRev(p=>({...p,text:e.target.value}))} style={{...INP,padding:'12px 14px',resize:'vertical'}}/>
                  <button className="btn btn-primary" style={{justifyContent:'center',background:s.gradient}}
                    onClick={()=>{if(rev.name&&rev.text){setReviews(p=>[...p,{...rev,date:new Date().toLocaleDateString('fa-IR')}]);setRev({name:'',text:''});setSent(true);setTimeout(()=>setSent(false),3000);}}}>
                    ارسال نظر
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .sd-hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;}
        .sd-pkg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;align-items:start;}
        .sd-types-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;}
        .sd-portfolio-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
        .sd-calc-grid{display:grid;grid-template-columns:1fr 320px;gap:24px;align-items:start;}
        .sd-bottom-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;}
        @media(max-width:960px){
          .sd-hero-grid,.sd-types-grid,.sd-bottom-grid{grid-template-columns:1fr!important;}
          .sd-pkg-grid{grid-template-columns:1fr!important;}
          .sd-calc-grid{grid-template-columns:1fr!important;}
          .sd-portfolio-grid{grid-template-columns:1fr 1fr!important;}
        }
        @media(max-width:540px){.sd-portfolio-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </div>
  );
}