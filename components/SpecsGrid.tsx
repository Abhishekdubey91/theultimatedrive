"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { bmwMSeriesData } from "@/data/carData";
import gsap from "gsap";

import TypingTitle from "./TypingTitle";

export default function SpecsGrid() {
    const { technicalSpecs } = bmwMSeriesData;
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        cardsRef.current.forEach((card) => {
            if (!card) return;

            const glow = card.querySelector(".hover-glow") as HTMLElement;
            const xTo = gsap.quickTo(glow, "left", { duration: 0.4, ease: "power3" });
            const yTo = gsap.quickTo(glow, "top", { duration: 0.4, ease: "power3" });

            const handleMouseMove = (e: MouseEvent) => {
                const { left, top, width, height } = card.getBoundingClientRect();
                const x = e.clientX - left;
                const y = e.clientY - top;

                xTo(x);
                yTo(y);

                // Add magnetic pull to content
                const content = card.querySelector(".card-content") as HTMLElement;
                const moveX = (x - width / 2) * 0.1;
                const moveY = (y - height / 2) * 0.1;
                gsap.to(content, { x: moveX, y: moveY, duration: 0.4, ease: "power2.out" });
            };

            const handleMouseLeave = () => {
                gsap.to(glow, { opacity: 0, duration: 0.3 });
                const content = card.querySelector(".card-content") as HTMLElement;
                gsap.to(content, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
            };

            const handleMouseEnter = () => {
                gsap.to(glow, { opacity: 1, duration: 0.3 });
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);
            card.addEventListener("mouseenter", handleMouseEnter);

            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
                card.removeEventListener("mouseenter", handleMouseEnter);
            };
        });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -15, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
                duration: 0.8,
            },
        },
    };

    return (
        <section className="relative py-32 px-6 md:px-12 bg-bmw-abyss overflow-hidden">
            {/* Cinematic Background Elements - Dual Tone */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,221,249,0.08)_0%,transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,0,85,0.08)_0%,transparent_50%)]" />

                {/* Floating Neon Orbs */}
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-bmw-blue/5 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-bmw-crimson/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative max-w-7xl mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <TypingTitle
                        text="Technical Specifications"
                        className="font-orbitron text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white uppercase"
                    />
                    <div className="flex justify-center gap-1 mt-4">
                        <div className="w-12 h-1 bg-bmw-blue"></div>
                        <div className="w-12 h-1 bg-bmw-crimson"></div>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {technicalSpecs.map((spec, index) => (
                        <motion.div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="group relative overflow-hidden bg-white/5 p-[1px] backdrop-blur-md cursor-crosshair"
                        >
                            <div className="relative h-full bg-bmw-abyss/80 border border-white/5 p-8 overflow-hidden">
                                {/* GSAP Custom Glow */}
                                <div className="hover-glow absolute pointer-events-none opacity-0 w-40 h-40 bg-bmw-blue/20 blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />

                                {/* Technical Corner Accents */}
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-bmw-blue/50"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-bmw-crimson/50"></div>

                                <div className="card-content flex flex-col h-full justify-between relative z-10 pointer-events-none">
                                    <p className="text-[10px] text-gray-500 tracking-[0.25em] uppercase font-medium group-hover:text-bmw-blue transition-colors duration-300">
                                        {spec.label}
                                    </p>
                                    <div className="mt-4">
                                        <p className="font-rajdhani text-2xl md:text-3xl font-bold text-white tracking-wide">
                                            {spec.value}
                                        </p>
                                        <div className="h-[1px] w-8 bg-gray-800 mt-4 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-bmw-blue group-hover:to-bmw-crimson transition-all duration-500 ease-out" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
