import * as React from "react";
const SvgIconBold = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M13 12a3.5 3.5 0 1 0 0-7H7v7m6 0H7m6 0h1a3.5 3.5 0 1 1 0 7H7v-7"
    />
  </svg>
);
export default SvgIconBold;
