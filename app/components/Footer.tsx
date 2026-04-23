import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/logo.png"
                alt="SimplifAI logo"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="font-display font-bold text-base tracking-tight">
                Simplif<span className="gradient-text">AI</span>
              </span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
              Automatizamos negocios en crecimiento con IA. Resultados reales, en semanas, no meses.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Navegación
            </p>
            <ul className="space-y-2">
              {[
                { label: "Servicios", href: "#servicios" },
                { label: "Cómo funciona", href: "#como-funciona" },
                { label: "Inversión", href: "#inversion" },
                { label: "FAQ", href: "#faq" },
                { label: "Contacto", href: "#contacto" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-600 hover:text-gray-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Contacto
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:Santiagoacebraspekerman@gmail.com"
                  className="text-sm text-gray-600 hover:text-gray-300 transition-colors"
                >
                  Santiagoacebraspekerman@gmail.com
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-600">Trabajo remoto, global</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-700">
            © {year} SimplifAI. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-700">
            Construido con n8n · Claude API · Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
