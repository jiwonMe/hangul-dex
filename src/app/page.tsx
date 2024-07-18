import Image from "next/image";
import RandomCharacter from "./_components/RandomCharacter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-100">
      <div className="flex flex-col items-center">
      <h1 className="text-md text-semibold text-zinc-500">당신의 한글은?</h1>
      <RandomCharacter only상용한글={true} />
      </div>
      <Image src="/한글도감_로고.svg" alt="한글도감 로고" width={80} height={35} />
    </main>
  );
}
