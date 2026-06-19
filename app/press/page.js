import PressClient from "./PressClient";

export const metadata = {
  title: "Press & Media Center",
  description: "Stay up-to-date with the latest news, official press releases, media coverage, and corporate updates from the Karaya Bandhu network of incubated startup brands.",
  keywords: ["Karaya Bandhu Press", "KB Newsroom", "Karaya Bandhu Media", "Startup Incubator News", "Bihar Startup News"],
  alternates: {
    canonical: "/press",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://karayabandhu.com/press",
    title: "Press & Media Center | Karaya Bandhu Pvt. Ltd.",
    description: "Stay up-to-date with the latest news, official press releases, media coverage, and corporate updates from the Karaya Bandhu network of incubated startup brands.",
    images: [
      {
        url: "/training_academy_preview.png",
        width: 1200,
        height: 630,
        alt: "Press & Media Center | Karaya Bandhu Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Press & Media Center | Karaya Bandhu Pvt. Ltd.",
    description: "Stay up-to-date with the latest news, official press releases, media coverage, and corporate updates from the Karaya Bandhu network of incubated startup brands.",
    images: ["/training_academy_preview.png"],
  },
};

export default function PressPage() {
  return <PressClient />;
}
