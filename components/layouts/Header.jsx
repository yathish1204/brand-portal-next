import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosMenu } from "react-icons/io";
import Button from "../ui/Button";

const Header = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl flex justify-between gap-x-4  items-center h-16 mx-auto px-2">
        {/* Brand Logo */}
        <div className="flex flex-shrink-0 items-center">
          <Link href={"/"}>
            <Image
              src="/images/BrandLogo.png"
              width={150}
              height={50}
              alt="Trigent Brand Logo"
            />
          </Link>
        </div>
        {/* Search Field */}
        <div className="flex max-w-xs xl:max-w-2xl  w-full">
          <input
            className="w-[100%] border border-gray-300 px-4 py-2 rounded-full hover:border-gray-400 focus:outline-none  focus:border-amber-500"
            type="search"
            name="searck"
            id="search"
            placeholder="Search for “Icons”, “images”, “pdf’s”..."
          />
        </div>
        {/* Menu List */}
        <div className="hidden md:flex gap-x-4 items-center">
          <Link className="flex-shrink-0" href={"/brand-guidelines"}>
            Brand Guidelines↗️
          </Link>
          {/* <Link className="flex-shrink-0" href={"/login"}>
            <button className="px-4 py-2 bg-amber-400 rounded-md cursor-pointer">
              Login
            </button>
          </Link> */}
          <Button
            label={"Login"}
            isPrimary={true}
            href={"/login"}
            disabled={false}
          />
        </div>
        {/* Mobile Menu */}
        <div className="flex md:hidden items-center">
          <button className="flex-shrink-0 p-2 rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-200 focus:outline-none">
            <IoIosMenu className="text-3xl text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
