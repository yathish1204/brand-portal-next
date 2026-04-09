"use client";
import Lottie from "lottie-react";
import React from "react";
import animationData from "app/assets/SplashAnimationUpdated.json";

const PPT = () => {
  return (
    <div className="flex justify-center ">
      <Lottie
        className="w-[400px] "
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default PPT;
