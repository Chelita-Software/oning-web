const logos = ["Getnet", "Microformas", "Kapital Bank", "Cliente 4", "Cliente 5"];

export default function Logos() {
  return (
    <section className="border-y border-ink-200 bg-ink-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-xs font-semibold tracking-widest text-ink-700 uppercase">
          Empresas líderes en México confían en Oning
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {logos.map((name, i) => (
            <div
              key={name}
              className={`h-10 grid place-items-center text-ink-500 font-bold tracking-wide ${
                i >= 3 ? "hidden lg:grid" : ""
              }`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
