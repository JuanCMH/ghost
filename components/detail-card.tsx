import { cn } from "@/lib/util";
import React from "react";

interface DetailCardProps {
  text: string;
  color?: "rose" | "orange";
}

export const DetailCard = ({ text, color }: DetailCardProps) => {
  return (
    <div
      className={cn(
        "p-4 rounded-full text-2xl font-light",
        color === "orange" ? "bg-orange-300" : "bg-rose-300",
      )}
    >
      {text}
    </div>
  );
};
