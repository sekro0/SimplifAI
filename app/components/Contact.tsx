"use client";

import { useState } from "react";

const perks = [
  { label: "Sin costo, sin compromiso" },
  { label: "Calculamos el ROI específico para tu negocio" },
  { label: "Te explicamos exactamente qué vamos a construir" },
  { label: "La primera reunión la coordinamos esta semana" },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    niche: "",
    whatsapp: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola, soy ${formData.name} de ${formData.business} (${formData.niche}).\n\n${formData.message}\n\nMi WhatsApp: ${formData.whatsapp}`
    );
    window.open(`https://wa.me/5491123421639?text=${msg}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const niches = [
    "Clínica / Consultorio",
    "Inmobiliaria",
    "Estudio contable",
    "E-commerce / Tienda online",
    "Otro",
  ];

  return (
    <section id="contacto" className="py-24 relative">
      <div className="section-divider mb-24" />

      {/* Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-purple/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT — copy */}
          <div className="lg:pt-4">
            <p className="label-overline text-brand-cyan mb-3">
              Empezá hoy
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-5 leading-tight tracking-tight">
              Agendá tu diagnóstico{" "}
              <span className="gradient-text">gratuito</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              En 30 minutos identificamos el proceso con mayor ROI en tu negocio
              y te entregamos una propuesta concreta. Sin compromiso.
            </p>

            {/* Checklist */}
            <div className="space-y-3 mb-10">
              {perks.map((p, i) => (
                <div key={p.label} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)' }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-300 text-sm">{p.label}</span>
                </div>
              ))}
            </div>

            {/* Email fallback */}
            <div
              className="p-4 rounded-xl flex items-center gap-3"
              style={{ background: 'rgba(19,19,31,0.8)', border: '1px solid rgba(30,30,48,1)' }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.2)' }}>
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                  <rect x="0.5" y="0.5" width="13" height="10" rx="1.5" stroke="#9F67FF" strokeWidth="1.2"/>
                  <path d="M1 1l6 5 6-5" stroke="#9F67FF" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-0.5">También podés escribirnos directo</p>
                <a
                  href="mailto:Santiagoacebraspekerman@gmail.com"
                  className="text-brand-purple-light hover:underline font-medium text-sm"
                >
                  Santiagoacebraspekerman@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — form with gradient border */}
          <div className="gradient-border rounded-2xl">
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ background: 'rgba(13,13,26,0.95)', backdropFilter: 'blur(20px)' }}
            >
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}>
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                      <path d="M2 10l7 7L22 2" stroke="#9F67FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-black text-white mb-2 tracking-tight">¡Mensaje enviado!</h3>
                  <p className="text-gray-400 text-sm">
                    Te redirigimos a WhatsApp. Respondemos en menos de 24 horas hábiles.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs mb-1.5 font-medium tracking-wide" style={{ color: 'rgba(159,103,255,0.7)' }}>
                        Tu nombre *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Juan García"
                        className="w-full px-4 py-2.5 rounded-lg text-white text-sm transition-all focus:outline-none"
                        style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.18)', color: 'white' }}
                        onFocus={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.18)'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5 font-medium tracking-wide" style={{ color: 'rgba(159,103,255,0.7)' }}>
                        Nombre del negocio *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        placeholder="Mi empresa SRL"
                        className="w-full px-4 py-2.5 rounded-lg text-white text-sm transition-all focus:outline-none"
                        style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.18)' }}
                        onFocus={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.18)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs mb-1.5 font-medium tracking-wide" style={{ color: 'rgba(159,103,255,0.7)' }}>
                      Rubro *
                    </label>
                    <select
                      required
                      value={formData.niche}
                      onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg text-white text-sm transition-all focus:outline-none appearance-none"
                      style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.18)' }}
                    >
                      <option value="" disabled style={{ background: '#0D0D1A', color: '#6b7280' }}>Seleccioná tu rubro</option>
                      {niches.map((n) => (
                        <option key={n} value={n} style={{ background: '#13131f', color: 'white' }}>{n}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs mb-1.5 font-medium tracking-wide" style={{ color: 'rgba(159,103,255,0.7)' }}>
                      Tu WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-lg text-white text-sm transition-all focus:outline-none"
                      style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.18)' }}
                      onFocus={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.18)'}
                    />
                  </div>

                  <div>
                    <label className="block text-xs mb-1.5 font-medium tracking-wide" style={{ color: 'rgba(159,103,255,0.7)' }}>
                      ¿Qué querés automatizar?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Contanos brevemente el proceso o el dolor principal..."
                      className="w-full px-4 py-2.5 rounded-lg text-white text-sm transition-all focus:outline-none resize-none"
                      style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.18)' }}
                      onFocus={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.18)'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-brand-purple hover:bg-brand-purple-light transition-all font-display font-semibold text-sm glow-purple hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    Agendar diagnóstico gratuito
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <p className="text-xs text-center" style={{ color: 'rgba(124,58,237,0.35)' }}>
                    Al enviar, abriremos WhatsApp con tu mensaje. Sin spam.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
