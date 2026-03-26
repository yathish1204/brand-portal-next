"use client";
import React, { useEffect } from "react";
import TitleBar from "../ui/TitleBar";
import { iconsData } from "@/app/data/iconsAPI";
import IconCard from "../ui/IconCard";
import { useAuth } from "@/app/context/AuthContext";
import ImageCard from "../ui/ImageCard";
import Image from "next/image";

const AllComp = () => {
  const layoutPattern = [
    "col-span-2 row-span-2", // big
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "row-span-2", // tall
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2", // wide
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  const { photos, fetchImages, images } = useAuth();

  return (
    // All section - main frame
    <div className="max-w-7xl  md:mx-auto mt-8 space-y-6">
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
        {/* Render Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 auto-rows-[150px]">
          {images.slice(-9).map((photo, index) => {
            const layoutClass = layoutPattern[index % layoutPattern.length];

            return (
              <div
                key={photo.id}
                className={`rounded-xl overflow-hidden ${layoutClass}`}
              >
                <ImageCard
                  key={index}
                  url={photo.urls.full}
                  title={photo.alt_description}
                  small={photo.urls?.small}
                  regular={photo.urls?.regular}
                  raw={photo.urls?.raw}
                  full={photo.urls?.full}
                />
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
        {/* Render Icons */}
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
                className={
                  i === 0
                    ? `col-span-2 md:col-span-2 row-span-2 rounded-xl overflow-hidden`
                    : `col-span-2 md:col-span-2 row-span-2 rounded-xl overflow-hidden`
                }
              >
                <Image
                  src={image.urls.full}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AllComp;
