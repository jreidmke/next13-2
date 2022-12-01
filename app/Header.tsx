import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoutBtn from "./LogoutBtn";

export default function Header() {
    const session = true;

    if (session)
        return (
            <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
                <div className="flex space-x-2">
                    <Image
                        className="rounded-full mx-2 object-contain"
                        height={50}
                        width={50}
                        src="https://links.papareact.com/jne"
                        alt="Profile Picture"
                    />
                    <div>
                        <p className="text-blue-400">Logged in as:</p>
                        <p className="font-bold text-lg">James Reid</p>
                    </div>
                </div>
                <LogoutBtn />
            </header>
        );

    return (
        <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
            <div className="flex flex-col items-center space-y-5">
                <div className="flex space-x-2 items-center">
                    <Image
                        src="https://links.papareact.com/jne"
                        alt="Meta Chat"
                        width={50}
                        height={10}
                    />
                    <p className="text-blue-400">Welcome to the Msg.</p>
                </div>
                <Link
                    href="/auth/signin"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Sign in here
                </Link>
            </div>
        </header>
    );
}
