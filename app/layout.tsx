import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { PageTransition } from "@/components/transition/PageTransition";
import { site } from "@/content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · ${site.role}`,
  description: site.description,
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description: site.description,
    url: site.url,
    type: "website",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: `${site.name} · ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.description,
    images: ["/images/og-banner.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

// Runs before first paint so repeat visits and reduced-motion users never see
// the intro curtain flash.
const introGate = `try{var d=document.documentElement;if(sessionStorage.getItem("dk-intro")||matchMedia("(prefers-reduced-motion: reduce)").matches){d.dataset.intro="skip"}}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="bg-canvas-grid antialiased" suppressHydrationWarning>
        <Script id="dk-intro-gate" strategy="beforeInteractive">
          {introGate}
        </Script>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
