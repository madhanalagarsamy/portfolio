import CinematicVideo from "@/components/CinematicVideo";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SecurityResearch from "@/components/SecurityResearch";
import SecurityAdvisory from "@/components/SecurityAdvisory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SEO_CONFIG } from "@/data/seo";

export default function Home() {
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Madhan Alagarsamy — Security Research & Advisories",
    url: SITE_URL,
    mainEntity: {
      "@type": "Person",
      name: "Madhan Alagarsamy",
      alternateName: ["MADHAN A", "Madhan A", "madhanalagarsamy"],
      description: SEO_CONFIG.description,
      url: SITE_URL,
      jobTitle: "Independent Cybersecurity Researcher",
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
      <div className="relative min-h-screen bg-black text-[#f5f5f7] selection:bg-[#0071e3] selection:text-white">
        {/* Single Persistent HTML5 Background Video System */}
        <CinematicVideo />

        {/* Persistent Content Journey: 100% Security Researcher & Disclosures */}
        <div className="relative z-10">
          <Navigation />
          <main className="space-y-0">
            <Hero />
            <About />
            <SecurityAdvisory />
            <SecurityResearch />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}
