export default function CustomerSuccess() {
  return (
    <section
      id="clientes"
      className="py-16 lg:py-24 bg-ink-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(40%_60%_at_80%_20%,rgba(227,43,60,0.6),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-oning-400">
              Resultados
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Impacto medible desde el primer mes.
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              Llevamos 5 años optimizando procesos de onboarding financiero con
              marcas como Getnet, Microformas y Kapital Bank.
            </p>

            <blockquote className="mt-8 border-l-2 border-oning-500 pl-5 max-w-lg">
              <p className="text-lg italic">
                &ldquo;Con Oning automatizamos el onboarding y redujimos el
                tiempo de aprobación de días a minutos.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-white/70">
                <strong className="text-white">Nombre del cliente</strong> ·
                Director de Operaciones, Empresa
              </footer>
            </blockquote>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Stat n="+20K" label="Onboardings procesados al año" />
            <Stat n="−45%" label="Reducción de abandono promedio" accent />
            <Stat n="15 días" label="Implementación promedio" />
            <Stat n="5 años" label="De experiencia en LatAm" accent />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  n,
  label,
  accent = false,
}: {
  n: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <div
        className={`text-4xl lg:text-5xl font-extrabold ${
          accent ? "text-oning-400" : ""
        }`}
      >
        {n}
      </div>
      <div className="mt-2 text-sm text-white/70">{label}</div>
    </div>
  );
}
