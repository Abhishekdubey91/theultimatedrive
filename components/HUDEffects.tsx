"use client";

import { motion } from "framer-motion";

export default function HUDEffects() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            {/* Subtle Noise/Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Corner Tech Accents */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-[1px] border-l-[1px] border-bmw-blue/40" />
            <div className="absolute top-8 right-8 w-12 h-12 border-t-[1px] border-r-[1px] border-bmw-blue/40" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b-[1px] border-l-[1px] border-bmw-red/40" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-[1px] border-r-[1px] border-bmw-red/40" />

            {/* System Status Indicators */}
            <div className="absolute top-8 left-24 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-bmw-blue animate-pulse" />
                    <span className="text-[10px] font-orbitron text-bmw-blue/60 tracking-[0.2em] uppercase">System Active</span>
                </div>
                <div className="w-24 h-[1px] bg-gradient-to-r from-bmw-blue/30 to-transparent" />
            </div>

            <div className="absolute bottom-8 right-24 text-right">
                <span className="text-[10px] font-orbitron text-bmw-red/60 tracking-[0.2em] uppercase block mb-1">Telemetry Live</span>
                <div className="w-32 h-[1px] bg-gradient-to-l from-bmw-red/30 to-transparent ml-auto" />
            </div>

            {/* Subtle Grid - Minimal opacity */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,221,249,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,221,249,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        </div>
    );
}
