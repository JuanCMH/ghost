import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface AppInputprops {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    placeholder: string;
    type: "text" | "password"


}

export const AppInput = ({ value, setValue, placeholder, type }: AppInputprops) => {
    return (
        <input
            className="bg-rose-200 px-3 py-2 rounded-full" 
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
        />
    )
}