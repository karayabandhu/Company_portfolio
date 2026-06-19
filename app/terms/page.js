import TermsOfService from "./TermsClient";

export const metadata = {
  title: "Terms of Service",
  description: "Review the official terms of service, user agreements, intellectual property guidelines, and partner conduct codes for utilizing the Karaya Bandhu platform and incubated systems.",
  keywords: ["Karaya Bandhu Terms", "User Agreement", "Gig Partner Terms", "Terms of Service India"],
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://karayabandhu.com/terms",
    title: "Terms of Service | Karaya Bandhu Pvt. Ltd.",
    description: "Review the official terms of service, user agreements, intellectual property guidelines, and partner conduct codes for utilizing the Karaya Bandhu platform and incubated systems.",
    images: [
      {
        url: "/training_academy_preview.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service | Karaya Bandhu Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Karaya Bandhu Pvt. Ltd.",
    description: "Review the official terms of service, user agreements, intellectual property guidelines, and partner conduct codes for utilizing the Karaya Bandhu platform and incubated systems.",
    images: ["/training_academy_preview.png"],
  },
};

export default function TermsPage() {
  return <TermsOfService />;
}
