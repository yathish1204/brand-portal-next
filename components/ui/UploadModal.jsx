"use client";
import { useAuth } from "@/app/context/AuthContext";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";

const UploadModal = () => {
  const {
    isUploadAccess,
    setIsUploadAcceess,
    showRequestModal,
    setShowRequestModal,
  } = useAuth();

  useEffect(() => {
    const hasSeen = localStorage.getItem("hasSeen");

    if (!hasSeen) {
      setShowRequestModal(true);
    }
  }, []);

  return (
    <>
      {!isUploadAccess && showRequestModal && (
        <div
          className="bg-black/30 absolute z-1000 inset-0 flex items-center justify-center"
          onClick={() => {
            setShowRequestModal(false);
            localStorage.setItem("hasSeen", true);
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-3 bg-white rounded-lg p-4 max-w-xl z-999"
          >
            <div className="flex items-center justify-between">
              <p className="text-[#111] font-semibold text-xl">
                Want Upload access?
              </p>
              <FaTimes />
            </div>
            <p className="text-[#333]">
              If you want to upload any asset or files here please send request
              from profile or click the link below
            </p>
            <div className="flex justify-end">
              <Button label={"Send Request to Upload"} isPrimary={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadModal;
