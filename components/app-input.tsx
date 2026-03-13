import { Dispatch, SetStateAction } from "react";

interface AppInputprops {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  type: "text" | "password";
}

export const AppInput = ({
  value,
  setValue,
  placeholder,
  type,
}: AppInputprops) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      className="bg-rose-200 px-3 py-2 rounded-full w-full"
    />
  );
};
