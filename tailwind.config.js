module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                night: {
                    light: "#1d1d1d",
                    DEFAULT: "#171717",
                    900: "#171717",
                    800: "#1d1d1d",
                    700: "#212121",
                    600: "#1f1f1f",
                    500: "#262626",
                    400: "#303030",
                },
                gray: {
                    100: "#FBFBFB",
                    200: "#EAEAEA",
                    300: "#DFDFDF",
                    400: "#999999",
                    500: "#7F7F7F",
                    600: "#666666",
                    700: "#4C4C4C",
                    800: "#333333",
                    900: "#191919",
                },
                blue: {
                    100: "#E6F0FD",
                    200: "#CCE2FC",
                    300: "#99C5FA",
                    400: "#66A9F7",
                    500: "#338CF5",
                    600: "#0070F4",
                    700: "#0064DA",
                    800: "#0059C2",
                    900: "#004391",
                },
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            maxHeight: {
                0: "0",
                "1/4": "25%",
                "1/2": "50%",
                "3/4": "75%",
                full: "100%",
            },
            boxShadow: {
                xs: "0 0 0 1px rgba(0, 0, 0, 0.16)",
                sm: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
                default:
                    "0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
                md:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                lg:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
                xl:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
                "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
                outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
                none: "none",
            },
            fontSize: {
                xs: "0.75rem",
                sm: "0.875rem",
                base: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
                "4xl": "2.625rem",
                "5xl": "3.25rem",
                "6xl": "5.5rem",
            },
            inset: {
                "1/2": "50%",
                full: "100%",
            },
            letterSpacing: {
                tighter: "-0.02em",
                tight: "-0.01em",
                normal: "0",
                wide: "0.01em",
                wider: "0.02em",
                widest: "0.4em",
            },
            animation: {
                float: "float 3s ease-in-out infinite",
                spin: "spin 2s infinite linear",
                shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both"
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-5%)" },
                },
                spin:{
                    "0%": { transform: "rotate(0deg)"},
                    "100%": { transform: "rotate(359deg)"},
                },
                shake: {
                    "10%, 90%": {
                      transform: "translate3d(-1px, 0, 0)"
                    },
                    "20%, 80%": {
                      transform: "translate3d(2px, 0, 0)"
                    },              
                    "30%, 50%, 70%": {
                      transform: "translate3d(-4px, 0, 0)"
                    },
                    "40%, 60%": {
                      transform: "translate3d(4px, 0, 0)"
                    }
                  }
            },
            opacity: {
                90: "0.9",
            },
            zIndex: {
                '0': 0,
                '1': 1,
                '2': 2,
                '3': 3,
                '4': 4,
                '5': 5,
              }
        },
    },
    variants: {},
    plugins: [],
};
