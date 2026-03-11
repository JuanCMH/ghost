import { cn } from "@/lib/util";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  color?: "rose" | "orange";
  children: React.ReactNode;
}

export const Button = ({ children, color, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 text-white rounded-full",
        color === "rose" ? "bg-rose-300" : "bg-orange-300",
      )}
    >
      {children}
    </Link>
  );
};
