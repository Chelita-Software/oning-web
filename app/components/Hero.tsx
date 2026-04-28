import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-hero-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-oning-50 text-oning-700 text-xs font-semibold px-3 py-1.5 mb-5 border border-oning-100">
              <span className="w-1.5 h-1.5 rounded-full bg-oning-500"></span>
              Nuevo · Editor de flujos sin código
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              El onboarding financiero{" "}
              <span className="block text-oning-600">sin código.</span>
            </h1>
            <p className="mt-5 text-lg text-ink-700 max-w-xl">
              Configura captura de datos, validación de identidad, biometría y
              firma digital en una sola plataforma. Tu primer flujo en producción
              en menos de <strong className="text-ink-900">15 días</strong>.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="btn-primary inline-flex justify-center items-center px-6 py-3.5 rounded-xl font-semibold shadow-red"
              >
                Solicitar demo
              </a>
              <a
                href="#como"
                className="inline-flex justify-center items-center px-6 py-3.5 rounded-xl font-semibold border border-ink-200 text-ink-900 hover:border-oning-500 hover:text-oning-600"
              >
                Ver cómo funciona
                <svg
                  className="ml-2"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <div className="text-2xl font-bold">+20K</div>
                <div className="text-xs text-ink-700">Onboardings/año</div>
              </div>
              <div>
                <div className="text-2xl font-bold">15 días</div>
                <div className="text-xs text-ink-700">A producción</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5 años</div>
                <div className="text-xs text-ink-700">En el mercado</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-oning-gradient opacity-10 blur-3xl rounded-full"></div>
            <div className="relative rounded-2xl border border-ink-200 shadow-softer overflow-hidden bg-white">
              <Image
                src="/mockups/dashboard.jpg"
                alt="Dashboard de Oning"
                width={1280}
                height={720}
                className="w-full h-auto block"
                priority
              />
            </div>
            <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 rounded-xl bg-white border border-ink-200 shadow-softer px-4 py-3">
              <div className="w-9 h-9 rounded-lg bg-oning-50 grid place-items-center text-oning-600">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12l5 5L20 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">−45% abandono</div>
                <div className="text-xs text-ink-700">vs. proceso manual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
