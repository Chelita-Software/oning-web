# Oning Web

Landing page de **Oning** (Arven Systems) — onboarding financiero sin código.

## Stack

- [Next.js 14](https://nextjs.org/) — App Router
- TypeScript
- Tailwind CSS 3
- Lista para deploy en Vercel

## Desarrollo local

Requisitos: Node.js 18.17+ y npm/pnpm/yarn.

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Estructura

```
oning-web/
├── app/
│   ├── components/      # Una sección por componente
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Logos.tsx
│   │   ├── Problem.tsx
│   │   ├── Pillars.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Capabilities.tsx
│   │   ├── UseCases.tsx
│   │   ├── CustomerSuccess.tsx
│   │   ├── Security.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── mockups/        # Capturas del dashboard / editor / vista cliente
├── tailwind.config.ts  # Paleta Oning (oning-* y ink-*)
├── postcss.config.js
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Sistema de diseño

Paleta de marca configurada en `tailwind.config.ts`:

- Rojo Oning: `oning-500 #E32B3C`, `oning-600 #D32737`
- Texto: `ink-900 #1A1A1A`, secundario `ink-700 #5D606A`
- Fondos: `white`, `ink-100 #F7F8FA`

Gradientes utilitarios: `bg-oning-gradient`, `bg-oning-gradient-radial`.

## Deploy en Vercel

### Opción A — desde GitHub (recomendado)

1. Crea un repo nuevo en GitHub.
2. En la raíz del proyecto:
   ```bash
   git init
   git add .
   git commit -m "feat: landing inicial Oning"
   git branch -M main
   git remote add origin git@github.com:TU_USUARIO/oning-web.git
   git push -u origin main
   ```
3. Entra a https://vercel.com/new e importa el repo. Vercel detecta Next.js automáticamente: dale **Deploy**.

### Opción B — Vercel CLI

```bash
npm i -g vercel
vercel
# seguir el wizard; en producción:
vercel --prod
```

## Reemplazar mockups

Las imágenes en `public/mockups/` (dashboard.jpg, editor.jpg, customer.jpg) son frames del demo. Cuando tengas screenshots oficiales, reemplázalos manteniendo los mismos nombres.

## Personalizar copy

Cada sección es un componente independiente en `app/components/`. Edita texto directamente en cada archivo. Los datos repetidos (FAQs, casos de uso, capacidades) están en arrays al inicio del archivo para fácil edición.
