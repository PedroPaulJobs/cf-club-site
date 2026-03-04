"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { getPostBySlug, ContentBlock } from "@/lib/blogData";

function RenderBlock({ block, index }: { block: ContentBlock; index: number }) {
    switch (block.type) {
        case "paragraph":
            // First paragraph = lead style
            if (index === 0) {
                return (
                    <p className="font-sans text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                        {block.text}
                    </p>
                );
            }
            return (
                <p className="font-sans text-base md:text-lg text-white/60 leading-[1.8]">
                    {block.text}
                </p>
            );

        case "heading":
            return (
                <h2 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight leading-tight pt-4">
                    {block.text}
                </h2>
            );

        case "subheading":
            return (
                <h3 className="font-serif text-xl md:text-2xl text-white/90 font-medium tracking-tight leading-snug pt-2">
                    {block.text}
                </h3>
            );

        case "divider":
            return <hr className="border-white/10 my-4" />;

        case "list":
            return (
                <ul className="space-y-3 pl-1">
                    {block.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                            <span className="font-sans text-base md:text-lg text-white/60 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            );

        case "bold-lines":
            return (
                <div className="space-y-2 py-2">
                    {block.lines.map((line, i) => (
                        <p key={i} className="font-sans text-base md:text-lg text-white/80 font-semibold leading-relaxed">
                            {line}
                        </p>
                    ))}
                </div>
            );

        case "highlight":
            return (
                <div className="border-l-2 border-white/30 pl-6 py-3 my-2">
                    <p className="font-sans text-base md:text-lg text-white/80 font-semibold leading-relaxed italic">
                        {block.text}
                    </p>
                </div>
            );

        case "comparison":
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    <div className="border border-white/10 p-6 md:p-8">
                        <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase block mb-4">
                            {block.before.label}
                        </span>
                        <ul className="space-y-2">
                            {block.before.items.map((item, i) => (
                                <li key={i} className="font-sans text-sm text-white/40 leading-relaxed flex items-start gap-2">
                                    <span className="w-1 h-1 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="border border-white/30 bg-white/[0.03] p-6 md:p-8">
                        <span className="font-mono text-[10px] tracking-[0.3em] text-white uppercase block mb-4">
                            {block.after.label}
                        </span>
                        <ul className="space-y-2">
                            {block.after.items.map((item, i) => (
                                <li key={i} className="font-sans text-sm text-white/80 leading-relaxed font-medium flex items-start gap-2">
                                    <span className="w-1 h-1 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );

        case "stat-block":
            return (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
                    {block.stats.map((stat, i) => (
                        <div key={i} className="border border-white/10 p-5 md:p-6 bg-white/[0.02]">
                            <span className="font-mono text-2xl md:text-3xl text-white font-bold block mb-1">
                                {stat.value}
                            </span>
                            <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            );

        case "cta":
            return (
                <div className="py-8 text-center">
                    <Link
                        href={block.href}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-mono text-sm tracking-widest uppercase transition-all duration-500 hover:bg-white/90 active:scale-[0.98]"
                    >
                        {block.text}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            );

        case "footer-note":
            return (
                <div className="pt-8 border-t border-white/10 space-y-1 text-center">
                    {block.lines.map((line, i) => (
                        <p key={i} className="font-mono text-xs text-white/30 tracking-wider italic">{line}</p>
                    ))}
                </div>
            );

        default:
            return null;
    }
}

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = getPostBySlug(slug);

    if (!post) {
        return (
            <main className="min-h-screen bg-[#06070E] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-serif text-4xl text-white mb-4">Artigo não encontrado</h1>
                    <Link href="/" className="font-mono text-sm text-gray-400 hover:text-white uppercase tracking-wider transition-colors">
                        Voltar ao início
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#06070E]">

            {/* Hero Image */}
            <div className="relative w-full aspect-[4/3] md:aspect-[3/1] overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070E] via-[#06070E]/40 to-transparent" />

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-20 md:top-28 left-6 md:left-12 z-10"
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 font-mono text-xs text-white/70 hover:text-white uppercase tracking-wider transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 border border-white/10"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Voltar
                    </Link>
                </motion.div>
            </div>

            {/* Article Content */}
            <article className="relative z-10 -mt-20 md:-mt-32 px-6 md:px-12 lg:px-20 pb-20">
                <div className="max-w-3xl mx-auto">

                    {/* Meta */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-wrap items-center gap-4 mb-8"
                    >
                        <span className="font-mono text-[10px] tracking-[0.3em] text-white uppercase bg-white/10 backdrop-blur-sm px-3 py-1.5 border border-white/20">
                            {post.category}
                        </span>
                        <span className="font-mono text-xs text-white/50 uppercase">
                            {post.date}
                        </span>
                        <span className="font-mono text-xs text-white/50 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime} de leitura
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-12 tracking-tight"
                    >
                        {post.title}
                    </motion.h1>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full h-[1px] bg-white/10 mb-12 origin-left"
                    />

                    {/* Body */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {post.content.map((block, index) => (
                            <RenderBlock key={index} block={block} index={index} />
                        ))}
                    </motion.div>

                </div>
            </article>

        </main>
    );
}
