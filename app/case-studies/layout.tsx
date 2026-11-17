import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Process Breakdowns · Devarsh Kotak",
  description:
    "In-depth design engineering case studies across motorsport telemetry, design systems, and product architecture by Devarsh Kotak.",
  openGraph: {
    title: "Case Studies & Process Breakdowns · Devarsh Kotak",
    description:
      "Engineering calm precision across telemetry, product systems & brand design.",
    url: "https://devarshkotak.com/case-studies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Process Breakdowns · Devarsh Kotak",
    description:
      "Engineering calm precision across telemetry, product systems & brand design.",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
