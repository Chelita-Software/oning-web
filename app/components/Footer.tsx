const cols = [
  {
    title: "Producto",
    items: [
      { href: "#producto", label: "Plataforma" },
      { href: "#como", label: "Cómo funciona" },
      { href: "#", label: "Integraciones" },
      { href: "#", label: "Seguridad" },
    ],
  },
  {
    title: "Casos de uso",
    items: [
      { href: "#", label: "Apertura de cuentas" },
      { href: "#", label: "Originación de crédito" },
      { href: "#", label: "KYC / KYB" },
      { href: "#", label: "Arrendamiento" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { href: "#", label: "Sobre Oning" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Contacto" },
      { href: "#", label: "Aviso de privacidad" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-oning-gradient grid place-items-center text-white font-bold">
                O
              </div>
              <span className="font-bold text-lg">Oning</span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Onboarding financiero sin código.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold mb-3">{c.title}</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {c.items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href} className="hover:text-white">
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>© 2026 Oning · Todos los derechos reservados.</p>
          <p>Hecho en México</p>
        </div>
      </div>
    </footer>
  );
}
