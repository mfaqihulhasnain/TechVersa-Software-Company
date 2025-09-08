import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Solutions from "@/components/solutions";
import CaseStudies from "@/components/case-studies";
import Process from "@/components/process";
import TechStack from "@/components/tech-stack";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Solutions />
      <CaseStudies />
      <Process />
      <TechStack />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}