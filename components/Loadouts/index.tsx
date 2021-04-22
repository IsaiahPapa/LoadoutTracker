import { useState, useEffect, FC } from "react";

import Spinner from "./Spinner";
import { useRouter } from "next/router";

import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

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
            if (obj[prop] !== null) {
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
                name: string | null;
                attachments: {
                    muzzle: string | null;
                    barrel: string | null;
                    laser: string | null;
                    optic: string | null;
                    stock: string | null;
                    underbarrel: string | null;
                    ammunition: string | null;
                    grip: string | null;
                    perk: string | null;
                };
            };
            secondary: {
                name: string | null;
                attachments: {
                    muzzle: string | null;
                    barrel: string | null;
                    laser: string | null;
                    optic: string | null;
                    stock: string | null;
                    trigger: string | null;
                    ammunition: string | null;
                    grip: string | null;
                    perk: string | null;
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
                image: "https://static.wikia.nocookie.net/callofduty/images/b/bf/Kilo_141_menu_icon_MW.png",
            },
        ],
        secondaries: [
            {
                name: ".50 GS",
                image: "https://static.wikia.nocookie.net/callofduty/images/e/e3/.50_GS_menu_icon_MW.png",
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
            logoUrl: "https://i.imgur.com/EAsuFFt.png",
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
            logoUrl: "https://i.imgur.com/EAsuFFt.png",
            logoAlt: "Call of Duty: Modern Warfare",
            id: "cod-modern-warfare",
        },
        feed: [
            {
                id: "NanoID_here_or_UUID4",
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
                            laser: null,
                            optic: "G.I. Mini Reflex",
                            stock: null,
                            underbarrel: "Commando Foregrip",
                            ammunition: null,
                            grip: "Rubberized Grip",
                            perk: null,
                        },
                    },
                    secondary: {
                        name: ".50 GS",
                        attachments: {
                            muzzle: null,
                            barrel: null,
                            laser: null,
                            optic: null,
                            stock: null,
                            trigger: null,
                            ammunition: null,
                            grip: null,
                            perk: null,
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
        >
            <li
                className="w-full h-14 mb-2 flex"
                style={{
                    backgroundImage: `url(${item.backgroundUrl})`,
                    backgroundSize: "cover",
                    filter: `${
                        router.asPath === "/loadouts/" + encodeURIComponent(item.id)
                            ? "grayscale(0%)"
                            : "grayscale(30%)"
                    }`,
                    backdropFilter: "blur(2px)",
                    border: `${
                        router.asPath === "/loadouts/" + encodeURIComponent(item.id)
                            ? "solid 3px blue"
                            : "unset"
                    }`,
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
                className="bg-night-800 p-2"
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
        <div
            className="flex flex-col h-full bg-night-800 ml-6"
            style={{
                width: "55rem",
            }}
        >
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
            <ul>{children}</ul>
        </div>
    );
    const FeedItem = ({ item }: { item: FeedItemFromApi }) => (
        <a
            onClick={() => {
                // onCategoryClick(item.id);
            }}
            key={item.id}
        >
            <li className="w-full h-14 py-1 mb-2 flex">
                <div className="flex w-1/12">
                    <div className="mx-auto flex flex-col">
                        <AiFillCaretUp />
                        {item.votes}
                        <AiFillCaretDown />
                    </div>
                </div>
                <div className="w-2/12">
                    <img src={findImageUrlFromName("primary", item.loadout.primary.name)} height="65px" />
                    <br />
                    {countAttachments(item.loadout.primary.attachments)}
                </div>
                <div className="w-2/12">
                    <img src={findImageUrlFromName("secondary", item.loadout.secondary.name)} height="65px" />
                    <br />
                    {countAttachments(item.loadout.secondary.attachments)}
                </div>
                <div className="w-1/12">
                    <img src={findImageUrlFromName("perk", item.loadout.perks[0])} height="65px" />
                </div>
                <div className="w-1/12">
                    <img src={findImageUrlFromName("perk", item.loadout.perks[1])} />
                </div>
                <div className="w-1/12">
                    <img src={findImageUrlFromName("perk", item.loadout.perks[2])} />
                </div>
                <div className="w-1/12">{item.loadout.lethal[0]}</div>
                <div className="w-1/12">{item.loadout.field[0]}</div>
                <div className="w-2/12"></div>
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
            <div className="flex flex-row font-inter h-full">
                <div className="flex mx-auto">
                    <CategoryWrapper>
                        {FakeCategoryApi.map((fakeItem) => {
                            return <CategoryItem item={fakeItem} />;
                        })}
                    </CategoryWrapper>
                    <FeedWrapper>
                        {fakeLoadoutFeed.feed.map((fakeItem) => {
                            return <FeedItem item={fakeItem} />;
                        })}
                    </FeedWrapper>
                </div>
            </div>
        </div>
    );
}
