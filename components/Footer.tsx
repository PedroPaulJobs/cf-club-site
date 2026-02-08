"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="footer" className="w-full relative overflow-hidden bg-black text-white">

            {/* Atmospheric Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/execution-overhead.jpg"
                    alt="Atmosphere"
                    fill
                    className="object-cover object-center grayscale contrast-[1.3] opacity-60"
                    priority
                />
                {/* Heavy Black Overlay */}
                <div className="absolute inset-0 bg-black/85 mix-blend-multiply"></div>
                {/* Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

                {/* Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay">
                    <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="pt-40 pb-20 md:pt-60 md:pb-32 px-6 md:px-20 flex flex-col items-center text-center relative z-10">



                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-mono text-xs tracking-[0.3em] text-white/60 uppercase mb-8 relative z-10"
                >
                    Última Chamada
                </motion.span>

                <div className="overflow-hidden relative z-10 max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ y: 100 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] font-bold text-white drop-shadow-2xl mix-blend-screen"
                    >
                        SUA CADEIRA
                    </motion.h2>
                </div>

                <div className="overflow-hidden relative z-10 max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ y: 100 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-white/90 drop-shadow-2xl"
                    >
                        ESTÁ ESPERANDO.
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 relative z-10"
                >
                    <Link href="/application" className="group relative inline-block">
                        {/* Shadow Layer */}
                        <div className="absolute inset-0 bg-white translate-y-2 translate-x-2 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-difference"></div>
                        {/* Button */}
                        <button className="relative bg-white text-black border-2 border-white px-10 md:px-16 py-5 md:py-6 text-lg md:text-xl font-bold font-sans tracking-widest uppercase transition-all duration-300 group-hover:bg-black group-hover:text-white flex items-center gap-4">
                            APLICAR AGORA
                            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                    </Link>
                </motion.div>

                <p className="font-mono text-xs text-white/50 mt-10 relative z-10">
                    Vagas limitadas. Processo seletivo.
                </p>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10 px-6 md:px-20 py-12 relative z-10 bg-black/40 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">

                    {/* Logo */}
                    < Link href="/" className="font-serif text-2xl text-white tracking-tighter font-bold" >
                        CF<span className="text-white/50">.</span>CLUB
                    </Link>

                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                        <Link href="https://www.instagram.com/cfclub_/" target="_blank" className="flex items-center gap-2 font-mono text-xs md:text-sm text-white/70 hover:text-white transition-colors uppercase tracking-widest">
                            <Instagram className="w-4 h-4" />
                            Instagram
                        </Link>
                        <Link href="https://www.linkedin.com/company/cfclub/" target="_blank" className="flex items-center gap-2 font-mono text-xs md:text-sm text-white/70 hover:text-white transition-colors uppercase tracking-widest">
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </Link>
                        <Link href="https://wa.me/5531980202010" target="_blank" className="flex items-center gap-2 font-mono text-xs md:text-sm text-white/70 hover:text-white transition-colors uppercase tracking-widest">
                            <Phone className="w-4 h-4" />
                            WhatsApp
                        </Link>
                    </div>

                    {/* Copyright */}
                    <p className="font-mono text-[10px] md:text-xs text-white/30 uppercase tracking-widest">
                        © 2026 CF CLUB. BH, BRASIL.
                    </p>
                </div>
            </div>
        </footer>
    );
}
