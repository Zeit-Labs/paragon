import * as React from "react";

function SvgMapsHomeWork(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path d="M1 11v10h5v-6h4v6h5V11L8 6z" fill="currentColor" />
      <path
        d="M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMapsHomeWork;
