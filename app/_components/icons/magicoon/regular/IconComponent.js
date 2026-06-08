import * as React from "react";
const SvgIconComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12 13.375 3.948 3.948.863.866L12 23l-3.948-3.948-.864-.866zm-3.084 4.814L12 21.274l3.084-3.087L12 15.103zM5.813 7.188 10.625 12l-4.812 4.811-.865-.863L1 12l3.948-3.948zM2.73 12l3.083 3.084L8.898 12 5.812 8.916zM18.189 7.188 23 12l-3.948 3.948-.866.863L13.375 12l3.948-3.948zM15.104 12l3.082 3.084L21.27 12l-3.08-3.084zM12 1l3.948 3.948.863.865L12 10.625 7.188 5.813l.864-.865zM8.916 5.812 12 8.896l3.084-3.083L12 2.73z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconComponent;
