import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Selecciona un proceso",
    body:
      "Plantillas de crédito automotriz, PyME, nómina, tarjeta o crea uno nuevo.",
  },
  {
    n: "02",
    title: "Arrastra y suelta",
    body:
      "Componentes listos para usar: formularios, biometría, firma, validaciones.",
  },
  {
    n: "03",
    title: "Define tus reglas",
    body:
      "Condiciones y políticas a la medida; el sistema toma la decisión por ti.",
  },
  {
    n: "04",
    title: "Conecta tus sistemas",
    body: "+30 conexiones listas o crea integraciones a la medida vía API.",
  },
  {
    n: "05",
    title: "Publica y mide",
    body: "Pruebas, producción y dashboard con KPIs en tiempo real.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-oning-600">
            Cómo funciona
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Tu onboarding en marcha en 5 pasos.
          </h2>
          <p className="mt-4 text-ink-700 text-lg">
            Tan rápido como armar una presentación. Sin programar, sin esperar
            al equipo de TI.
          </p>
        </div>

        <ol className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-xl2 border border-ink-200 p-6"
            >
              <div className="text-3xl font-extrabold text-oning-600">
                {s.n}
              </div>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-ink-700">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-ink-200 overflow-hidden bg-white">
            <Image
              src="/mockups/editor.jpg"
              alt="Editor de flujos"
              width={1280}
              height={720}
              className="w-full h-auto block"
            />
            <div className="p-4 border-t border-ink-200">
              <p className="text-sm font-semibold">Editor de flujos</p>
              <p className="text-xs text-ink-700">
                Crea pasos, valida documentos y configura reglas sin código.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-ink-200 overflow-hidden bg-white">
            <Image
              src="/mockups/customer.jpg"
              alt="Vista del cliente final"
              width={1280}
              height={720}
              className="w-full h-auto block"
            />
            <div className="p-4 border-t border-ink-200">
              <p className="text-sm font-semibold">Vista del cliente final</p>
              <p className="text-xs text-ink-700">
                Personalizable con tu marca; experiencia móvil y web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
