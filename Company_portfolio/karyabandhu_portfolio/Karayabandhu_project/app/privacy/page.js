import PrivacyClient from "./PrivacyClient";

export const metadata = {
  title: "Privacy Policy",
  description: "Read the official privacy policy of Karaya Bandhu Pvt. Ltd. to understand how we collect, safeguard, and use your personal information and identity records across our regional startup incubator ecosystems.",
  keywords: ["Karaya Bandhu Privacy", "Data Security", "Compliance Policy India", "Gig Economy Privacy"],
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://karayabandhu.com/privacy",
    title: "Privacy Policy | Karaya Bandhu Pvt. Ltd.",
    description: "Read the official privacy policy of Karaya Bandhu Pvt. Ltd. to understand how we collect, safeguard, and use your personal information and identity records across our regional startup incubator ecosystems.",
    images: [
      {
        url: "/training_academy_preview.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | Karaya Bandhu Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Karaya Bandhu Pvt. Ltd.",
    description: "Read the official privacy policy of Karaya Bandhu Pvt. Ltd. to understand how we collect, safeguard, and use your personal information and identity records across our regional startup incubator ecosystems.",
    images: ["/training_academy_preview.png"],
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
