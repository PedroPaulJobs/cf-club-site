"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogData";

export default function BlogPage() {
    const post = BLOG_POSTS[0];

    return (
        <main className="min-h-screen bg-[#06070E]">

            {/* Hero Section (Archive Header) */}
            <section className="relative w-full bg-[#06070E] pt-32 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 border-b border-white/5 overflow-hidden">

                {/* Film Grain Texture */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                    <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 font-mono text-xs text-gray-500 hover:text-white uppercase tracking-wider transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Voltar ao início
                        </Link>
                    </motion.div>

                    {/* Eyebrow */}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-mono text-xs tracking-[0.3em] text-gray-500 uppercase mb-4 block"
                    >
                        Arquivo Completo
                    </motion.span>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl text-cf-white tracking-tighter leading-[0.85] mb-6"
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

            {/* Articles List */}
            <section className="w-full bg-[#06070E] py-12 md:py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto space-y-24">
                    {[...BLOG_POSTS].reverse().map((post, index) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 + (index * 0.1) }}
                                className="group relative cursor-pointer"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    {/* Image */}
                                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-900 rounded-lg">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                                        {/* Status Badge */}
                                        {index === 0 && (
                                            <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] text-black uppercase bg-white px-3 py-1.5 rounded-sm">
                                                RECENTE
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="py-4">
                                        {/* Meta */}
                                        <div className="flex items-center flex-wrap gap-4 mb-4">
                                            <span className="font-mono text-xs text-white/60 uppercase">
                                                {post.date}
                                            </span>
                                            <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-white/80 uppercase border border-white/30 px-2 py-0.5 rounded-sm">
                                                {post.category}
                                            </span>
                                            <span className="font-mono text-xs text-white/50 flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight mb-6 group-hover:text-white/90 transition-colors">
                                            {post.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed mb-6">
                                            {post.excerpt}
                                        </p>

                                        {/* Read Link */}
                                        <div className="flex items-center gap-2 text-white group-hover:text-white/80 transition-colors">
                                            <span className="font-mono text-sm uppercase tracking-wider">Ler artigo completo</span>
                                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </section>

        </main>
    );
}
