import MissionClient from "./MissionClient";

export const metadata = {
  title: "Our Mission",
  description: "Discover the mission of Karaya Bandhu Pvt. Ltd. We build low-latency mass-consumer systems optimized for high throughput, enabling seamless service connections across all tiers of the Indian economy.",
  keywords: [
    "Karaya Bandhu Mission",
    "Next-Gen Services",
    "Scalable Marketplaces",
    "Gig Economy Infrastructure",
    "Mass Consumer Systems",
    "Empowering India"
  ],
  alternates: {
    canonical: "/mission",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://karayabandhu.com/mission",
    title: "Our Mission | Karaya Bandhu Pvt. Ltd.",
    description: "To build low-latency, mass-consumer systems optimized for high throughput and rapid growth, enabling seamless connections across all tiers of the Indian economy.",
    images: [
      {
        url: "/training_academy_preview.png",
        width: 1200,
        height: 630,
        alt: "Our Mission | Karaya Bandhu Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Mission | Karaya Bandhu Pvt. Ltd.",
    description: "To build low-latency, mass-consumer systems optimized for high throughput and rapid growth, enabling seamless connections across all tiers of the Indian economy.",
    images: ["/training_academy_preview.png"],
  },
};

export default function MissionPage() {
  return <MissionClient />;
}
