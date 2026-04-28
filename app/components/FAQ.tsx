const faqs = [
  {
    q: "¿Cómo garantiza Oning la seguridad y el cumplimiento normativo?",
    a: "Aplicamos los más altos estándares: análisis de vulnerabilidades, pentesting, monitoreo continuo y auditorías externas. Alineados con regulación CNBV/CONDUSEF y LFPDPPP.",
  },
  {
    q: "¿Es compatible con mi core bancario o sistemas actuales?",
    a: "Sí. Conectamos vía APIs REST y contamos con +30 integraciones preconfiguradas. Si necesitas algo a la medida, nuestro equipo lo implementa contigo.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Tu primer flujo en producción en menos de 15 días. La duración exacta depende de la complejidad de tus reglas e integraciones.",
  },
  {
    q: "¿Necesito un equipo de desarrollo para usarlo?",
    a: "No. El editor visual no-code permite a cualquier persona del negocio diseñar y publicar flujos sin escribir código.",
  },
  {
    q: "¿Cómo es el modelo de precios?",
    a: "Paquetes flexibles según volumen y funcionalidad. Sin costos ocultos. Comienza con un plan básico y escala conforme crece tu operación.",
  },
  {
    q: "¿Qué soporte técnico ofrecen?",
    a: "Soporte 7 días por chat, correo, WhatsApp y línea telefónica para casos urgentes. Monitoreo continuo y actualizaciones sin interrumpir operación.",
  },
  {
    q: "¿La plataforma escala con mi negocio?",
    a: "Sí. Arquitectura de alta disponibilidad: nuevos productos, mayores volúmenes y nuevos países sin afectar el rendimiento.",
  },
  {
    q: "¿Puede instalarse on-premise?",
    a: "Sí, ofrecemos despliegue cloud, híbrido u on-premise según los requisitos regulatorios o de seguridad de tu institución.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-ink-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-oning-600">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            ¿Tienes dudas?
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl2 bg-white border border-ink-200 p-5 open:shadow-soft"
            >
              <summary className="flex justify-between items-center font-semibold gap-4">
                {f.q}
                <span className="faq-icon text-oning-600 text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink-700 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
