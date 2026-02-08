"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogData";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#06070E]">

            {/* Hero Section (Archive Header) */}
            <section className="relative w-full bg-[#06070E] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-white/5 overflow-hidden">

                {/* Film Grain Texture */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                    <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Eyebrow */}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-mono text-xs tracking-[0.3em] text-gray-500 uppercase mb-6 block"
                    >
                        O Arquivo
                    </motion.span>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-7xl md:text-9xl text-cf-white tracking-tighter leading-[0.85] mb-6"
                    >
                        THE LEDGER
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-sans text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl"
                    >
                        Documentando a jornada de execução bruta e os bastidores do CF Club.
                    </motion.p>
                </div>
            </section>

            {/* Full Blog Archive List */}
            <section className="w-full bg-[#06070E] py-16 md:py-24 px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto w-full">

                    <div className="space-y-0">
                        {BLOG_POSTS.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="group border-t border-white/10 py-6 md:py-8 hover:bg-[#111111] transition-all duration-500 cursor-pointer"
                            >
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex-1 min-w-0">
                                        {/* Meta */}
                                        <span className="font-mono text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-3 block">
                                            {post.date} • {post.category}
                                        </span>

                                        {/* Title */}
                                        <h3 className="font-sans text-xl md:text-2xl font-bold text-cf-white leading-tight group-hover:text-white transition-colors">
                                            {post.title}
                                        </h3>
                                    </div>

                                    {/* Arrow (appears on hover) */}
                                    <motion.div
                                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 hidden md:block"
                                    >
                                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-cf-white" />
                                    </motion.div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Bottom Border */}
                    <div className="border-b border-white/10 mt-0"></div>

                </div>
            </section>

        </main>
    );
}
