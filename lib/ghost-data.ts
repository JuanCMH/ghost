import ghostTypes from "@/lib/ghost-types.json";

export type GhostType = {
  id: string;
  name: string;
  image: string;
  rarity: string;
  weight: number;
  yearsDead: number;
  deathCause: string;
  cemetery: string;
};

export const allGhostTypes = ghostTypes as GhostType[];

export const getGhostById = (ghostId: string | null | undefined) => {
  if (!ghostId) {
    return null;
  }

  return allGhostTypes.find((ghost) => ghost.id === ghostId) ?? null;
};
