import Image from "next/image";
import Link from "next/link";

interface GhostItemProps {
  name: string;
  rarity: string;
  image: string;
  affinityPercentage: number;
  chatImage: string;
  href: string;
  profileHref: string;
}

export const GhostItem = ({
  name,
  rarity,
  image,
  affinityPercentage,
  chatImage,
  href,
  profileHref,
}: GhostItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-1 items-center gap-4 rounded-full bg-rose-100 pr-4">
        <Link href={profileHref} aria-label={`Ver perfil de ${name}`}>
          <div className="relative size-20">
            <Image
              src={image}
              alt={`Fantasma ${name}`}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm capitalize text-gray-500">Rareza: {rarity}</p>
          </div>
          <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white text-center shadow-sm">
            <div>
              <p className="text-lg">{affinityPercentage}%</p>
            </div>
          </div>
        </div>
      </div>
      <Link
        href={href}
        className="flex items-center justify-center rounded-2xl bg-white p-2"
        aria-label={`Hablar con ${name}`}
      >
        <Image
          src={chatImage}
          alt={`Abrir chat con ${name}`}
          width={60}
          height={60}
        />
      </Link>
    </div>
  );
};
