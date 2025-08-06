import Image from "next/image";
import React from "react";
import { IoIosDownload, IoMdArrowDown } from "react-icons/io";

const IconCard = ({ name, url }) => {
  //   const handleDownload = (url) => {
  //     const filename = url.split("/").pop();
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = filename;
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };

  return (
    <>
      <div className="group relative flex flex-col items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md h-[100px] gap-2 overflow-hidden">
        <Image src={url} alt={name} width={32} height={32} />
        <p className="text-sm text-wrap text-secondary">{name}</p>
        <button
          //   onClick={handleDownload}
          className="absolute flex items-center justify-center gap-1 py-2 rounded-sm border text-sm border-gray-300 bg-white left-1 right-1 top-[-12px] opacity-0 group-hover:opacity-90 group-hover:top-[4px] hover:opacity-100 transition-all duration-200 cursor-pointer text-gray-700"
        >
          <span className="text-base text-secondary">
            <IoMdArrowDown />
          </span>
          PNG
        </button>
        <button className="absolute flex items-center justify-center gap-1 py-2 rounded-sm border text-sm border-gray-300 bg-white left-1 right-1 bottom-[-12px] opacity-0 group-hover:opacity-90 group-hover:bottom-[4px] hover:opacity-100 transition-all duration-200 cursor-pointer text-gray-700">
          <span>
            <IoMdArrowDown className="text-base text-secondary" />
          </span>
          SVG
        </button>
      </div>
    </>
  );
};

export default IconCard;
