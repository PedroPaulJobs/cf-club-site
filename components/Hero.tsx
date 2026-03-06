"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Import } from "lucide-react";
import TextReveal from "./ui/TextReveal";
import Magnetic from "./ui/Magnetic";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative w-full min-h-[100svh] flex items-center justify-center bg-cf-black overflow-hidden pt-20"
        >
            {/* Grain Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
            </div>
            {/* 1. Fixed Background (High Quality, Static, Blended) */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay select-none pointer-events-none">
                <Image
                    src="/images/methodology.png" // Placeholder for high-end dark texture
                    alt="Background Texture"
                    fill
                    className="object-cover grayscale contrast-125 brightness-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-cf-black via-transparent to-cf-black"></div>
            </div>

            {/* Content Layer */}
            <div className="z-10 relative flex flex-col items-center text-center px-5 w-full max-w-full">

                {/* Eyebrow */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-mono text-xs md:text-sm tracking-[0.3em] text-cf-dim uppercase mb-8"
                >
                    Aceleradora Prática
                </motion.span>

                {/* Main Headline */}
                <div className="group flex flex-col items-center gap-0 md:gap-2 cursor-default">
                    <TextReveal className="font-serif text-[11vw] md:text-[9vw] lg:text-9xl leading-[0.95] md:leading-[0.85] tracking-tighter text-cf-white transition-all duration-300 hover:[-webkit-text-stroke:1px_#F5F5F5] justify-center text-center">
                        IDEIAS VIRAM
                    </TextReveal>

                    <div className="flex items-center gap-6 justify-center">
                        <TextReveal className="font-serif text-[11vw] md:text-[9vw] lg:text-9xl leading-[0.95] md:leading-[0.85] tracking-tighter text-cf-white transition-all duration-300 hover:[-webkit-text-stroke:1px_#F5F5F5] justify-center text-center" delay={4}>
                            NEGÓCIOS REAIS
                        </TextReveal>
                    </div>
                </div>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-8 md:mt-16"
                >
                    <Link href="/application" className="group relative inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 md:py-5 border border-white/20 hover:border-white bg-transparent text-white font-mono text-xs md:text-sm tracking-widest uppercase transition-all duration-500 overflow-hidden">
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
                        <span className="relative z-10">Inscrever-se Agora</span>
                        <span className="relative z-10 w-8 md:w-16 h-[1px] bg-white/20 group-hover:bg-white transition-all duration-500 flex-shrink-0"></span>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <span className="font-mono text-[10px] text-cf-dim tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-cf-dim" />
                </motion.div>
            </motion.div>

            {/* Brutalist Corner Decorations */}
            <div className="absolute top-24 left-8 w-6 h-6 border-l-2 border-t-2 border-cf-lines/20 hidden md:block"></div>
            <div className="absolute top-24 right-8 w-6 h-6 border-r-2 border-t-2 border-cf-lines/20 hidden md:block"></div>
            <div className="absolute bottom-10 left-8 w-6 h-6 border-l-2 border-b-2 border-cf-lines/20 hidden md:block"></div>
            <div className="absolute bottom-10 right-8 w-6 h-6 border-r-2 border-b-2 border-cf-lines/20 hidden md:block"></div>
        </section >
    );
}
