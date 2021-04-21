import SignIn from "./SignIn";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { useSession } from "next-auth/client";

export default function Nav() {
    const [top, setTop] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [session, loading] = useSession();

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);

    const router = useRouter();
    // console.log(router.pathname.trim())

    let classNameActive =
        "ml-4 px-3 py-2 text-sm font-medium leading-5 focus:outline-none focus:text-white transition duration-150 ease-in-out bg-black text-white ";
    let classNameDead =
        "ml-4 px-3 py-2 text-sm font-medium leading-5 focus:outline-none focus:text-white transition duration-150 ease-in-out text-gray-300";
    return (
        <nav
            className={`fixed bg-night-600 z-50 w-full px-5 py-2 bg-opacity-90 ${!top && "shadow-lg"}`}
            style={{ backdropFilter: "blur(5px)" }}
        >
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white transition duration-150 ease-in-out"
                            aria-label="Main menu"
                            aria-expanded="false"
                        ></button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        {/* ICONS FOR DESKTOP AND MOBILE */}
                        <div className="flex-shrink-0">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src="https://i.imgur.com/RASiAAk.png"
                                alt="Creati's Bot logo"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src="https://i.imgur.com/BOAVxgQ.png"
                                alt="Creati's Bot logo"
                            />
                        </div>
                        {/* MOBILE HAMBURGER*/}
                        <div
                            onClick={() => {
                                setIsMobileMenuOpen(!isMobileMenuOpen);
                            }}
                            className="block sm:hidden absolute left-0 cursor-pointer"
                        >
                            <IconContext.Provider value={{ color: "white", size: "1.75rem" }}>
                                {!isMobileMenuOpen ? <GiHamburgerMenu /> : <IoMdClose />}
                            </IconContext.Provider>
                        </div>
                        {/* DESKTOP NAV BAR */}
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex font-inter">
                                <Link href="/">
                                    <a className={router.pathname === "/" ? classNameActive : classNameDead}>
                                        Home
                                    </a>
                                </Link>
                                <Link href="/loadouts">
                                    <a
                                        className={
                                            router.pathname === "/loadouts" ? classNameActive : classNameDead
                                        }
                                    >
                                        Loadouts
                                    </a>
                                </Link>
                                {/* 
                                {session && (
                                    <Link href="/dashboard">
                                        <a
                                            className={
                                                router.pathname === "/dashboard"
                                                    ? classNameActive
                                                    : classNameDead
                                            }
                                        >
                                            Dashboard
                                        </a>
                                    </Link>
                                )}
                                */}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <SignIn />
                    </div>
                </div>
            </div>
            <div className={`block sm:hidden ${!isMobileMenuOpen ? "hidden" : null}`}>
                <div className="px-2 pt-2 pb-3 overflow-x-auto">
                    {/*  Leaving this one here because it has a really nice alternative if I don't like this scroll menu one I made.
                    <a
                        href="#"
                        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white transition duration-150 ease-in-out"
                    >
                        Team
                    </a>
                    */}
                    <Link href="/">
                        <a className={router.pathname === "/" ? classNameActive : classNameDead}>Home</a>
                    </Link>
                    <Link href="/features">
                        <a className={router.pathname === "/loadouts" ? classNameActive : classNameDead}>
                            Loadouts
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
