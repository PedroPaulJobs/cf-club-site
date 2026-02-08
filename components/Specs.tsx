"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SPECS_DATA = [
    { label: "START DATE", value: "04 MARÇO 2026", detail: "Turma 01" },
    { label: "DURATION", value: "10 SEMANAS", detail: "10 Semanas de Imersão" },
    { label: "LOCATION", value: "SEBRAE LABS / BH", detail: "Presencial" },
    { label: "EDITION", value: "BUILDERS EDITION", detail: "Vagas Limitadas" },
];

// Terminal-style typing effect component
function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                if (i < text.length) {
                    setDisplayText(text.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 50);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    useEffect(() => {
        const interval = setInterval(() => setShowCursor((v) => !v), 530);
        return () => clearInterval(interval);
    }, []);

    return (
        <span>
            {displayText}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>_</span>
        </span>
    );
}

export default function Specs() {
    return (
        <section className="w-full bg-cf-black relative font-mono py-24 border-t border-white/20">

            {/* Terminal Container */}
            <div className="max-w-7xl mx-auto border border-white/10 bg-cf-surface">

                {/* Terminal Header */}
                <div className="bg-[#222] border-b border-white/5 px-6 py-4 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-xs text-cf-lines/50 ml-4 font-mono">cf_club_specs.sh</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {SPECS_DATA.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col justify-between p-10 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5 last:border-r-0 hover:bg-white/[0.02] transition-colors duration-300 min-h-[280px]"
                        >
                            {/* Index */}
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-xs tracking-[0.2em] text-cf-dim/60 uppercase group-hover:text-cf-dim transition-colors">
                                    {item.label}
                                </span>
                                <span className="text-[10px] text-cf-dim/40 group-hover:text-green-500 transition-colors">
                                    [{String(index + 1).padStart(2, "0")}]
                                </span>
                            </div>

                            {/* Value */}
                            <div className="mt-auto">
                                <span className="text-xl md:text-2xl font-bold text-cf-lines tracking-tight group-hover:text-white transition-colors block">
                                    <TypeWriter text={item.value} delay={index * 200 + 500} />
                                </span>
                                <span className="text-sm text-cf-dim/50 mt-4 block">
                                    // {item.detail}
                                </span>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
