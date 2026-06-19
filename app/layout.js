import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://karayabandhu.com"),
  title: {
    default: "Karaya Bandhu Pvt. Ltd. | Incubating India's Gig Economy Ecosystems",
    template: "%s | Karaya Bandhu Pvt. Ltd.",
  },
  description: "Karaya Bandhu Pvt. Ltd. is a premium parent holding company and digital brand incubator. We build cutting-edge gig economy platforms, regional micro-fintech, SaaS-enabled logistics, and corporate workforce infrastructure to empower Tier-2 and Tier-3 cities in India.",
  keywords: [
    "Karaya Bandhu",
    "Gig Economy India",
    "Digital Brand Incubator",
    "KB FinTech",
    "KB Logistics",
    "Workforce Certification",
    "Patna Startup",
    "Bihar Startup Incubator",
    "India Gig Economy Infrastructure"
  ],
  authors: [{ name: "Karaya Bandhu" }],
  creator: "Karaya Bandhu Pvt. Ltd.",
  publisher: "Karaya Bandhu Pvt. Ltd.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://karayabandhu.com",
    title: "Karaya Bandhu Pvt. Ltd. | Incubating India's Gig Economy Ecosystems",
    description: "Premium parent holding company and digital brand incubator building gig economy, regional fintech, logistics, and workforce infrastructure for Tier-2/3 cities.",
    siteName: "Karaya Bandhu",
    images: [
      {
        url: "/training_academy_preview.png",
        width: 1200,
        height: 630,
        alt: "Karaya Bandhu Pvt. Ltd. Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karaya Bandhu Pvt. Ltd. | Incubating India's Gig Economy Ecosystems",
    description: "Premium parent holding company and digital brand incubator building gig economy, regional fintech, logistics, and workforce infrastructure for Tier-2/3 cities.",
    images: ["/training_academy_preview.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans h-full scroll-smooth antialiased dark`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">{children}</body>
    </html>
  );
}

