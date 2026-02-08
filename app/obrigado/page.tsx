"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

function ObrigadoContent() {
    const searchParams = useSearchParams();
    const nome = searchParams.get("nome") || "Candidato";

    return (
        <div className="min-h-screen bg-[#06070E] flex items-center justify-center p-6 text-white selection:bg-white selection:text-black">

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-3xl border border-white/20 p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
            >
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white" />

                {/* Animated Checkmark */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12 relative w-24 h-24 flex items-center justify-center"
                >
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.circle
                            cx="50" cy="50" r="48"
                            stroke="white" strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.2 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.path
                            d="M30 52 L45 67 L70 35"
                            stroke="white" strokeWidth="3" strokeLinecap="square"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        />
                    </svg>
                </motion.div>

                {/* Typography */}
                <div className="space-y-6 mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif font-bold tracking-tighter uppercase leading-[0.9]"
                    >
                        Candidatura
                        <br />
                        <span className="text-white/40">Enviada</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="font-mono text-sm md:text-base text-gray-400 tracking-wide uppercase"
                    >
                        Obrigado por se candidatar ao CF Club, <span className="text-white border-b border-white/40 pb-0.5">{nome}</span>!
                    </motion.p>
                </div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col w-full max-w-sm gap-4"
                >
                    {/* Primary Button */}
                    <Link
                        href="/"
                        className="group relative w-full bg-white text-black h-14 flex items-center justify-center font-bold tracking-widest uppercase text-sm hover:bg-black hover:text-white transition-colors duration-300 border border-transparent hover:border-white"
                    >
                        <span className="relative z-10">Voltar para o site</span>
                    </Link>

                    {/* Secondary Button - Instagram */}
                    <a
                        href="https://www.instagram.com/cfclub_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-full bg-transparent border border-white/30 text-white h-14 flex items-center justify-center gap-3 font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                    >
                        <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
                        <span>Ficar de olho no Instagram</span>
                    </a>
                </motion.div>

            </motion.div>
        </div>
    );
}

export default function Obrigado() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#06070E] flex items-center justify-center text-white font-mono uppercase text-xs">Carregando...</div>}>
            <ObrigadoContent />
        </Suspense>
    );
}
