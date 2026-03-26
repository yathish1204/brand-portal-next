import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewTab = ({
  label,
  icon,
  src,
  bgColor = "from-[#667eea] to-[#764ba2]",
  iconColor = "text-white",
  textColor = "text-white",
  href,
}) => {
  return (
    <Link
      href={href}
      style={{ background: bgColor }}
      className={`group relative flex-1 h-30 rounded-lg overflow-hidden shadow-[0px_0.73px_1.459px_0px_rgba(0,0,0,0)] bg-gradient-to-br  cursor-pointer  hover:shadow-[0px_0.73px_1.459px_0px_rgba(0,0,0,0.3)] hover:scale-101 duration-300 transition-all`}
      title={label}
    >
      <div className="absolute inset-0 bg-black/20 z-1" />

      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
        style={{
          background:
            bgColor || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          filter: "blur(20px)",
          transform: "scale(0.9)",
        }}
      />

      <p className={`absolute font-semibold  px-3 py-3 z-100 text-white`}>
        <span className="text-shadow-xs">{label}</span>
      </p>
      {/* <Image
        className={`absolute bottom-2 right-2 z-100 ${iconColor}`}
        src={src}
        alt="label"
        height={40}
        width={40}
      /> */}
      <span
        className={`absolute bottom-3 right-2 z-100 text-white text-4xl transform
  group-hover:-translate-y-1 group-hover:rotate-3 transition-transform duration-300`}
      >
        {icon}
      </span>
    </Link>
  );
};

export default NewTab;
