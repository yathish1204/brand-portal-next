"use client";
import React, { useState, useEffect, useRef } from "react";
import TitleComp from "./TitleComp";
import ImageCard from "./ImageCard";
import Image from "next/image";
import IMAGES from "@/app/data/images";
import { useAuth } from "@/app/context/AuthContext";
import ImageModal from "./ImageModal";

const ImageComp = () => {
  // const [activeFilter, setActiveFilter] = useState(null);
  const [imageIndex, setImageIndex] = useState(null);
  const loaderRef = useRef(null);
  // const [relatedImages, setRelatedImages] = useState([]);

  const {
    photos,
    fetchImages,
    loading,
    handleScroll,
    currentPhoto,
    setCurrentPhoto,
    activeImageFilter,
    setActiveImageFilter,
    toggleBookmark,
    isBookmarked,
    bookmarks,
  } = useAuth();
  console.log(currentPhoto);

  const currentIndex = photos.findIndex(
    (photo) => photo.id === currentPhoto?.id,
  );

  // Photo filter
  let filtered = [...photos];

  if (activeImageFilter === "Book Marks") {
    filtered = bookmarks;
  } else {
    if (activeImageFilter === "Portrait") {
      filtered = filtered.filter((p) => p.height > p.width);
    }
    if (activeImageFilter === "Landscape") {
      filtered = filtered.filter((p) => p.width > p.height);
    }
    if (activeImageFilter === "Square") {
      filtered = filtered.filter((p) => p.width === p.height);
    }
    if (activeImageFilter === "Recently Added") {
      filtered = filtered.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at),
      );
    }
  }

  // Related Images
  let relatedImages = [];

  if (currentIndex !== -1) {
    const nextImages = photos.slice(currentIndex + 1, currentIndex + 11);

    if (nextImages.length < 10) {
      const remaining = 10 - nextImages.length;

      relatedImages = [...nextImages, ...photos.slice(0, remaining)];
    } else {
      relatedImages = nextImages;
    }
  }

  useEffect(() => {
    if (currentPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [currentPhoto]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleFilterChange = (tab) => {
    setActiveImageFilter((prev) => (prev === tab ? null : tab));
  };

  return (
    <>
      {/* <div className="sticky top-[100px] bg-white z-1000 py-1"> */}
      <TitleComp
        title={"Images"}
        resultsCount={filtered.length}
        filterTabs={[
          { label: "Portrait", icon: null },
          { label: "Landscape", icon: null },
          { label: "Square", icon: null },
          { label: "Recently Added", icon: null },
          { label: "Book Marks", icon: null },
        ]}
        activeFilter={activeImageFilter}
        onFilterChange={handleFilterChange}
      />
      {/* </div> */}

      {filtered.length === 0 && !loading ? (
        <div className="flex flex-col items-center justify-center text-center py-10 text-gray-500">
          <Image
            src={IMAGES.notFoundGif}
            alt="Not found"
            width={200}
            height={200}
            aria-label="Not found gif"
          />
          {activeImageFilter} Images Not found
        </div>
      ) : (
        <div
          className={`max-w-7xl [columns:3_150px]  md:[columns:5_200px] gap-2 mx-auto px-2 my-4 ${currentPhoto ? "overflow-y-hidden" : "overflow-auto"}`}
        >
          {filtered.length > 0 &&
            filtered.map((photo, index) => (
              <ImageCard
                key={index}
                id={photo.id}
                url={photo.urls.full}
                title={photo.alt_description}
                small={photo.urls?.small}
                regular={photo.urls?.regular}
                raw={photo.urls?.raw}
                full={photo.urls?.full}
                bookmarked={photo.bookmarked}
                onClick={() => setCurrentPhoto(photo)}
                toggleBookmark={() => toggleBookmark(photo)}
                isBookmarked={isBookmarked(photo.id)}
              />
            ))}
        </div>
      )}
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
      {currentPhoto && (
        <ImageModal
          url={currentPhoto.urls.full}
          title={currentPhoto.alt_description}
          small={currentPhoto.urls?.small}
          regular={currentPhoto.urls?.regular}
          raw={currentPhoto.urls?.raw}
          full={currentPhoto.urls?.full}
          alt={currentPhoto.alt_description}
          width={currentPhoto.width}
          height={currentPhoto.height}
          relatedImages={relatedImages}
          bookmarked={currentPhoto.bookmarked}
        />
      )}
    </>
  );
};

export default ImageComp;
