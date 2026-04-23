import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada | SimplifAI",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="bg-dark-bg text-white min-h-screen flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative text-center max-w-lg">
        <div className="text-8xl font-black gradient-text mb-4">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Esta página no existe
        </h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Parece que el link que seguiste ya no existe o fue movido.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-xl bg-brand-purple hover:bg-brand-purple-light transition-all font-semibold glow-purple hover:scale-105 active:scale-95"
        >
          Volver al inicio →
        </Link>
      </div>
    </main>
  );
}
