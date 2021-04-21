import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

//NextAuth
import { Provider } from "next-auth/client";

// Components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <DefaultSeo {...SEO} />
            <div className="flex h-screen flex-col bg-night-900 text-white font-inter">
                <Nav {...pageProps} />
                <div className="flex-grow block bg-night-900" style={{ marginTop: "80px" }}>
                    <Component {...pageProps} />
                </div>
                <Footer />
            </div>
        </Provider>
    );
}
