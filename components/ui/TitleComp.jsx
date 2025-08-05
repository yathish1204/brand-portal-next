import clsx from "clsx";
import React from "react";

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
          ({resultsCount} Results)
        </span>
      </div>
      <div className="flex items-center gap-2">
        {filterTabs.length > 0 &&
          filterTabs.map((tab, index) => (
            <button
              onClick={() => onFilterChange?.(tab)}
              key={index}
              className={clsx(
                "px-4 py-1 rounded-md text-sm md:text-base cursor-pointer",
                {
                  "bg-orange-400 text-primary hover:bg-orange-300":
                    activeFilter === tab,
                  "border border-gray-300 text-light hover:border-orange-400":
                    activeFilter !== tab,
                }
              )}
            >
              {tab}
            </button>
          ))}
      </div>
    </div>
  );
};

export default TitleComp;
