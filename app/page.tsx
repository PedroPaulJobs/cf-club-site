import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Specs from "@/components/Specs";
import ImpactSection from "@/components/ImpactSection";
import Manifesto from "@/components/Manifesto";
import dynamic from "next/dynamic";

const Journey = dynamic(() => import("@/components/Journey"));
const HallOfFame = dynamic(() => import("@/components/HallOfFame"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const Footer = dynamic(() => import("@/components/Footer"));

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CF Club",
  url: "https://cfclub.com.br",
  logo: "https://cfclub.com.br/opengraph-image.png",
  description:
    "Aceleradora prática de startups em Belo Horizonte. Programa presencial de 8 semanas com mentoria, execução e networking brutal.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.instagram.com/cfclub_/",
    "https://www.linkedin.com/company/cfclub/",
  ],
};

const jsonLdEvent = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "CF Builders Edition — Encontro de Founders",
  description:
    "Programa de aceleração presencial de 8 semanas. Mentoria, execução prática e construção de equity para founders. Vagas limitadas.",
  startDate: "2026-04-11T14:00:00-03:00",
  endDate: "2026-04-11T17:00:00-03:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Auditório IBMEC BH",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      addressCountry: "BR",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "CF Club",
    url: "https://cfclub.com.br",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.sympla.com.br/evento/cf-builders-edition-encontro-de-founders/3348048",
    availability: "https://schema.org/LimitedAvailability",
    priceCurrency: "BRL",
  },
  image: "https://cfclub.com.br/opengraph-image.png",
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CF Club",
  url: "https://cfclub.com.br",
  description:
    "Aceleradora prática de startups em Belo Horizonte. Transforme ideias em negócios reais.",
  inLanguage: "pt-BR",
  publisher: {
    "@type": "Organization",
    name: "CF Club",
    url: "https://cfclub.com.br",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <main className="min-h-screen">
        <Hero />
        <Methodology />
        <Specs />
        <ImpactSection />
        <Manifesto />
        <Journey />
        <HallOfFame />
        <BlogSection />
        <Footer />
      </main>
    </>
  );
}
