// Style
import "@/app/styles/globals.scss";
import "@/app/styles/reset.scss";

// Component
import Navbar from "@/app/components/navbar";

// Module
import type { Metadata } from "next";
import type { Viewport } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "black",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://beta.dev-in.tw"),
  title: "Dev-in.tw",
  description:
    "Dev-in.tw 是一個由 HACO 和 OnCloud 聯合構思的專案，打造一個給予台灣的開發者建立個人子網域的平台，提供設定子網域及簡易 DNS 記錄等功能。",
  applicationName: "Dev-in.tw",
  authors: [{ name: "LAZCO STUDIO LTD", url: "https://www.lazco.dev" }],
  generator: "LAZCO STUDIO LTD",
  keywords: [
    "dev-in.tw",
    "dev-in",
    "DIT",
    "dit",
    "subdomain",
    "子網域",
    "網域",
    "domain",
    "TW",
    "台灣",
    "Taiwan",
  ],
  referrer: "origin",
  creator: "LAZCO STUDIO LTD",
  publisher: "LAZCO STUDIO LTD",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.dev-in.tw",
    title: "Dev-in.tw",
    description:
      "Dev-in.tw是一個由HACO和OnCloud聯合構思的專案，打造一個給予台灣的開發者建立個人子網域的平台，提供 A、AAAA、CNAME、URI......等功能。",
    images: [
      {
        url: "/images/banner.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev-in.tw",
    description:
      "Dev-in.tw是一個由HACO和OnCloud聯合構思的專案，打造一個給予台灣的開發者建立個人子網域的平台，提供 A、AAAA、CNAME、URI......等功能。",
    images: "/images/banner.png",
  },
};
