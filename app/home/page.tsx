"use client";

import { Button } from "@/components/button";
import { allGhostTypes } from "@/lib/ghost-data";
import { GhostItem } from "@/components/ghost-item";
import { BackButton } from "@/components/back-button";
import { EmptyState } from "@/components/empty-state";
import { useGhostStore, useGhostStoreHydrated } from "@/lib/ghost-store";

const CHAT_PROGRESS_TARGET = 500;

export default function Catalog() {
  const hydrated = useGhostStoreHydrated();
  const capturedGhosts = useGhostStore((state) => state.capturedGhosts);
  const ghostMessages = useGhostStore((state) => state.ghostMessages);

  return (
    <main className="p-4 flex flex-col w-full h-full gap-4">
      <div className="w-full">
        <BackButton href="/" />
      </div>
      <div className="flex gap-1 items-center mt-4">
        <h1 className="text-4xl">Catálogo</h1>
        <p className="mt-1 text-lg text-gray-500">
          {hydrated
            ? `${capturedGhosts.length}/${allGhostTypes.length}`
            : `0/${allGhostTypes.length}`}
        </p>
      </div>
      <div className="h-full overflow-y-auto pb-2">
        {hydrated && capturedGhosts.length > 0 ? (
          <div className="flex flex-col gap-3">
            {capturedGhosts.map((ghost) => {
              const affinityPercentage = Math.round(
                (Math.min(
                  ghostMessages[ghost.id]?.length ?? 0,
                  CHAT_PROGRESS_TARGET,
                ) /
                  CHAT_PROGRESS_TARGET) *
                  100,
              );

              return (
                <GhostItem
                  key={ghost.id}
                  name={ghost.name}
                  rarity={ghost.rarity}
                  image={ghost.image}
                  affinityPercentage={hydrated ? affinityPercentage : 0}
                  chatImage="/chat.png"
                  href={`/chat?ghost=${ghost.id}`}
                  profileHref={`/ghost/${ghost.id}`}
                />
              );
            })}
          </div>
        ) : (
          <EmptyState
            color="rose"
            text="Entra a la cámara y captura tu primer fantasma para verlo aquí."
          />
        )}
      </div>
      <div className="flex w-full mb-4 px-8">
        <Button href="/camera" color="orange">
          Detectar fantasma
        </Button>
      </div>
    </main>
  );
}
