import VisionMissionClient from "./VisionMissionClient";

export const metadata = {
  title: "Our Vision & Mission",
  description: "Explore the core vision and mission of Karaya Bandhu Pvt. Ltd. We are incubating high-growth digital brands, scaling robust gig infrastructure, and driving local economic empowerment across India's regional hubs.",
  keywords: [
    "Karaya Bandhu Vision",
    "Karaya Bandhu Mission",
    "Incubating Growth",
    "Scaling Infrastructure",
    "Gig Economy India",
    "Patna Startup Incubator",
    "Digital Inclusion India"
  ],
  alternates: {
    canonical: "/vision-mission",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://karayabandhu.com/vision-mission",
    title: "Our Vision & Mission | Karaya Bandhu Pvt. Ltd.",
    description: "Explore the core vision and mission of Karaya Bandhu Pvt. Ltd. We are incubating high-growth digital brands, scaling robust gig infrastructure, and driving local economic empowerment across India's regional hubs.",
    images: [
      {
        url: "/training_academy_preview.png",
        width: 1200,
        height: 630,
        alt: "Our Vision & Mission | Karaya Bandhu Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Vision & Mission | Karaya Bandhu Pvt. Ltd.",
    description: "Explore the core vision and mission of Karaya Bandhu Pvt. Ltd. We are incubating high-growth digital brands, scaling robust gig infrastructure, and driving local economic empowerment across India's regional hubs.",
    images: ["/training_academy_preview.png"],
  },
};

export default function VisionMissionPage() {
  return <VisionMissionClient />;
}
