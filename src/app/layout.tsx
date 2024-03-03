import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import Tabs from "@/components/tabs";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "今日头条",
  description: "今日头条，时时获取新闻",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Tabs />
        {children}
      </body>
    </html>
  );
}
