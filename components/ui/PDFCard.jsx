import IMAGES from "@/app/data/images";
import Image from "next/image";
import React from "react";
import { IoIosDocument } from "react-icons/io";

const PDFCard = ({ title, src, url }) => {
  return (
    <>
      <div className="max-w-md bg-gray-100 rounded-md overflow-hidden shadow-md  hover:scale-103 transition-transform duration-300 cursor-pointer">
        <Image
          src={src || IMAGES.PDF}
          alt="PPT Thumbnail"
          width={200}
          height={120}
          className="h-40 w-full object-contain bg-gray-200"
        />
        <div className="p-2">
          <h3 className="text-md flex items-center gap-1">
            <IoIosDocument className="text-xl text-light" />{" "}
            <span className="text-sm md:text-base text-primary font-semibold">
              {title || "Untitled Document"}
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default PDFCard;
