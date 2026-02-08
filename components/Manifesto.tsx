"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
    return (
        <section className="w-full bg-cf-white text-cf-black py-28 md:py-40 px-6 md:px-20 relative overflow-hidden">

            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="text-[25vw] font-serif font-bold text-cf-lines/10 whitespace-nowrap">
                    FILTRO
                </span>
            </div>

            {/* Header */}
            <div className="max-w-5xl mx-auto text-center mb-24 relative z-10">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-mono text-xs tracking-[0.3em] text-cf-dim uppercase mb-6 block"
                >
                    O Manifesto
                </motion.span>

                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: 80 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cf-black to-cf-dim"
                    >
                        O CF CLUB NÃO É
                        <br />
                        <span className="text-[#999999]">PARA TODO MUNDO.</span>
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="font-serif text-xl md:text-2xl italic text-cf-dim mt-8"
                >
                    — E tudo bem.
                </motion.p>
            </div>

            {/* Comparison Grid (Punched Contrast) */}
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-stretch">

                    {/* Left: Builder-Persona (The Yes) */}
                    <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center border-r-0 md:border-r-[6px] border-black">
                        <h3 className="font-mono text-sm font-black text-black uppercase mb-12 tracking-widest">
                            BUILDER-PERSONA
                        </h3>
                        <ul className="flex flex-col gap-6">
                            {[
                                "— SUJAR A MÃO DE GRAXA",
                                "— RESOLVER PROBLEMAS REAIS",
                                "— CONSTRUIR EQUITY",
                                "— EXECUTAR SEM DESCULPAS",
                                "— FAZER ACONTECER"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="font-sans text-2xl md:text-4xl font-black text-black tracking-tight leading-[0.9]"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Anti-Persona (The No) */}
                    <div className="w-full md:w-1/2 p-8 md:p-16 md:pl-24 flex flex-col justify-center">
                        <h3 className="font-mono text-sm font-bold text-[#666666] uppercase mb-12 tracking-widest">
                            ANTI-PERSONA
                        </h3>
                        <ul className="flex flex-col gap-8">
                            {[
                                "— Busca atalhos fáceis",
                                "— Quer apenas assistir",
                                "— Sensível a feedback",
                                "— Procura fórmulas mágicas",
                                "— Foge do trabalho duro"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="font-sans text-xl md:text-2xl text-[#666666] font-light line-through decoration-2 decoration-black/30 transition-all cursor-not-allowed"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
