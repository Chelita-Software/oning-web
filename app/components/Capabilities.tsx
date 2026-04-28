import { ReactNode } from "react";

type Cap = { title: string; body: string; icon: ReactNode };

const caps: Cap[] = [
  {
    title: "Captura inteligente",
    body: "Formularios dinámicos que se adaptan al tipo de cliente.",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  {
    title: "Validación documental",
    body: "INE, pasaporte y comprobantes verificados en tiempo real.",
    icon: (
      <path
        d="M14 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5M9 12l2 2 4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Verificación biométrica",
    body: "Reconocimiento facial y prueba de vida.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Listas negras y PEP",
    body: "Consultas automáticas a fuentes regulatorias.",
    icon: (
      <path
        d="M3 12h4l3-9 4 18 3-9h4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Firma digital",
    body: "Contratos firmados con validez legal en México.",
    icon: (
      <>
        <path
          d="M12 19l7-7-3-3-7 7v3h3z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 6l3 3" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Multi-tenant",
    body: "Varias unidades de negocio en una sola plataforma.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path
          d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Métricas en tiempo real",
    body: "Dashboard de conversión, abandono y SLA.",
    icon: (
      <>
        <path d="M3 3v18h18" strokeLinecap="round" />
        <rect x="7" y="11" width="3" height="6" rx="1" />
        <rect x="12" y="7" width="3" height="10" rx="1" />
        <rect x="17" y="13" width="3" height="4" rx="1" />
      </>
    ),
  },
  {
    title: "+30 integraciones",
    body: "APIs, core bancario y herramientas externas.",
    icon: (
      <path
        d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11 5M14 11a5 5 0 0 0-7.07 0l-2.83 2.83a5 5 0 0 0 7.07 7.07L13 19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Capabilities() {
  return (
    <section className="py-16 lg:py-24 bg-ink-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-oning-600">
            Capacidades
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Todo lo que tu onboarding necesita.
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {caps.map((c) => (
            <article
              key={c.title}
              className="rounded-xl2 bg-white border border-ink-200 p-5"
            >
              <div className="w-10 h-10 rounded-lg bg-oning-gradient grid place-items-center text-white mb-4">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {c.icon}
                </svg>
              </div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-ink-700">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
