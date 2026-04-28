const pillars = [
  {
    no: "01",
    title: "Configura",
    head: "Diseña flujos sin programar.",
    body:
      "Editor visual drag-and-drop. Crea tu primer onboarding en horas, no en meses.",
    bullets: [
      "+16 componentes listos",
      "+20 reglas de negocio",
      "Versionado y ambientes de prueba",
    ],
  },
  {
    no: "02",
    title: "Verifica",
    head: "Identidad y compliance, automatizados.",
    body:
      "INE, pasaporte, biometría, listas negras y firma digital con validez legal.",
    bullets: [
      "Reconocimiento facial + prueba de vida",
      "Validación documental en tiempo real",
      "Listas negras y PEP",
    ],
  },
  {
    no: "03",
    title: "Convierte",
    head: "Mide y optimiza tu conversión.",
    body:
      "Dashboard en tiempo real, métricas de abandono y A/B testing.",
    bullets: [
      "KPIs de conversión por paso",
      "Alertas y reportes automáticos",
      "Multi-tenant y multi-producto",
    ],
  },
];

export default function Pillars() {
  return (
    <section id="producto" className="py-16 lg:py-24 bg-ink-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-oning-600">
            La plataforma
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Una sola plataforma para diseñar, validar y convertir.
          </h2>
          <p className="mt-4 text-ink-700 text-lg">
            Diseña tus flujos digitales en minutos, conecta tus sistemas y mide
            la conversión en tiempo real — todo desde un solo lugar.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <article
              key={p.no}
              className="relative rounded-2xl bg-white border border-ink-200 p-6 lg:p-8 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-oning-50"></div>
              <div className="relative">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-oning-700 bg-oning-50 rounded-full px-2.5 py-1">
                  {p.no} · {p.title}
                </span>
                <h3 className="mt-4 text-xl font-bold">{p.head}</h3>
                <p className="mt-2 text-ink-700 text-sm">{p.body}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-oning-600">✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
