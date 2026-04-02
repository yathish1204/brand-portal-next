"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import throttle from "lodash.throttle";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [images, setImages] = useState([]);
  const [isUploadAccess, setIsUploadAccess] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [activeImageFilter, setActiveImageFilter] = useState("");
  const [photosError, setPhotosError] = useState(null);

  const router = useRouter();

  const parsePhotosResponse = async (res) => {
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      const message =
        typeof json?.error === "string"
          ? json.error
          : `Could not load photos (${res.status})`;
      return { data: [], error: message };
    }
    if (json?.error) {
      return {
        data: [],
        error:
          typeof json.error === "string"
            ? json.error
            : "Could not load photos",
      };
    }
    const data = Array.isArray(json) ? json : json.results || [];
    return { data, error: null };
  };

  // Bookmarks Functionality
  useEffect(() => {
    const stored = localStorage.getItem("bookmarks");
    if (stored) {
      JSON.parse(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  });

  const directToLogin = () => {
    router.push("/login");
  };

  // ToggleBookmark
  const toggleBookmark = (photo) => {
    setBookmarks((prev) => {
      const exists = prev.some((item) => item.id === photo.id);

      if (exists) {
        return prev.filter((item) => item.id !== photo.id);
      } else {
        return [
          ...prev,
          {
            id: photo.id,
            urls: photo.urls,
            alt_description: photo.alt_description,
            created_at: photo.created_at,
          },
        ];
      }
    });
  };

  const isBookmarked = (id) => {
    return bookmarks.some((item) => item.id === id);
  };

  //   Fetch limited image from the API
  const fetchLimitedImages = async (limit = 9) => {
    const res = await fetch(`/api/photos?page=1`, { cache: "no-store" });
    const { data, error } = await parsePhotosResponse(res);
    if (error) {
      setPhotosError(error);
      return [];
    }
    setPhotosError(null);
    return data;
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
    const res = await fetch(`/api/photos?page=${page}`, { cache: "no-store" });
    const { data, error } = await parsePhotosResponse(res);

    if (error) {
      setPhotosError(error);
      setHasMore(false);
      setLoading(false);
      return;
    }
    setPhotosError(null);

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
    setIsUploadAccess,
    isUploadAccess,
    showRequestModal,
    setShowRequestModal,
    currentPhoto,
    setCurrentPhoto,
    activeImageFilter,
    setActiveImageFilter,
    bookmarks,
    setBookmarks,
    toggleBookmark,
    isBookmarked,
    directToLogin,
    photosError,
    setPhotosError,
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
