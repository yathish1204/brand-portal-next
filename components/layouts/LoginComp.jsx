import IMAGES from "@/app/data/images";
import Image from "next/image";
import React from "react";

const LoginComp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="overflow-hidden h-50 md:h-full">
        <Image
          src={IMAGES.loginBg}
          className="object-cover w-full "
          alt="login bg"
        />
      </div>
      <div className="bg-red-500">right</div>
    </div>
  );
};

export default LoginComp;
