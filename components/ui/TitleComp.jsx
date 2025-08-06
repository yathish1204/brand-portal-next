import clsx from "clsx";
import React from "react";
import FilterTab from "./FilterTab";

const TitleComp = ({
  title,
  resultsCount,
  filterTabs = [],
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-6 mx-2 gap-y-2">
      <div className="flex gap-2 items-baseline ">
        <h1 className="text-xl md:text-2xl font-semibold text-dark">{title}</h1>
        <span className="text-sm md:text-base font-light text-light">
          ({resultsCount} results)
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {filterTabs.length > 0 &&
          filterTabs.map(({ label, icon }, index) => (
            <button
              onClick={() => onFilterChange?.(label)}
              key={index}
              className={clsx(
                "flex gap-1 items-center px-4 py-1 rounded-md text-xs md:text-sm cursor-pointer",
                {
                  "bg-orange-400 text-primary": activeFilter === label,
                  "border border-gray-300 text-light hover:border-orange-400":
                    activeFilter !== label,
                }
              )}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
      </div>
    </div>
  );
};

export default TitleComp;
