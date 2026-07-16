import { Link } from 'react-router-dom';
import { Icon } from '../Icons';
import Aliakbar from '../assets/team/Aliakbar.png'
import Alishahbazi from '../assets/team/Alishahbazi.png'
const TEAM = [
  {
    name:'علی اکبر رشیدی',
    role:'مدیرعامل و بنیان‌گذار',
    dept:'مدیریت',
    image: Aliakbar ,
    initials:'ع.ر',
    grad:'linear-gradient(135deg,#1e7bff,#062a63)',
    bio:'بنیان‌گذار و مدیرعامل ویزل. مسئول برنامه‌ریزی استراتژیک، توسعه کسب‌وکار، مدیریت پروژه‌ها و ارتباط با مشتریان کلیدی. تمرکز اصلی او بر رشد برند، توسعه خدمات دیجیتال و هدایت تیم در مسیر اهداف سازمان است.',
    skills:['مدیریت','استراتژی','دیجیتال مارکتینگ'],
    social:{ln:'#',ig:'#'}
  },

  {
    name:'علی شهبازی',
    role:'مدیر طراحی و برندینگ',
    dept:'طراحی',
    image:Alishahbazi,
    initials:'ع.ش',
    grad:'linear-gradient(135deg,#5aa5ff,#1259c9)',
    bio:'مسئول طراحی هویت بصری، رابط کاربری و تجربه کاربری محصولات ویزل. تخصص او در خلق برندهای متمایز و طراحی رابط‌های کاربری مدرن و کاربرمحور است.',
    skills:['UI/UX','برندینگ','گرافیک'],
    social:{ln:'#',ig:'#'}
  },

  {
    name:'مهدی شجاعی',
    role:'توسعه‌دهنده ارشد',
    dept:'فناوری',
    image:'/images/team/mehdi.jpg',
    initials:'م.ش',
    grad:'linear-gradient(135deg,#3d9bff,#062a63)',
    bio:'مسئول توسعه و نگهداری سامانه‌ها و وب‌سایت‌های شرکت. متخصص توسعه فرانت‌اند و بک‌اند و پیاده‌سازی زیرساخت‌های فنی پروژه‌های سازمانی.',
    skills:['React','Node.js','DevOps'],
    social:{ln:'#',ig:'#'}
  },

  {
    name:'احمدرضا گرمان',
    role:'کارشناس سئو و بازاریابی محتوا',
    dept:'محتوا',
    image:'/images/team/ahmadreza.jpg',
    initials:'ا.گ',
    grad:'linear-gradient(135deg,#1e7bff,#0a3080)',
    bio:'متخصص بهینه‌سازی موتورهای جستجو و تدوین استراتژی محتوایی. وظیفه او افزایش دیده‌شدن برند و جذب مخاطبان هدف از طریق جستجوی ارگانیک است.',
    skills:['سئو','محتوا','تحلیل'],
    social:{ln:'#',ig:'#'}
  },

  {
    name:'رضا احمدی',
    role:'مدیر کمپین‌های تبلیغاتی',
    dept:'مارکتینگ',
    image:'/images/team/reza.jpg',
    initials:'ر.ا',
    grad:'linear-gradient(135deg,#4d9eff,#1259c9)',
    bio:'مسئول برنامه‌ریزی، اجرا و بهینه‌سازی کمپین‌های تبلیغاتی دیجیتال. تجربه مدیریت کمپین‌های شبکه‌های اجتماعی و تبلیغات آنلاین را در کارنامه دارد.',
    skills:['Google Ads','Meta Ads','تحلیل'],
    social:{ln:'#',ig:'#'}
  },

  {
    name:'مینا حسینی',
    role:'طراح UI/UX',
    dept:'طراحی',
    image:'/images/team/mina.jpg',
    initials:'م.ح',
    grad:'linear-gradient(135deg,#1e7bff,#3d9bff)',
    bio:'طراح تجربه و رابط کاربری با تمرکز بر رفتار کاربران و طراحی محصولات دیجیتال. هدف او خلق تجربه‌ای ساده، روان و لذت‌بخش برای کاربران است.',
    skills:['Figma','Prototyping','تحقیق'],
    social:{ln:'#',ig:'#'}
  }
];

function Avatar({ image, initials, grad, size = 110 }) {
  console.log(image);
  return (
    <div style={{
      position:'relative',
      width:size+24,
      height:size+24,
      display:'grid',
      placeItems:'center',
      flexShrink:0
    }}>
      <div style={{
        position:'absolute',
        inset:0,
        borderRadius:'50%',
        border:'2px dashed rgba(90,165,255,0.4)',
        animation:'spinRing 14s linear infinite',
      }}/>

      <div style={{
        position:'absolute',
        inset:4,
        borderRadius:'50%',
        border:'2px solid var(--brand)',
        animation:'pulseRing 2.8s ease-out infinite',
        opacity:.8,
      }}/>

      {image ? (
        <img
          src={image}
          alt={initials}
          style={{
            width:size,
            height:size,
            borderRadius:'50%',
            objectFit:'cover',
            position:'relative',
            zIndex:1,
            boxShadow:'0 0 30px -8px rgba(30,123,255,.55)',
            border:'3px solid rgba(255,255,255,.12)'
          }}
        />
      ) : (
        <div style={{
          width:size,
          height:size,
          borderRadius:'50%',
          background:grad,
          display:'grid',
          placeItems:'center',
          fontFamily:"'Space Grotesk',sans-serif",
          fontWeight:800,
          fontSize:size*.3,
          color:'#fff',
          letterSpacing:2,
          position:'relative',
          zIndex:1,
          boxShadow:'0 0 30px -8px rgba(30,123,255,.55)',
        }}>
          {initials}
        </div>
      )}
    </div>
  );
}

function Card({ m }) {
  return (
    <div className="tc-wrap" style={{ perspective:1000, width:280, height:360 }}>
      <div className="tc-inner">

        {/* ── FRONT ── */}
        <div className="tc-face tc-front" style={{
          background:'var(--bg-1)',
          border:'1px solid var(--line-strong)',
          borderRadius:22, overflow:'hidden',
          display:'flex', flexDirection:'column', alignItems:'center',
        }}>
          {/* gradient header strip */}
          <div style={{ width:'100%', height:120, background:m.grad, position:'relative', flexShrink:0 }}>
            <div style={{ position:'absolute', inset:0, background:'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', opacity:.5 }}/>
          </div>

          {/* avatar (overlapping the strip) */}
          <div style={{ marginTop:-62, zIndex:2 }}>
             <Avatar
    image={m.image}
    initials={m.initials}
    grad={m.grad}
    size={104}
  />
          </div>

          {/* name & role */}
          <div style={{ padding:'14px 20px 22px', textAlign:'center' }}>
            <div style={{ fontSize:18, fontWeight:800 }}>{m.name}</div>
            <span className="tag" style={{ marginTop:8 }}>{m.role}</span>
            <div style={{ marginTop:8, fontSize:12, color:'var(--ink-2)', fontWeight:600 }}>{m.dept}</div>
            <div style={{ marginTop:14, fontSize:12, color:'var(--ink-2)' }}>
              برای اطلاعات بیشتر هاور کنید ↗
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="tc-face tc-back" style={{
          background:`linear-gradient(155deg,var(--brand-deep),#0a2050)`,
          borderRadius:22, padding:'28px 22px',
          display:'flex', flexDirection:'column', justifyContent:'space-between',
          border:'1px solid rgba(30,123,255,.3)',
        }}>
          <div>
            <div style={{ fontSize:15, fontWeight:800, color:'rgba(255,255,255,.9)' }}>{m.name}</div>
            <div style={{ fontSize:12, color:'rgba(255,255,255,.55)', marginTop:3 }}>{m.role}</div>
            <p style={{ marginTop:14, fontSize:13.5, color:'rgba(255,255,255,.78)', lineHeight:1.85 }}>{m.bio}</p>
          </div>
          <div>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:18 }}>
              {m.skills.map(s=>(
                <span key={s} style={{ padding:'5px 12px', borderRadius:999, fontSize:12, fontWeight:600, background:'rgba(255,255,255,.12)', color:'rgba(255,255,255,.9)' }}>{s}</span>
              ))}
            </div>
            <div style={{ display:'flex', gap:10 }}>
              {m.social.ln && <a href={m.social.ln} aria-label="LinkedIn" style={{ width:36,height:36,borderRadius:'50%',background:'rgba(255,255,255,.15)',display:'grid',placeItems:'center',color:'#fff' }}><Icon.Linkedin size={16}/></a>}
              {m.social.ig && <a href={m.social.ig} aria-label="Instagram" style={{ width:36,height:36,borderRadius:'50%',background:'rgba(255,255,255,.15)',display:'grid',placeItems:'center',color:'#fff' }}><Icon.Instagram size={16}/></a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection({ preview = false }) {
  const members = preview ? TEAM.slice(0, 3) : TEAM;
  return (
    <section id="team" className="section" style={{ background:preview?'var(--bg-1)':undefined, borderTop:preview?'1px solid var(--line)':'none', borderBottom:preview?'1px solid var(--line)':'none' }}>
      <div className="container">
        <div className="fade-up" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:56, flexWrap:'wrap', gap:20 }}>
          <div>
            <span className="eyebrow"><span className="dot"/>تیم ما</span>
            <h2 style={{ fontSize:'clamp(26px,4vw,40px)', marginTop:18 }}>متخصصانی که پشت ویزل ایستاده‌اند</h2>
            <p style={{ marginTop:12, maxWidth:520 }}>هر عضو تیم ویزل یه متخصص واقعیه — نه فریلنسر نه تازه‌کار.</p>
          </div>
          {preview && <Link to="/team" className="btn btn-ghost btn-sm">دیدن همه تیم <Icon.ArrowLeft size={14}/></Link>}
        </div>

        <div className="team-grid">
          {members.map(m => <Card key={m.name} m={m}/>)}
        </div>
      </div>

      <style>{`
        .team-grid{display:flex;flex-wrap:wrap;gap:24px;justify-content:center;}
        .tc-wrap{}
        .tc-inner{
          position:relative;width:100%;height:100%;
          transform-style:preserve-3d;
          transition:transform .65s cubic-bezier(.4,0,.2,1);
        }
        .tc-wrap:hover .tc-inner{transform:rotateY(180deg);}
        .tc-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;}
        .tc-back{transform:rotateY(180deg);}
        @keyframes spinRing{to{transform:rotate(360deg)}}
        @keyframes pulseRing{
          0%{box-shadow:0 0 0 0 rgba(30,123,255,.5)}
          70%{box-shadow:0 0 0 18px rgba(30,123,255,0)}
          100%{box-shadow:0 0 0 0 rgba(30,123,255,0)}
        }
        @media(max-width:640px){.tc-wrap{width:100%!important;height:auto!important;}.tc-inner{height:360px!important;}}
      `}</style>
    </section>
  );
}
