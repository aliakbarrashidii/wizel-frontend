import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { CALCULATORS } from '../data/calculator';
import PageHero from '../components/PageHero';
import CTASection from '../sections/CTASection';
import { Icon } from '../Icons';

const ALL_FEATURES = [
  'طراحی رابط کاربری (UI/UX)',
  'طراحی بنرهای گرافیکی',
  'ساخت آیکون‌های منحصربه‌فرد',
  'ارائه مستند طراحی',
  'بررسی امکانات ضروری',
  'شناسایی فرصت‌های تمایز نسبت به رقبا',
  'پیاده‌سازی سایت مدرن، امن و بهینه',
  'طراحی واکنشگرا برای تمامی دستگاه‌ها',
  'پشتیبانی فنی پس از تحویل',
  'آموزش مدیریت وب‌سایت',
  'طراحی سئو محور اولیه',
  'اخذ مجوزهای قانونی (اینماد)',
  'طراحی لوگوموشن برای برند',
  'تخفیف سئو ماه اول',
];

const PKG_FEATURES = {
  0: [false, false, false, false, true, false, true, true, '۱ هفته‌ای', true, false, false, true, '۱۰٪'],
  1: [true, true, true, true, true, true, true, true, '۲ هفته‌ای', true, true, false, true, '۱۵٪'],
  2: [true, true, true, true, true, true, true, true, '۱ ماهه', true, true, true, true, '۲۰٪'],
};

const DELIVERY = ['۲۶ روز کاری', '۲۶ روز کاری', '۲۶ روز کاری'];

const PKG_VISUALS = [
  { bg: 'linear-gradient(145deg,#1e7bff22,transparent)', border: '#1e7bff33' },
  { bg: 'linear-gradient(145deg,rgba(30,123,255,.15),rgba(30,123,255,.05))', border: '#1e7bff55' },
  { bg: 'linear-gradient(145deg,rgba(30,123,255,.25),rgba(30,123,255,.1))', border: '#1e7bff77' },
];

export default function PackageDetail() {
  const { id } = useParams();
  const s = SERVICES.find(x => x.id === id) || SERVICES[0];
  const hasCalc = !!CALCULATORS[s.id];

  return (
    <>
      <PageHero eyebrow="تعرفه" title={`تعرفه ${s.title}`} subtitle={`پکیج مناسب خود را انتخاب کنید و پروژه‌تان را شروع کنید.`} breadcrumb={[{ label: 'تعرفه‌ها', to: '/packages' }, { label: s.title }]} />
      <section className="section">
        <div className="container">
          {hasCalc && (
            <div style={{ background: 'var(--bg-1)', border: '1px solid rgba(30,123,255,.3)', borderRadius: 14, padding: '16px 22px', marginBottom: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
              <div>
                <div style={{ fontWeight: 700 }}>می‌خواید قیمت دقیق محاسبه کنید؟</div>
                <div style={{ fontSize: 13.5, color: 'var(--ink-2)', marginTop: 4 }}>با ماشین حساب ویزل، قیمت دقیق بر اساس نیاز شما حساب کنید.</div>
              </div>
              <Link to={`/calculator/${s.id}`} className="btn btn-primary">💰 ماشین حساب قیمت</Link>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }} className="pkg-cards">
            {s.packages.map((p, i) => (
              <div key={p.name} style={{ borderRadius: 20, border: `1px solid ${p.popular ? 'var(--brand)' : 'var(--line-strong)'}`, background: PKG_VISUALS[i].bg, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {p.popular && <div style={{ background: 'var(--brand)', color: '#fff', fontSize: 12, fontWeight: 700, padding: '5px', textAlign: 'center' }}>محبوب‌ترین</div>}

                {/* Visual */}
                <div style={{ padding: '28px 22px 16px', textAlign: 'center' }}>
                  <div style={{ width: 100, height: 100, borderRadius: '50%', background: s.gradient, display: 'inline-grid', placeItems: 'center', marginBottom: 16, boxShadow: `0 8px 24px ${s.color}44` }}>
                    <Icon.Award size={44} style={{ color: '#fff' }} />
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--ink-2)', marginBottom: 6 }}>شرکتی</div>
                  <h3 style={{ fontSize: 22 }}>{p.name}</h3>
                  <div style={{ marginTop: 14, padding: '12px 16px', background: 'var(--bg-2)', borderRadius: 10 }}>
                    <div style={{ fontSize: 12, color: 'var(--ink-2)' }}>از</div>
                    <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--brand)' }} className="ltr">{p.price}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-2)' }}>تومان</div>
                  </div>
                </div>

                {/* Features */}
                <div style={{ padding: '0 18px 24px', flexGrow: 1 }}>
                  <ul style={{ display: 'grid', gap: 10 }}>
                    {ALL_FEATURES.map((f, fi) => {
                      const val = PKG_FEATURES[i]?.[fi];
                      const active = val !== false && val !== undefined;
                      return (
                        <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13.5, color: active ? 'var(--ink-0)' : 'var(--ink-2)' }}>
                          <span style={{ width: 18, height: 18, borderRadius: '50%', background: active ? 'rgba(30,155,107,.15)' : 'rgba(255,80,80,.08)', border: `1px solid ${active ? 'rgba(30,155,107,.4)' : 'rgba(255,80,80,.3)'}`, display: 'grid', placeItems: 'center', flexShrink: 0, fontSize: 10 }}>
                            {active ? <span style={{ color: '#1e9b6b' }}>✓</span> : <span style={{ color: '#ff6b6b' }}>✗</span>}
                          </span>
                          <span style={{ opacity: active ? 1 : 0.5 }}>{f}</span>
                          {active && typeof val === 'string' && <span style={{ fontSize: 11, color: '#1e9b6b', fontWeight: 700, marginRight: 'auto' }}>{val}</span>}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* CTA */}
                <div style={{ padding: '0 18px 20px' }}>
                  <Link to="/contact" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%', background: s.gradient }}>سفارش این پکیج</Link>
                  <div style={{ textAlign: 'center', marginTop: 10, fontSize: 12, color: 'var(--ink-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                    <Icon.Clock size={12} /> تحویل {DELIVERY[i]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/packages" className="btn btn-ghost">← بازگشت به همه تعرفه‌ها</Link>
          </div>
        </div>
      </section>
      <CTASection simple />
      <style>{`@media(max-width:860px){.pkg-cards{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}