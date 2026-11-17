import type { Metadata } from "next";
import { rcintelStudy, site } from "@/content";

export const metadata: Metadata = {
  title: rcintelStudy.meta.title,
  description: rcintelStudy.meta.description,
  openGraph: {
    title: rcintelStudy.meta.title,
    description: rcintelStudy.meta.description,
    url: `${site.url}/case-studies/rcintel`,
    type: "article",
  },
};

export default function RCintelCaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
