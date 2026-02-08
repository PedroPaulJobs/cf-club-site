"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const AWARDS = [
    { title: "THE BEST COMPANY", id: "company", image: "/images/student_1.png" },
    { title: "THE BEST CEO", id: "ceo", image: "/images/student_3.png" }, // Using existing images as placeholders
    { title: "THE BEST CMO", id: "cmo", image: "/images/student_2.png" },
    { title: "THE BEST COO", id: "coo", image: "/images/student_1.png" }
];

export default function HallOfFame() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center bg-[#06070E] py-32 overflow-hidden border-t border-white/5">

            {/* 1. Grain Overlay for Section */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay">
                <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
            </div>

            <div className="max-w-screen-2xl mx-auto w-full px-6 relative z-10">

                {/* Header (Tight Brutalist) */}
                <div className="mb-8 md:mb-12 max-w-5xl mx-auto">
                    <span className="font-mono text-xs tracking-[0.3em] text-cf-dim uppercase mb-3 block">
                        A Premiação
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-cf-white tracking-tight leading-[0.9] mb-4">
                        O PODIUM <br />
                        <span className="text-cf-dim">FINAL</span>
                    </h2>
                    <p className="font-sans text-lg md:text-xl text-cf-dim/80 font-light leading-tight max-w-xl">
                        No final do ciclo, premiamos os melhores desempenhos em 4 categorias.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-white/10">
                    {AWARDS.map((award, index) => (
                        <motion.div
                            key={award.id}
                            className={clsx(
                                "group relative h-[350px] md:h-[450px] border-r border-white/10 flex flex-col items-center justify-center text-center p-6 md:p-12 overflow-hidden cursor-crosshair transition-all duration-700",
                                "last:border-r-0 lg:last:border-r-0",
                                // Fix mobile/tablet borders 
                                "border-r border-white/10",
                                // Mobile: Right border on all except last? standard grid
                                "md:nth-child(2n):border-r-0 lg:nth-child(2n):border-r", // tablet remove every 2nd
                                "lg:last:border-r-0"
                            )}
                            initial="idle"
                            whileHover="hover"
                            animate="idle"
                        >


                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center gap-6 mix-blend-difference text-white">
                                <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase opacity-70">
                                    Categoria 0{index + 1}
                                </span>

                                <motion.h3
                                    className="font-serif text-5xl md:text-7xl font-bold leading-[0.85] tracking-tighter text-center"
                                    variants={{
                                        idle: { scale: 1, y: 0 },
                                        hover: { scale: 1.05, y: -10 }
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    {award.title}
                                </motion.h3>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
