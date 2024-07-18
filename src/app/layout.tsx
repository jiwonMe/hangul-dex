import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "한글도감",
  description: "한글 한글 채워가보자",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex h-full flex-col bg-zinc-100 relative">
        <div className="flex justify-center items-center h-24">
          <Image src="/한글도감_로고.svg" alt="한글도감 로고" width={80} height={35} className="h-10"/>
        </div>
      {children}
      </body>
    </html>
  );
}
