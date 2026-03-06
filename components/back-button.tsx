import { RiArrowLeftSLine } from "@remixicon/react"
import Link from "next/link"

interface ButtonProps {
    href: string,
}

export const BackButton = ({ href }: ButtonProps) => {
    return (
        <Link href={href}>
            <div className="flex items-center justify-center size-8 rounded-full bg-rose-200">
                <RiArrowLeftSLine />
            </div>
        </Link>
    )
}