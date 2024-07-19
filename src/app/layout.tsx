import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

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
        <div className="flex justify-between items-center h-24 px-16">
          <Image src="/한글도감_로고.svg" alt="한글도감 로고" width={80} height={35} className="h-10"/>
          <Link href="/entire" className="text-sm text-zinc-400 maruburi hover:text-zinc-500 underline">전체</Link>
        </div>
      {children}
      </body>
    </html>
  );
}
