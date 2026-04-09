"use client";
import { useAuth } from "@/app/context/AuthContext";
import { iconsData } from "@/app/data/iconsAPI";
import React, { useEffect, useState } from "react";

const SearchComp = () => {
  const { searchResults, setSearchResults, searchQuery, setSearchQuery } =
    useAuth();

  const filterIcons = (query) => {
    const q = query.toLowerCase();

    return iconsData.filter(
      (icon) => icon.name.toLowerCase().includes(q) || icon.url.includes(q),
    );
  };

  const fetchImages = async (query) => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=9`,
    );

    const data = await res.json();

    return data.results || [];
  };

  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults({ images: [], icons: [] });
      return;
    }

    const timeout = setTimeout(async () => {
      const iconResults = filterIcons(searchQuery);

      let imageResults = [];
      if (query.length >= 3) {
        imageResults = await fetchImages(searchQuery);
      }

      setSearchResults({
        icons: iconResults,
        images: imageResults,
      });
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return (
    <div className="flex max-w-xs xl:max-w-2xl  w-full">
      <input
        className="w-[100%] border border-gray-300 px-4 py-2 rounded-full hover:border-gray-400 focus:outline-none  focus:border-amber-500"
        type="search"
        name="searck"
        id="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for “Icons”, “images”, “pdf's”..."
      />
    </div>
  );
};

export default SearchComp;
