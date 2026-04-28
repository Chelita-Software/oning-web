import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oning — Onboarding financiero sin código",
  description:
    "Configura flujos de onboarding financiero, validación de identidad y firma digital sin programar. Tu proceso, listo en menos de 15 días.",
  metadataBase: new URL("https://oning.example"),
  openGraph: {
    title: "Oning — Onboarding financiero sin código",
    description:
      "Configura flujos de onboarding financiero, validación de identidad y firma digital sin programar. Tu proceso, listo en menos de 15 días.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans bg-white text-ink-900">{children}</body>
    </html>
  );
}
