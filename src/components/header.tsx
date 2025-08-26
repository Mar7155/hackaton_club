import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import LoginButton from './ui/login-button'
import SignupButton from './ui/signup-button'

function header() {
    return (
        <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
                <SignInButton mode='modal'>
                    <LoginButton />
                </SignInButton>
                <SignUpButton mode='modal'>
                    <SignupButton />
                </SignUpButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    )
}

export default header