import { useState, useEffect } from "react";

import Spinner from "./Spinner";

export default function Loadouts() {
    let [categories, setCategories] = useState([]);
    let [loadoutFeed, setLoadoutFeed] = useState([]);
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
    return (
        <div className="flex flex-col items-center min-h-screen font-inter">
            <div className="px-5 py-3 flex flex-row flex-wrap   ">
            </div>
            <div className="p-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                </div>
            </div>
        </div>
        );
}
