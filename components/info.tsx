import { cn } from "@/lib/util";

interface InfoProps {
  text: string;
  color: "orange" | "rose";
}

export const Info = ({ text, color }: InfoProps) => {
  return (
    <div
      className={cn(
        "py-4 px-6 rounded-full w-full text-xl",
        color === "rose" ? "bg-rose-200" : "bg-orange-200",
      )}
    >
      {text}
    </div>
  );
};
