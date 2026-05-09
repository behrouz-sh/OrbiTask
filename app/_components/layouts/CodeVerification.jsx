"use client";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function CodeVerification({ length = 6, expectedCode = "123456", onVerify }) {
  const { register, setValue } = useForm();

  const [codes, setCodes] = useState(Array(length).fill(""));
  const [state, setState] = useState(null); // 'success', 'error', null
  const inputRefs = useRef([]);
  const code = codes.join("");
  const isSubmitting = useRef(false);
  useEffect(() => {
    setCodes(Array(length).fill(""));
    setState(null);
    inputRefs.current = [];
    isSubmitting.current = false;
  }, [length]);

  const autoSubmit = (newCodes) => {
    const isAllFilled = newCodes.every((c) => c !== "");
    if (isAllFilled && !isSubmitting.current) {
      isSubmitting.current = true;

      const enteredCode = newCodes.join("");
      const isValid = enteredCode === expectedCode;

      setState(isValid ? "success" : "error");
      setValue("code", enteredCode);

      if (onVerify) {
        onVerify({ code: enteredCode, isValid });
      }

      isSubmitting.current = false;
    }
  };

  const handleCodeChange = (index, value) => {
    setState(null);
    isSubmitting.current = false;

    if (value === "" || /^\d$/.test(value)) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
      setValue("code", newCodes.join(""));

      if (value !== "" && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      setTimeout(() => {
        setCodes((current) => {
          autoSubmit(current);
          return current;
        });
      }, 0);
    }
  };

  useEffect(() => {
    const isAllFilled = codes.every((c) => c !== "");
    if (isAllFilled && codes.length === length && !isSubmitting.current) {
      autoSubmit(codes);
    }
  }, [codes]);

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (codes[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    const digits = pastedData.match(/\d/g) || [];

    const newCodes = [...codes];
    for (let i = 0; i < Math.min(digits.length, length); i++) {
      newCodes[i] = digits[i];
    }
    setCodes(newCodes);
    setValue("code", newCodes.join(""));

    const nextEmptyIndex = newCodes.findIndex((code) => code === "");
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    }

    if (newCodes.every((c) => c !== "")) {
      autoSubmit(newCodes);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex justify-center gap-3" onPaste={handlePaste}>
        {codes.map((codeValue, idx) => (
          <input
            key={idx}
            ref={(el) => {
              if (el) inputRefs.current[idx] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={codeValue}
            onChange={(e) => handleCodeChange(idx, e.target.value)}
            onKeyDown={(e) => handleKeyDown(idx, e)}
            className={clsx(
              state === "error" && "border-semantic-error-300! ring-1 ring-semantic-error-300",
              state === "success" && "border-semantic-success-300! ring-1 ring-semantic-success-300",

              "flex items-center justify-center text-center text-label-md size-12 rounded-lg bg-white text-neutral-950 outline-0 border border-neutral-100 focus:border-primary-500  disabled:border-neutral-100  disabled:placeholder:text-neutral-100",
            )}
            autoFocus={idx === 0}
            disabled={state === "success"}
          />
        ))}
      </div>

      <input type="hidden" {...register("code")} value={code} className="hidden" />
    </div>
  );
}
