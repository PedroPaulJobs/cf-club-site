import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Specs from "@/components/Specs";
import ImpactSection from "@/components/ImpactSection";
import Manifesto from "@/components/Manifesto";
import Journey from "@/components/Journey";
import HallOfFame from "@/components/HallOfFame";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

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
