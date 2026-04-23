/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Evita que navegadores interpreten archivos con un tipo MIME incorrecto
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Protege contra clickjacking (no se puede embeber en un iframe)
          { key: "X-Frame-Options", value: "DENY" },
          // Activa el filtro XSS del navegador
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Controla la info del referrer al hacer clic en links externos
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Deshabilita features del navegador que no se usan
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          // Fuerza HTTPS por 2 años (solo aplica en producción con HTTPS)
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Content Security Policy — permite solo recursos propios + servicios necesarios
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",  // unsafe-eval necesario para Next.js dev
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },

  // Compresión para mejor rendimiento
  compress: true,

  // Elimina el header "X-Powered-By: Next.js" (no revelar tecnología)
  poweredByHeader: false,
};

export default nextConfig;
