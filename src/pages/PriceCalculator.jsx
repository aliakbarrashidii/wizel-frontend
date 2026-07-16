import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CALCULATORS, calcTotal, formatPrice } from '../data/calculator';
import PageHero from '../components/PageHero';
import { Icon } from '../Icons';

function ToggleOption({ opt, value, onChange }) {
  const isActive = !!value;
  return (
    <div style={{ background: 'var(--bg-1)', border: `1px solid ${isActive ? 'rgba(30,123,255,.4)' : 'var(--line)'}`, borderRadius: 14, padding: '18px 20px', transition: 'border-color .25s' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15.5, fontWeight: 600 }}>{opt.label}</div>
          <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>{opt.hint}</div>
        </div>
        <span style={{ fontSize: 12, fontWeight: 700, color: opt.price === 0 ? '#1e9b6b' : 'var(--brand)', background: opt.price === 0 ? 'rgba(30,155,107,.12)' : 'rgba(30,123,255,.12)', padding: '3px 10px', borderRadius: 999, flexShrink: 0 }}>
          {opt.freeLabel || (opt.price ? `+${formatPrice(opt.price)}` : 'رایگان')}
        </span>
      </div>
      <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div onClick={() => onChange(!isActive)} style={{ width: 48, height: 26, borderRadius: 13, background: isActive ? 'var(--brand)' : 'var(--bg-3)', cursor: 'pointer', position: 'relative', transition: 'background .25s', border: `1px solid ${isActive ? 'var(--brand)' : 'var(--line-strong)'}` }}>
          <div style={{ position: 'absolute', width: 20, height: 20, borderRadius: '50%', background: '#fff', top: 2, left: isActive ? 24 : 2, transition: 'left .25s', boxShadow: '0 1px 4px rgba(0,0,0,.3)' }} />
        </div>
        <span style={{ fontSize: 13, color: isActive ? 'var(--brand)' : 'var(--ink-2)', fontWeight: 600 }}>
          {isActive ? '✓ فعال' : '✗ غیرفعال'}
        </span>
      </div>
    </div>
  );
}

function SelectOption({ opt, value, onChange }) {
  return (
    <div style={{ background: 'var(--bg-1)', border: `1px solid ${value !== null && value !== undefined ? 'rgba(30,123,255,.4)' : 'var(--line)'}`, borderRadius: 14, padding: '18px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 15.5, fontWeight: 600 }}>{opt.label}</div>
          <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>{opt.hint}</div>
        </div>
        <span style={{ fontSize: 11, color: opt.required ? '#ff8c42' : 'var(--ink-2)', fontWeight: 600 }}>{opt.required ? 'انتخاب' : 'اختیاری'}</span>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        {opt.choices.map((c, i) => (
          <div key={i} onClick={() => onChange(i)} style={{ padding: '12px 16px', borderRadius: 10, border: `1px solid ${value === i ? 'var(--brand)' : 'var(--line-strong)'}`, background: value === i ? 'rgba(30,123,255,.1)' : 'var(--bg-2)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all .2s' }}>
            <span style={{ fontSize: 14, color: value === i ? 'var(--brand)' : 'var(--ink-0)' }}>{c.label}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: c.price === 0 ? '#1e9b6b' : (c.price > 0 ? 'var(--brand)' : '#1e9b6b') }}>
              {c.price === 0 ? 'پایه' : c.price > 0 ? `+${formatPrice(c.price)}` : formatPrice(c.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RangeOption({ opt, value, onChange }) {
  const hasValue = value > 0;
  return (
    <div style={{ background: 'var(--bg-1)', border: `1px solid ${hasValue ? 'rgba(30,123,255,.4)' : 'var(--line)'}`, borderRadius: 14, padding: '18px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 15.5, fontWeight: 600 }}>{opt.label}</div>
          <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>{opt.hint}</div>
        </div>
        {opt.pricePerUnit && <span style={{ fontSize: 12, color: 'var(--brand)', fontWeight: 600 }}>هر واحد: {formatPrice(opt.pricePerUnit)}</span>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--ink-2)', marginBottom: 8 }}>
        <span>حداقل: {opt.min}</span>
        <span style={{ color: 'var(--brand)', fontWeight: 700, fontSize: 16 }}>{value}</span>
        <span>حداکثر: {opt.max}</span>
      </div>
      <input type="range" min={opt.min} max={opt.max} value={value} onChange={e => onChange(parseInt(e.target.value))}
        style={{ width: '100%', accentColor: 'var(--brand)' }} />
      {hasValue && opt.pricePerUnit && (
        <div style={{ marginTop: 12, padding: '8px 14px', background: 'rgba(30,123,255,.08)', borderRadius: 8, textAlign: 'center', fontSize: 13, color: 'var(--brand)', fontWeight: 700 }}>
          تأثیر قیمتی: +{formatPrice(value * opt.pricePerUnit)} تومان
        </div>
      )}
      {!hasValue && (
        <div style={{ marginTop: 12, padding: '8px 14px', background: 'rgba(30,155,107,.08)', borderRadius: 8, textAlign: 'center', fontSize: 13, color: '#1e9b6b', fontWeight: 700 }}>رایگان</div>
      )}
    </div>
  );
}

export default function PriceCalculator() {
  const { id } = useParams();
  const calc = CALCULATORS[id] || CALCULATORS['web-design'];
  const serviceId = CALCULATORS[id] ? id : 'web-design';

  const initSelections = () => {
    const s = {};
    for (const opt of calc.options) {
      if (opt.type === 'toggle') s[opt.id] = opt.defaultVal ?? false;
      else if (opt.type === 'range') s[opt.id] = opt.defaultVal ?? opt.min;
      else s[opt.id] = null;
    }
    return s;
  };

  const [selections, setSelections] = useState(initSelections);
  const total = calcTotal(serviceId, selections);

  function setVal(id, val) { setSelections(p => ({ ...p, [id]: val })); }

  const freeItems = calc.options.filter(o =>
    (o.type === 'toggle' && o.freeLabel && selections[o.id]) ||
    (o.type === 'toggle' && o.freeLabel)
  ).filter(o => o.freeLabel);

  return (
    <>
      <PageHero
        eyebrow="محاسبه قیمت"
        title={calc.title}
        subtitle="گزینه‌های مورد نیاز خود را انتخاب کنید تا قیمت تخمینی محاسبه شود."
        breadcrumb={[{ label: 'تعرفه‌ها', to: '/packages' }, { label: 'محاسبه قیمت' }]}
      />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 28, alignItems: 'start' }} className="calc-layout">

            {/* LEFT: Summary */}
            <div style={{ position: 'sticky', top: 100 }}>
              <div style={{ background: 'var(--bg-1)', border: '1px solid var(--line-strong)', borderRadius: 20, overflow: 'hidden' }}>
                <div style={{ background: 'linear-gradient(135deg,var(--brand-deep),var(--brand))', padding: '20px 22px' }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>خلاصه قیمت</div>
                </div>
                <div style={{ padding: '20px 18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>قیمت پایه</span>
                    <span style={{ fontSize: 13, color: 'var(--ink-1)' }}>{calc.basePriceLabel}</span>
                  </div>
                  {freeItems.map(item => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, padding: '6px 10px', background: 'rgba(30,155,107,.08)', borderRadius: 8 }}>
                      <span style={{ fontSize: 12.5, color: 'var(--ink-1)' }}>{item.label}</span>
                      <span style={{ fontSize: 12.5, color: '#1e9b6b', fontWeight: 700 }}>رایگان</span>
                    </div>
                  ))}
                  <div style={{ borderTop: '2px dashed var(--brand)', margin: '18px 0', paddingTop: 18 }}>
                    <div style={{ textAlign: 'center', fontSize: 32, fontWeight: 800, color: 'var(--brand)', fontFamily: "'Space Grotesk'" }} className="ltr">
                      {formatPrice(total)}
                    </div>
                    <div style={{ textAlign: 'center', fontSize: 14, color: 'var(--ink-2)', marginTop: 4 }}>تومان</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%', marginTop: 8 }}>
                    سفارش این پکیج
                  </Link>
                  <div style={{ textAlign: 'center', marginTop: 10, fontSize: 12, color: 'var(--ink-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                    <Icon.Clock size={12} /> تحویل ۲۶ روز کاری
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Options */}
            <div style={{ display: 'grid', gap: 16 }}>
              {calc.options.map(opt => (
                <div key={opt.id}>
                  {opt.type === 'toggle' && <ToggleOption opt={opt} value={selections[opt.id]} onChange={v => setVal(opt.id, v)} />}
                  {opt.type === 'select' && <SelectOption opt={opt} value={selections[opt.id]} onChange={v => setVal(opt.id, v)} />}
                  {opt.type === 'range' && <RangeOption opt={opt} value={selections[opt.id]} onChange={v => setVal(opt.id, v)} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:860px){.calc-layout{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}