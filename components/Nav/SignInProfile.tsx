import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";
import { signOut } from "next-auth/client";

import { IconContext } from "react-icons";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";

export default function SignInProfile() {
    const [session, loading] = useSession();
    const [showMenu, setShowMenu] = useState(0);
    if (session) {
        return (
            <>
                <div className="ml-3 relative">
                    <div>
                        <button
                            className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                            id="user-menu"
                            aria-label="User menu"
                            aria-haspopup="true"
                            onClick={() => {
                                setShowMenu(!showMenu);
                            }}
                        >
                            <img
                                className="h-8 w-8 rounded-full"
                                src={
                                    session.user?.image
                                        ? session.user?.image
                                        : "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                                }
                                alt="Profile Picture"
                            />
                        </button>
                    </div>
                    {showMenu ? (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                            <div
                                className="py-1 rounded-md bg-white shadow-xs"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                            >
                                <Link href="/profile">
                                    <a
                                        className="flex flex-row items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                        role="menuitem"
                                    >
                                        <IconContext.Provider
                                            value={{
                                                size: "1rem",
                                            }}
                                        >
                                            <div className="mr-2">
                                                <IoMdPerson />
                                            </div>
                                        </IconContext.Provider>
                                        Profile
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a
                                        className="flex flex-row items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                        role="menuitem"
                                        onClick={() => {
                                            signOut();
                                        }}
                                    >
                                        <IconContext.Provider
                                            value={{
                                                size: "1rem",
                                            }}
                                        >
                                            <div className="mr-2">
                                                <RiLogoutBoxFill />
                                            </div>
                                        </IconContext.Provider>
                                        {/* <img src="https://cdn.frankerfacez.com/emoticon/465603/4" /> */}
                                        Sign out
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ) : null}
                </div>
            </>
        );
    }
    return <>You need to sign in!</>;
}
