import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRIFT – Premium Sneakers Made in India",
  description:
    "Step into luxury with DRIFT – India’s most premium sneaker brand. Designed for comfort, crafted for style. Glide Beyond the Usual.",
  keywords: [
    "DRIFT",
    "premium sneakers India",
    "Indian sneaker brand",
    "luxury footwear",
    "stylish sneakers",
    "comfortable sneakers",
    "streetwear shoes India",
    "designer sneakers",
  ],
  authors: [{ name: "DRIFT" }],
  openGraph: {
    title: "DRIFT – India's Most Premium Sneakers Brand",
    description:
      "Explore DRIFT: where street-luxury meets comfort. Premium sneakers crafted in India. Glide Beyond the Usual.",
    url: "https://weardrift.store/", // Replace with actual URL
    siteName: "DRIFT",
    type: "website",
    images: [
      {
        url: "https://drift-landing-page.vercel.app/og-image.jpeg", // optional: custom OG image
        width: 1200,
        height: 630,
        alt: "DRIFT Sneaker – Premium Indian Brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DRIFT – Premium Sneakers Made in India",
    description:
      "India’s finest sneaker brand – blending luxury and comfort. Glide Beyond the Usual.",
    creator: "@Drift_India", // Optional
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://weardrift.store/"), // Replace with your site
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
