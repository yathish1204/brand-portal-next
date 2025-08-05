import Link from "next/link";
import React from "react";
import "./globals.css";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col space-y-4 items-center justify-center h-screen mx-2">
        <h3 className="text-2xl font-medium text-start md:text-center">
          Oops! Page Not found
        </h3>
        <p className="text-start md:text-center">
          Unfortunately page you are looking for is not available at the moment.
        </p>
        <Link href={"/"} className="flex-shrink-0">
          <button className="px-4 py-2 bg-amber-400 rounded-md cursor-pointer">
            Let's Go Back Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
