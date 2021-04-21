import SplashSignIn from "../components/Home/SplashSignIn"
export default function Home() {
    return (
        <div className="overflow-hidden">
            <section className="relative">
                {/* Illustration behind hero content */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Hero content */}
                    <div className="pt-16 pb-12 md:pt-40 md:pb-20">
                        {/* Section header */}
                        <div className="text-center pb-12 md:pb-16">
                            <h1
                                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                                // data-aos="zoom-y-out"
                            >
                                {/* TODO: Placeholder name? */}
                                Loadout Tracker
                            </h1>
                            <div className="max-w-3xl mx-auto">
                                <p
                                    className="text-xl text-gray-400 mb-8"
                                    // data-aos="zoom-y-out"
                                    // data-aos-delay="150"
                                >
                                    {/* TODO: Put a description here */}
                                    Track loadouts during the current meta. No more hunting for the best setup!
                                </p>
                                <div
                                    className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                                    // data-aos="zoom-y-out"
                                    // data-aos-delay="300"
                                >
                                    <SplashSignIn />
                                </div>
                            </div>
                        </div>

                        {/* Hero image */}
                        <div>
                            <div
                                className="relative flex justify-center mb-8"
                                // data-aos="zoom-y-out"
                                // data-aos-delay="450"
                            >
                                <div className="flex flex-col justify-center">
                                    <img
                                        className="mx-auto"
                                        src="https://i.imgur.com/J7gPIGx.png"
                                        width="800"
                                        height="432"
                                        alt="Hero"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
