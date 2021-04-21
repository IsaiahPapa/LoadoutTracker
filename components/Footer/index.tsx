import React from "react";
import Link from "next/link";

import { IoLogoTwitter, IoLogoTwitch } from "react-icons/io";
import { IconContext } from "react-icons";

function Footer() {
    return (
        <footer className="bg-night-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Top area: Blocks */}
                <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-night-500">
                    {/* 1st block */}
                    <div className="sm:col-span-12 lg:col-span-3">
                        <div className="mb-2">
                            {/* Logo */}
                            <Link href="/">
                                <img
                                    className="hidden lg:block h-10  w-auto"
                                    src="https://i.imgur.com/BOAVxgQ.png"
                                    alt="Footer logo"
                                />
                            </Link>
                        </div>
                        <div className="text-sm text-gray-400">
                            <a
                                href="https://www.isaiahcreati.com/terms-of-service"
                                className="text-gray-400 hover:text-gray-300 transition duration-150 ease-in-out"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                    {/* 2nd block */}
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <ul className="text-sm">
                            <li className="mb-2">
                                <Link href="/loadouts">
                                    <a
                                        href="/loadouts"
                                        className="text-gray-400 hover:text-gray-300 transition duration-150 ease-in-out"
                                    >
                                        Loadouts
                                    </a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                {/* Bottom area */}
                <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-night-500">
                    {/* Social links */}
                    <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                        <li>
                            <IconContext.Provider
                                value={{
                                    color: "white",
                                    size: "1.5rem",
                                }}
                            >
                                <a href="https://twitter.com/isaiahcreati" target="__blank">
                                    <IoLogoTwitter />
                                </a>
                            </IconContext.Provider>
                        </li>
                        <li className="ml-4">
                            <IconContext.Provider
                                value={{
                                    color: "white",
                                    size: "1.5rem",
                                }}
                            >
                                <a href="https://www.twitch.tv/isaiahcreati" target="__blank">
                                    <IoLogoTwitch />
                                </a>
                            </IconContext.Provider>
                        </li>
                    </ul>
                    {/* Copyrights note */}
                    <div className="text-sm text-gray-400 mr-4">
                        Website by Isaiah Creati.
                        <br />
                        Business: creati@isaiahcreati.com
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;