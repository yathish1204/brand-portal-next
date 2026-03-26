import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const TitleBar = ({
  title,
  searchResult = false,
  isViewAll = false,
  filters = false,
  href,
}) => {
  return (
    <div className="flex justify-between mb-3">
      <div className="flex gap-2 items-center">
        <h2 className={`text-[#111] text-2xl font-semibold `}>{title}</h2>
        {searchResult && (
          <span className="text-sm text-[#666]">({searchResult} results)</span>
        )}
      </div>
      <div className="flex items-center gap-4">
        {filters && <span>{filters[0]}</span>}
        {isViewAll && (
          <Link
            className={`text-[#3055A9] flex items-center hover:underline`}
            href={href}
          >
            View All <FiChevronRight className="pl-1 text-lg " />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TitleBar;
