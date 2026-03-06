import Image from "next/image";
import Link from "next/link";

interface GhostItemProps {
    name: string;
    year: number;
    percentage: number;
    image: string;
    alt: string;
    href: string;
}

export const GhostItem = ({ name, year, percentage, image, alt, href }: GhostItemProps) => {
    return (
        <div className="flex gap-4">
            <div className="flex bg-rose-200 text-white items-center rounded-full pr-2">
                <div>
                    <Image src={image} alt={alt} width={100}
                        height={20} />
                </div>
                <div className="p-4">
                    <h3 className="font-bold">{name}</h3>
                    <p>{year} años</p>
                    <p>amigable</p>
                </div>
                <div className="bg-white px-1 py-2 rounded-full text-black text-sm">
                    {percentage}%
                </div>
            </div>
            <Link href={href}>
                M
            </Link>
        </div>
    )
}