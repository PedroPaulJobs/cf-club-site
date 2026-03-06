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

export default function Home() {
  return (
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
  );
}
