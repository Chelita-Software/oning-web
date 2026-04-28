const standards = ["ISO 27001", "SOC 2", "CNBV", "LFPDPPP"];

export default function Security() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-ink-200 p-8 lg:p-12 bg-ink-50 grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-oning-600">
              Seguridad y cumplimiento
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
              Diseñado bajo los más altos estándares de seguridad financiera.
            </h2>
            <p className="mt-3 text-ink-700">
              Análisis de vulnerabilidades, pruebas de penetración, escaneos de
              código y monitoreo continuo. Alineado con regulaciones locales y
              auditorías externas periódicas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {standards.map((s) => (
              <div
                key={s}
                className="bg-white border border-ink-200 rounded-xl px-4 py-3 text-center font-semibold"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
