"use client";
import { useRef, useState } from "react";
import useClickOutside from "@/app/_hooks/useClickOutside";
import clsx from "clsx";

import { IconEye, IconEyeClosed, IconInfoCircle } from "components/icons/magicoon/regular";

import AlertUnderInput from "components/layouts/AlertUnderInput";

function Input({ type = "text", placeholder, label, required = false, disabled = false, size = "lg", icon, register, info, state, massage, maxLength }) {
  const [showPassword, setShowPassword] = useState(false);
  const [cherCount, setCherCount] = useState(0);
  const inputRef = useRef(null);
  useClickOutside(inputRef, () => {
    if (showPassword) setShowPassword(false);
  });

  const handleCherCount = (e) => setCherCount(e.target.value.length);
  return (
    <div className="group relative h-fit" ref={inputRef}>
      {label && (
        <label
          className={clsx(
            disabled === true && "text-neutral-100",
            size === "lg" && "-top-4",
            size === "md" && "-top-5",
            size === "sm" && "-top-5.5",
            size === "xsm" && "hidden",

            "left-3 absolute bg-white px-2 py-1 rounded-lg h-7be text-title-3xsm group-focus-within:text-primary-500",
          )}
        >
          {label}
          {required && <span className="text-semantic-error-500 text-title-2xsm">*</span>}
        </label>
      )}
      <div
        className={clsx(
          disabled && "[&_svg]:text-neutral-100 [&_svg]:hover:text-neutral-100",
          size === "lg" && "[&_svg]:left-4 [&_svg]:top-4 [&_svg]:size-6 ",
          size === "md" && "[&_svg]:left-3 [&_svg]:top-3 [&_svg]:size-6 ",
          size === "sm" && "[&_svg]:left-2.5 [&_svg]:top-2.5 [&_svg]:size-5 ",
          size === "xsm" && "[&_svg]:left-2 [&_svg]:top-2 [&_svg]:size-4 ",

          "[&_svg]:absolute [&_svg]:text-neutral-400 group-hover:[&_svg]:text-neutral-600  group-focus-within:[&_svg]:text-neutral-950 group-focus-within:hover:[&_svg]:text-neutral-950 group-[&:has(input:not(:placeholder-shown))]:[&_svg]:text-neutral-950",
        )}
      >
        {icon}
        {type !== "text-area" ? (
          <input
            type={type !== "password" ? type : showPassword ? "text" : "password"}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={clsx(
              state === "error" && "border-semantic-error-500 hover:border-semantic-error-600",
              state === "success" && "border-semantic-success-500 hover:border-semantic-success-600",
              state === "warning" && "border-semantic-warning-500 hover:border-semantic-warning-600",
              size === "lg" && `p-3.25 ${icon && "pl-11.75"} w-full text-body-md`,
              size === "md" && `p-3  ${icon && "pl-10.5"} w-full text-body-md`,
              size === "sm" && `p-2.5 ${icon && "pl-8.5"} w-full text-body-sm`,
              size === "xsm" && `py-1.25 px-2 pl-8 w-full text-body-xsm`,

              "rounded-lg bg-white text-neutral-950 placeholder:text-neutral-400 outline-0 border border-neutral-400  hover:border-neutral-600  hover:placeholder:text-neutral-600 focus:border-primary-500  disabled:border-neutral-100  disabled:placeholder:text-neutral-100 not-placeholder-shown:border-neutral-950 not-placeholder-shown:text-neutral-950",
            )}
            {...register}
          />
        ) : (
          <textarea
            type={type !== "password" ? type : showPassword ? "text" : "password"}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            maxLength={maxLength}
            onChange={handleCherCount}
            className={clsx(
              state === "error" && "border-semantic-error-500 hover:border-semantic-error-600",
              state === "success" && "border-semantic-success-500 hover:border-semantic-success-600",
              state === "warning" && "border-semantic-warning-500 hover:border-semantic-warning-600",

              "h-25 w-full p-4 rounded-lg bg-white text-neutral-950 placeholder:text-neutral-400 outline-0 border border-neutral-400  hover:border-neutral-600  hover:placeholder:text-neutral-600 focus:border-primary-500  disabled:border-neutral-100  disabled:placeholder:text-neutral-100 not-placeholder-shown:border-neutral-950 not-placeholder-shown:text-neutral-950",
            )}
            {...register}
          />
        )}
        {type === "password" && (
          <span
            role="button"
            onClick={() => setShowPassword((toggle) => !toggle)}
            className={clsx(
              size === "lg" && "[&_svg]:p-4",
              size === "md" && "[&_svg]:p-3",
              size === "sm" && "[&_svg]:p-2.5",
              size === "xsm" && "[&_svg]:p-2",

              "[&_svg]:inset-auto! [&_svg]:top-0! [&_svg]:right-0! [&_svg]:w-auto! [&_svg]:h-full!",
            )}
          >
            {showPassword ? <IconEye /> : <IconEyeClosed />}
          </span>
        )}
      </div>
      {massage && (
        <div
          className={clsx(
            type === "text-area" && "h-8.25",

            "flex justify-between items-center",
          )}
        >
          <AlertUnderInput state={state || "info"} text={massage} />
          {maxLength && (
            <div className="flex items-center gap-x-1 pr-4 text-neutral-700">
              <IconInfoCircle />
              <span className="text-label-2xsm">
                {cherCount} / {maxLength}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Input;
