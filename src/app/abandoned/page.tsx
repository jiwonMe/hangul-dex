'use client'

import Link from "next/link";

export default function AbandonedPage() {
  const characters = localStorage.getItem('characters') || '';

  return (
    <main className="flex flex-col items-center justify-center h-screen maruburi gap-4">
      선택받지 못한 {characters.length}자
      <div className="text-3xl text-zinc-800 chosun-gs p-16 w-full text-center">
      {characters.split('').map((character, index) => (
          // Generate random number of dots between characters
          `${character}` + (index === characters.length - 1 ? '' : '.'.repeat(Math.floor(Math.random() * 5) + 1))
        ))}
      </div>
      <Link className="text-sm text-zinc-400 maruburi hover:text-zinc-500 underline" href="/">
        돌아가기
      </Link>
    </main>
  );
}
