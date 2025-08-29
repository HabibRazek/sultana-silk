import type { Metadata } from "next";
import { Playfair_Display, Inter, Luxurious_Roman, Red_Hat_Display, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

// Luxury serif font for headings and brand
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Clean sans-serif for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Luxurious Roman font for hero headlines
const luxuriousRoman = Luxurious_Roman({
  variable: "--font-luxurious-roman",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Red Hat Display font for navbar and hero text
const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Libre Caslon Text font for elegant serif typography
const libreCaslonText = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sultana Silk - Luxury Silk Scarves & Accessories",
  description: "Discover exquisite handcrafted silk scarves and luxury accessories. Premium quality silk products with timeless elegance and sophisticated designs.",
  keywords: ["silk scarves", "luxury accessories", "premium silk", "handcrafted", "elegant fashion"],
  authors: [{ name: "Sultana Silk" }],
  creator: "Sultana Silk",
  publisher: "Sultana Silk",
  openGraph: {
    title: "Sultana Silk - Luxury Silk Scarves & Accessories",
    description: "Discover exquisite handcrafted silk scarves and luxury accessories.",
    url: "https://sultanasilk.com",
    siteName: "Sultana Silk",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sultana Silk - Luxury Silk Scarves & Accessories",
    description: "Discover exquisite handcrafted silk scarves and luxury accessories.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${luxuriousRoman.variable} ${redHatDisplay.variable} ${libreCaslonText.variable} font-sans antialiased bg-white text-gray-900 selection:bg-amber-100 selection:text-amber-900`}
      >
        {children}
      </body>
    </html>
  );
}
