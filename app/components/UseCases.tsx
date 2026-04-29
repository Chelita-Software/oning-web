const cases = [
  {
    title: "Apertura de cuentas",
    body: "Onboarding 100% digital para banca y fintech.",
  },
  {
    title: "Originación de crédito",
    body: "Personal, nómina, automotriz, PyME y tarjeta.",
  },
  {
    title: "KYC / KYB",
    body: "Identifica personas físicas y morales con compliance.",
  },
  {
    title: "Arrendamiento",
    body: "Captación digital y firma de contratos sin papel.",
  },
  {
    title: "Fintech / SOFOM",
    body: "Lanza un producto financiero en semanas, no meses.",
  },
  {
    title: "Banca digital",
    body: "Onboarding omnicanal, móvil y web, en una sola plataforma.",
  },
];

export default function UseCases() {
  return (
    <section id="casos" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-oning-600">
            Casos de uso
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Diseñado para tu negocio.
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-xl2 border border-ink-200 p-6"
            >
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-ink-700">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
