import ComingSoonClient from "./ComingSoonClient";

export const metadata = {
  title: "Launch Countdown",
  description: "Karaya Bandhu Pvt. Ltd. is launching soon. Follow our countdown to explore our cutting-edge gig economy platforms, micro-fintech, SaaS logistics, and workforce infrastructure.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/coming-soon",
  },
};

export default function ComingSoonPage() {
  return <ComingSoonClient />;
}
