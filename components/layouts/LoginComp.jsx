import IMAGES from "@/app/data/images";
import Image from "next/image";
import React from "react";
import LoginForm from "../ui/LoginForm";

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
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginComp;
