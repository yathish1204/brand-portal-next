import { tabs } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tab = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 mt-8 flex-wrap mx-2">
        {tabs.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="flex flex-col items-center justify-center rounded-md bg-gray-100 hover:shadow-xs hover:shadow-amber-400 active:bg-gray-300 p-4 w-[100px] h-[100px] "
          >
            <Image src={item.src} height={40} width={40} alt={item.title} />
            <p className="text-sm md:text-base font-medium text-[#333333] mt-2">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Tab;
