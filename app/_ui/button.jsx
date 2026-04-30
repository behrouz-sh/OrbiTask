"use client";
import { useRouter } from "next/navigation";
function Button({ style = "filled", size = "lg", icon = false, loading, disable = false, className = null, to = "", onClick, children }) {
  const router = useRouter();

  let sizeBtn = "";
  if (size === "lg") sizeBtn = `gap-x-2 px-6 py-3.5 body__medium [&_svg]:size-6 ${icon ? "pr-4" : null}`;
  else if (size === "md") sizeBtn = `gap-x-1.5 px-6 py-2.5 body__medium`;
  else if (size === "sm") sizeBtn = `gap-x-1 px-4 py-2 body__small`;
  else if (size === "tiny") sizeBtn = `gap-x-2 px-3 py-0.5 body__xSmall`;

  let styleBtn = "";
  if (style === "filled") styleBtn = "bg-primary-500 hover:bg-primary-600 active:bg-primary-800 disabled:bg-primary-100 text-white disabled:text-primary-200";
  else if (style === "outlined") styleBtn = "border border-primary-500 hover:border-primary-600 active:border-primary-800 disabled:border-primary-200 text-primary-500 hover:text-primary-600 active:text-primary-800 disabled:text-primary-200";
  else if (style === "text") styleBtn = "text-primary-500 hover:text-primary-600 active:text-primary-800 disabled:text-primary-200";
  else if (style === "neutral") styleBtn = "border border-neutral-100 hover:border-neutral-200 active:border-neutral-950 disabled:border-neutral-200 text-neutral-700 hover:text-neutral-900 active:text-neutral-950 disabled:text-neutral-200";
  else if (style === "neutral-text") styleBtn = "text-neutral-700 hover:text-neutral-900 active:text-neutral-950 disabled:text-neutral-200";

  const _style = `flex justify-center items-center rounded-lg transition-colors ${styleBtn} ${sizeBtn} ${className}`;
  return (
    <button disabled={disable} className={_style} onClick={to ? () => router.push(to) : onClick}>
      {children}
    </button>
  );
}

export default Button;
