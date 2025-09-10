"use client";

import {
  SignInButton,
  SignUpButton,
  useOrganizationList,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import React from "react";
import { Button } from "./button";

function loginbuttons() {
  const { isSignedIn, user, isLoaded } = useUser();
  const {} = useOrganizationList;

  if (!isLoaded) {
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
    <div className="flex-col flex gap-4 items-center">
      <div className="flex justify-center items-center gap-4">
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
        
      </div>
      <Button
          onClick={() => (window.location.href = "/questionnaire")}
          variant={"primary"}
          className="font-bold"
        >
          Iniciar Quiz
        </Button>
    </div>
  );
}

export default loginbuttons;
