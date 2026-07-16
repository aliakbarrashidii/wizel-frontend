import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { SERVICES } from '../../data/services';
import { api } from '../../utils/api';

export default function AdminPortfolio() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title:'', category:'web-design', description:'' });
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filterCat, setFilterCat] = useState('');

  const load = () => { setLoading(true); api.getPortfolio(filterCat).then(d=>setItems(d)).catch(()=>{}).finally(()=>setLoading(false)); };
  useEffect(load, [filterCat]);

  async function save(e) {
    e.preventDefault();
    await api.createPortfolio(form);
    setForm({ title:'', category:'web-design', description:'' }); setShowForm(false); load();
  }
  async function del(id) {
    if (!confirm('حذف شود؟')) return;
    await api.deletePortfolio(id); load();
  }

  const inp = { width:'100%', padding:'11px 14px', background:'#07101e', border:'1px solid rgba(60,110,200,.25)', borderRadius:8, color:'#e4ecf9', fontSize:14, outline:'none', marginBottom:10 };

  return (
    <AdminLayout title="مدیریت نمونه کارها">
      <div style={{ display:'flex', gap:12, marginBottom:20, flexWrap:'wrap', alignItems:'center' }}>
        <button onClick={()=>setShowForm(!showForm)} style={{ padding:'11px 22px', background:'linear-gradient(135deg,#1e7bff,#062a63)', color:'#fff', borderRadius:10, fontWeight:700, cursor:'pointer', border:'none' }}>
          {showForm ? 'بستن فرم' : '+ نمونه کار جدید'}
        </button>
        <select value={filterCat} onChange={e=>setFilterCat(e.target.value)} style={{ padding:'10px 14px', background:'#0c1929', border:'1px solid rgba(60,110,200,.25)', borderRadius:8, color:'#e4ecf9', fontSize:14, outline:'none', cursor:'pointer' }}>
          <option value="">همه دسته‌ها</option>
          {SERVICES.map(s=><option key={s.id} value={s.id}>{s.title}</option>)}
        </select>
      </div>

      {showForm && (
        <div style={{ background:'#0c1929', border:'1px solid rgba(60,110,200,.2)', borderRadius:16, padding:24, marginBottom:24 }}>
          <form onSubmit={save}>
            <input required placeholder="عنوان پروژه" value={form.title} onChange={e=>setForm(p=>({...p,title:e.target.value}))} style={inp}/>
            <select value={form.category} onChange={e=>setForm(p=>({...p,category:e.target.value}))} style={inp}>
              {SERVICES.map(s=><option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
            <textarea placeholder="توضیحات پروژه..." value={form.description} onChange={e=>setForm(p=>({...p,description:e.target.value}))} rows={3} style={{...inp,resize:'vertical'}}/>
            <button type="submit" style={{ padding:'10px 22px', background:'#1e7bff', color:'#fff', borderRadius:8, fontWeight:700, border:'none', cursor:'pointer' }}>ذخیره</button>
          </form>
        </div>
      )}

      {loading && <div style={{ textAlign:'center', padding:40, color:'#4d6585' }}>در حال بارگذاری...</div>}

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
        {items.map(it => (
          <div key={it._id} style={{ background:'#0c1929', border:'1px solid rgba(60,110,200,.2)', borderRadius:14, overflow:'hidden' }}>
            <div style={{ height:120, background:'linear-gradient(135deg,#1e7bff,#062a63)', display:'grid', placeItems:'center', fontSize:13, color:'rgba(255,255,255,.3)', letterSpacing:2 }}>WIZEL</div>
            <div style={{ padding:'14px 16px' }}>
              <div style={{ fontSize:15, fontWeight:700, color:'#e4ecf9' }}>{it.title}</div>
              <div style={{ fontSize:12, color:'#5aa5ff', marginTop:4 }}>{SERVICES.find(s=>s.id===it.category)?.title || it.category}</div>
              {it.description && <div style={{ fontSize:12, color:'#4d6585', marginTop:4 }}>{it.description}</div>}
              <button onClick={()=>del(it._id)} style={{ marginTop:10, padding:'6px 14px', background:'rgba(255,80,80,.1)', border:'1px solid rgba(255,80,80,.3)', color:'#ff6b6b', borderRadius:6, cursor:'pointer', fontSize:12 }}>حذف</button>
            </div>
          </div>
        ))}
        {!loading && !items.length && <div style={{ gridColumn:'1/-1', textAlign:'center', color:'#4d6585', padding:40 }}>هنوز نمونه کاری اضافه نشده.</div>}
      </div>
    </AdminLayout>
  );
}