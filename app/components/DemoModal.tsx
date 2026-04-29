"use client";

import { useEffect, useState } from "react";

const EMPTY = { name: "", email: "", phone: "", flowsOrBoards: "" };

export default function DemoModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-demo-modal", handler);
    return () => window.removeEventListener("open-demo-modal", handler);
  }, []);

  function close() {
    setOpen(false);
    setForm(EMPTY);
    setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/flujos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-ink-400 hover:text-ink-900"
          aria-label="Cerrar"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {status === "ok" ? (
          <div className="text-center py-6">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-xl font-extrabold mb-2">¡Listo!</h3>
            <p className="text-ink-700 text-sm">
              Recibimos tu solicitud. Un miembro de nuestro equipo se pondrá en
              contacto contigo pronto.
            </p>
            <button
              onClick={close}
              className="mt-6 btn-primary text-sm font-semibold px-6 py-3 rounded-xl"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-extrabold tracking-tight mb-1">
              Solicitar demo
            </h3>
            <p className="text-sm text-ink-700 mb-6">
              Cuéntanos un poco sobre tu empresa y te contactamos.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-ink-700 mb-1">
                  Nombre *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Tu nombre completo"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-ink-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-oning-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-700 mb-1">
                  Teléfono *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+52 55 0000 0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-ink-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-oning-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-700 mb-1">
                  Correo electrónico *
                </label>
                <input
                  required
                  type="email"
                  placeholder="correo@empresa.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-ink-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-oning-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-700 mb-1">
                  Onboardings por mes{" "}
                  <span className="font-normal text-ink-500">(opcional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej. 500"
                  value={form.flowsOrBoards}
                  onChange={(e) =>
                    setForm({ ...form, flowsOrBoards: e.target.value })
                  }
                  className="w-full border border-ink-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-oning-500"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Ocurrió un error. Intenta de nuevo.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary text-sm font-semibold px-6 py-3 rounded-xl disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : "Enviar solicitud"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
