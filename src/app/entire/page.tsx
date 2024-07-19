'use client'

import Link from "next/link";

export default function EntirePage() {
  return (
    <main className="flex flex-col items-center justify-center h-full maruburi gap-4">
      현대 한글 11,172자
      <div id="characters-container" className="max-h-[500px] overflow-y-scroll">
        <div className="flex flex-wrap text-zinc-800 p-16 w-full">
        {Array.from({ length: 11172 }, (_, index) => (
          <span className="w-8 text-4xl font-arita-serif font-extrabold" key={index}>{String.fromCharCode(index + 44032)}</span>
        ))}
        </div>
      </div>
      <Link className="text-sm text-zinc-400 maruburi hover:text-zinc-500 underline" href="/">
        돌아가기
      </Link>
    </main>
  );
};