import { tabs } from "@/app/data";
import React from "react";
import NewTab from "../ui/NewTab";

const HomeTabs = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8 flex-wrap mx-2">
      {tabs.map((tab, i) => (
        <NewTab
          key={i}
          label={tab.title}
          src={tab.src}
          icon={tab.icon}
          bgColor={tab.bgColor}
          textColor={"text-white"}
          iconColor={""}
          href={tab.href}
        />
      ))}
    </div>
  );
};

export default HomeTabs;
