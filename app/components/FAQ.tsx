"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito saber programar o tener equipo técnico?",
    a: "No. Nosotros nos encargamos de todo el desarrollo e implementación. Vos o tu equipo solo interactúan con el resultado final: el bot de WhatsApp, los reportes automáticos, el dashboard. Sin tecnicismos.",
  },
  {
    q: "¿Cuánto tiempo tarda la implementación?",
    a: "Entre 2 y 4 semanas según la complejidad. Los proyectos Starter pueden estar listos en 7-10 días hábiles. Los proyectos más complejos con múltiples integraciones requieren 3-4 semanas.",
  },
  {
    q: "¿Qué pasa si dejo de contratar el retainer?",
    a: "Toda la infraestructura queda en tus manos. Las cuentas de n8n, Meta, Twilio y cualquier otro servicio están a tu nombre desde el día uno. Si decidís no continuar, te entregamos documentación completa para que cualquier técnico pueda mantenerlo.",
  },
  {
    q: "¿Funciona con los sistemas que ya uso?",
    a: "En el 95% de los casos, sí. Integramos con Google Workspace, Outlook, HubSpot, Shopify, WooCommerce, Airtable, Notion, Stripe, y cientos de herramientas más. Antes de cotizar verificamos la compatibilidad.",
  },
  {
    q: "¿Qué tan segura es la información de mis clientes?",
    a: "Muy segura. Los datos se procesan en servidores que vos controlás (tu cuenta de Railway, Supabase o similar). No almacenamos información de tus clientes en nuestros propios servidores. Además, implementamos cifrado en tránsito y en reposo.",
  },
  {
    q: "¿Puedo empezar con una sola automatización y escalar?",
    a: "Es exactamente lo que recomendamos. Empezás con el proceso de mayor ROI, ves los resultados en 30 días, y a partir de ahí decidís si querés sumar más flujos. Sin presión ni compromisos largos.",
  },
  {
    q: "¿El bot puede responder preguntas específicas de mi negocio?",
    a: "Sí. Entrenamos el bot con tu información: precios, servicios, políticas, FAQs, horarios, etc. Usa IA para entender preguntas en lenguaje natural y responder con precisión. Si no sabe algo, deriva a una persona.",
  },
  {
    q: "¿Cuánto cuesta la infraestructura mensualmente?",
    a: "Eso siempre va a depender del volumen de publico que manejes mensualmente y de la complejidad del sistema de automatización.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-14 sm:py-24 relative">
      <div className="section-divider mb-14 sm:mb-24" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="label-overline text-brand-purple-light mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Todo lo que querés saber
          </h2>
        </div>

        {/* Line accordion — borderless, divider-only style */}
        <div className="divide-y divide-dark-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-5 sm:py-6 text-left group min-h-[56px]"
              >
                <span
                  className={`font-display font-bold text-base tracking-tight transition-colors duration-200 ${
                    open === i ? "text-white" : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 mt-0.5 w-7 h-7 rounded-full border flex items-center justify-center text-sm transition-all duration-300 ${
                    open === i
                      ? "border-brand-purple bg-brand-purple/15 text-brand-purple-light rotate-45"
                      : "border-dark-border text-gray-600 group-hover:border-brand-purple/40 group-hover:text-brand-purple-light"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-400 ease-in-out"
                style={{
                  maxHeight: open === i ? '200px' : '0px',
                  opacity: open === i ? 1 : 0,
                  marginBottom: open === i ? '20px' : '0px',
                }}
              >
                <p className="text-base text-gray-400 leading-relaxed pr-8">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
