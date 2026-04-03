"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
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
                <svg className="w-full h-full"><filter id="heroNoise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#heroNoise)"/></svg>
            </div>
            {/* 1. Fixed Background (High Quality, Static, Blended) */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay select-none pointer-events-none">
                <Image
                    src="/images/methodology.png"
                    alt="Background Texture"
                    fill
                    sizes="100vw"
                    quality={70}
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
                    <Link href="https://www.sympla.com.br/evento/cf-builders-edition-encontro-de-founders/3348048?algoliaID=9a84202e5ccd37d5545d998f71c1d327&share_id=copiarlink" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 md:py-5 border border-white/20 hover:border-white bg-transparent text-white font-mono text-xs md:text-sm tracking-widest uppercase transition-all duration-500 overflow-hidden">
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
                        <span className="relative z-10">Inscrever-se Agora</span>
                        <span className="relative z-10 w-8 md:w-16 h-[1px] bg-white/20 group-hover:bg-white transition-all duration-500 flex-shrink-0"></span>
                    </Link>
                </motion.div>
            </div>


            {/* Brutalist Corner Decorations */}
            <div className="absolute top-24 left-8 w-6 h-6 border-l-2 border-t-2 border-cf-lines/20 hidden md:block"></div>
            <div className="absolute top-24 right-8 w-6 h-6 border-r-2 border-t-2 border-cf-lines/20 hidden md:block"></div>
            <div className="absolute bottom-10 left-8 w-6 h-6 border-l-2 border-b-2 border-cf-lines/20 hidden md:block"></div>
            <div className="absolute bottom-10 right-8 w-6 h-6 border-r-2 border-b-2 border-cf-lines/20 hidden md:block"></div>
        </section >
    );
}
