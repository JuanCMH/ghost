import { GhostProfileView } from "@/components/ghost-profile-view";
import { getGhostById } from "@/lib/ghost-data";

type GhostProfilePageProps = {
  params: Promise<{
    ghostId: string;
  }>;
};

export default async function GhostProfilePage({
  params,
}: GhostProfilePageProps) {
  const { ghostId } = await params;
  const ghost = getGhostById(ghostId);

  if (!ghost) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6 text-center">
        <div className="rounded-4xl bg-rose-50 px-6 py-8">
          <h1 className="text-3xl font-semibold">Fantasma no encontrado</h1>
          <p className="mt-2 text-sm text-gray-500">
            Este perfil no existe en el catálogo espectral.
          </p>
        </div>
      </main>
    );
  }

  return <GhostProfileView ghost={ghost} />;
}
