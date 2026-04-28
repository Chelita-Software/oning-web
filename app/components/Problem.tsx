const items = [
  {
    title: "Lentitud",
    body:
      "Validaciones lentas que frustran a los clientes y generan abandono en las etapas críticas de conversión.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Errores y fricción",
    body:
      "Documentación incompleta, errores de captura y verificaciones fallidas que aumentan el costo operativo.",
    icon: (
      <path
        d="M12 9v4M12 17h.01M10.29 3.86l-8.18 14.18A2 2 0 0 0 3.83 21h16.34a2 2 0 0 0 1.72-2.96L13.71 3.86a2 2 0 0 0-3.42 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Costo operativo",
    body:
      "Cada paso adicional reduce tu tasa de conversión y aumenta los recursos necesarios para cerrar a un cliente.",
    icon: (
      <path
        d="M3 17l6-6 4 4 8-8M14 7h7v7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Problem() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-oning-600">
            El problema
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            El <span className="text-oning-600">60%</span> de tus clientes
            abandona antes de terminar el onboarding.
          </h2>
          <p className="mt-4 text-ink-700 text-lg">
            La fricción en la captación de clientes financieros genera pérdidas
            millonarias y daña la reputación de tu empresa.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-xl2 border border-ink-200 bg-white p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-oning-50 grid place-items-center text-oning-600 mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {it.icon}
                </svg>
              </div>
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-ink-700 text-sm">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
