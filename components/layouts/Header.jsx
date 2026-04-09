import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosMenu } from "react-icons/io";
import Button from "../ui/Button";
import IMAGES from "@/app/data/images";
import HeaderTabs from "./HeaderTabs";
import LoginStatus from "../ui/LoginStatus";
import SearchComp from "../ui/SearchComp";

const Header = () => {
  return (
    <header className="fixed-top bg-white shadow-md sticky align-top top-0 z-50">
      <div className="max-w-7xl flex justify-between gap-x-4  items-center h-16 mx-auto px-2">
        {/* Brand Logo */}
        <div className="flex flex-shrink-0 items-center">
          <Link href={"/"}>
            <Image
              src={IMAGES.Logo}
              width={150}
              height={50}
              alt="Trigent Brand Logo"
              className="hidden md:block"
            />
            <Image
              src={IMAGES.LogoMobile}
              width={32}
              height={32}
              alt="Trigent Brand Logo"
              className="block md:hidden"
            />
          </Link>
        </div>
        {/* Search Component */}
        <SearchComp />
        {/* Menu List */}
        <div className="hidden md:flex gap-x-4 items-center">
          {/* <nav> */}
          <Link className="flex-shrink-0" href={"/brand-guidelines"}>
            Brand Guidelines↗️
          </Link>
          {/* <Link className="flex-shrink-0" href={"/login"}>
            <button className="px-4 py-2 bg-amber-400 rounded-md cursor-pointer">
              Login
            </button>
          </Link> */}
          <LoginStatus />
          {/* </nav> */}
        </div>
        {/* Mobile Menu */}
        <div className="flex md:hidden items-center">
          <button className="flex-shrink-0 p-2 rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-200 focus:outline-none">
            <IoIosMenu className="text-3xl text-gray-700" />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <HeaderTabs />
      </div>
    </header>
  );
};

export default Header;
