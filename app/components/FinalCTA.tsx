export default function FinalCTA() {
  return (
    <section id="cta" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-oning-gradient-radial overflow-hidden p-8 lg:p-16 text-white">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(60%_60%_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Optimiza tu onboarding hoy.
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              Habla con nuestro equipo y ten tu primer flujo en producción en
              menos de 15 días.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex justify-center items-center bg-white text-oning-700 font-semibold px-6 py-3.5 rounded-xl hover:bg-white/95"
              >
                Solicitar demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
