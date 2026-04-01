"use client";
import { useEffect, useRef, useState } from "react";
import ProfileOptions from "./ProfileOptions";

const ProfileAvatar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const menuRef = useRef();

  // Check for CLick outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsProfileMenuOpen(false);
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    };
  }, []);

  return (
    <>
      <div
        ref={menuRef}
        onClick={() => setIsProfileMenuOpen((prev) => !prev)}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#3055A9] text-white text-xl font-medium cursor-pointer hover:bg-[#3055A9]"
      >
        D
      </div>
      {isProfileMenuOpen && (
        // <div className="bg-black/20 absolute inset-0 z-1000"  >
        <ProfileOptions />
        // </div>
      )}
    </>
  );
};

export default ProfileAvatar;
