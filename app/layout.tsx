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
    "low voltage equipment, electrical panels, networking equipment, CCTV, supplier, Albuquerque, New Mexico",
  openGraph: {
    title: "BilusTech LLC - Low Voltage Equipment Supplier",
    description:
      "Professional low voltage equipment supplier serving businesses across the USA",
    url: "https://bilustech.com",
    siteName: "BilusTech LLC",
    type: "website",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BilusTech LLC",
              description: "Low voltage equipment supplier",
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
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-50`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
