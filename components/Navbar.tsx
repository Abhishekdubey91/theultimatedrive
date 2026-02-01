"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(2, 6, 23, 0)", "rgba(2, 6, 23, 0.8)"] // bmw-abyss equivalent
    );

    return (
        <motion.nav
            style={{ backgroundColor }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm"
        >
            <div
                className={`max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? "border-b border-white/5 shadow-2xl shadow-black/50" : ""
                    }`}
            >
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link href="/" className="flex items-center gap-3 md:gap-4 group">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                            <div className="absolute inset-0 bg-bmw-red/20 blur-md rounded-full group-hover:bg-bmw-red/40 transition-colors duration-500" />
                            <div className="relative w-full h-full bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 flex items-center justify-center skew-x-[-10deg]">
                                <span className="font-orbitron text-white font-bold text-lg md:text-xl skew-x-[10deg] group-hover:text-bmw-red transition-colors duration-300">M</span>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-orbitron text-xl md:text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                BMW
                            </h1>
                            <div className="flex items-center gap-2">
                                <span className="h-[1.5px] w-4 md:w-6 bg-bmw-red rounded-full"></span>
                                <p className="text-[8px] md:text-[10px] text-gray-400 tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold">Series</p>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        href="/inquire"
                        className="group relative px-5 md:px-8 py-2 md:py-3 overflow-hidden rounded-sm inline-block"
                    >
                        <div className="absolute inset-0 bg-white/5 border border-white/10 group-hover:border-bmw-red/50 transition-colors duration-300" />
                        <div className="absolute inset-0 bg-bmw-red/0 group-hover:bg-bmw-red/10 transition-colors duration-300" />

                        {/* Animated Shine */}
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />

                        <span className="relative z-10 font-rajdhani font-bold text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] uppercase text-white group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                            <span className="hidden sm:inline">Inquire Now</span>
                            <span className="sm:hidden">Inquire</span>
                            <span className="text-bmw-red group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                    </Link>
                </motion.div>
            </div>
        </motion.nav>
    );
}
