"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import throttle from "lodash.throttle";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [images, setImages] = useState([]);

  //   Fetch limited image from the API
  const fetchLimitedImages = async (limit = 9) => {
    const res = await fetch(`/api/photos?page=1`);
    const Response = await res.json();

    return Array.isArray(Response) ? Response : Response.results || [];
  };

  useEffect(() => {
    const load = async () => {
      const data = await fetchLimitedImages(4);
      setImages(data);
    };

    load();
  }, []);

  //   Fetch images for infinite scroll
  const fetchImages = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const res = await fetch(`/api/photos?page=${page}`);
    const Response = await res.json();
    const data = Array.isArray(Response) ? Response : Response.results || [];

    // console.log(data);

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
    [page, loading, hasMore],
  );

  useEffect(() => {
    fetchImages(); // First fetch only
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("isLoggedIn");

    if (storedToken === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const data = {
    photos,
    setPhotos,
    fetchImages,
    page,
    setPage,
    loading,
    setLoading,
    hasMore,
    setHasMore,
    handleScroll,
    images,
    setImages,
    isLoggedIn,
    setIsLoggedIn,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Error in Context");
  }

  return context;
};
