"use client";

import { allGhostTypes, type GhostType } from "@/lib/ghost-data";
import { useSyncExternalStore } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const getAvailableGhosts = (capturedGhosts: GhostType[]) => {
  return allGhostTypes.filter((ghost) => {
    return !capturedGhosts.some(
      (capturedGhost) => capturedGhost.id === ghost.id,
    );
  });
};

const pickRandomGhost = (ghosts: GhostType[]) => {
  if (ghosts.length === 0) {
    return null;
  }

  const totalWeight = ghosts.reduce((sum, ghost) => sum + ghost.weight, 0);
  let randomValue = Math.random() * totalWeight;

  for (const ghost of ghosts) {
    randomValue -= ghost.weight;

    if (randomValue < 0) {
      return ghost;
    }
  }

  return ghosts[ghosts.length - 1];
};

type GhostStore = {
  capturedGhosts: GhostType[];
  ghostMessages: Record<string, GhostChatMessage[]>;
  activeGhost: GhostType | null;
  setRandomAvailableGhost: () => void;
  captureActiveGhost: () => void;
  initializeGhostMessages: (
    ghostId: string,
    messages: GhostChatMessage[],
  ) => void;
  addGhostMessage: (ghostId: string, message: GhostChatMessage) => void;
  resetCatalog: () => void;
};

export type GhostChatMessage = {
  id: string;
  from: "ghost" | "user";
  role: "assistant" | "user";
  user: string;
  text: string;
  date: string;
};

export const useGhostStore = create<GhostStore>()(
  persist(
    (set) => ({
      capturedGhosts: [],
      ghostMessages: {},
      activeGhost: null,
      setRandomAvailableGhost: () => {
        set((state) => ({
          activeGhost: pickRandomGhost(
            getAvailableGhosts(state.capturedGhosts),
          ),
        }));
      },
      captureActiveGhost: () => {
        set((state) => {
          if (!state.activeGhost) {
            return state;
          }

          const alreadyCaptured = state.capturedGhosts.some((ghost) => {
            return ghost.id === state.activeGhost?.id;
          });

          const nextCapturedGhosts = alreadyCaptured
            ? state.capturedGhosts
            : [...state.capturedGhosts, state.activeGhost];

          return {
            capturedGhosts: nextCapturedGhosts,
            activeGhost: pickRandomGhost(
              getAvailableGhosts(nextCapturedGhosts),
            ),
          };
        });
      },
      initializeGhostMessages: (ghostId, messages) => {
        set((state) => ({
          ghostMessages: state.ghostMessages[ghostId]?.length
            ? state.ghostMessages
            : { ...state.ghostMessages, [ghostId]: messages },
        }));
      },
      addGhostMessage: (ghostId, message) => {
        set((state) => ({
          ghostMessages: {
            ...state.ghostMessages,
            [ghostId]: [...(state.ghostMessages[ghostId] ?? []), message],
          },
        }));
      },
      resetCatalog: () => {
        set({ capturedGhosts: [], ghostMessages: {}, activeGhost: null });
      },
    }),
    {
      name: "ghost-catalog",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        capturedGhosts: state.capturedGhosts,
        ghostMessages: state.ghostMessages,
      }),
    },
  ),
);

export const useGhostStoreHydrated = () => {
  return useSyncExternalStore(
    (callback) => {
      const unsubscribeHydrate = useGhostStore.persist.onHydrate(callback);
      const unsubscribeFinishHydration =
        useGhostStore.persist.onFinishHydration(callback);

      return () => {
        unsubscribeHydrate();
        unsubscribeFinishHydration();
      };
    },
    () => useGhostStore.persist.hasHydrated(),
    () => false,
  );
};
