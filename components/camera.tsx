import { cn } from "@/lib/util";
import Image from "next/image";
import Link from "next/link";

interface CameraProps {
    image : string;
    href : string;
    alt : string;
}

export const Camera = ({ image, href, alt }: CameraProps) => {
    return (
        <div className="w-full h-full relative">
            <div className="h-full flex justify-center items-center">
                <Image src={image} alt={alt} width={100} height={100} />

            </div>

            <div className="w-full h-42 bg-rose-300 flex justify-center items-center rounded-t-3xl absolute bottom-0">
                <Link href={href}> <div className="size-20 rounded-full bg-white"/>
                </Link>

            </div>
        

        </div>
    )
}