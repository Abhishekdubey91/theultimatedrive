"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TypingTitleProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function TypingTitle({ text, className = "", delay = 0 }: TypingTitleProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: delay,
                staggerChildren: 0.05,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 10, },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1,
            },
        },
    };

    return (
        <motion.h2
            ref={ref}
            className={className}
            variants={sentence}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={letter} className="inline-block whitespace-pre">
                    {char}
                </motion.span>
            ))}
        </motion.h2>
    );
}
