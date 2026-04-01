"use client";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";

const ProfileOptions = () => {
  const { setShowRequestModal, setIsLoggedIn } = useAuth();
  return (
    <div className="absolute bg-white top-[60px] flex flex-col gap-2 p-2 rounded-sm shadow-lg z-100">
      {/* Profile Details */}
      <div className="flex gap-2 items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3055A9] text-white text-xl font-medium cursor-pointer hover:bg-[#3055A9]">
          D
        </div>
        <div className="gap-1">
          <p className="text-[#333]">Demo User</p>
          <span className="text-[#333]">demouser@gmail.com</span>
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-black/30" />
      <Link
        href={"/my-uploads"}
        className="p-1 cursor-pointer rounded-lg hover:bg-gray-200"
      >
        My Uploads
      </Link>
      <div
        //    onClick={}
        className="p-1 cursor-pointer rounded-lg hover:bg-gray-200"
      >
        Request Upload
      </div>
      <div
        onClick={() => setIsLoggedIn(false)}
        className="p-1 cursor-pointer rounded-lg hover:bg-gray-200"
      >
        Logout
      </div>
    </div>
  );
};

export default ProfileOptions;
