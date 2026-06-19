import HomeClient from "./HomeClient";

export const metadata = {
  title: "Karaya Bandhu Pvt. Ltd. | Incubating India's Gig Economy Ecosystems",
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
  alternates: {
    canonical: "/",
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
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Karaya Bandhu Pvt. Ltd.",
    "alternateName": "Karaya Bandhu",
    "url": "https://karayabandhu.com",
    "logo": "https://karayabandhu.com/icon.png",
    "sameAs": [
      "https://twitter.com/karayabandhu",
      "https://www.linkedin.com/company/karayabandhu"
    ],
    "description": "Karaya Bandhu Pvt. Ltd. is a premium parent holding company and digital brand incubator building cutting-edge gig economy platforms, micro-fintech, SaaS logistics, and workforce infrastructure to empower Tier-2 and Tier-3 cities in India.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
