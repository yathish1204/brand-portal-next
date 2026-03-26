import IMAGES from "@/app/data/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoGoogle } from "react-icons/io";

const LoginComp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="overflow-hidden h-50 md:h-screen">
        <Image
          src={IMAGES.loginBg}
          className="object-cover w-full h-full"
          alt="login bg"
        />
      </div>
      <div className="flex flex-col justify-center h-50 md:h-screen">
        <div className="flex-column px-4 space-y-3">
          <Link href={"/"} className="cursor-pointer" title="Go back home">
            <Image
              src={IMAGES.Logo}
              className="object-cover w-sm mb-4"
              alt="login bg"
            />
          </Link>
          <h2 className="text-[#111] font-semibold">Welcome</h2>
          <p className="text-[#666]">Login to Continue</p>
          <a
            href="/"
            className="flex gap-2 bg-[#f2f2f2] rounded-md w-full items-center justify-center py-3 cursor-pointer"
          >
            <IoLogoGoogle />
            Sign up with google
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
