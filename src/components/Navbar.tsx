/* eslint-disable antfu/consistent-list-newline */
/* eslint-disable style/no-trailing-spaces */
/* eslint-disable style/jsx-first-prop-new-line */
/* eslint-disable style/space-infix-ops */
/* eslint-disable style/multiline-ternary */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable style/quotes */
"use client";
import { useUser } from '@clerk/clerk-react';
import { SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <header className="flex items-center justify-between bg-blue-500 h-16 px-4">
      {/* Logo Section */}
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#fff] p-2 rounded">
          <Image
            alt="Dropbox Logo"
            src="https://icons.veryicon.com/png/o/miscellaneous/simple-line-icon/authentication-16.png"
            color="white"
            height={40}
            width={40}
          />
        </div>
        <h1 className="font-bold text-white text-3xl">Auth</h1>
      </Link>

      {/* Action Section */}
      <div className="flex items-center space-x-4">
        {isSignedIn ? (
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-10 h-10",
              },
            }}
          />
        ):(
          <div 
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            <SignInButton forceRedirectUrl="/dashboard" mode="modal" />
          </div>
        ) }
      </div>
    </header>
  );
}

export default Navbar;
