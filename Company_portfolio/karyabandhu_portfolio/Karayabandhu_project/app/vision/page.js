import VisionClient from "./VisionClient";

export const metadata = {
  title: "Our Vision",
  description: "Discover the core vision of Karaya Bandhu Pvt. Ltd. We aim to bridge the gap between service seekers and skilled professionals across India, ensuring quality, trust, and convenience.",
  keywords: [
    "Karaya Bandhu Vision",
    "Trusted Connections",
    "Service Seekers India",
    "Quality Services",
    "Empowering Communities",
    "Gig Marketplace India"
  ],
  alternates: {
    canonical: "/vision",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://karayabandhu.com/vision",
    title: "Our Vision | Karaya Bandhu Pvt. Ltd.",
    description: "To bridge the gap between service seekers and skilled professionals across India, ensuring quality, trust, and convenience in every interaction.",
    images: [
      {
        url: "/training_academy_preview.png",
        width: 1200,
        height: 630,
        alt: "Our Vision | Karaya Bandhu Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Vision | Karaya Bandhu Pvt. Ltd.",
    description: "To bridge the gap between service seekers and skilled professionals across India, ensuring quality, trust, and convenience in every interaction.",
    images: ["/training_academy_preview.png"],
  },
};

export default function VisionPage() {
  return <VisionClient />;
}
