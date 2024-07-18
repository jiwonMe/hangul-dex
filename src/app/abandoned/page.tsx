import Link from "next/link";

export default function AbandonedPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen maruburi gap-4">
      여기에 외면 받은 글자들이 올거야
      <Link className="text-sm text-zinc-400 maruburi hover:text-zinc-500 underline" href="/">
        돌아가기
      </Link>
    </main>
  );
}
