"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogData";

export default function BlogSection() {
    // Pegar os últimos 6 posts mais recentes para o carrossel
    const recentPosts = [...BLOG_POSTS].reverse().slice(0, 6);
    // Duplicar o array para criar o efeito de loop infinito
    const carouselPosts = [...recentPosts, ...recentPosts];

    return (
        <section className="w-full bg-[#06070E] py-16 md:py-32 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-5 md:px-12 lg:px-20">

                {/* Header Row */}
                <div className="flex flex-col mb-12 md:mb-16">
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
                        className="font-serif text-4xl md:text-6xl text-cf-white tracking-tighter leading-[0.85]"
                    >
                        THE LEDGER
                    </motion.h2>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full flex overflow-hidden group pb-4">
                {/* Gradient Fades for Edges - Creates the illusion of fading into the background */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#06070E] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#06070E] to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }} // Scrola exatamente a metade da largura (o array original)
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40, // Tempo do scroll (aumente para mais lento, diminua para mais rápido)
                    }}
                    className="w-max flex gap-6 md:gap-8 px-5 md:px-12 lg:px-20 cursor-grab active:cursor-grabbing hover:[animation-play-state:paused]"
                >
                    {carouselPosts.map((post, index) => (
                        <Link key={`${post.id}-${index}`} href={`/blog/${post.slug}`} className="block relative h-[400px] md:h-[450px] w-[280px] sm:w-[320px] md:w-[350px] shrink-0">
                            <article className="relative rounded-2xl overflow-hidden h-full flex flex-col justify-end group/card">
                                {/* Image Container */}
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 350px"
                                    quality={75}
                                    loading="lazy"
                                    className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90" />

                                {/* Icon Top Right */}
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                    <ArrowUpRight className="w-4 h-4 text-white" />
                                </div>

                                {/* Content Bottom */}
                                <div className="relative z-10 p-6 flex flex-col gap-3">
                                    <h3 className="font-serif text-xl sm:text-2xl text-white font-medium leading-[1.1]">
                                        {post.title}
                                    </h3>
                                    <p className="font-sans text-xs sm:text-sm text-white/60 line-clamp-2 md:line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta Row */}
                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="font-mono text-[10px] tracking-[0.2em] text-white/80 uppercase border border-white/30 px-2 py-0.5 rounded-sm">
                                            {post.category}
                                        </span>
                                        <span className="font-mono text-[10px] sm:text-xs text-white/50 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Appended Line and Button */}
            <div className="max-w-7xl mx-auto w-full px-5 md:px-12 lg:px-20 mt-12 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full relative flex items-center justify-center"
                >
                    {/* Horizontal Line behind */}
                    <div className="absolute inset-0 flex items-center pointer-events-none" aria-hidden="true">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    {/* Button with background to cover line */}
                    <Link
                        href="/blog"
                        className="relative z-10 inline-flex items-center gap-2 bg-[#06070E] px-8 py-3 text-sm font-medium text-white hover:text-white/80 transition-colors uppercase tracking-widest border border-white/10 rounded-full group"
                    >
                        Ver todos os artigos
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
