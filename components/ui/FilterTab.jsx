import React from "react";

const FilterTab = ({ onFilterChange, label, icon }) => {
  return (
    <>
      <button
        onClick={() => onFilterChange?.(label)}
        key={index}
        className={clsx(
          "flex gap-1 items-center px-4 py-1 rounded-md text-xs md:text-sm cursor-pointer",
          {
            "bg-orange-400 text-primary hover:bg-orange-300":
              activeFilter === label,
            "border border-gray-300 text-light hover:border-orange-400":
              activeFilter !== label,
          }
        )}
      >
        <span>{icon}</span>
        {label}
      </button>
    </>
  );
};

export default FilterTab;
