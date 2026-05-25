import { IconInfoCircle, IconOctagonCheck, IconOctagonTimes } from "magicoon";

function AlertUnderInput({ state, text, icon = true }) {
  return (
    <div
      className={`
    ${(state === "info" && "text-neutral-500") || ""}
    ${(state === "error" && "text-semantic-error-500") || ""}
    ${(state === "warning" && "text-semantic-warning-500") || ""}
    ${(state === "success" && "text-semantic-success-500") || ""}
    flex items-center gap-x-1 py-1.5 px-4 size-fit`}
    >
      {icon && (state === "info" || state === "warning") && <IconInfoCircle className="size-4" />}
      {icon && state === "error" && <IconOctagonTimes />}
      {icon && state === "success" && <IconOctagonCheck />}
      <span className="text-body-xsm">{text}</span>
    </div>
  );
}

export default AlertUnderInput;
