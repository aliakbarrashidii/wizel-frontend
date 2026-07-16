import { useState } from 'react';
import PageHero from '../components/PageHero';
import { Icon } from '../Icons';
import { api } from '../utils/api';

export default function Contact() {
  const [form, setForm] = useState({ name:'', business:'', phone:'', subject:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [n1] = useState(() => Math.floor(Math.random() * 15) + 1);
  const [n2] = useState(() => Math.floor(Math.random() * 15) + 1);
  const [captcha, setCaptcha] = useState('');
  const captchaOk = parseInt(captcha) === n1 + n2;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!captchaOk) { setError('کد امنیتی اشتباه است'); return; }
    setLoading(true); setError('');
    try {
      await api.sendContact(form);
      setSent(true);
    } catch (err) {
      setError(err.message || 'خطا در ارسال. دوباره تلاش کنید.');
    }
    setLoading(false);
  }

  const INP = { background:'var(--bg-0)', border:'1px solid var(--line-strong)', borderRadius:10, padding:'14px 16px', color:'var(--ink-0)', fontSize:14.5, outline:'none', width:'100%', transition:'border-color .2s' };
  const focus = e => e.target.style.borderColor = 'var(--brand)';
  const blur = e => e.target.style.borderColor = 'var(--line-strong)';

  return (
    <>
      <PageHero eyebrow="تماس با ما" title="درخواست مشاوره رایگان" subtitle="اطلاعات خود را وارد کنید، کارشناسان ما در اولین فرصت تماس خواهند گرفت." breadcrumb={[{ label: 'تماس' }]} />
      <section className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:48, alignItems:'start' }} className="ct-grid">
            {/* LEFT */}
            <div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:22 }}>
                {[
                  { I:Icon.Phone, label:'تماس تلفنی', val:'+98 21 0000 0000', sub:'همه روزه ۸ صبح تا ۱۲ شب', href:'tel:+982100000000' },
                  { I:Icon.Mail,  label:'ایمیل',       val:'info@wizel.ir',    sub:'پاسخ در کمتر از ۲۴ ساعت', href:'mailto:info@wizel.ir' },
                ].map(c => (
                  <a key={c.label} href={c.href} style={{ background:'var(--bg-1)', border:'1px solid var(--line)', borderRadius:14, padding:'18px 16px', display:'flex', gap:14, alignItems:'flex-start', transition:'border-color .25s', textDecoration:'none' }}
                    onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(30,123,255,.4)'}
                    onMouseLeave={e=>e.currentTarget.style.borderColor='var(--line)'}>
                    <span style={{ width:40,height:40,borderRadius:11,background:'rgba(30,123,255,.12)',border:'1px solid rgba(30,123,255,.2)',display:'grid',placeItems:'center',color:'var(--brand)',flexShrink:0 }}><c.I size={17}/></span>
                    <div>
                      <div style={{ fontSize:13,color:'var(--ink-2)',marginBottom:4 }}>{c.label}</div>
                      <div style={{ fontSize:14,fontWeight:700 }} className="ltr">{c.val}</div>
                      <div style={{ fontSize:12,color:'var(--ink-2)',marginTop:2 }}>{c.sub}</div>
                    </div>
                  </a>
                ))}
              </div>
              {/* Map */}
              <div style={{ height:260, borderRadius:16, overflow:'hidden', border:'1px solid var(--line)', position:'relative' }}>
                <iframe src="https://www.google.com/maps?q=تهران&output=embed" width="100%" height="100%" style={{ border:0, filter:'invert(90%) hue-rotate(180deg)' }} loading="lazy" allowFullScreen title="map"/>
                <div style={{ position:'absolute',bottom:0,left:0,right:0,background:'rgba(7,16,30,.85)',padding:'12px 16px',display:'flex',alignItems:'center',gap:10 }}>
                  <Icon.Pin size={16} style={{ color:'var(--brand)',flexShrink:0 }}/>
                  <span style={{ fontSize:13 }}>تهران — آدرس دفتر ویزل</span>
                </div>
              </div>
              {/* Social */}
              <div style={{ marginTop:22, background:'var(--bg-1)', border:'1px solid var(--line)', borderRadius:14, padding:'18px 20px' }}>
                <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
                  <div>
                    <div style={{ fontSize:13,color:'var(--ink-2)',marginBottom:12 }}>شبکه‌های اجتماعی</div>
                    <div style={{ display:'flex', gap:10 }}>
                      {[{I:Icon.Instagram,l:'اینستاگرام',h:'#'},{I:Icon.Linkedin,l:'لینکدین',h:'#'},{I:Icon.Youtube,l:'یوتیوب',h:'#'}].map(s=>(
                        <a key={s.l} href={s.h} aria-label={s.l} style={{ width:38,height:38,borderRadius:'50%',background:'var(--bg-2)',border:'1px solid var(--line-strong)',display:'grid',placeItems:'center',color:'var(--ink-1)',transition:'all .2s' }}
                          onMouseEnter={e=>{e.currentTarget.style.background='var(--brand)';e.currentTarget.style.color='#fff';}}
                          onMouseLeave={e=>{e.currentTarget.style.background='var(--bg-2)';e.currentTarget.style.color='var(--ink-1)';}}><s.I size={16}/></a>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize:13,color:'var(--ink-2)',marginBottom:12 }}>مسیریابی</div>
                    <div style={{ display:'flex', gap:10 }}>
                      {['گوگل مپ','نشان'].map(m=>(
                        <a key={m} href="#" style={{ padding:'6px 14px',borderRadius:8,background:'var(--bg-2)',border:'1px solid var(--line-strong)',fontSize:12,color:'var(--ink-1)',textDecoration:'none' }}>{m}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div style={{ background:'var(--bg-1)', border:'1px solid var(--line-strong)', borderRadius:20, padding:'36px 30px' }}>
              {sent ? (
                <div style={{ textAlign:'center', padding:'40px 0' }}>
                  <div style={{ fontSize:48 }}>✅</div>
                  <h3 style={{ marginTop:16 }}>پیام شما دریافت شد!</h3>
                  <p style={{ marginTop:8 }}>تیم ویزل به‌زودی با شما تماس می‌گیرد.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display:'grid', gap:14 }}>
                  <input required placeholder="نام و نام خانوادگی" value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} style={INP} onFocus={focus} onBlur={blur}/>
                  <input placeholder="نام کسب‌وکار" value={form.business} onChange={e=>setForm(p=>({...p,business:e.target.value}))} style={INP} onFocus={focus} onBlur={blur}/>
                  <input required type="tel" placeholder="شماره تماس" value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))} style={{...INP,direction:'ltr'}} onFocus={focus} onBlur={blur}/>
                  <select value={form.subject} onChange={e=>setForm(p=>({...p,subject:e.target.value}))} style={{...INP,cursor:'pointer'}}>
                    <option value="">موضوع همکاری</option>
                    {['طراحی وب‌سایت','اپلیکیشن موبایل','گرافیک و برندینگ','سئو','تبلیغات','دیجیتال مارکتینگ','مشاوره رایگان'].map(o=><option key={o}>{o}</option>)}
                  </select>
                  {/* Math Captcha */}
                  <div style={{ background:'var(--bg-0)', border:'1px solid var(--line-strong)', borderRadius:10, padding:'12px 16px', display:'flex', alignItems:'center', gap:12 }}>
                    <span style={{ fontSize:13,color:'var(--ink-2)',whiteSpace:'nowrap' }}>تأیید کد امنیتی</span>
                    <span style={{ background:'var(--bg-2)',border:'1px solid var(--line-strong)',borderRadius:8,padding:'5px 14px',fontSize:15,fontWeight:700 }} className="ltr">{n1} + {n2} = ?</span>
                    <input type="number" placeholder="پاسخ" value={captcha} onChange={e=>setCaptcha(e.target.value)} style={{ flex:1,background:'transparent',border:'none',outline:'none',color:captchaOk?'#1e9b6b':'var(--ink-0)',fontSize:15,fontWeight:600 }} className="ltr"/>
                  </div>
                  {error && <div style={{ padding:'10px 14px',background:'rgba(255,80,80,.1)',border:'1px solid rgba(255,80,80,.3)',borderRadius:8,fontSize:13.5,color:'#ff6b6b' }}>{error}</div>}
                  <button type="submit" disabled={loading} className="btn btn-primary" style={{ justifyContent:'center', opacity:loading?0.7:1 }}>
                    {loading ? 'در حال ارسال...' : '✉ ارسال درخواست'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:820px){.ct-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  );
}