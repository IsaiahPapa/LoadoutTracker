import { NextSeo } from "next-seo";

export default function FourOhFour() {
    return (
        <>
            <NextSeo title="404 - Page not found." description="" />
            <div className="w-full h-full">
                <div className="flex h-full">
                    <div className="m-auto">
                        <img
                            className="m-auto w-16"
                            src="https://cdn.betterttv.net/emote/5f0cbcff6a652705221640dc/3x"
                        />
                        <h1 className="text-center text-2xl font-bold">404 - Page Not Found</h1>
                        <p className="text-gray-500">I guess we couldn't find what you were looking for...</p>
                    </div>
                </div>
            </div>
        </>
    );
}
