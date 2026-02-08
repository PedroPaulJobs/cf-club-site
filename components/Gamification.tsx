"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const BADGES = [
    { id: 1, text: "THE BEST CEO", img: "/images/student_1.png" },
    { id: 2, text: "THE BEST COMPANY", img: "/images/student_2.png" },
    { id: 3, text: "THE BEST PITCH", img: "/images/student_3.png" },
];

export default function Gamification() {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    // Repeat tokens for marquee effect
    const marqueeItems = [...BADGES, ...BADGES, ...BADGES, ...BADGES];

    return (
        <section className="relative min-h-[60vh] bg-cf-surface flex flex-col justify-center overflow-hidden py-24">
            {/* Background Image Reveal */}
            <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 ease-in-out opacity-20">
                {activeImage && (
                    <Image
                        src={activeImage}
                        alt="Badge background"
                        fill
                        className="object-cover grayscale"
                    />
                )}
            </div>

            <div className="relative z-10 flex overflow-hidden">
                <motion.div
                    className="flex gap-12 md:gap-24 whitespace-nowrap pl-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                >
                    {marqueeItems.map((badge, i) => (
                        <div
                            key={i}
                            className="group cursor-pointer relative"
                            onMouseEnter={() => setActiveImage(badge.img)}
                            onMouseLeave={() => setActiveImage(null)}
                        >
                            <h2
                                className="text-6xl md:text-8xl lg:text-9xl font-serif text-transparent transition-all duration-300 group-hover:text-cf-white"
                                style={{ WebkitTextStroke: "1px #E0E0E0" }}
                            >
                                {badge.text}
                            </h2>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
