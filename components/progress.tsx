import { cn } from "@/lib/util";

interface ProgressProps {
  color?: "orange" | "rose";
  percentage: number;
}

const truePercentage = (value: number) => {
    let truePercentage = 0;
    if (value > 100) truePercentage = 100;
    if (value < 0 ) truePercentage = 0;

    return truePercentage;
}

export const Progress = ({ color, percentage }: ProgressProps) => {

  return (
    <div
      className={cn(
        "rounded-full h-6 W-full",
        color === "rose" ? "bg-rose-100" : "bg-orange-100",
      )}
    >
      <div
        style={{ width: `${truePercentage(percentage)}%` }}
        className={cn(
          "h-full rounded-full",
          color === "rose" ? "bg-rose-300" : "bg-orange-300",
        )}
      />
    </div>
  );
};
