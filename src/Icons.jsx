const i = (d,vb='0 0 24 24',extra={}) => (p) => (
  <svg viewBox={vb} width={p.size||20} height={p.size||20} fill="none"
    stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" {...extra} {...p}>
    {d}
  </svg>
);

export const Icon = {
  Home:        i(<><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H9.5v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5H17a1 1 0 0 0 1-1v-9"/></>),
  Grid:        i(<><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></>),
  Tag:         i(<><path d="m20.5 12.5-8 8a1.5 1.5 0 0 1-2.1 0l-7-7a1.5 1.5 0 0 1 0-2.1l8-8H18a2.5 2.5 0 0 1 2.5 2.5Z"/><circle cx="15.5" cy="8.5" r="1.4"/></>),
  Briefcase:   i(<><rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5"/><path d="M3 12.5h18"/></>),
  Users:       i(<><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M21.5 20c-.2-2.5-1.8-4.5-4-5.3"/></>),
  Message:     i(<><path d="M21 11.5a8 8 0 0 1-8.4 8 8.6 8.6 0 0 1-3-.55L4 20l1.1-4a8 8 0 1 1 15.9-4.5Z"/></>),
  Phone:       i(<><path d="M5 4.5h3.2l1.5 4.3-2 1.6a12.5 12.5 0 0 0 5.9 5.9l1.6-2 4.3 1.5V19a2 2 0 0 1-2.1 2c-7-.4-12.6-6-13-13A2 2 0 0 1 5 4.5Z"/></>),
  Menu:        i(<><path d="M4 6.5h16M4 12h16M4 17.5h16"/></>),
  X:           i(<><path d="M5 5l14 14M19 5 5 19"/></>),
  ArrowLeft:   i(<><path d="M19 12H5M11 6l-6 6 6 6"/></>),
  ArrowRight:  i(<><path d="M5 12h14M13 6l6 6-6 6"/></>),
  Mail:        i(<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 6.5 8 6.5 8-6.5"/></>),
  Pin:         i(<><path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></>),
  Star:        i(<><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></>),
  Check:       i(<><path d="M20 6 9 17l-5-5"/></>),
  Code:        i(<><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></>),
  Smartphone:  i(<><rect x="5" y="2" width="14" height="20" rx="3"/><path d="M12 17.5v.5"/></>),
  Globe:       i(<><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a13.5 13.5 0 0 1 0 18M12 3a13.5 13.5 0 0 0 0 18"/></>),
  Zap:         i(<><path d="M13 2 4.5 13.5H12L11 22l8.5-11.5H12L13 2z"/></>),
  BarChart:    i(<><path d="M12 20V10M18 20V4M6 20v-4"/></>),
  Award:       i(<><circle cx="12" cy="9" r="6.5"/><path d="m8.5 15.5-1.5 6 5-2.5 5 2.5-1.5-6"/></>),
  Clock:       i(<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></>),
  ChevronDown: i(<><path d="m6 9 6 6 6-6"/></>),
  ExternalLink:i(<><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="m10 14 11-11"/></>),
  Palette:     i(<><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.48 2 2 6.48 2 12c0 3.87 3.17 7 7.08 7C10.14 19 11 18.09 11 17c0-.52-.2-1.02-.55-1.38A1.98 1.98 0 0 1 10 14.14c0-1.1.9-2 2-2h2.46C17.58 12.14 22 8.72 22 5c0-1.66-4.48-3-10-3Z"/></>),
  Instagram:   i(<><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" stroke="none"/></>,undefined,{}),
  Linkedin:    (p)=>(<svg viewBox="0 0 24 24" width={p.size||20} height={p.size||20} fill="currentColor" {...p}><path d="M6.94 8.5H3.56V20.4h3.38V8.5ZM5.25 3.6a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.45 13.9c0-3.4-1.8-5-4.2-5a3.6 3.6 0 0 0-3.27 1.8V8.5H9.6c.05 1 0 11.9 0 11.9h3.38v-6.65c0-.36.03-.72.13-.97.3-.72.96-1.46 2.08-1.46 1.47 0 2.06 1.12 2.06 2.76v6.32h3.2v-6.5Z"/></svg>),
  Youtube:     i(<><rect x="3" y="6" width="18" height="12" rx="4"/><path d="m10.5 9.5 5 2.5-5 2.5v-5Z" fill="currentColor" stroke="none"/></>),
  Twitter:     i(<><path d="M4 4l16 16M20 4 4 20"/></>),
};
