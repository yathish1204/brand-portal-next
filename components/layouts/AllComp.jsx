"use client";
import React, { useEffect, useState } from "react";
import TitleBar from "../ui/TitleBar";
import { iconsData } from "@/app/data/iconsAPI";
import IconCard from "../ui/IconCard";
import { useAuth } from "@/app/context/AuthContext";
import ImageCard from "../ui/ImageCard";
import Image from "next/image";
import { IoIosArrowDown, IoMdArrowDown } from "react-icons/io";
import { pdfAPI } from "@/app/data/pdfAPI";
import PDFCard from "../ui/PDFCard";

const AllComp = () => {
  const { photos, fetchImages, images } = useAuth();
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    // All section - main frame
    <div className="max-w-7xl lg:mx-auto mx-4 mt-8 space-y-6">
      {/* Most Popular Icons */}
      <section>
        <TitleBar
          title={"Most Popular Icons"}
          searchResult={""}
          isViewAll={true}
          href={"/icons"}
        />
        {/* Render Icons */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3 mx-2 mt-6">
          {iconsData.slice(-30).map((icon, i) => (
            <IconCard key={i} name={icon.name} url={icon.url} />
          ))}
        </div>
      </section>

      {/* Most Popular Images */}
      <section className="mt-8">
        <TitleBar
          title={"Most Popular Images"}
          searchResult={""}
          isViewAll={true}
          href={"/images"}
        />
        {/* Render Images */}
        <div
          className="grid gap-4
  grid-cols-2 
  md:grid-cols-6
  auto-rows-[120px] md:auto-rows-[150px]"
        >
          {images.slice(-9).map((image, i) => {
            return (
              <div
                key={i}
                className={`group img-card w-full h-full inline-block rounded-md relative ${
                  i === 0
                    ? `col-span-2 md:col-span-2 row-span-2 rounded-xl bg-gray-300`
                    : ` rounded-xl`
                }`}
              >
                <Image
                  src={image.urls.full}
                  alt={image.alt_description}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* Button Group */}
                <div
                  className="items-center gap-2 absolute top-[8px] right-[8px]  bg-white rounded-md text-xs md:text-sm text-gray-800 z-100 
      hidden group-hover:flex 
      transition-all duration-200 "
                >
                  <a
                    href={image.urls?.raw}
                    download
                    target="_blank"
                    className="flex items-center gap-1 px-2 py-2 cursor-pointer"
                  >
                    <IoMdArrowDown />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="border-l border-l-gray-300 px-2 py-2 cursor-pointer"
                  >
                    <IoIosArrowDown />
                  </button>
                  {/* Dropdown Menu */}
                  {open === i && (
                    <div className="flex flex-col max-w-[200px] bg-white/95 rounded-md shadow-md absolute top-[40px] right-0 w-[100px] md:w-[250px] z-50 transition-all duration-200 px-1 py-1">
                      {image.urls?.small && (
                        <a
                          href={image.urls.small}
                          download
                          target="_blank"
                          className="group/nested flex items-center justify-between px-2 py-2 hover:bg-gray-300 w-full rounded-md transition-all duration-150"
                        >
                          <p className="text-sm">Small</p>
                          <IoMdArrowDown className="opacity-0 group-hover/nested:opacity-100" />
                        </a>
                      )}
                      {image.urls?.regular && (
                        <a
                          href={image.urls.regular}
                          download
                          target="_blank"
                          className="group/nested flex items-center justify-between px-2 py-2 hover:bg-gray-300 w-full rounded-md transition-all duration-150"
                        >
                          <p className="text-sm">Regular</p>
                          <IoMdArrowDown className="opacity-0 group-hover/nested:opacity-100" />
                        </a>
                      )}
                      {image.urls?.raw && (
                        <a
                          href={image.urls?.raw}
                          download
                          target="_blank"
                          className="group/nested flex items-center justify-between px-2 py-2 hover:bg-gray-300 w-full rounded-md transition-all duration-150"
                        >
                          <p className="text-sm">Original</p>
                          <IoMdArrowDown className="opacity-0 group-hover/nested:opacity-100" />
                        </a>
                      )}
                      {image.urls?.full && (
                        <a
                          href={image.urls?.full}
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
          })}
        </div>
      </section>

      {/* Infographics */}
      <section className="mt-8">
        <TitleBar
          title={"Infographics"}
          searchResult={""}
          isViewAll={true}
          href={"/images"}
        />
        {/* Render Infographics */}
        <div
          className="grid gap-4
  grid-cols-2 
  md:grid-cols-6
  auto-rows-[120px] md:auto-rows-[150px]"
        >
          {images.slice(-9).map((image, i) => {
            return (
              <div
                key={i}
                className={`group img-card w-full h-full inline-block rounded-md relative ${
                  i === 0
                    ? `col-span-2 md:col-span-2 row-span-2 rounded-xl overflow-hidden`
                    : ` rounded-xl overflow-hidden`
                }`}
              >
                <Image
                  src={image.urls.full}
                  alt={image.alt_description}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* Button Group */}
                <div
                  className="items-center gap-2 absolute top-[8px] right-[8px]  bg-white rounded-md text-xs md:text-sm text-gray-800 z-100 
      hidden group-hover:flex 
      transition-all duration-200 "
                >
                  <a
                    href={image.urls?.raw}
                    download
                    target="_blank"
                    className="flex items-center gap-1 px-2 py-2 cursor-pointer"
                  >
                    <IoMdArrowDown />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setOpen(!open)}
                    className="border-l border-l-gray-300 px-2 py-2 cursor-pointer"
                  >
                    <IoIosArrowDown />
                  </button>
                  {/* Dropdown Menu */}
                  {open && (
                    <div className="flex flex-col max-w-[200px] bg-white/95 rounded-md shadow-md absolute top-[40px] right-0 w-[250px] z-50 transition-all duration-200 px-1 py-1">
                      {image.urls?.small && (
                        <a
                          href={image.urls.small}
                          download
                          target="_blank"
                          className="group/nested flex items-center justify-between px-2 py-2 hover:bg-gray-300 w-full rounded-md transition-all duration-150"
                        >
                          <p className="text-sm">Small</p>
                          <IoMdArrowDown className="opacity-0 group-hover/nested:opacity-100" />
                        </a>
                      )}
                      {image.urls?.regular && (
                        <a
                          href={image.urls.regular}
                          download
                          target="_blank"
                          className="group/nested flex items-center justify-between px-2 py-2 hover:bg-gray-300 w-full rounded-md transition-all duration-150"
                        >
                          <p className="text-sm">Regular</p>
                          <IoMdArrowDown className="opacity-0 group-hover/nested:opacity-100" />
                        </a>
                      )}
                      {image.urls?.raw && (
                        <a
                          href={image.urls?.raw}
                          download
                          target="_blank"
                          className="group/nested flex items-center justify-between px-2 py-2 hover:bg-gray-300 w-full rounded-md transition-all duration-150"
                        >
                          <p className="text-sm">Original</p>
                          <IoMdArrowDown className="opacity-0 group-hover/nested:opacity-100" />
                        </a>
                      )}
                      {image.urls?.full && (
                        <a
                          href={image.urls?.full}
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
          })}
        </div>
      </section>

      {/* PDF's */}
      <section className="mt-8">
        <TitleBar
          title={"PDF’s"}
          searchResult={""}
          isViewAll={true}
          href={"/pdf"}
        />
        {/* Render Infographics */}
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 mx-2
  "
        >
          {pdfAPI.length > 0 &&
            pdfAPI.slice(-6).map((pdf, i) => {
              return (
                <PDFCard
                  key={i}
                  title={pdf.name}
                  src={pdf.thumbnail}
                  url={pdf.url}
                  onClick={() => setSelectedPdf(pdf.url)}
                />
              );
            })}
        </div>
      </section>

      {/* PPT's */}
      <section className="mt-8 mb-10">
        <TitleBar
          title={"PPT’s"}
          searchResult={""}
          isViewAll={true}
          href={"/ppt"}
        />
        {/* Render Infographics */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 mx-2">
          {pdfAPI.length > 0 &&
            pdfAPI.slice(-6).map((pdf, i) => {
              return (
                <PDFCard
                  key={i}
                  title={pdf.name}
                  src={pdf.thumbnail}
                  url={pdf.url}
                  onClick={() => setSelectedPdf(pdf.url)}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default AllComp;
