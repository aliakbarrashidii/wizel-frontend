
import { Link, useLocation, useNavigate } from 'react-router-dom';
const LINKS = [
  { to:'/admin/dashboard', label:'داشبورد', icon:'📊' },
  { to:'/admin/blog', label:'بلاگ', icon:'📝' },
  { to:'/admin/portfolio', label:'نمونه کارها', icon:'🖼️' },
  { to:'/admin/services', label:'خدمات و تعرفه', icon:'💼' },
];
export default function AdminLayout({ children, title }) {
  const { pathname } = useLocation();
  const nav = useNavigate();
  function logout() { localStorage.removeItem('wizel_admin_token'); nav('/admin/login'); }
  return (
    <div style={{ minHeight:'100vh', background:'#07101e', display:'flex', fontFamily:'Vazirmatn,sans-serif', direction:'rtl' }}>
      {/* Sidebar */}
      <aside style={{ width:240, background:'#0c1929', borderLeft:'1px solid rgba(60,110,200,.2)', padding:'24px 16px', display:'flex', flexDirection:'column', gap:8, flexShrink:0 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24, padding:'0 8px' }}>
          <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#1e7bff,#062a63)', display:'grid', placeItems:'center', fontSize:16, fontWeight:800, color:'#fff' }}>W</div>
          <span style={{ fontWeight:800, fontSize:16, color:'#e4ecf9' }}>پنل ویزل</span>
        </div>
        {LINKS.map(l => (
          <Link key={l.to} to={l.to} style={{ display:'flex', alignItems:'center', gap:10, padding:'11px 14px', borderRadius:10, fontSize:14, fontWeight:600, background: pathname===l.to ? 'linear-gradient(135deg,#1e7bff,#062a63)' : 'transparent', color: pathname===l.to ? '#fff' : '#8ba3c7', border: pathname===l.to ? 'none' : '1px solid transparent', textDecoration:'none' }}>
            <span>{l.icon}</span>{l.label}
          </Link>
        ))}
        <div style={{ marginTop:'auto' }}>
          <Link to="/" style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderRadius:10, fontSize:13, color:'#4d6585', textDecoration:'none', marginBottom:8 }}>← بازگشت به سایت</Link>
          <button onClick={logout} style={{ width:'100%', padding:'10px 14px', borderRadius:10, background:'rgba(255,80,80,.1)', border:'1px solid rgba(255,80,80,.25)', color:'#ff6b6b', fontSize:13, fontWeight:600, cursor:'pointer', textAlign:'right' }}>خروج از پنل</button>
        </div>
      </aside>
      {/* Content */}
      <main style={{ flex:1, padding:'32px', overflow:'auto' }}>
        <h1 style={{ fontSize:22, fontWeight:800, color:'#e4ecf9', marginBottom:28 }}>{title}</h1>
        {children}
      </main>
    </div>
  );
}
