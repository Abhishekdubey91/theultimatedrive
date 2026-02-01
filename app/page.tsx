"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import BMWScrollCanvas from "@/components/BMWScrollCanvas";
import BMWExperience from "@/components/BMWExperience";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HUDEffects from "@/components/HUDEffects";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Master scroll control - single source of truth
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <main className="bg-bmw-abyss">
            <Navbar />
            <HUDEffects />

            {/* SCROLL SEQUENCE SECTION - Locked for 600vh */}
            <section ref={containerRef} className="h-[600vh] relative">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    {/* Canvas Layer - z-0 */}
                    <div className="absolute inset-0 z-0">
                        <BMWScrollCanvas
                            scrollYProgress={scrollYProgress}
                            totalFrames={240}
                            imageFolderPath="/images/bmw-sequence"
                        />
                    </div>

                    {/* HUD Overlay Layer - z-10 */}
                    <div className="absolute inset-0 z-10">
                        <BMWExperience scrollYProgress={scrollYProgress} />
                    </div>
                </div>
            </section>

            {/* NATURAL SCROLL CONTENT - Scrolls naturally after sequence */}
            <div className="relative z-20 bg-bmw-abyss">
                <SpecsGrid />
                <Features />
                <Footer />
            </div>
        </main>
    );
}
