"use client";
import React, { useState, useEffect, useRef } from "react";
import TitleComp from "./TitleComp";
import ImageCard from "./ImageCard";
import Image from "next/image";
import IMAGES from "@/app/data/images";
import { useAuth } from "@/app/context/AuthContext";

const ImageComp = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const loaderRef = useRef(null);

  const { photos, fetchImages, loading, handleScroll } = useAuth();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleFilterChange = (tab) => {
    setActiveFilter((prev) => (prev === tab ? null : tab));
  };

  return (
    <>
      <TitleComp
        title={"Images"}
        resultsCount={photos.length}
        filterTabs={[
          { label: "Potrait", icon: null },
          { label: "Landscape", icon: null },
          { label: "Square", icon: null },
          { label: "Recently Added", icon: null },
        ]}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      <div className="max-w-7xl [columns:3_150px]  md:[columns:5_200px] gap-2 mx-auto px-2 my-4">
        {photos.length > 0 &&
          photos.map((photo, index) => (
            <ImageCard
              key={index}
              url={photo.urls.full}
              title={photo.alt_description}
              small={photo.urls?.small}
              regular={photo.urls?.regular}
              raw={photo.urls?.raw}
              full={photo.urls?.full}
            />
          ))}
      </div>
      <div ref={loaderRef} className="col-span-full text-center py-4 ">
        {loading && (
          <div className="flex items-center justify-center gap-2">
            <Image
              src={IMAGES.LoadingSpinner}
              alt="Loading"
              width={80}
              height={80}
            />
            <span>Loading...</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageComp;
