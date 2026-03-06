import { cn } from "@/lib/util";

interface MessagenProps {
    user: string;
    text: string;
    date?: string;
    from: "ghost" | "user";
}

export const Message = ({ user, text, date, from }: MessagenProps) => {
    return (
        <div className={cn("bg-orange-200 rounded-full py-4 px-6", from === "ghost" ? "mr-16":"ml-16")}>
            <div className="flex gap-2 justify-between font-bold" >
                <h3>{user}</h3>
                <p>{date ? date : "12:00"}</p>
            </div>
            <span className="text-sm">{text}</span>
        </div>
    )
}