import React from "react";

function HtmlIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      // height="800"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path fill="#E44D26" d="M6 28L4 3h24l-2 25-10 3-10-3z"></path>
      <path fill="#F16529" d="M26 5H16v24.5l8-2.5 2-22z"></path>
      <path
        fill="#fff"
        d="M9.5 17.5L8.5 8H24l-.5 3h-12l.5 3.5h11L22 24l-6 2-6-2-.5-5h3l.5 2.5 3 1 3-1 .5-4h-10z"
      ></path>
    </svg>
  );
}

export default HtmlIcon;
