"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-bmw-abyss overflow-hidden">
            {/* Top Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-bmw-red/5 blur-[100px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column (Span 5) */}
                    <div className="md:col-span-12 lg:col-span-5">
                        <Link href="/" className="flex items-center gap-4 mb-6 group w-fit">
                            <div className="relative group cursor-pointer">
                                <div className="absolute inset-0 bg-bmw-red blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                                <div className="relative w-14 h-14 bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center group-hover:border-bmw-red/50 transition-colors duration-300">
                                    <span className="font-orbitron text-white font-bold text-2xl group-hover:text-bmw-red transition-colors duration-300">M</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-orbitron text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:text-white transition-colors duration-300">
                                    BMW
                                </h3>
                                <p className="text-xs text-bmw-red tracking-[0.3em] uppercase font-bold group-hover:text-white transition-colors duration-300">M Series</p>
                            </div>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                            The ultimate expression of BMW M motorsport heritage. Engineered for those who demand perfection on every curve.
                        </p>
                    </div>

                    {/* Quick Links (Span 3) */}
                    <div className="md:col-span-3">
                        <h4 className="font-orbitron text-white text-lg font-bold mb-6 tracking-wide flex items-center gap-2">
                            <span className="w-1 h-4 bg-bmw-red rounded-sm"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { title: "Configure Your M", href: "/configure" },
                                { title: "Find a Dealer", href: "/dealers" },
                                { title: "Book a Test Drive", href: "/test-drive" },
                                { title: "M Performance Parts", href: "/parts" }
                            ].map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="h-[1px] w-0 bg-bmw-red group-hover:w-4 transition-all duration-300"></span>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact (Span 4) */}
                    <div className="md:col-span-4">
                        <h4 className="font-orbitron text-white text-lg font-bold mb-6 tracking-wide flex items-center gap-2">
                            <span className="w-1 h-4 bg-bmw-red rounded-sm"></span>
                            Connect
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-sm mb-8">
                            <li className="flex items-center gap-3">
                                <span className="text-bmw-red">✉</span> m-series@bmw.com
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-bmw-red">☏</span> +49 89 382 0
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-bmw-red">📍</span> Munich, Germany
                            </li>
                        </ul>
                        <div className="flex gap-4">
                            {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 bg-white/5 border border-white/10 hover:border-bmw-red/50 hover:bg-bmw-red/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 rounded-sm"
                                    aria-label={social}
                                >
                                    {social[0]}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-xs tracking-wide">
                        © {currentYear} BMW AG. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs text-gray-500 font-medium">
                        {[
                            { title: "Privacy Policy", href: "/privacy" },
                            { title: "Terms of Use", href: "/terms" },
                            { title: "Cookie Settings", href: "/cookies" }
                        ].map((item) => (
                            <a key={item.title} href={item.href} className="hover:text-bmw-red transition-colors duration-300 uppercase tracking-wider">
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Accent */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-bmw-red to-transparent origin-center opacity-50"
            ></motion.div>
        </footer>
    );
}
