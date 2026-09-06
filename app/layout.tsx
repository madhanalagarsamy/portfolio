import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madhan Alagarsamy (MADHAN A) — Cybersecurity Researcher | Software Developer | Founder",
  description:
    "Official technical identity portfolio of Madhan Alagarsamy (MADHAN A) — Independent Cybersecurity Researcher, Software Developer, and Founder of Net Corporation. Specialized in application security, full-stack web engineering, and open-source defensive research.",
  keywords: [
    "Madhan Alagarsamy",
    "MADHAN A",
    "Cybersecurity Researcher",
    "Software Developer",
    "Founder",
    "Net Corporation",
    "Security Research",
    "Open-Source",
    "Full-Stack Developer",
    "Hosur",
  ],
  authors: [{ name: "Madhan Alagarsamy" }],
  creator: "Madhan Alagarsamy",
  openGraph: {
    title: "Madhan Alagarsamy (MADHAN A) — Cybersecurity Researcher | Software Developer | Founder",
    description:
      "Independent Cybersecurity Researcher, Developer and Founder of Net Corporation with comprehensive expertise spanning full-stack web application development, deployment, and secure architecture.",
    url: "https://github.com/madhanalagarsamy",
    siteName: "Madhan Alagarsamy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhan Alagarsamy (MADHAN A) — Cybersecurity Researcher | Software Developer | Founder",
    description:
      "Independent Cybersecurity Researcher, Developer and Founder of Net Corporation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
