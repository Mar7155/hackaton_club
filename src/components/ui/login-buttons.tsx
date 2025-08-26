"use client"

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import React from 'react'
import { Button } from './button';

function loginbuttons() {
    const { isSignedIn, user, isLoaded } = useUser();

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (!isSignedIn) {
        return (
            <>
                <SignInButton mode="modal">
                    <Button className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg hover:opacity-90 hover:cursor-pointer">
                        Iniciar Sesión
                    </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                    <Button className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg hover:opacity-90 hover:cursor-pointer">
                        Unete 😼
                    </Button>
                </SignUpButton>
            </>
        )
    }
    return (
        <>
            <p> Bienvenido al club de programacion {user.username} 🎉</p>
            <UserButton appearance={{
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
            }} />
        </>
    )
}

export default loginbuttons