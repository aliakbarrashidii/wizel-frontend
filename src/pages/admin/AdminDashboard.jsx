import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { api } from '../../utils/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ blogs:0, portfolios:0, services:6, contacts:0 });
  useEffect(() => { api.getStats().then(d=>setStats(d)).catch(()=>{}); }, []);
  const cards = [
    { label:'پست‌های بلاگ', val:stats.blogs, icon:'📝', color:'#1e7bff', link:'/admin/blog' },
    { label:'نمونه کارها', val:stats.portfolios, icon:'🖼️', color:'#6b4fff', link:'/admin/portfolio' },
    { label:'خدمات', val:stats.services, icon:'💼', color:'#1e9b6b', link:'/admin/services' },
    { label:'پیام‌های تماس', val:stats.contacts, icon:'📬', color:'#ff8c42', link:'#' },
  ];
  return (
    <AdminLayout title="داشبورد">
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20, marginBottom:32 }} className="dash-stats">
        {cards.map(c => (
          <a href={c.link} key={c.label} style={{ background:'#0c1929', border:'1px solid rgba(60,110,200,.2)', borderRadius:16, padding:'24px 20px', textDecoration:'none', display:'block', transition:'border-color .25s' }}
            onMouseEnter={e=>e.currentTarget.style.borderColor=c.color}
            onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(60,110,200,.2)'}>
            <div style={{ fontSize:28 }}>{c.icon}</div>
            <div style={{ fontSize:32, fontWeight:800, color:c.color, marginTop:8, fontFamily:'Space Grotesk' }}>{c.val}</div>
            <div style={{ fontSize:13, color:'#4d6585', marginTop:4 }}>{c.label}</div>
          </a>
        ))}
      </div>
      <div style={{ background:'#0c1929', border:'1px solid rgba(60,110,200,.2)', borderRadius:16, padding:24 }}>
        <h3 style={{ fontSize:16, color:'#e4ecf9', marginBottom:16 }}>راهنمای سریع</h3>
        <div style={{ fontSize:14, color:'#8ba3c7', lineHeight:2 }}>
          <div>📝 از منوی <strong style={{color:'#5aa5ff'}}>بلاگ</strong> می‌توانید پست جدید بنویسید و منتشر کنید.</div>
          <div>🖼️ از منوی <strong style={{color:'#5aa5ff'}}>نمونه کارها</strong> پروژه‌های جدید اضافه کنید.</div>
          <div>💼 از منوی <strong style={{color:'#5aa5ff'}}>خدمات و تعرفه</strong> قیمت‌ها و توضیحات را ویرایش کنید.</div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.dash-stats{grid-template-columns:1fr 1fr!important;}}@media(max-width:540px){.dash-stats{grid-template-columns:1fr!important;}}`}</style>
    </AdminLayout>
  );
}