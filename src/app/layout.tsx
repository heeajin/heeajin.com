"use client";

import localFont from "next/font/local";
import "./globals.css";
import SubHeader from "@/components/Header";
import Footer from "@/components/Footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${pretendard.variable} antialiased grid grid-rows-[100px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-pretendard)]`}
      >
        <SubHeader />
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
