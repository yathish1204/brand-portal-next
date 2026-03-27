"use client";
import { useAuth } from "@/app/context/AuthContext";
import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import Button from "./Button";

const LoginStatus = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <ProfileAvatar />
      ) : (
        <Button
          label={"Login"}
          isPrimary={true}
          href={"/login"}
          disabled={false}
        />
      )}
    </>
  );
};

export default LoginStatus;
