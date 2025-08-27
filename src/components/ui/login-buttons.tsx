"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "./button";

function loginbuttons() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return (
      <>
        <SignInButton mode="modal">
          <Button variant={"primary"}>Iniciar Sesión</Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button variant={"primary"}>Unete 😼</Button>
        </SignUpButton>
      </>
    );
  }
  return (
    <>
      <p> Bienvenido al club de programacion {user.username} 🎉</p>
      <UserButton
        appearance={{
          elements: {
            userButtonAvatarBox: {
              width: "60px",
              height: "60px",
            },
            userButtonAvatarImage: {
              width: "100%",
              height: "100%",
            },
          },
        }}
      />
    </>
  );
}

export default loginbuttons;
