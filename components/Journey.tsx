"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const WEEKS_DATA = [
    { id: "01", title: "DEFINIÇÃO", subtitle: "DO NEGÓCIO" },
    { id: "02", title: "PRODUTO", subtitle: "& MVP" },
    { id: "03", title: "BRANDING", subtitle: "& POSICIONAMENTO" },
    { id: "04", title: "ESTRATÉGIA", subtitle: "DE CRESCIMENTO" },
    { id: "05-06", title: "FINANÇAS", subtitle: "& EQUITY" },
    { id: "07", title: "VENDAS", subtitle: "& PROCESSOS" },
    { id: "08", title: "AUTOMAÇÃO", subtitle: "COM IA" },
    { id: "09", title: "PITCH", subtitle: "TRAINING" },
    { id: "10", title: "DEMO DAY", subtitle: "O GRANDE DIA" },
];

export default function Journey() {
    // Weeks 1-9 (8 items total because 5-6 is combined)
    const regularWeeks = WEEKS_DATA.slice(0, 8);
    const finalWeek = WEEKS_DATA[8];

    return (
        <section id="journey" className="w-full bg-cf-black py-28 px-6 md:px-12 lg:px-20 min-h-screen">

            <div className="max-w-7xl mx-auto w-full">

                {/* Header */}
                <div className="mb-20 md:mb-32 max-w-2xl">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="font-mono text-xs tracking-[0.3em] text-cf-dim uppercase mb-6 block"
                    >
                        O Cronograma
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-5xl md:text-7xl text-cf-white tracking-tight leading-[0.9]"
                    >
                        10 SEMANAS <br />
                        <span className="text-cf-dim">DE IMERSÃO.</span>
                    </motion.h2>
                </div>

                {/* Staggered Grid (Weeks 1-9) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        {regularWeeks.filter((_, i) => i % 3 === 0).map((card, i) => (
                            <JourneyCard key={card.id} card={card} index={i * 3} />
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6 md:gap-8 pt-0 md:pt-16 lg:pt-32">
                        {regularWeeks.filter((_, i) => i % 3 === 1).map((card, i) => (
                            <JourneyCard key={card.id} card={card} index={i * 3 + 1} />
                        ))}
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-6 md:gap-8 pt-0 md:pt-32 lg:pt-64">
                        {regularWeeks.filter((_, i) => i % 3 === 2).map((card, i) => (
                            <JourneyCard key={card.id} card={card} index={i * 3 + 2} />
                        ))}
                    </div>

                </div>

                {/* Week 10: Grand Finale */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full bg-cf-white text-cf-black py-10 px-8 md:py-12 md:px-16 relative overflow-hidden group hover:bg-gray-100 transition-colors duration-500"
                >
                    {/* Top Markers */}
                    <div className="flex justify-between items-start mb-6 md:mb-10">
                        <span className="font-mono text-2xl tracking-widest uppercase text-cf-black font-bold">
                            WEEK 10
                        </span>
                        <ArrowUpRight className="w-6 h-6 text-cf-black" />
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-none mb-4">
                            DEMO DAY
                        </h3>
                        <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase opacity-60">
                            PITCH PARA INVESTIDORES
                        </p>
                    </div>

                    {/* Bottom Line */}
                    <div className="absolute bottom-6 left-8 right-8 h-[1px] bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                </motion.div>

            </div>
        </section>
    );
}

function JourneyCard({ card, index }: { card: typeof WEEKS_DATA[0], index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-[4/5] w-full bg-cf-surface/20 border border-white/10 hover:border-white/30 hover:bg-cf-surface/40 transition-all duration-500 group relative flex flex-col justify-between p-8"
        >
            {/* Top Left: Week */}
            <div className="flex justify-between items-start">
                <span className="font-mono text-xl tracking-widest text-cf-white uppercase group-hover:text-cf-white transition-colors font-bold opacity-90">
                    WEEK {card.id}
                </span>

                {/* Corner Decoration */}
                <ArrowUpRight className="w-4 h-4 text-cf-dim/20 group-hover:text-cf-white transition-colors" />
            </div>

            {/* Center: Title */}
            <div className="self-center text-center">
                <h3 className="font-serif text-3xl md:text-4xl text-cf-white leading-none">
                    {card.title}
                </h3>
                <p className="font-mono text-xs text-cf-dim mt-2 tracking-widest uppercase group-hover:text-cf-lines transition-colors">
                    {card.subtitle}
                </p>
            </div>

            {/* Bottom: Line */}
            <div className="w-full h-[1px] bg-white/5 group-hover:bg-white/20 transition-colors"></div>
        </motion.div>
    );
}
