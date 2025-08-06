"use client";

import Image from "next/image";
import React, { useState } from "react";
import "./styles.css";
import { IoIosArrowDown, IoMdArrowDown, IoMdDownload } from "react-icons/io";

const ImageCard = ({ url, title, small, raw, full, regular }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="group img-card w-full h-full inline-block rounded-md relative ">
      <Image
        src={url}
        alt={title}
        width={300}
        height={200}
        className="w-full object-cover rounded-md"
      />
      {/* Button Group */}
      <div
        className="items-center gap-2 absolute top-[8px] right-[8px]  bg-white rounded-md text-xs md:text-sm text-gray-800 z-50 
      hidden group-hover:flex 
      transition-all duration-200 "
      >
        <button className="flex items-center gap-1 px-2 py-2 cursor-pointer">
          <IoMdArrowDown />
          <span>Download</span>
        </button>
        <button
          onClick={() => setOpen(!open)}
          className="border-l border-l-gray-300 px-2 py-2 cursor-pointer"
        >
          <IoIosArrowDown />
        </button>
        {/* Dropdown Menu */}
        {open && (
          <div className="flex flex-col max-w-[200px] bg-white/95 rounded-md shadow-md absolute top-[40px] right-0 w-[250px] z-50 transition-all duration-200 px-1 py-1">
            {small && (
              <a
                href={small}
                download
                target="_blank"
                className="group/nested flex items-center justify-between px-2 py-2 hover:bg-gray-300 w-full rounded-md transition-all duration-150"
              >
                <p className="text-sm">Small</p>
                <IoMdArrowDown className="opacity-0 group-hover/nested:opacity-100" />
              </a>
            )}
            {regular && (
              <a
                href={regular}
                download
                target="_blank"
                className="group/nested flex items-center justify-between px-2 py-2 hover:bg-gray-300 w-full rounded-md transition-all duration-150"
              >
                <p className="text-sm">Regular</p>
                <IoMdArrowDown className="opacity-0 group-hover/nested:opacity-100" />
              </a>
            )}
            {raw && (
              <a
                href={raw}
                download
                target="_blank"
                className="group/nested flex items-center justify-between px-2 py-2 hover:bg-gray-300 w-full rounded-md transition-all duration-150"
              >
                <p className="text-sm">Original</p>
                <IoMdArrowDown className="opacity-0 group-hover/nested:opacity-100" />
              </a>
            )}
            {full && (
              <a
                href={full}
                download
                target="_blank"
                className="group/nested flex items-center justify-between px-2 py-2 hover:bg-gray-300 w-full rounded-md transition-all duration-150"
              >
                <p className="text-sm">Full HD</p>
                <IoMdArrowDown className="opacity-0 group-hover/nested:opacity-100" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
