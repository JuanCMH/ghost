import { BackButton } from "@/components/back-button";
import { GhostItem } from "@/components/ghost-item";


export default function Catalog() {
    return (
        <main className="p-4 flex flex-col w-full h-screen">
            <header>
                <BackButton href="/login" />
            </header>
            <div className="py-8 flex gap-2 items-center">
                <h1 className="text-6xl font-extralight">
                    Catalogo
                </h1>
                <p>
                    5/8
                </p>
            </div>


            <GhostItem alt="" href="/" image="/next.svg" name="fantasma1" percentage={80} year={9} />



        </main>
    );
}