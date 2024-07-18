import LinkToAbandoned from "./_components/LinkToAbandoned";
import { RandomCharacter2D } from "./_components/RandomCharacter2D";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex-grow flex flex-col p-12 items-center">
        <RandomCharacter2D only상용한글={true} />
      </div>
      <div className="flex justify-center items-center h-24">
        <LinkToAbandoned />
      </div>
    </main>
  );
}
