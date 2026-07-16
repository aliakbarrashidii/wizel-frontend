
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export default function AdminLogin() {
  const [form, setForm] = useState({ username:'', password:'' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault(); setLoading(true); setError('');
    try {
      const res = await fetch(`${API}/api/auth/login`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) });
      const data = await res.json();
      if (res.ok) { localStorage.setItem('wizel_admin_token', data.token); nav('/admin/dashboard'); }
      else setError(data.message || 'نام کاربری یا رمز عبور اشتباه است');
    } catch { setError('خطا در اتصال به سرور'); }
    setLoading(false);
  }
  const inp = { width:'100%', padding:'14px 16px', background:'#0c1929', border:'1px solid rgba(60,110,200,.25)', borderRadius:10, color:'#e4ecf9', fontSize:15, outline:'none' };
  return (
    <div style={{ minHeight:'100vh', background:'#07101e', display:'grid', placeItems:'center', fontFamily:'Vazirmatn,sans-serif', direction:'rtl' }}>
      <div style={{ background:'#0c1929', border:'1px solid rgba(60,110,200,.2)', borderRadius:20, padding:'40px 36px', width:'min(420px,90vw)' }}>
        <div style={{ textAlign:'center', marginBottom:32 }}>
          <div style={{ width:52, height:52, borderRadius:14, background:'linear-gradient(135deg,#1e7bff,#062a63)', display:'grid', placeItems:'center', margin:'0 auto 14px', fontSize:22, fontWeight:800, color:'#fff', fontFamily:'Space Grotesk' }}>W</div>
          <h1 style={{ fontSize:22, fontWeight:800, color:'#e4ecf9' }}>پنل مدیریت ویزل</h1>
          <p style={{ fontSize:14, color:'#4d6585', marginTop:6 }}>برای ورود اطلاعات خود را وارد کنید</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display:'grid', gap:14 }}>
          <input required placeholder="نام کاربری" value={form.username} onChange={e=>setForm(p=>({...p,username:e.target.value}))} style={inp}/>
          <input required type="password" placeholder="رمز عبور" value={form.password} onChange={e=>setForm(p=>({...p,password:e.target.value}))} style={inp}/>
          {error && <div style={{ padding:'10px 14px', background:'rgba(255,80,80,.1)', border:'1px solid rgba(255,80,80,.3)', borderRadius:8, fontSize:13.5, color:'#ff6b6b' }}>{error}</div>}
          <button type="submit" disabled={loading} style={{ padding:'14px', background:'linear-gradient(135deg,#1e7bff,#062a63)', color:'#fff', borderRadius:10, fontWeight:700, fontSize:15, cursor:'pointer', border:'none', opacity:loading?0.7:1 }}>
            {loading ? 'در حال ورود...' : 'ورود به پنل'}
          </button>
        </form>
      </div>
    </div>
  );
}
