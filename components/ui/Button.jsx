"use client";

import React from "react";
import clsx from "clsx";

export default function Button({ href, isPrimary, label, disabled = false }) {
  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
  };
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={clsx(
        "px-4 py-2 rounded-md cursor-pointer text-sm md:text-base",
        {
          " bg-accent text-black hover:bg-accent-hover active:bg-accent-active":
            isPrimary === true,
          "bg-gray-700 hover:bg-gray-600 active:bg-gray-800 text-white":
            isPrimary === false,
        }
      )}
    >
      {label}
    </button>
  );
}
