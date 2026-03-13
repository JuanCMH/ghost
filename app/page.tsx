import { Button } from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 flex flex-col items-center justify-center w-full h-full gap-4">
      <Image src="/ghost-logo.jpeg" alt="Ghost logo" width={300} height={300} />
      <div className="w-full flex px-16">
        <Button color="rose" href="/login">
          Iniciar sesión
        </Button>
      </div>
    </main>
  );
}
