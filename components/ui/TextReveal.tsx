"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

interface TextRevealProps {
    children: React.ReactNode; // Actually we expect string, but for type safety let's process it.
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    // We assume children is a string for this simple implementation.
    // If it's rich text, it gets complicated. We'll enforce string for now or strip tags if needed.
    // Actually, splitting by words is safer.

    const text = typeof children === "string" ? children : "Error: TextReveal expects string";
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * 0.1 }
        })
    };

    const child = {
        hidden: {
            opacity: 0,
            y: "120%",
            transition: { type: "spring", stiffness: 400, damping: 40 }
        },
        visible: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // Custom Bezier for premium feel
            }
        }
    } as any;

    return (
        <motion.span
            ref={ref}
            className={clsx("inline-flex flex-wrap gap-x-[0.3em] overflow-hidden px-2", className)}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {words.map((word, index) => (
                <span key={index} className="inline-block overflow-hidden px-2 -mx-2 pb-1 -mb-1"> {/* Mask wrapper with buffer */}
                    <motion.span variants={child} className="inline-block">
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    );
}
