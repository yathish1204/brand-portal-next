import { tabs } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tab = () => {
  return (
    <>
      <div className="flex justify-start md:justify-center items-center space-x-5 mt-8 flex-wrap mx-2">
        {tabs.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="flex flex-col items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300 p-4 w-[100px] h-[100px] mb-4"
          >
            <Image src={item.src} height={40} width={40} alt={item.title} />
            <p className="text-base font-medium">{item.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Tab;
