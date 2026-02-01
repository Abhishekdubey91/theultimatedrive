"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { bmwMSeriesData } from "@/data/carData";
import TypingTitle from "./TypingTitle";

interface BMWExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function BMWExperience({ scrollYProgress }: BMWExperienceProps) {
    const { hero, design, engine } = bmwMSeriesData;

    // Phase calculations (0-33%, 33-66%, 66-100%)
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.33], [0, -50]);

    const designOpacity = useTransform(
        scrollYProgress,
        [0.3, 0.35, 0.6, 0.66],
        [0, 1, 1, 0]
    );
    const designY = useTransform(scrollYProgress, [0.3, 0.35, 0.66], [50, 0, -50]);

    const engineOpacity = useTransform(scrollYProgress, [0.63, 0.68, 1], [0, 1, 1]);
    const engineY = useTransform(scrollYProgress, [0.63, 0.68], [50, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 font-sans overflow-hidden">
            {/* HERO PHASE (0-33%) */}
            <motion.div
                style={{ opacity: heroOpacity, y: heroY }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 md:left-24 md:inset-x-auto max-w-xl px-6 md:px-0"
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative md:pl-8 text-center md:text-left"
                >
                    {/* Vertical Accent Line - Hidden on mobile, visible on MD+ */}
                    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-bmw-red via-transparent to-transparent opacity-50"></div>

                    <p className="text-[10px] md:text-sm text-bmw-red tracking-[0.4em] md:tracking-[0.5em] uppercase mb-3 md:mb-4 font-bold flex items-center justify-center md:justify-start gap-2">
                        <span className="w-2 h-2 bg-bmw-red rounded-full animate-pulse"></span>
                        {hero.subtitle}
                    </p>

                    <TypingTitle
                        text={hero.title}
                        className="font-orbitron text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500 uppercase"
                        delay={1.2}
                    />

                    <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 mb-8">
                        <div>
                            <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest mb-1">Starting From</p>
                            <p className="text-2xl md:text-4xl font-light text-white font-rajdhani">
                                {hero.price}
                            </p>
                        </div>
                        <div className="h-6 md:h-8 w-[1px] bg-white/20"></div>
                        <div>
                            <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest mb-1">Model Year</p>
                            <p className="text-2xl md:text-4xl font-light text-white font-rajdhani">2026</p>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-start">
                        <button className="pointer-events-auto group relative flex items-center gap-4 py-2">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-white/20 flex items-center justify-center group-hover:border-bmw-red/50 transition-colors duration-300 bg-black/50 backdrop-blur-sm">
                                <span className="text-white group-hover:text-bmw-red transition-colors duration-300 text-lg">→</span>
                            </div>
                            <span className="font-rajdhani font-bold text-xs md:text-sm tracking-[0.2em] uppercase text-white group-hover:text-bmw-red transition-colors duration-300">
                                {hero.cta}
                            </span>
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {/* DESIGN PHASE (33-66%) */}
            <motion.div
                style={{ opacity: designOpacity, y: designY }}
                className="absolute inset-x-0 top-[15%] md:top-[20%] md:inset-x-auto md:right-24 max-w-md px-6 md:px-0 mx-auto md:mx-0"
            >
                <div className="relative p-6 md:p-8 bg-gradient-to-b md:bg-gradient-to-bl from-bmw-abyss/80 to-transparent md:to-transparent border-t md:border-r border-bmw-blue/20 backdrop-blur-md text-center md:text-right">
                    <div className="absolute top-0 right-0 md:right-0 left-0 md:left-auto mx-auto md:mx-0 w-16 h-[2px] bg-bmw-blue"></div>

                    <TypingTitle
                        text={design.title}
                        className="font-orbitron text-2xl md:text-4xl font-bold mb-2 tracking-tight text-white uppercase mt-4 md:mt-0"
                    />
                    <p className="text-base md:text-xl text-bmw-blue font-medium mb-6 tracking-wide">
                        {design.description}
                    </p>
                    <ul className="space-y-3 md:space-y-4 text-xs md:text-base text-gray-400">
                        {design.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center justify-center md:justify-end gap-3 group">
                                <span className="tracking-wide group-hover:text-white transition-colors duration-300">{highlight}</span>
                                <span className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-bmw-blue transition-colors duration-300 rotate-45"></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* ENGINE PHASE (66-100%) */}
            <motion.div
                style={{ opacity: engineOpacity, y: engineY }}
                className="absolute inset-x-0 bottom-[10%] md:bottom-[15%] md:inset-x-auto md:right-24 max-w-lg px-6 md:px-0 mx-auto md:mx-0"
            >
                <div className="relative bg-bmw-abyss/90 border border-bmw-crimson/20 p-6 md:p-8 backdrop-blur-xl">
                    <div className="hidden md:block absolute -left-2 top-8 bottom-8 w-1 bg-gradient-to-b from-transparent via-bmw-crimson to-transparent"></div>
                    <div className="md:hidden absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-bmw-crimson to-transparent"></div>

                    <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-6 md:mb-8 border-b border-white/10 pb-4 gap-2 md:gap-0">
                        <TypingTitle
                            text={engine.title}
                            className="font-orbitron text-2xl md:text-4xl font-bold tracking-tight text-white leading-none uppercase"
                        />
                        <p className="text-[8px] md:text-xs text-bmw-blue font-bold tracking-[0.2em]">POWER UNIT // CYBER V8</p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 md:gap-x-12 gap-y-4 md:gap-y-6 text-center md:text-left">
                        {engine.specs.map((spec, index) => (
                            <div key={index} className="group">
                                <p className="text-[8px] md:text-[10px] text-gray-500 tracking-wider uppercase mb-1 group-hover:text-bmw-red transition-colors duration-300">
                                    {spec.label}
                                </p>
                                <p className="font-rajdhani text-xl md:text-3xl font-medium text-white group-hover:translate-x-1 transition-transform duration-300">
                                    {spec.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
                className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <p className="text-[8px] md:text-[10px] text-gray-500 tracking-[0.4em] uppercase font-bold">Initialize</p>
                <motion.div
                    animate={{ height: [30, 50, 30], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] bg-gradient-to-b from-bmw-red to-transparent"
                ></motion.div>
            </motion.div>
        </div>
    );
}
