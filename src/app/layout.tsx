import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope, Space_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { StatusBar } from "@/components/StatusBar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { attractionSchema, publisherSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/data/site";

const display = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Center of the Universe Tulsa | Visitor Guide", template: "%s | Center of the Universe Tulsa" },
  description: "Visit Tulsa's Center of the Universe, the downtown acoustic anomaly where your voice echoes back in a strange new way. Get current access status, directions, parking, history, maps and nearby attractions.",
  applicationName: site.name,
  category: "travel",
  creator: site.publisher,
  icons: { icon: "/icon.svg" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0d12",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <StatusBar />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <JsonLd data={[websiteSchema, publisherSchema, attractionSchema]} />
      </body>
      <GoogleAnalytics gaId="G-GR83XS5YKQ" />
    </html>
  );
}
