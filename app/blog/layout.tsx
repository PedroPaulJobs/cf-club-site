import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ledger — Blog CF Club",
  description:
    "Insights sobre startups, empreendedorismo e estratégia. Documentando a jornada de execução e os bastidores do CF Club.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "The Ledger — Blog CF Club",
    description:
      "Insights sobre startups, empreendedorismo e estratégia. Documentando a jornada de execução.",
    url: "https://cfclub.com.br/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
