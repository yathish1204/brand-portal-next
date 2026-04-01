"use client";

import React from "react";
import clsx from "clsx";
import { LuChevronDown } from "react-icons/lu";

export default function Button({
  href,
  isPrimary,
  label,
  disabled = false,
  onClick,
  isDropdown,
  onDropdown,
}) {
  // const handleClick = () => {
  //   if (href) {
  //     window.location.href = href;
  //   }
  // };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center ${isDropdown ? "pl-4" : "px-4"}   rounded-md cursor-pointer text-sm md:text-base ${isPrimary ? " bg-accent text-black hover:bg-accent-hover active:bg-accent-active" : "bg-gray-700 hover:bg-gray-600 active:bg-gray-800 text-white"}`}
    >
      <span className="py-2">{label}</span>
      {/* dropdown */}
      {isDropdown && (
        <div
          className="py-2 px-2 ml-2 border-l border-l-black/30"
          // onClick={}
        >
          <LuChevronDown />
        </div>
      )}
    </button>
  );
}
