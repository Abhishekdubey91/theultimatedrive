import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "bmw-blue": "#00DDF9", // Electric Cyan (Headlights)
                "bmw-crimson": "#FF0055", // Neon Crimson (Tunnel Lights)
                "bmw-red": "#FF0055", // Alias for compatibility
                "bmw-black": "#000000",
                "bmw-white": "#FFFFFF",
                "carbon-gray": "#1A1A1A",
                "bmw-abyss": "#020617", // Deep Navy Abyss background
                "bmw-cyber": {
                    blue: "#00DDF9",
                    crimson: "#FF0055",
                    dark: "#020617",
                },
            },
            fontFamily: {
                orbitron: ["var(--font-orbitron)", "sans-serif"],
                rajdhani: ["var(--font-rajdhani)", "sans-serif"],
            },
        },
    },
    plugins: [
        function ({ addBase, theme }: { addBase: any; theme: any }) {
            addBase({
                "::selection": {
                    backgroundColor: theme("colors.bmw-red"),
                    color: theme("colors.bmw-white"),
                },
                "::-webkit-scrollbar": {
                    width: "8px",
                },
                "::-webkit-scrollbar-track": {
                    backgroundColor: theme("colors.bmw-black"),
                },
                "::-webkit-scrollbar-thumb": {
                    backgroundColor: theme("colors.carbon-gray"),
                    borderRadius: "4px",
                },
                "::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: theme("colors.bmw-red"),
                },
            });
        },
    ],
};

export default config;
