import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Capra Construction | Corporate Construction in Northern Cyprus",
    template: "%s | Capra Construction"
  },
  description: siteConfig.description,
  keywords: [
    "Northern Cyprus construction company",
    "TRNC contractor",
    "corporate construction Cyprus",
    "real estate development Northern Cyprus"
  ],
  openGraph: {
    title: "Capra Construction",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: ["/logo.svg"],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Capra Construction",
    description: siteConfig.description,
    images: ["/logo.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&family=Montserrat:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-cloud text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
