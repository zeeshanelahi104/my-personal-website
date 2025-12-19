import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { ScrollToTop } from "@/components/ScrollToTop";

import { MeshGradient } from "@/components/ui/mesh-gradient";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-[-1]">
        <MeshGradient />
      </div>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Interests />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
