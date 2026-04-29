"use client";

import { useState } from "react";

const links = [
  { href: "#producto", label: "Producto" },
  { href: "#como", label: "Cómo funciona" },
  { href: "#casos", label: "Casos de uso" },
  { href: "#clientes", label: "Clientes" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-ink-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-oning-gradient grid place-items-center text-white font-bold">
              O
            </div>
            <span className="font-bold text-lg tracking-tight">Oning</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-ink-700 hover:text-ink-900"
            >
              Iniciar sesión
            </a>
            <button
              onClick={() => window.dispatchEvent(new Event("open-demo-modal"))}
              className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-xl"
            >
              Solicitar demo
            </button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-1 pt-2 border-t border-ink-200">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-2 py-3 text-base nav-link"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <button
                className="mt-2 btn-primary text-center text-sm font-semibold px-5 py-3 rounded-xl"
                onClick={() => {
                  setOpen(false);
                  window.dispatchEvent(new Event("open-demo-modal"));
                }}
              >
                Solicitar demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
