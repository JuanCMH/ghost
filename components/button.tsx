import { cn } from "@/lib/util";
import Link from "next/link";
import React from "react";

type BaseButtonProps = {
  href: string;
  color?: "rose" | "orange";
  children: React.ReactNode;
  className?: string;
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
  type?: never;
  disabled?: never;
};

type NativeButtonProps = Omit<BaseButtonProps, "href"> & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

const buttonStyles = (
  color: ButtonProps["color"],
  className?: string,
  disabled?: boolean,
) => {
  return cn(
    "w-full rounded-full px-4 py-2 text-center text-xl transition-opacity",
    color === "rose" ? "bg-rose-200" : "bg-orange-200",
    disabled ? "cursor-not-allowed opacity-60" : undefined,
    className,
  );
};

export const Button = (props: ButtonProps) => {
  if (props.href) {
    const { children, color, href, className } = props;

    return (
      <Link href={href} className={buttonStyles(color, className)}>
        {children}
      </Link>
    );
  }

  const { children, color, className, disabled, type = "button" } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonStyles(color, className, disabled)}
    >
      {children}
    </button>
  );
};
