import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BilusTech LLC - Low Voltage Equipment Supplier | Albuquerque, NM",
  description:
    "BilusTech LLC provides professional low voltage equipment including electrical panels, networking solutions, and CCTV systems. Serving businesses across the USA from Albuquerque, New Mexico.",
  keywords:
    "low voltage equipment, electrical panels, networking equipment, CCTV, supplier, Albuquerque, New Mexico, electrical contractor",
  authors: [{ name: "BilusTech LLC" }],
  creator: "BilusTech LLC",
  publisher: "BilusTech LLC",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png" },
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "BilusTech LLC - Professional Low Voltage Equipment Supplier",
    description:
      "Quality electrical panels, networking equipment, and CCTV systems for businesses across the USA. Competitive pricing with expert support.",
    url: "https://bilustech.com",
    siteName: "BilusTech LLC",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://bilustech.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BilusTech Professional Low Voltage Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BilusTech LLC - Low Voltage Equipment Supplier",
    description: "Professional electrical panels, networking equipment, and CCTV systems",
    images: ["https://bilustech.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://bilustech.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon - SVG (primary, scales perfectly) */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        {/* Favicon - PNG Fallback for older browsers */}
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        {/* Apple Touch Icon for iOS */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Web App Manifest for PWA */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color */}
        <meta name="theme-color" content="#003d82" />
        <meta name="msapplication-TileColor" content="#003d82" />

        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BilusTech" />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BilusTech LLC",
              description: "Professional low voltage equipment supplier",
              url: "https://bilustech.com",
              telephone: "+1-738-966-6630",
              email: "ceo@bilustech.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2201 Menaul Blvd NE, Ste A",
                addressLocality: "Albuquerque",
                addressRegion: "NM",
                postalCode: "87107",
                addressCountry: "US",
              },
              priceRange: "$$",
              areaServed: "US",
              image: "https://bilustech.com/og-image.png",
              sameAs: [
                "https://www.facebook.com/bilustech",
                "https://www.linkedin.com/company/bilustech",
              ],
              knowsAbout: [
                "Electrical Panels",
                "Networking Equipment",
                "CCTV Systems",
                "Low Voltage Equipment",
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BilusTech LLC",
              url: "https://bilustech.com",
              logo: "https://bilustech.com/logo.png",
              description: "Professional low voltage equipment supplier based in Albuquerque, NM",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2201 Menaul Blvd NE, Ste A",
                addressLocality: "Albuquerque",
                addressRegion: "NM",
                postalCode: "87107",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-738-966-6630",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-50 dark:bg-slate-900`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
