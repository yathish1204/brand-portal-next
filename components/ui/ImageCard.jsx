"use client";

import Image from "next/image";
import React, { useState } from "react";
import "./styles.css";
import {
  IoIosArrowDown,
  IoMdArrowDown,
  IoMdBookmark,
  IoMdDownload,
} from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { useAuth } from "@/app/context/AuthContext";

const ImageCard = ({
  url,
  alt,
  toggleBookmark,
  bookmarked,
  title,
  small,
  raw,
  full,
  regular,
  onClick,
  id,
}) => {
  const [open, setOpen] = useState(false);

  const { isBookmarked } = useAuth();
  // console.log(isBookmarked);

  return (
    <div className="group img-card w-full h-full inline-block rounded-md relative cursor-pointer">
      <Image
        src={url}
        alt={title}
        width={300}
        height={200}
        onClick={onClick}
        className=" object-cover rounded-md user-select-none"
      />
      {/* Button Group */}
      <div
        className="items-center gap-2 absolute top-[8px] right-[8px]  bg-white rounded-md text-xs md:text-sm text-gray-800 z-100 
      hidden group-hover:flex 
      transition-all duration-200 "
      >
        <button
          href={raw}
          download
          target="_blank"
          className="flex items-center gap-1 px-2 py-2 cursor-pointer"
        >
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
      {/* Bookmark */}
      <div
        className="absolute hidden z-10 bottom-2 right-2 bg-white/90 p-2 rounded-full group-hover:flex items-center justify-center"
        onClick={() => toggleBookmark()}
      >
        {isBookmarked(id) ? <FaBookmark /> : <FaRegBookmark />}
      </div>
    </div>
  );
};

export default ImageCard;
