import type { Metadata } from "next";

// Style
import "@/app/styles/globals.scss";
import "@/app/styles/reset.scss";

// Component
import Navbar from "@/app/components/navbar";

export default function RootLayout({
  children
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

export const metadata: Metadata = {
  title: "Dev-in.tw",
  description:
    "Dev-in.tw是一個由HACO和OnCloud聯合構思的專案，打造一個給予台灣的開發者建立個人子網域的平台，提供 A、AAAA、CNAME、URI......等功能。",
  applicationName: "Dev-in.tw"
};
