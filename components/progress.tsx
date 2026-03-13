import { cn } from "@/lib/util";

interface ProgressProps {
  color?: "orange" | "rose";
  percentage: number;
}

const truePercentage = (value: number) => {
  if (value > 100) return 100;
  if (value < 0) return 0;

  return value;
};

export const Progress = ({ color, percentage }: ProgressProps) => {
  return (
    <div
      className={cn(
        "h-6 w-full rounded-full overflow-hidden",
        color === "rose" ? "bg-rose-100" : "bg-orange-100",
      )}
    >
      <div
        style={{ width: `${truePercentage(percentage)}%` }}
        className={cn(
          "h-full rounded-full transition-[width] duration-300",
          color === "rose" ? "bg-rose-300" : "bg-orange-300",
        )}
      />
    </div>
  );
};
