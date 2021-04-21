import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import { FaBattleNet } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function SplashSignIn() {
    const [session, loading] = useSession();

    if (session) {
        return (
            <Link href="/dashboard">
                <a className="flex justify-center btn text-white bg-gray-800 hover:bg-gray-700 p-3 rounded-full sm:mb-0">
                    <span className="flex items-center">
                        <MdDashboard />
                        Go to Dashboard
                    </span>
                </a>
            </Link>
        );
    } else {
        return (
            <button
                onClick={() => {
                    signIn("twitch");
                }}
                className="btn text-white bg-blue-700 hover:bg-blue-800 p-3 rounded-full sm:mb-0"
            >
                <span className="flex items-center">
                    <FaBattleNet className="mx-1" />
                    Login With Battle.net
                </span>
            </button>
        );
    }
}
