"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Methodology() {
    return (
        <section id="methodology" className="min-h-screen w-full flex flex-col md:flex-row">

            {/* Left Column: Theory (White) */}
            <motion.div
                className="w-full md:w-1/2 bg-cf-white text-cf-black flex flex-col justify-center p-10 md:p-20 lg:p-28 border-b md:border-b-0 md:border-r border-cf-lines relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="max-w-lg relative z-10">
                    <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-cf-dim uppercase mb-6 block">
                        O Conhecimento
                    </span>
                    <h2 className="font-serif text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] mb-6">
                        30<span className="text-4xl md:text-5xl italic ml-2">min</span>
                    </h2>
                    <p className="font-sans text-lg md:text-xl font-medium max-w-sm leading-relaxed">
                        Palestra Direta. <br />
                        Mercado Real. <br />
                        <span className="text-cf-dim">Sem Enrolação.</span>
                    </p>
                </div>
            </motion.div>

            {/* Right Column: Practice (Dark) */}
            <div className="w-full md:w-1/2 bg-cf-surface text-cf-white relative overflow-hidden group flex flex-col justify-center p-10 md:p-20 lg:p-28 min-h-[60vh] md:min-h-screen">

                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/execution-overhead.jpg"
                        alt="Mão na massa"
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-110 opacity-40 group-hover:opacity-60 grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cf-surface via-cf-surface/90 to-cf-surface/50 group-hover:opacity-80 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <motion.div
                    className="relative z-10 max-w-lg"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-gray-400 uppercase mb-6 block">
                        A Execução
                    </span>
                    <h2 className="font-serif text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] mb-6">
                        1h<span className="text-4xl md:text-5xl italic ml-2">30</span>
                    </h2>
                    <p className="font-sans text-lg md:text-xl font-medium max-w-sm leading-relaxed text-gray-200">
                        Mão na massa. <br />
                        Feedback brutal. <br />
                        <span className="text-cf-white font-bold">Construção de Equity.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
