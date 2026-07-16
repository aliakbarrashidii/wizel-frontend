
import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { SERVICES as DEFAULT_SERVICES } from '../../data/services';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const getToken = () => localStorage.getItem('wizel_admin_token');
export default function AdminServices() {
  const [services, setServices] = useState(DEFAULT_SERVICES);
  const [editing, setEditing] = useState(null);
  const load = () => fetch(`${API}/api/services`).then(r=>r.json()).then(d=>{ if(d.length) setServices(d); }).catch(()=>{});
  useEffect(()=>{ load(); },[]);
  async function update(id, data) {
    await fetch(`${API}/api/services/${id}`, { method:'PUT', headers:{'Content-Type':'application/json','Authorization':`Bearer ${getToken()}`}, body:JSON.stringify(data) });
    load(); setEditing(null);
  }
  const inp = { width:'100%', padding:'9px 12px', background:'#07101e', border:'1px solid rgba(60,110,200,.25)', borderRadius:8, color:'#e4ecf9', fontSize:13, outline:'none', marginBottom:8 };
  return (
    <AdminLayout title="مدیریت خدمات و تعرفه">
      <div style={{ display:'grid', gap:16 }}>
        {services.map(s => (
          <div key={s.id} style={{ background:'#0c1929', border:'1px solid rgba(60,110,200,.2)', borderRadius:16, overflow:'hidden' }}>
            <div style={{ padding:'16px 20px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div>
                <div style={{ fontSize:17, fontWeight:700, color:'#e4ecf9' }}>{s.title}</div>
                <div style={{ fontSize:13, color:'#5aa5ff', marginTop:3 }}>شروع از {s.startPrice} تومان • {s.packagesCount} پکیج</div>
              </div>
              <button onClick={()=>setEditing(editing===s.id?null:s.id)} style={{ padding:'8px 18px', background: editing===s.id ? 'rgba(255,80,80,.15)':'rgba(30,123,255,.15)', border:`1px solid ${editing===s.id?'rgba(255,80,80,.3)':'rgba(30,123,255,.3)'}`, color: editing===s.id?'#ff6b6b':'#5aa5ff', borderRadius:8, cursor:'pointer', fontSize:13 }}>
                {editing===s.id ? 'بستن' : 'ویرایش'}
              </button>
            </div>
            {editing===s.id && (
              <div style={{ padding:'0 20px 20px', borderTop:'1px solid rgba(60,110,200,.15)' }}>
                <p style={{ fontSize:13, color:'#4d6585', marginBottom:14, marginTop:14 }}>ویرایش اطلاعات سرویس:</p>
                <input defaultValue={s.startPrice} onChange={e=>s.startPrice=e.target.value} placeholder="شروع قیمت (مثال: ۵,۰۰۰,۰۰۰)" style={inp}/>
                <input defaultValue={s.desc} onChange={e=>s.desc=e.target.value} placeholder="توضیحات سرویس" style={inp}/>
                <button onClick={()=>update(s.id, s)} style={{ padding:'9px 20px', background:'#1e7bff', color:'#fff', borderRadius:8, border:'none', cursor:'pointer', fontWeight:700, fontSize:13 }}>ذخیره تغییرات</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
