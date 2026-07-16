import { useState } from 'react';
import { Link } from 'react-router-dom';
import NetworkCanvas from '../components/NetworkCanvas';
import { api } from '../utils/api';

export default function CTASection({ simple = false }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const inp = {
    background: 'var(--bg-0)', border: '1px solid var(--line-strong)',
    borderRadius: 10, padding: '13px 15px', color: 'var(--ink-0)',
    fontSize: 14.5, outline: 'none', width: '100%',
  };

  if (simple) return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="eyebrow" style={{ margin: '0 auto' }}><span className="dot" />آماده شروع هستید؟</span>
        <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', marginTop: 18 }}>بیایید یک پروژه موفق با هم بسازیم</h2>
        <p style={{ marginTop: 14, maxWidth: 480, margin: '14px auto 0' }}>تیم ویزل ظرف ۲۴ ساعت پاسخ می‌دهد.</p>
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: 32 }}>درخواست مشاوره رایگان</Link>
      </div>
    </section>
  );

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true); setError('');
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    try {
      await api.sendContact(data);
      setSent(true);
    } catch (err) {
      setError(err.message || 'خطا در ارسال. دوباره تلاش کنید.');
    }
    setLoading(false);
  }

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: .25 }}><NetworkCanvas density={95} /></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="fade-up cta-card">
          <div>
            <span className="eyebrow"><span className="dot" />شروع همکاری</span>
            <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', marginTop: 18 }}>آماده‌اید برند خود را دیجیتال کنید؟</h2>
            <p style={{ marginTop: 14, fontSize: 15.5 }}>فرم را پر کنید تا ظرف ۲۴ ساعت تماس بگیریم — مشاوره رایگان است.</p>
            <div style={{ marginTop: 24, display: 'grid', gap: 10, fontSize: 14.5 }}>
              <div className="ltr" style={{ color: 'var(--ink-1)' }}>info@wizel.ir</div>
              <div className="ltr" style={{ color: 'var(--ink-1)' }}>+98 21 0000 0000</div>
            </div>
          </div>
          {sent
            ? <div style={{ background: 'var(--bg-0)', border: '1px solid var(--line)', borderRadius: 14, padding: 36, textAlign: 'center' }}>
                <div style={{ fontSize: 40 }}>✅</div>
                <h3 style={{ marginTop: 14 }}>پیام شما دریافت شد!</h3>
                <p style={{ marginTop: 8 }}>تیم ویزل به‌زودی با شما تماس می‌گیرد.</p>
              </div>
            : <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
                <input required name="name" placeholder="نام شما" style={inp} />
                <input required name="phone" type="tel" placeholder="شماره تماس" style={{ ...inp, direction: 'ltr' }} />
                <textarea name="message" placeholder="درباره پروژه بگویید..." rows={3} style={{ ...inp, resize: 'vertical' }} />
                {error && <div style={{ padding: '10px 14px', background: 'rgba(255,80,80,.1)', border: '1px solid rgba(255,80,80,.3)', borderRadius: 8, fontSize: 13.5, color: '#ff6b6b' }}>{error}</div>}
                <button type="submit" disabled={loading} className="btn btn-primary" style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'در حال ارسال...' : '✉ ارسال درخواست'}
                </button>
              </form>
          }
        </div>
      </div>
      <style>{`.cta-card{background:linear-gradient(160deg,var(--bg-2),var(--bg-1));border:1px solid var(--line-strong);border-radius:24px;padding:clamp(28px,5vw,60px);display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:start;}@media(max-width:820px){.cta-card{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}