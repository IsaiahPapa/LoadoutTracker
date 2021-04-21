
import { signIn, useSession } from "next-auth/client";
import { FaBattleNet } from "react-icons/fa";
import SignInProfile from "./SignInProfile";

export default function SignIn() {
    const [session, loading] = useSession();


    if (session) {
        return(<SignInProfile/>)
    } else {
        return (
            <>
                <button
                    onClick={() => {
                        signIn("twitch");
                    }}
                    className="btn text-white bg-blue-700 hover:bg-blue-800 w-full p-3 rounded-full sm:w-auto sm:mb-0"
                >
                    <span className="flex items-center">
                        <FaBattleNet className="mx-1" />
                        Login
                    </span>
                </button>
            </>
        );
    }
}
