import { cn } from "@/lib/util";

interface EmptyStateProps {
  text: string;
  color: "orange" | "rose";
}

export const EmptyState = ({ text, color }: EmptyStateProps) => {
  return (
    <div
      className={cn(
        "flex h-full min-h-64 flex-col items-center justify-center rounded-3xl border border-dashed px-6 text-center",
        color === "rose"
          ? "border-rose-200 bg-rose-50"
          : "border-orange-200 bg-orange-50",
      )}
    >
      <p className="mt-2 text-sm text-gray-500">{text}</p>
    </div>
  );
};
