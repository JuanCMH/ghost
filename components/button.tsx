import Link from "next/link";
import React from "react"

interface ButtonProps {
    href: string;
    color?: "rose" | "orange"
    children: React.ReactNode;
}

export const Button = ({ children, color, href }: ButtonProps) => {
    return (
        <>
            {
                color === "orange" ?
                    <Link href={href} className="bg-orange-300 px-4 py-2 text-white rounded-full">
                        {children}
                    </Link> :
                    <Link href={href} className="bg-rose-300 px-4 py-2 text-white rounded-full">
                        {children}
                    </Link>
            }
        </>
    )
}