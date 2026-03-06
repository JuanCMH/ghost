import { Button } from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 flex flex-col items-center justify-center w-full h-screen gap-32">
      <div className="">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </div>
      <Button color="orange" href="/login">
        Iniciar sesion
      </Button>
    </main>
  );
}
