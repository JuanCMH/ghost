"use client";

import Link from "next/link";
import Image from "next/image";
import { type GhostType } from "@/lib/ghost-data";
import { BackButton } from "@/components/back-button";
import { Info } from "@/components/info";
import { useGhostStore, useGhostStoreHydrated } from "@/lib/ghost-store";

export const GhostProfileView = ({ ghost }: { ghost: GhostType }) => {
  const hasHydrated = useGhostStoreHydrated();
  const isCaptured = useGhostStore((state) => {
    return state.capturedGhosts.some(
      (capturedGhost) => capturedGhost.id === ghost.id,
    );
  });

  return (
    <main className="flex min-h-screen flex-col gap-6 p-4">
      <div className="w-full">
        <BackButton href="/home" />
      </div>

      <section className="rounded-4xl bg-linear-to-br from-rose-100 via-orange-50 to-white px-5 py-8 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-white/80 p-4 shadow-sm overflow-hidden">
            <Image
              src={ghost.image}
              alt={`Fantasma ${ghost.name}`}
              width={180}
              height={180}
              priority
            />
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-gray-500">
            Perfil espectral
          </p>
          <h1 className="mt-2 text-4xl font-semibold">{ghost.name}</h1>
          <p className="mt-2 text-sm capitalize text-gray-500">
            Rareza: {ghost.rarity}
          </p>
          <span className="mt-4 rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow-sm">
            {hasHydrated && isCaptured ? "Capturado" : "Aún no capturado"}
          </span>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <Info color="rose" text={`${ghost.yearsDead} Años de muerto`} />
        <Info color="rose" text={`${ghost.deathCause}`} />
        <Info color="rose" text={`${ghost.cemetery}`} />
      </section>

      <div className="mt-auto flex gap-3 pb-4">
        <Link
          href={`/chat?ghost=${ghost.id}`}
          className="w-full rounded-full bg-rose-200 px-4 py-3 text-center text-lg"
        >
          Iniciar chat
        </Link>
      </div>
    </main>
  );
};
