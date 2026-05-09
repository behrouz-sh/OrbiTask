"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
function Button({ style = "filled", size = "lg", icon = false, loading, disable = false, className = null, to = "", onClick, children, props }) {
  const router = useRouter();

  let styleBtn = "";

  return (
    <button
      disabled={disable}
      className={clsx(
        // size
        size === "lg" && `gap-x-2  p-3.5 text-body-md [&_svg]:size-6 ${icon && "px-6 pr-4"}`,
        size === "sm" && `gap-x-1.5 px-6 py-2.5 text-body-md`,
        size === "md" && `gap-x-1 px-4 py-2 [&_svg]:size-5 text-body-sm`,
        size === "tiny" && `gap-x-2 px-3 py-0.5 text-body-xsm`,
        // style
        style === "filled" && "bg-primary-500 hover:bg-primary-600 active:bg-primary-800 disabled:bg-primary-100 text-white disabled:text-primary-200",
        style === "outlined" && "border border-primary-500 hover:border-primary-600 active:border-primary-800 disabled:border-primary-200 text-primary-500 hover:text-primary-600 active:text-primary-800 disabled:text-primary-200",
        style === "text" && "text-primary-500 hover:text-primary-600 active:text-primary-800 disabled:text-primary-200",
        style === "neutral" && "border border-neutral-100 hover:border-neutral-200 active:border-neutral-950 disabled:border-neutral-200 text-neutral-700 hover:text-neutral-900 active:text-neutral-950 disabled:text-neutral-200",
        style === "neutral-text" && "text-neutral-700 hover:text-neutral-900 active:text-neutral-950 disabled:text-neutral-200",

        "flex justify-center items-center rounded-lg transition-colors",
        className,
      )}
      onClick={to ? () => router.push(to) : onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
