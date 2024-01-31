// Style
import "@/app/styles/globals.scss";
import "@/app/styles/reset.scss";
import styles from "@/app/styles/layout.module.scss";

// Component
import Navbar from "@/app/components/navbar";

// Module
import type { Metadata } from "next";

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
        <div className={styles.menuOverlay} style={{display: "none"}}></div>
        <div className={styles.menuFrame} style={{display: "none"}}>
        Menu Content
        </div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Dev-in.tw",
  description:
    "Dev-in.tw 是一個由 HACO 和 OnCloud 聯合構思的專案，打造一個給予台灣的開發者建立個人子網域的平台，提供設定子網域及簡易 DNS 記錄等功能。",
  applicationName: "Dev-in.tw"
};
