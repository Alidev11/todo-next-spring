import Image from "next/image";
import NavBar from "./navBar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NavBar/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark"
          src="/logo.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
