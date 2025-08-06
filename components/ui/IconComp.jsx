"use client";
import React, { useState, useEffect } from "react";
import TitleComp from "./TitleComp";
import {
  IoIosAddCircle,
  IoIosAddCircleOutline,
  IoIosCamera,
} from "react-icons/io";
import IconCard from "./IconCard";
import { iconsData } from "@/app/data/iconsAPI";
import throttle from "lodash.throttle";

export default function IconsComp() {
  const Items_per_load = 40; // Number of items to load initially
  const [activeFilter, setActiveFilter] = useState(null);
  const [visibleIcons, setVisibleIcons] = useState(
    iconsData.slice(0, Items_per_load)
  );

  // Load next batch of icons
  const loadMoreIcons = () => {
    const nextIcons = iconsData.slice(
      visibleIcons.length,
      visibleIcons.length + Items_per_load
    );
    setVisibleIcons((prev) => [...prev, ...nextIcons]);
  };

  // Throttled scroll handler
  const handleScroll = throttle(() => {
    const scrollBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
    if (scrollBottom) {
      loadMoreIcons();
    }
  }, 300); // Trigger max once every 300ms

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleIcons]); // Re-run when more icons are loaded

  const handleFilterChange = (tab) => {
    setActiveFilter((prev) => (prev === tab ? null : tab));
  };

  return (
    <>
      <TitleComp
        title={"Icons"}
        resultsCount={iconsData.length}
        filterTabs={[
          { label: "Outline", icon: <IoIosAddCircleOutline /> },
          { label: "Solid", icon: <IoIosAddCircle /> },
          { label: "Duotone", icon: <IoIosCamera /> },
        ]}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3 mx-2 mt-6">
        {iconsData.map((icon, index) => (
          <IconCard key={index} name={icon.name} url={icon.url} />
        ))}
      </div>
    </>
  );
}
