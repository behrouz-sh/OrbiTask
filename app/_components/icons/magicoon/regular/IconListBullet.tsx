import * as React from "react";
const SvgIconListBullet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#303030"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 5h12"
    />
    <path
      stroke="#303030"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 5h.009M4 12h.009M4 19h.009"
    />
    <path
      stroke="#303030"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 12h12M8 19h12"
    />
  </svg>
);
export default SvgIconListBullet;
