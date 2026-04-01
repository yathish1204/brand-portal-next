"use client";
import { useAuth } from "@/app/context/AuthContext";
import Image from "next/image";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Button from "./Button";
import { IoIosArrowDown, IoMdArrowDown } from "react-icons/io";

const ImageModal = ({
  url,
  title,
  small,
  raw,
  full,
  regular,
  alt,
  height,
  width,
  relatedImages,
}) => {
  const { setCurrentPhoto } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed flex items-center justify-center inset-0 bg-black/30 z-1000 "
      onClick={() => setCurrentPhoto(null)}
    >
      <div
        className="bg-white max-w-5xl w-full h-[500px] md:h-[700px] rounded-xl overflow-y-auto  relative"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute p-2 top-2 right-2 z-[1000] cursor-pointer"
          onClick={() => setCurrentPhoto(null)}
        >
          <FaTimes className="text-xl" />
        </span>
        <div className="flex items-center justify-center bg-gray-100 w-full h-[75%] relative">
          <span className="absolute p-2 bottom-0 right-0 cursor-pointer">
            <p className="text-medium bg-gray-200 p-1">
              {width} <span className="font-light text-light">x</span> {height}{" "}
              px
            </p>
          </span>
          <TransformWrapper>
            <TransformComponent
              wrapperStyle={{ width: "100%", height: "100%" }}
            >
              <Image
                src={url}
                alt={title}
                width={300}
                height={200}
                className="object-cover rounded-md"
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div className="flex flex-col px-4 py-2">
          <div className="flex h-11 justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-medium">{title}</p>
              <p className="text-[#555]">{alt}</p>
              {/* Categories */}
              <div className="flex items-center gap-2 overflow-y-auto">
                <span className="bg-gray-200 rounded-md text-sm py-1 px-2">
                  Parks
                </span>
                <span className="bg-gray-200 rounded-md text-sm py-1 px-2">
                  Streets
                </span>
                <span className="bg-gray-200 rounded-md text-sm py-1 px-2">
                  Building
                </span>
              </div>
            </div>
            {/* Download Button  */}
            {/* Button Group */}
            <div
              className="flex items-center gap-2  relative  bg-accent text-black hover:bg-accent-hover active:bg-accent-active rounded-md text-xs md:text-sm z-100 
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
                <div className="flex flex-col max-w-[200px] bg-white/95 rounded-md shadow-md absolute bottom-[40px] right-0 w-[250px] z-50 transition-all duration-200 px-1 py-1">
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
          {/* Related Images section */}
          <p className="text-xl font-semibold my-3">Related Images</p>
          <div className="flex gap-2 items-center overflow-x-auto no-scrollbar mb-4">
            {relatedImages.length > 0 &&
              relatedImages.map((img, i) => (
                <div
                  key={i}
                  className="bg-gray-200 min-w-[200px] h-35 rounded-sm overflow-hidden "
                  onClick={() => setCurrentPhoto(img)}
                >
                  <Image
                    src={img.urls.full}
                    alt={img.alt_description}
                    width={200}
                    height={100}
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
