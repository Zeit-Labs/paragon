import * as React from "react";

function SvgNature(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M13 16.12a7 7 0 006.17-6.95c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0011 16.06V20H5v2h14v-2h-6v-3.88z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNature;
