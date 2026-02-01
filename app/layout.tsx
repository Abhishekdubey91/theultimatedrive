import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
    subsets: ["latin"],
    variable: "--font-orbitron",
    weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
    subsets: ["latin"],
    variable: "--font-rajdhani",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "BMW M Series | Ultimate Driving Machine",
    description: "Experience the pinnacle of German engineering with the BMW M Series. 625HP Twin-Turbo V8, Carbon Fiber Aerodynamics, and unmatched precision.",
    keywords: "BMW, M Series, Sports Car, Luxury Car, Performance",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${orbitron.variable} ${rajdhani.variable} font-rajdhani antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
