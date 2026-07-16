const STEPS = [
  { n:'01', title:'کشف و تحلیل',    desc:'شناخت کسب‌وکار، بازار هدف و رقبا برای تعیین مسیر درست.' },
  { n:'02', title:'استراتژی',       desc:'تدوین نقشه راه دیجیتال متناسب با بودجه و اهداف شما.' },
  { n:'03', title:'طراحی و اجرا',   desc:'ساخت سایت، اپلیکیشن یا کمپین با تمرکز روی کیفیت.' },
  { n:'04', title:'رشد مستمر',      desc:'پایش، تحلیل داده و بهبود نتایج پس از انتشار.' },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section" style={{ background:'var(--bg-1)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
      <div className="container">
        <div className="fade-up" style={{ maxWidth:620, marginBottom:60 }}>
          <span className="eyebrow"><span className="dot"/>روند همکاری</span>
          <h2 style={{ fontSize:'clamp(26px,4vw,40px)', marginTop:18 }}>مسیری شفاف، از ایده تا نتیجه</h2>
        </div>
        <div className="proc-grid">
          {STEPS.map((s,i)=>(
            <div key={s.n} className="fade-up" style={{ animationDelay:`${i*.08}s` }}>
              <div className="ltr proc-num">{s.n}</div>
              <div style={{ width:1, height:24, background:'var(--line)', margin:'14px auto' }}/>
              <h3 style={{ fontSize:18 }}>{s.title}</h3>
              <p style={{ marginTop:8, fontSize:14.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .proc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;position:relative;}
        .proc-grid::before{content:'';position:absolute;top:28px;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--line-strong),transparent);}
        .proc-num{
          width:56px;height:56px;border-radius:14px;display:grid;place-items:center;
          background:var(--bg-2);border:1px solid var(--line-strong);
          color:var(--brand);font-weight:800;font-size:16px;position:relative;z-index:1;
          font-family:"'Space Grotesk',sans-serif";
        }
        @media(max-width:860px){.proc-grid{grid-template-columns:1fr 1fr;row-gap:38px;}.proc-grid::before{display:none;}}
        @media(max-width:540px){.proc-grid{grid-template-columns:1fr;}}
      `}</style>
    </section>
  );
}
