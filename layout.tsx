import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MotionConfig } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["400", "500"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Seu Nome — Desenvolvedor Front-end",
    template: "%s — Seu Nome",
  },
  description:
    "Desenvolvedor front-end especialista em interfaces de alto impacto visual, animações fluidas e experiências web modernas com Next.js, TypeScript e design systems robustos.",
  keywords: [
    "desenvolvedor front-end",
    "Next.js",
    "TypeScript",
    "React",
    "design criativo",
    "portfólio",
    "animações web",
    "Framer Motion",
  ],
  authors: [{ name: "Seu Nome" }],
  creator: "Seu Nome",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Portfólio — Seu Nome",
    title: "Seu Nome — Desenvolvedor Front-end",
    description:
      "Interfaces de alto impacto com foco em performance, acessibilidade e animações precisas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de Seu Nome",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seu Nome — Desenvolvedor Front-end",
    description: "Interfaces de alto impacto com foco em performance e animações precisas.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${firaCode.variable} ${fraunces.variable}`}
    >
      <body className="grain">
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
        </MotionConfig>

        <div className="progressive-blur top-blur" aria-hidden="true">
          <div className="layer blur-1" /><div className="layer blur-2" />
          <div className="layer blur-3" /><div className="layer blur-4" />
          <div className="layer blur-5" /><div className="layer blur-6" />
          <div className="layer blur-7" /><div className="layer blur-8" />
        </div>

        <div className="progressive-blur bottom-blur" aria-hidden="true">
          <div className="layer blur-1" /><div className="layer blur-2" />
          <div className="layer blur-3" /><div className="layer blur-4" />
          <div className="layer blur-5" /><div className="layer blur-6" />
          <div className="layer blur-7" /><div className="layer blur-8" />
        </div>
      </body>
    </html>
  );
}
