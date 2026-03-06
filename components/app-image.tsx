import Image from "next/image";

interface AppImageProps {
    src: string;
    size: number;
    alt: string;
}

export const AppImage = ({ src, size, alt }: AppImageProps) => {
    return (
        <Image
            className="overflow-hidden rounded-full"
            src={src}
            alt={alt}
            width={size}
            height={size}
            priority
        />
    )
}