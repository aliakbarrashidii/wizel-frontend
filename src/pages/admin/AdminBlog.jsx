import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { api } from '../../utils/api';

export default function AdminBlog() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title:'', content:'', tag:'', published:true });
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const load = () => { setLoading(true); api.getBlogs().then(d=>setPosts(d)).catch(()=>{}).finally(()=>setLoading(false)); };
  useEffect(load, []);

  async function save(e) {
    e.preventDefault();
    if (editing) await api.updateBlog(editing, form);
    else await api.createBlog(form);
    setForm({ title:'', content:'', tag:'', published:true });
    setEditing(null); setShowForm(false); load();
  }
  async function del(id) {
    if (!confirm('حذف شود؟')) return;
    await api.deleteBlog(id); load();
  }
  function edit(p) { setForm({ title:p.title, content:p.content, tag:p.tag||'', published:p.published }); setEditing(p._id); setShowForm(true); }

  const inp = { width:'100%', padding:'11px 14px', background:'#07101e', border:'1px solid rgba(60,110,200,.25)', borderRadius:8, color:'#e4ecf9', fontSize:14, outline:'none', marginBottom:10 };

  return (
    <AdminLayout title="مدیریت بلاگ">
      <button onClick={()=>{setShowForm(!showForm);setEditing(null);setForm({title:'',content:'',tag:'',published:true});}} style={{ padding:'11px 22px', background:'linear-gradient(135deg,#1e7bff,#062a63)', color:'#fff', borderRadius:10, fontWeight:700, cursor:'pointer', border:'none', marginBottom:20 }}>
        {showForm ? 'بستن فرم' : '+ پست جدید'}
      </button>

      {showForm && (
        <div style={{ background:'#0c1929', border:'1px solid rgba(60,110,200,.2)', borderRadius:16, padding:24, marginBottom:24 }}>
          <form onSubmit={save}>
            <input required placeholder="عنوان پست" value={form.title} onChange={e=>setForm(p=>({...p,title:e.target.value}))} style={inp}/>
            <input placeholder="دسته‌بندی (مثال: سئو، طراحی)" value={form.tag} onChange={e=>setForm(p=>({...p,tag:e.target.value}))} style={inp}/>
            <textarea required placeholder="محتوای پست..." value={form.content} onChange={e=>setForm(p=>({...p,content:e.target.value}))} rows={8} style={{...inp,resize:'vertical'}}/>
            <div style={{ display:'flex', gap:12, alignItems:'center' }}>
              <label style={{ display:'flex', gap:8, alignItems:'center', color:'#8ba3c7', fontSize:14, cursor:'pointer' }}>
                <input type="checkbox" checked={form.published} onChange={e=>setForm(p=>({...p,published:e.target.checked}))}/> منتشر شود
              </label>
              <button type="submit" style={{ padding:'10px 22px', background:'#1e7bff', color:'#fff', borderRadius:8, fontWeight:700, border:'none', cursor:'pointer' }}>
                {editing ? 'ذخیره تغییرات' : 'انتشار پست'}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading && <div style={{ textAlign:'center', padding:40, color:'#4d6585' }}>در حال بارگذاری...</div>}

      <div style={{ display:'grid', gap:14 }}>
        {posts.map(p => (
          <div key={p._id} style={{ background:'#0c1929', border:'1px solid rgba(60,110,200,.2)', borderRadius:14, padding:'18px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', gap:16 }}>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:16, fontWeight:700, color:'#e4ecf9' }}>{p.title}</div>
              <div style={{ fontSize:12, color:'#4d6585', marginTop:4 }}>
                {p.tag && <span style={{ background:'rgba(30,123,255,.15)', color:'#5aa5ff', padding:'2px 10px', borderRadius:999, marginLeft:8 }}>{p.tag}</span>}
                {p.published ? '✅ منتشر شده' : '📋 پیش‌نویس'}
              </div>
            </div>
            <div style={{ display:'flex', gap:10 }}>
              <button onClick={()=>edit(p)} style={{ padding:'7px 16px', background:'rgba(30,123,255,.15)', border:'1px solid rgba(30,123,255,.3)', color:'#5aa5ff', borderRadius:8, cursor:'pointer', fontSize:13 }}>ویرایش</button>
              <button onClick={()=>del(p._id)} style={{ padding:'7px 16px', background:'rgba(255,80,80,.1)', border:'1px solid rgba(255,80,80,.3)', color:'#ff6b6b', borderRadius:8, cursor:'pointer', fontSize:13 }}>حذف</button>
            </div>
          </div>
        ))}
        {!loading && !posts.length && <div style={{ textAlign:'center', color:'#4d6585', padding:40 }}>هنوز پستی وجود ندارد. اولین پست را بنویسید!</div>}
      </div>
    </AdminLayout>
  );
}