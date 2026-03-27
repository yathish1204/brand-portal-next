"use client";
import { tabs } from "@/app/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderTabs = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar">
      {tabs.map((tab, i) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            className={`px-3 cursor-pointer border-b  py-1 ${isActive ? "border-b-[#FDBA33]" : "border-b-transparent"}`}
            href={tab.href}
            key={i}
          >
            {tab.title}
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderTabs;
