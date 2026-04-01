"use client";
import { useAuth } from "@/app/context/AuthContext";
import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import Button from "./Button";

const LoginStatus = () => {
  const { isLoggedIn, directToLogin } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <ProfileAvatar />
      ) : (
        <Button
          label={"Login"}
          isPrimary={true}
          onClick={directToLogin}
          disabled={false}
        />
      )}
    </>
  );
};

export default LoginStatus;
