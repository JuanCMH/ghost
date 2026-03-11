import { BackButton } from "@/components/back-button";
import { Camera } from "@/components/camera";
import { DetailCard } from "@/components/detail-card";
import { GhostItem } from "@/components/ghost-item";
import { Progress } from "@/components/progress";


export default function Catalog() {
    return (
        <main className="p-4 flex flex-col w-full h-screen">
            <header>
                <BackButton href="/login" />
            </header>
            {/* <div className="py-8 flex gap-2 items-center">
                <h1 className="text-6xl font-extralight">
                    Catalogo
                </h1>
                <p>
                    5/8
                </p>
            </div> */}

                <Camera alt="fantasma" href="/" image="/next.svg"/>


        </main>
    );
}