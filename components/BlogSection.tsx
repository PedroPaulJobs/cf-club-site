"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogData";

export default function BlogSection() {
    // Featured post (first) + 2 secondary posts
    const featuredPost = BLOG_POSTS[0];
    const secondaryPosts = BLOG_POSTS.slice(1, 3);

    return (
        <section className="w-full bg-[#06070E] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-mono text-xs tracking-[0.3em] text-gray-500 uppercase mb-4 block"
                        >
                            Insights & Estratégia
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-serif text-5xl md:text-7xl text-cf-white tracking-tighter leading-[0.85]"
                        >
                            THE LEDGER
                        </motion.h2>
                    </div>

                    {/* Desktop CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="hidden md:block"
                    >
                        <Link
                            href="/blog"
                            className="group inline-flex items-center gap-3 text-gray-400 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors"
                        >
                            Ver Arquivo Completo
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Magazine Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

                    {/* Featured Article (Large) */}
                    <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="group relative lg:row-span-2 cursor-pointer"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden bg-gray-900">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Category Badge */}
                            <span className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.3em] text-white uppercase bg-white/10 backdrop-blur-sm px-3 py-1.5 border border-white/20">
                                {featuredPost.category}
                            </span>

                            {/* Content Over Image */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                {/* Meta */}
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="font-mono text-xs text-white/60 uppercase">
                                        {featuredPost.date}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-white/40" />
                                    <span className="font-mono text-xs text-white/60 flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {featuredPost.readTime}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-tight mb-4 group-hover:text-white transition-colors">
                                    {featuredPost.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed line-clamp-2 mb-4">
                                    {featuredPost.excerpt}
                                </p>

                                {/* Read Link */}
                                <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                                    <span className="font-mono text-xs uppercase tracking-wider">Ler artigo</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Secondary Articles (Stacked) */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        {secondaryPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className="group flex gap-5 md:gap-6 cursor-pointer"
                            >
                                {/* Thumbnail */}
                                <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0 overflow-hidden bg-gray-900">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center py-1">
                                    {/* Meta */}
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                                            {post.date}
                                        </span>
                                        <span className="font-mono text-[10px] tracking-[0.2em] text-white/60 uppercase border border-white/20 px-2 py-0.5">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-sans text-lg md:text-xl font-bold text-white leading-snug mb-2 group-hover:text-white/90 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    {/* Read Time */}
                                    <span className="font-mono text-xs text-white/40 flex items-center gap-1.5">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime} de leitura
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                {/* Mobile CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-12 md:hidden"
                >
                    <Link
                        href="/blog"
                        className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-mono text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Ver Todos
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
