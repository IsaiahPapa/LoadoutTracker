import { useState, useEffect, FC } from "react";

import Spinner from "./Spinner";
import { useRouter } from "next/router";

import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function Loadouts() {
    let [categories, setCategories] = useState([]);
    let [loadoutFeed, setLoadoutFeed] = useState([]);
    /*
    if (categories.length === 0 || loadoutFeed.length === 0) {
        return (
            <div className="flex flex-col items-center min-h-screen">
                <div className="mx-auto my-32">
                    <div className="flex items-center flex-col">
                        <Spinner />
                        <span>Loading Rewards...</span>
                    </div>
                </div>
            </div>
        );
    }
    */
    function countAttachments(obj: any): number {
        let count = 0;
        for (const prop in obj) {
            if (obj[prop] !== undefined) {
                count++;
            }
        }
        return count;
    }
    function findImageUrlFromName(type: string, name: string | null): string {
        switch (type) {
            case "primary": {
                for (let i = 0; i < fakeImagesApi.primaries.length; i++) {
                    if (fakeImagesApi.primaries[i].name === name) {
                        return fakeImagesApi.primaries[i].image;
                    }
                }
            }
            case "secondary": {
                for (let i = 0; i < fakeImagesApi.secondaries.length; i++) {
                    if (fakeImagesApi.secondaries[i].name === name) {
                        return fakeImagesApi.secondaries[i].image;
                    }
                }
            }
            case "perk": {
                for (let i = 0; i < fakeImagesApi.perks.length; i++) {
                    if (fakeImagesApi.perks[i].name === name) {
                        return fakeImagesApi.perks[i].image;
                    }
                }
            }
            case "lethal": {
                for (let i = 0; i < fakeImagesApi.lethals.length; i++) {
                    if (fakeImagesApi.lethals[i].name === name) {
                        return fakeImagesApi.lethals[i].image;
                    }
                }
            }
            case "field": {
                for (let i = 0; i < fakeImagesApi.fields.length; i++) {
                    if (fakeImagesApi.fields[i].name === name) {
                        return fakeImagesApi.fields[i].image;
                    }
                }
            }
            default: {
                console.log("Type: " + type + " not known");
                return "";
            }
        }
    }

    type CatergoryFromAPI = {
        backgroundUrl: string;
        logoUrl: string;
        logoAlt: string;
        id: string;
    };
    type FeedItemFromApi = {
        id: string;
        user: {
            id: string;
            image: string;
        };
        votes: number;
        loadout: {
            primary: {
                name: string;
                attachments: {
                    muzzle: string | undefined;
                    barrel: string | undefined;
                    laser: string | undefined;
                    optic: string | undefined;
                    stock: string | undefined;
                    underbarrel: string | undefined;
                    ammunition: string | undefined;
                    grip: string | undefined;
                    perk: string | undefined;
                };
            };
            secondary: {
                name: string;
                attachments: {
                    muzzle: string | undefined;
                    barrel: string | undefined;
                    laser: string | undefined;
                    optic: string | undefined;
                    stock: string | undefined;
                    trigger: string | undefined;
                    ammunition: string | undefined;
                    grip: string | undefined;
                    perk: string | undefined;
                };
            };
            perks: string[];
            lethal: string[];
            field: string[];
        };
    };

    let fakeImagesApi = {
        primaries: [
            {
                name: "Kilo 141",
                image: "https://www.callofduty.com/cdn/app/weapons/mw/icon_cac_weapon_ar_kilo433_mobile.png",
            },
        ],
        secondaries: [
            {
                name: ".50 GS",
                image: "https://www.callofduty.com/cdn/app/weapons/mw/icon_cac_weapon_pi_decho_mobile.png",
            },
        ],
        perks: [
            {
                name: "Cold-Blooded",
                image: "https://static.wikia.nocookie.net/callofduty/images/6/6b/Cold.png",
            },
            {
                name: "Amped",
                image: "https://i.imgur.com/ZJUllPz.png",
            },
            {
                name: "Ghost",
                image: "https://i.imgur.com/k6qBRNE.png",
            },
        ],
        lethals: [
            {
                name: "C4",
                image: "https://static.wikia.nocookie.net/callofduty/images/d/d1/C4_menu_icon_MW3.png",
            },
        ],
        fields: [
            {
                name: "Smoke Grenade",
                image:
                    "https://static.wikia.nocookie.net/callofduty/images/c/c3/Smoke_Grenade_menu_icon_MW3.png",
            },
        ],
    };

    let FakeCategoryApi = [
        {
            backgroundUrl: "https://i.imgur.com/oaN3oLw.png",
            logoUrl: "https://i.imgur.com/PpvuNEz.png",
            logoAlt: "Call of Duty: Black Ops Cold War",
            id: "cod-black-ops-cold-war",
        },
        {
            backgroundUrl: "https://i.imgur.com/huKaAII.png",
            logoUrl: "https://i.imgur.com/F0i01ql.png",
            logoAlt: "Call of Duty: Modern Warfare",
            id: "cod-modern-warfare",
        },
        /*
        {
            backgroundUrl: "",
            logoUrl: "",
            logoAlt: "",
        },
        */
    ];

    let fakeLoadoutFeed = {
        game: {
            backgroundUrl: "https://i.imgur.com/huKaAII.png",
            logoUrl: "https://i.imgur.com/F0i01ql.png",
            logoAlt: "Call of Duty: Modern Warfare",
            id: "cod-modern-warfare",
        },
        feed: [
            {
                uuid: "NanoID_here_or_UUID4",
                user: {
                    id: "Creati",
                    image:
                        "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
                },
                votes: 25,
                loadout: {
                    primary: {
                        name: "Kilo 141",
                        attachments: {
                            muzzle: "Monolithic Suppressor",
                            barrel: 'Singuard Arms 19.7" Prowler',
                            laser: undefined,
                            optic: "G.I. Mini Reflex",
                            stock: undefined,
                            underbarrel: "Commando Foregrip",
                            ammunition: undefined,
                            grip: "Rubberized Grip",
                            perk: undefined,
                        },
                    },
                    secondary: {
                        name: ".50 GS",
                        attachments: {
                            muzzle: undefined,
                            barrel: undefined,
                            laser: undefined,
                            optic: undefined,
                            stock: undefined,
                            trigger: undefined,
                            ammunition: undefined,
                            grip: undefined,
                            perk: undefined,
                        },
                    },
                    perks: ["Cold-Blooded", "Ghost", "Amped"],
                    lethal: ["C4"],
                    field: ["Smoke Grenade"],
                },
            },
        ],
    };

    const router = useRouter();

    const onCategoryClick = (id: string) => {
        router.push("/loadouts/" + id);
    };

    const onLoadoutClick = (id: string) => {
        // console.log(router.asPath);
        router.push(router.asPath + "/" + id);
    };

    useEffect(() => {
        const { game_id } = router.query;
        console.log(game_id);
        //axios GET request given the game_id.
        //If the game_id didn't return a 404 from the server, then we display the data.
        //If there was a 404, say there is no data to load.
    });

    const CategoryItem = ({ item }: { item: CatergoryFromAPI }) => (
        <a
            onClick={() => {
                onCategoryClick(item.id);
            }}
            key={item.id}
            className="cursor-pointer"
        >
            <li
                className={`w-full h-14 mb-2 flex ${
                    router.asPath === "/loadouts/" + encodeURIComponent(item.id)
                        ? "border-4 border-blue-700"
                        : ""
                }`}
                style={{
                    backgroundImage: `url(${item.backgroundUrl})`,
                    backgroundSize: "cover",
                    filter: `${
                        router.asPath === "/loadouts/" + encodeURIComponent(item.id)
                            ? "grayscale(0%)"
                            : "grayscale(30%)"
                    }`,
                    backdropFilter: "blur(2px)",
                }}
            >
                <img
                    src={item?.logoUrl ? item?.logoUrl : ""}
                    style={{ height: "2rem" }}
                    className="my-auto ml-2"
                    alt={item.logoAlt}
                />
            </li>
        </a>
    );

    let CategoryWrapper = ({ children }: { children: React.ReactNode }) => (
        <>
            <div
                className="bg-night-800 p-2 flex-none"
                style={{
                    width: "250px",
                }}
            >
                <h2 className="text-center text-xl my-2 uppercase">Games</h2>
                <ul className="flex flex-col w-full h-96">{children}</ul>
            </div>
        </>
    );

    let FeedWrapper = ({ children }: { children: React.ReactNode }) => (
        // <div
        //     className="bg-night-800 p-2"
        //     style={{
        //         width: "250px",
        //     }}
        // >
        //     <h2 className="text-center text-xl my-2 uppercase">Games</h2>
        //     <ul className="flex flex-col w-full h-96">{children}</ul>
        // </div>
        <div className="flex flex-col h-full bg-night-800 ml-6">
            <div className="relative flex w-full h-20 overflow-hidden">
                <img
                    className="absolute w-full h-full z-0"
                    style={{
                        backgroundImage: `url(${fakeLoadoutFeed.game.backgroundUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transform: "scale(1.2)",
                        filter: "blur(4px)",
                    }}
                />
                <img
                    src={fakeLoadoutFeed?.game?.logoUrl ? fakeLoadoutFeed?.game?.logoUrl : ""}
                    style={{ height: "4.5rem" }}
                    className="my-auto ml-2 z-1"
                    alt={fakeLoadoutFeed?.game?.logoAlt}
                />
            </div>
            <ul className="m-2">{children}</ul>
        </div>
    );
    const FeedItem = ({ item }: { item: FeedItemFromApi }) => (
        <a
            onClick={() => {
                onLoadoutClick(item.id);
            }}
            key={item.id}
            className="cursor-pointer"
        >
            <li className="w-full h-20 py-1 mt-4 mb-2 flex bg-night-500 rounded-full gap-1">
                <div className="flex w-1/12">
                    <div className="m-auto flex flex-col">
                        <FiChevronUp size="1.25rem" />
                        <span>{item.votes}</span>
                        <FiChevronDown size="1.25rem" />
                    </div>
                </div>
                <div className="w-2/12 relative flex">
                    <img
                        src={findImageUrlFromName("primary", item.loadout.primary.name)}
                        alt={item.loadout.primary.name}
                        className="object-contain mx-auto pb-4"
                    />
                    <span className="w-full text-center absolute bottom-0 text-gray-400">
                        <span className="text-blue-500">
                            {countAttachments(item.loadout.primary.attachments)}
                        </span>
                        x Attachments
                    </span>
                </div>
                <div className="w-2/12 relative flex">
                    <img
                        src={findImageUrlFromName("secondary", item.loadout.secondary.name)}
                        alt={item.loadout.secondary.name}
                        className="object-contain mx-auto pb-4"
                    />
                    <span className="w-full text-center absolute bottom-0 text-gray-400">
                        <span className="text-blue-500">
                            {countAttachments(item.loadout.secondary.attachments)}
                        </span>
                        x Attachments
                    </span>
                </div>
                <div className="w-1/12 relative flex">
                    <img
                        className="object-contain mx-auto"
                        src={findImageUrlFromName("perk", item.loadout.perks[0])}
                        alt={item.loadout.perks[0]}
                        height="65px"
                    />
                </div>
                <div className="w-1/12 relative flex">
                    <img
                        className="object-contain mx-auto"
                        src={findImageUrlFromName("perk", item.loadout.perks[1])}
                        alt={item.loadout.perks[1]}
                    />
                </div>
                <div className="w-1/12 relative flex">
                    <img
                        className="object-contain mx-auto"
                        src={findImageUrlFromName("perk", item.loadout.perks[2])}
                        alt={item.loadout.perks[2]}
                    />
                </div>
                <div className="w-1/12 relative flex">
                    <img
                        src={findImageUrlFromName("lethal", item.loadout.lethal[0])}
                        alt={item.loadout.lethal[0]}
                        className="object-contain mx-auto"
                    />
                </div>
                <div className="w-1/12 relative flex">
                    <img
                        src={findImageUrlFromName("field", item.loadout.field[0])}
                        alt={item.loadout.field[0]}
                        className="object-contain mx-auto"
                    />
                </div>
                <div className="w-2/12 relative flex">
                    <div className="m-auto w-full">
                        <img
                            src={item.user.image}
                            alt={item.user.id}
                            className="mx-auto rounded-full h-12 w-12 flex items-center justify-center border-2 border-blue-600"
                        />
                        <span className="flex mx-auto uppercase items-center justify-center">
                            {item.user.id}
                        </span>
                    </div>
                </div>
            </li>
        </a>
    );

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 bg-night-900">
            <h2 className="text-4xl sm:text-5xl leading-10 sm:leading-none font-extrabold leading-tighter tracking-tighter my-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
                    Loadouts
                </span>
            </h2>
            <div className="flex flex-col font-inter h-full">
                <div className="text-gray-400 bg-night-800 p-4 my-4">
                    <h3 className="text-2xl font-bold text-white">Share your loadout!</h3>
                    <p>
                        With the launch of this new site, ALL FEATURES & VOICES will be TEMPORARILY available
                        to everyone. An audit will happen later, and if you are not a{" "}
                        <span className="text-yellow-400">Supporter</span> using a{" "}
                        <span className="text-yellow-400">Supporter</span> tagged voice or feature it will be
                        removed and/or changed without notice.
                    </p>
                </div>
                <div className="flex mx-auto">
                    <CategoryWrapper>
                        {FakeCategoryApi.map((fakeItem) => {
                            return <CategoryItem item={fakeItem} />;
                        })}
                    </CategoryWrapper>
                    <FeedWrapper>
                        {fakeLoadoutFeed.feed.map((fakeItem: any) => {
                            return (
                                <>
                                    <FeedItem item={fakeItem} />
                                    <FeedItem item={fakeItem} />
                                    <FeedItem item={fakeItem} />
                                    <FeedItem item={fakeItem} />
                                    <FeedItem item={fakeItem} />
                                    <FeedItem item={fakeItem} />
                                    <FeedItem item={fakeItem} />
                                    <FeedItem item={fakeItem} />
                                </>
                            );
                        })}
                    </FeedWrapper>
                </div>
            </div>
        </div>
    );
}
