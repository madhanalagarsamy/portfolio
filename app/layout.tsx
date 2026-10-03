import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, SEO_CONFIG } from "@/data/seo";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: SEO_CONFIG.author, url: SITE_URL }],
  creator: SEO_CONFIG.author,
  publisher: SEO_CONFIG.author,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.description,
    url: SITE_URL,
    siteName: "Madhan Alagarsamy Portfolio & Research",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.description,
    creator: "@madhanalagarsamy",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Madhan Alagarsamy",
    alternateName: ["MADHAN A", "Madhan A", "madhanalagarsamy"],
    url: SITE_URL,
    jobTitle: "Independent Cybersecurity Researcher & Software Developer",
    worksFor: {
      "@type": "Organization",
      "name": "Net Corporation",
    },
    sameAs: [
      "https://github.com/madhanalagarsamy",
      "https://github.com/esp-rs/espflash/pull/1074",
      "https://github.com/apple/container/issues/2261",
      "https://github.com/bigbluebutton/bigbluebutton/security/advisories/GHSA-9v52-vhvw-4w5c",
      "https://github.com/gouef/githubtoplanguages/security/advisories/GHSA-8rfq-rmx4-8qhr",
      "https://github.com/gouef/githubtoplanguages/security/advisories/GHSA-x3cj-mm38-329g",
    ],
    knowsAbout: [
      "Cybersecurity Research",
      "Self-Hosted CI Runner Security",
      "Application Security (AppSec)",
      "Vulnerability Assessment and Penetration Testing (VAPT)",
      "Coordinated Vulnerability Disclosure (CVD)",
      "Swift-NIO Architecture",
      "GitHub Actions CI/CD Security",
      "Command Injection (CWE-78)",
      "Insecure Direct Object References (IDOR)",
      "Denial of Service (DoS) Analysis",
      "Defensive Engineering",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Madhan Alagarsamy Official Portfolio",
    url: SITE_URL,
    description: SEO_CONFIG.description,
    author: {
      "@type": "Person",
      name: "Madhan Alagarsamy",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <JsonLd data={[personSchema, websiteSchema]} />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
