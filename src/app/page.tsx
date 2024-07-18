import Image from "next/image";
import RandomCharacter from "./_components/RandomCharacter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-zinc-100">
      <h1 className="text-md text-semibold text-zinc-500">당신의 한글은?</h1>
      <RandomCharacter only상용한글={true} />
    </main>
  );
}
