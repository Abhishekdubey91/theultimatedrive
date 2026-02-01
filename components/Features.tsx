"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { bmwMSeriesData } from "@/data/carData";
import gsap from "gsap";
import TypingTitle from "./TypingTitle";

export default function Features() {
    const { features } = bmwMSeriesData;
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        cardsRef.current.forEach((card) => {
            if (!card) return;

            // Target the INNER card for GSAP to avoid conflict with Framer Motion on the outer card
            const innerCard = card.querySelector(".inner-card") as HTMLElement;
            const icon = card.querySelector(".feature-icon") as HTMLElement;
            const glow = card.querySelector(".feature-glow") as HTMLElement;

            const handleMouseMove = (e: MouseEvent) => {
                const { left, top, width, height } = card.getBoundingClientRect();
                const x = e.clientX - left;
                const y = e.clientY - top;

                // 3D Tilt Effect on INNER card
                const rotateX = ((y - height / 2) / height) * -10; // Reduced tilt for stability
                const rotateY = ((x - width / 2) / width) * 10;

                gsap.to(innerCard, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    duration: 0.5,
                    ease: "power2.out",
                });

                // Internal Parallax for Icon
                gsap.to(icon, {
                    x: (x - width / 2) * 0.1,
                    y: (y - height / 2) * 0.1,
                    duration: 0.4,
                    ease: "power2.out",
                });

                // Follow Glow
                gsap.to(glow, {
                    left: x,
                    top: y,
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                });

                // Lift card on hover
                gsap.to(card, { zIndex: 50, duration: 0.1 });
            };

            const handleMouseLeave = () => {
                gsap.to(innerCard, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
                gsap.to(icon, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
                gsap.to(glow, { opacity: 0, duration: 0.4 });
                gsap.set(card, { zIndex: 1, delay: 0.5 }); // Reset z-index after animation
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
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
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" }, // Reduced Y distance for stability
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 20,
                duration: 0.8,
            },
        },
    };

    return (
        <section className="py-24 px-6 md:px-12 bg-bmw-abyss overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <TypingTitle
                        text="Premium Features"
                        className="font-orbitron text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white uppercase"
                    />
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
                        Every detail engineered for performance, precision, and pure driving pleasure
                    </p>
                    <div className="flex justify-center gap-1 mt-6">
                        <div className="w-12 h-1 bg-bmw-blue"></div>
                        <div className="w-12 h-1 bg-bmw-crimson"></div>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" // Increased gap to prevent overlap
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            variants={itemVariants}
                            className="group relative z-10"
                        >
                            <div className="inner-card relative h-full bg-bmw-abyss/40 border border-white/5 p-8 group-hover:border-bmw-blue/30 transition-colors duration-500 overflow-hidden backdrop-blur-md transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
                                {/* GSAP Follow Glow */}
                                <div className="feature-glow absolute pointer-events-none opacity-0 w-32 h-32 bg-bmw-blue/10 blur-[60px] -translate-x-1/2 -translate-y-1/2 z-0" />

                                {/* Technical Grid Overlay */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,221,249,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,221,249,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon Container with Parallax */}
                                <div className="feature-icon relative mb-8 inline-flex" style={{ transform: 'translateZ(40px)' }}>
                                    <div className="absolute inset-0 bg-bmw-blue/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative w-16 h-16 flex items-center justify-center border border-white/10 bg-white/5 text-4xl group-hover:border-bmw-blue/50 group-hover:text-bmw-blue transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-bmw-crimson opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                                </div>

                                {/* Content */}
                                <div className="feature-content relative z-10" style={{ transform: 'translateZ(20px)' }}>
                                    <h3 className="font-orbitron text-xl font-bold mb-4 text-white tracking-wide">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Bottom Interactive Accent */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-bmw-blue to-bmw-crimson group-hover:w-full transition-all duration-700 ease-out" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
