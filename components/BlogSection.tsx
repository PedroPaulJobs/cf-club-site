"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogData";

export default function BlogSection() {
    // Show only first 3 posts as teaser
    const teaserPosts = BLOG_POSTS.slice(0, 3);

    return (
        <section className="w-full bg-[#06070E] py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-white/5">
            <div className="max-w-6xl mx-auto w-full">

                {/* Tight Header */}
                <div className="mb-8 md:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-6xl md:text-8xl text-cf-white tracking-tighter leading-[0.85]"
                    >
                        BLOG
                    </motion.h2>
                </div>

                {/* Compact Blog Posts List (First 3) */}
                <div className="space-y-0 mb-8">
                    {teaserPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
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
                                    initial={{ opacity: 0, x: -10 }}
                                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 hidden md:block"
                                >
                                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-cf-white" />
                                </motion.div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* "VER TODOS" CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center md:justify-end mt-12"
                >
                    <Link
                        href="/blog"
                        className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-mono text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                        VER TODOS
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
