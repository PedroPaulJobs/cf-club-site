import type { Metadata } from "next";
import { Playfair_Display, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const SmoothScrollLayout = dynamic(() => import("@/components/ui/SmoothScrollLayout"));
const GrainOverlay = dynamic(() => import("@/components/ui/GrainOverlay"));

const BASE_URL = "https://cfclub.com.br";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  verification: {
    google: "3clu1DAJoQot5P2ClNeaTq7ddcfYgRnkJtpnwFnP_S8",
  },
  title: {
    default: "CF CLUB • Builders Edition — Aceleradora de Startups em BH",
    template: "%s | CF CLUB",
  },
  description:
    "Transforme ideias em negócios reais. Programa presencial de 8 semanas com mentoria, execução prática e networking. 11 de Abril de 2026 no Auditório IBMEC BH. Vagas limitadas.",
  keywords: [
    "aceleradora de startups",
    "CF Club",
    "Builders Edition",
    "empreendedorismo BH",
    "Belo Horizonte startups",
    "programa de aceleração",
    "mentoria para startups",
    "IBMEC BH",
    "demo day",
    "MVP",
    "equity",
    "founders",
    "networking empreendedor",
    "startups Minas Gerais",
  ],
  authors: [{ name: "CF Club", url: BASE_URL }],
  creator: "CF Club",
  publisher: "CF Club",
  category: "Business",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    title: "CF CLUB • Builders Edition — Aceleradora de Startups em BH",
    description:
      "Menos conversa, mais execução. 8 semanas de imersão presencial com mentoria brutal e construção de equity. 11 de Abril no Auditório IBMEC BH.",
    url: BASE_URL,
    siteName: "CF Club",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CF CLUB Builders Edition — Aceleradora de Startups em BH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CF CLUB • Builders Edition",
    description:
      "8 semanas de mão na massa no Auditório IBMEC BH. Mentoria, execução e networking brutal para founders.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${playfair.variable} ${manrope.variable} ${jetbrains.variable} font-sans antialiased bg-cf-black text-cf-white`}
      >
        <SmoothScrollLayout>
          <GrainOverlay />
          <Header />
          {children}
        </SmoothScrollLayout>
      </body>
    </html>
  );
}
