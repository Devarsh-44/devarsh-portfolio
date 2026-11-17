import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { studio } from "@/content";
import "./rcintel.css";

// Brand kit typefaces (07-Fonts): Sora for display, Inter for body and labels.
const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${studio.name} · ${studio.descriptor} · ${studio.status}`,
  description: studio.summary,
  icons: {
    icon: "/rcintel/rcintel-badge-32px.png",
    apple: "/rcintel/rcintel-badge-180px.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1F2A36",
};

export default function RCintelLayout({ children }: { children: React.ReactNode }) {
  return <div className={`rc ${sora.variable} ${inter.variable}`}>{children}</div>;
}
