"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import TitleComp from "./TitleComp";
import ImageCard from "./ImageCard";
import throttle from "lodash.throttle";
import Image from "next/image";
import IMAGES from "@/app/data/images";

const ImageComp = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const res = await fetch(`/api/photos?page=${page}`);
    const data = await res.json();

    if (data.length === 0) {
      setHasMore(false);
    } else {
      setPhotos((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  };

  const handleScroll = useCallback(
    throttle(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight
      ) {
        fetchImages();
      }
    }, 300),
    [page, loading, hasMore]
  );

  useEffect(() => {
    fetchImages(); // First fetch only
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [handleScroll]);

  // const fetchImages = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch(`api/photos?page=${page}`);
  //     const data = await res.json();
  //     setPhotos((prev) => [...prev, ...data]);
  //   } catch (error) {
  //     console.error("Error fetching images:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchImages();
  // });

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting && !loading) {
  //         setPage((prev) => prev + 1);
  //       }
  //     },
  //     { threshold: 1 }
  //   );

  //   if (loaderRef.current) observer.observe(loaderRef.current);

  //   return () => {
  //     if (loaderRef.current) observer.unobserve(loaderRef.current);
  //   };
  // }, [loading]);

  // console.log(photos);

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
