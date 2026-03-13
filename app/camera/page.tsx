"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Camera } from "@/components/camera";
import { BackButton } from "@/components/back-button";
import { allGhostTypes } from "@/lib/ghost-data";
import { useGhostStore, useGhostStoreHydrated } from "@/lib/ghost-store";

export default function Catalog() {
  const router = useRouter();
  const hydrated = useGhostStoreHydrated();
  const activeGhost = useGhostStore((state) => state.activeGhost);
  const capturedGhosts = useGhostStore((state) => state.capturedGhosts);
  const setRandomAvailableGhost = useGhostStore(
    (state) => state.setRandomAvailableGhost,
  );
  const captureActiveGhost = useGhostStore((state) => state.captureActiveGhost);

  const remainingGhosts = useMemo(() => {
    return allGhostTypes.filter((ghost) => {
      return !capturedGhosts.some(
        (capturedGhost) => capturedGhost.id === ghost.id,
      );
    });
  }, [capturedGhosts]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    if (remainingGhosts.length > 0) {
      setRandomAvailableGhost();
    }
  }, [hydrated, remainingGhosts.length, setRandomAvailableGhost]);

  const handleCapture = () => {
    if (!activeGhost) {
      return;
    }

    captureActiveGhost();
    router.push(`/chat?ghost=${activeGhost.id}`);
  };

  return (
    <main className="flex flex-col w-full h-full">
      <div className="w-full flex justify-between p-4">
        <BackButton href="/home" />
      </div>
      <div className="px-4">
        <h1 className="text-3xl mt-2">
          {activeGhost ? activeGhost.name : "No quedan fantasmas por capturar"}
        </h1>
        {activeGhost ? (
          <p className="mt-2 inline-flex w-fit rounded-full bg-rose-100 px-3 py-1 text-sm capitalize text-rose-700">
            Rareza: {activeGhost.rarity}
          </p>
        ) : null}
        <p className="text-gray-500 mt-2">
          {!activeGhost && "Ya capturaste todos los fantasmas disponibles."}
        </p>
      </div>
      <Camera
        image={activeGhost?.image ?? "/ghost-logo.jpeg"}
        alt={activeGhost ? `Fantasma ${activeGhost.name}` : "Catálogo completo"}
        buttonLabel={
          activeGhost ? `Capturar ${activeGhost.name}` : "Catálogo completo"
        }
        onCapture={handleCapture}
        disabled={!activeGhost}
      />
    </main>
  );
}
