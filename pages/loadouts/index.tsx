import Loadouts from "../../components/Loadouts";
import { useEffect } from "react";
import { useRouter } from 'next/router';

export default function loadouts() {
    const router = useRouter()

    useEffect(()=>{
        //call api here and get the most popular game.
        //Once the data is clean and good, redirect them the slug/game_id.
        let fakeAxiosPostResult = "cod-modern-warfare";
        router.push(`/loadouts/${encodeURIComponent(fakeAxiosPostResult)}`);
    })
    // return <Loadouts />;
    return <p>Redirecting...</p>
}
