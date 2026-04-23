import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// ─── Viewport (separado de metadata — Next.js 14) ────────────────────────────
export const viewport: Viewport = {
  themeColor: "#0D0D1A",
  width: "device-width",
  initialScale: 1,
};

// ─── Metadata completa ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://www.simplifai.com"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },

  title: {
    default: "SimplifAI — Automatizamos tu negocio. Vos te enfocás en crecer.",
    template: "%s | SimplifAI",
  },
  description:
    "Agencia de automatización con IA para negocios en crecimiento. Capturamos leads, ahorramos horas y digitalizamos procesos manuales. Setup en semanas, resultados desde el primer mes.",

  keywords: [
    "automatización con IA",
    "agencia de automatización con inteligencia artificial",
    "bot WhatsApp para negocios",
    "n8n automatización",
    "automatización empresas",
    "inteligencia artificial para clínicas",
    "automatización inmobiliarias",
    "automatización contable",
    "e-commerce automatización",
    "Make n8n automatización",
    "automatización procesos empresariales",
    "agencia automatización hispanohablante",
  ],

  authors: [{ name: "SimplifAI", url: "https://www.simplifai.com" }],
  creator: "SimplifAI",
  publisher: "SimplifAI",

  // Permitir indexación explícita
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.simplifai.com",
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp previews)
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.simplifai.com",
    siteName: "SimplifAI",
    title: "SimplifAI — Automatizamos tu negocio con IA",
    description:
      "Dejá de perder leads y de gastar horas en tareas repetitivas. Automatizamos los procesos clave de tu negocio con IA. Diagnóstico gratuito.",
    images: [
      {
        url: "/og-image.png", // Crear imagen 1200x630 y guardar en /public/og-image.png
        width: 1200,
        height: 630,
        alt: "SimplifAI — Automatización con IA para negocios en crecimiento",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "SimplifAI — Automatizamos tu negocio con IA",
    description:
      "Automatización con IA para negocios en crecimiento. Diagnóstico gratuito.",
    images: ["/og-image.png"],
    creator: "@simplifai",
  },

  // Verificación de propiedad (completar cuando tengas las cuentas)
  // verification: {
  //   google: "TU_CODIGO_AQUI",
  // },
};

// ─── JSON-LD Schema (SEO estructurado) ───────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.simplifai.com/#organization",
      name: "SimplifAI",
      url: "https://www.simplifai.com",
      logo: "https://www.simplifai.com/logo.png",
      description:
        "Agencia de automatización con IA para negocios en crecimiento. Automatizamos procesos, capturamos leads y ahorramos horas de trabajo manual.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "Santiagoacebraspekerman@gmail.com",
        availableLanguage: "Spanish",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.simplifai.com/#website",
      url: "https://www.simplifai.com",
      name: "SimplifAI",
      publisher: { "@id": "https://www.simplifai.com/#organization" },
      inLanguage: "es-AR",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Necesito saber programar para contratar SimplifAI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Nos encargamos de todo el desarrollo e implementación. Vos solo interactuás con el resultado final.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo tarda la implementación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entre 2 y 4 semanas según la complejidad. Los proyectos Starter pueden estar listos en 7-10 días hábiles.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si dejo de contratar el retainer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Toda la infraestructura queda en tus manos. Las cuentas están a tu nombre desde el día uno.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué tan segura es la información de mis clientes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Muy segura. Los datos se procesan en servidores que vos controlás. No almacenamos información de tus clientes en nuestros servidores.",
          },
        },
      ],
    },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
