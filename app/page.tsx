import CinematicVideo from "@/components/CinematicVideo";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import SecurityResearch from "@/components/SecurityResearch";
import SecurityAdvisory from "@/components/SecurityAdvisory";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
        {/* Single Persistent HTML5 Background Video System */}
        <CinematicVideo />

        {/* Persistent Transparent Content Journey */}
        <div className="relative z-10">
          <Navigation />
          <main className="space-y-0">
            <Hero />
            <About />
            <Experience />
            <SecurityResearch />
            <SecurityAdvisory />
            <Skills />
            <FeaturedProject />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}
