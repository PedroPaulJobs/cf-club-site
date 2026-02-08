"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import clsx from "clsx";

interface Metric {
    value: number;
    label: string;
    suffix?: string;
    description?: string;
}

const METRICS: Metric[] = [
    { value: 40, label: "PARTICIPANTES" },
    { value: 16, label: "STARTUPS CRIADAS" },
    { value: 22, label: "DE PRÁTICA REAL", suffix: "h" },
    { value: 120, label: "CLIENTES ALCANÇADOS" },
    { value: 97, label: "DE APROVAÇÃO", suffix: "%", description: "Compensou cada minuto" },
    { value: 4, label: "VAGAS DE ESTÁGIO", description: "Conquistadas" },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) =>
        Math.round(current).toString().padStart(value < 10 ? 2 : 0, "0")
    );

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, spring, value]);

    return (
        <span ref={ref} className="tabular-nums">
            <motion.span>{display}</motion.span>
            {suffix && <span className="ml-2 tracking-wide">{suffix}</span>}
        </span>
    );
}

export default function ImpactSection() {
    return (
        <section className="bg-[#F5F5F5] text-[#06070E] py-24 border-t-[3px] border-black">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-16 border-b-[3px] border-black pb-8">
                    <h2 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black">
                        IMPACTO
                        <span className="block text-xl md:text-2xl font-mono font-bold tracking-tight mt-4 text-black">
                            RESULTADOS DA 1ª EDIÇÃO (ALPHA)
                        </span>
                    </h2>
                </div>

                {/* Grid (Heavier Borders) */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-[3px] border-black border-b-0 border-r-0">
                    {METRICS.map((metric, index) => (
                        <div
                            key={index}
                            className={clsx(
                                "border-b-[3px] border-r-[3px] border-black p-6 md:p-10 flex flex-col justify-between h-[280px] hover:bg-black hover:text-[#F5F5F5] transition-colors duration-500 group relative overflow-hidden",
                                "md:col-span-1"
                            )}
                        >
                            {/* Decorative ID (Visible) */}
                            <span className="font-mono text-sm font-bold text-[#333] group-hover:text-white/40 absolute top-4 right-4">
                                {(index + 1).toString().padStart(2, '0')}
                            </span>

                            {/* Data */}
                            <div className="flex flex-col h-full justify-between">
                                {/* Number (Semibold Sans + Increased Size) */}
                                <div className="font-sans text-8xl md:text-9xl font-semibold tracking-tighter leading-none mt-2 scale-110 origin-left">
                                    <Counter value={metric.value} suffix={metric.suffix} />
                                </div>

                                <div className="space-y-1">
                                    {/* Label (Solid Black, Bold, Uppercase) */}
                                    <p className="font-sans text-base md:text-lg uppercase tracking-tight font-bold text-black group-hover:text-white">
                                        {metric.label}
                                    </p>
                                    {metric.description && (
                                        <p className="font-mono text-xs text-black/60 uppercase group-hover:text-white/60 font-semibold">
                                            {metric.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-8 flex justify-between items-end border-l-[3px] border-black pl-4">
                    <p className="font-mono text-xs font-bold uppercase max-w-md leading-relaxed text-black/70">
                        *Dados coletados após o término da primeira edição do CF Club (Alpha Class) em 2024.
                    </p>
                </div>

            </div>
        </section>
    );
}
