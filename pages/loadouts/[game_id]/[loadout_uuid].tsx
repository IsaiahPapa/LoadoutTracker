import { useState, useEffect, FC } from "react";

import { useRouter } from "next/router";

export default function loadoutByUUID() {
    const router = useRouter();

    const onCategoryClick = (id: string) => {
        router.push("/loadouts/" + id);
    };

    useEffect(() => {
        const { loadout_uuid } = router.query;
        console.log(loadout_uuid);
        //axios GET request given the game_id.
        //If the game_id didn't return a 404 from the server, then we display the data.
        //If there was a 404, say there is no data to load.
    });

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 bg-night-900">
            <h2 className="text-4xl sm:text-5xl leading-10 sm:leading-none font-extrabold leading-tighter tracking-tighter my-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
                    Edit your Loadout:
                </span>
            </h2>
            <div>
                <h3>Change game:</h3>
                <select
                    value={""}
                    className="block w-full p-2 mt-2 placeholder-gray-400 bg-night-900 shadow-inner rounded shadow outline-none focus:outline-none rounded-md shadow-lg"
                >
                    <option value="" data-command="" disabled>
                        👇 Select a Command 👇
                    </option>
                </select>
            </div>
            <div className="flex flex-col font-inter h-full">
                <div
                    className="mx-auto my-4 relative"
                    style={{
                        width: "1000px",
                        height: "563px",
                    }}
                >
                    <div
                        className="bg-blue-600 absolute"
                        style={{
                            width: "1000px",
                            height: "563px",
                        }}
                    >
                        Primary.
                    </div>
                </div>
            </div>
        </div>
    );
}
