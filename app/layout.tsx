import type { Metadata } from "next";
import { Playfair_Display, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScrollLayout from "@/components/ui/SmoothScrollLayout";
import GrainOverlay from "@/components/ui/GrainOverlay";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "CF CLUB • BUILDERS EDITION",
  description: "Transforme ideias em negócios reais. 10 semanas de execução intensa, mentoria e networking brutal no Sebrae Labs.",
  keywords: ["Empreendedorismo", "Startups", "BH", "Sebrae Labs", "Aceleração", "Builders"],
  openGraph: {
    title: "CF CLUB | Builders Edition",
    description: "Menos conversa, mais execução. Aplique para a imersão que vai mudar o jogo do seu negócio.",
    url: "https://cfclub.com.br", // Placeholder URL, should be updated when deploying
    siteName: "CF Club",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CF CLUB • Builders Edition",
    description: "10 semanas de mão na massa no Sebrae Labs.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
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
