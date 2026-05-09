function FormHeader({ children, size = "lg" }) {
  return <div className={size === "sm" ? "space-y-3" : size === "lg" ? "space-y-4" : ""}>{children}</div>;
}
function Title({ children, className }) {
  return <h2 className={`text-display-sm ${className}`}>{children}</h2>;
}
function Description({ children, className }) {
  return <p className={`text-headline-xsm text-neutral-600 ${className}`}>{children}</p>;
}
FormHeader.Title = Title;
FormHeader.Description = Description;

export default FormHeader;
