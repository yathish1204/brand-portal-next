"use client";
import React, { useState } from "react";
import TitleComp from "./TitleComp";

export default function IconsComp() {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterChange = (tab) => {
    setActiveFilter((prev) => (prev === tab ? null : tab));
  };
  return (
    <>
      <TitleComp
        title={"Icons"}
        resultsCount={230}
        filterTabs={["Outline", "Solid", "Duotone"]}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
    </>
  );
}
