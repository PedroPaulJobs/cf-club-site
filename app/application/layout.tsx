import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aplicar — CF Club Builders Edition",
  description:
    "Inscreva-se para o CF Club Builders Edition. Programa presencial de aceleração para founders em Belo Horizonte. Vagas limitadas.",
  alternates: {
    canonical: "/application",
  },
  openGraph: {
    title: "Aplicar — CF Club Builders Edition",
    description:
      "Inscreva-se para o CF Club Builders Edition. Programa presencial de aceleração para founders em BH.",
    url: "https://cfclub.com.br/application",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
