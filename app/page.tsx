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
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SEO_CONFIG } from "@/data/seo";

export default function Home() {
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Madhan Alagarsamy Portfolio",
    url: SITE_URL,
    mainEntity: {
      "@type": "Person",
      name: "Madhan Alagarsamy",
      alternateName: ["MADHAN A", "Madhan A", "madhanalagarsamy"],
      description: SEO_CONFIG.description,
      url: SITE_URL,
      jobTitle: "Independent Cybersecurity Researcher & Software Developer",
      sameAs: [
        "https://github.com/madhanalagarsamy",
        "https://github.com/esp-rs/espflash/pull/1074",
        "https://github.com/apple/container/issues/2261",
        "https://github.com/bigbluebutton/bigbluebutton/security/advisories/GHSA-9v52-vhvw-4w5c",
        "https://github.com/gouef/githubtoplanguages/security/advisories/GHSA-8rfq-rmx4-8qhr",
        "https://github.com/gouef/githubtoplanguages/security/advisories/GHSA-x3cj-mm38-329g",
      ],
    },
  };

  return (
    <SmoothScroll>
      <JsonLd data={profilePageSchema} />
      <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
        {/* Single Persistent HTML5 Background Video System */}
        <CinematicVideo />

        {/* Persistent Transparent Content Journey */}
        <div className="relative z-10">
          <Navigation />
          <main className="space-y-0">
            <Hero />
            <About />
            <SecurityAdvisory />
            <SecurityResearch />
            <FeaturedProject />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}
