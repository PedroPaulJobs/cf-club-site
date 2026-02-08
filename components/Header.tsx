"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "./ui/Magnetic";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "MÉTODO", href: "#methodology" },
        { label: "JORNADA", href: "#journey" },
        { label: "APLICAR", href: "#footer", highlight: true },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 flex items-center justify-between
          ${isScrolled ? "bg-cf-black/90 backdrop-blur-md border-b border-cf-lines/10" : "bg-transparent"}
        `}
            >
                {/* Logo */}
                <Link href="/" className="font-serif text-xl md:text-2xl text-cf-white tracking-tighter font-bold">
                    CF<span className="text-cf-dim">.</span>CLUB
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <div key={item.label}>
                            {item.highlight ? (
                                <Magnetic>
                                    <Link
                                        href={item.href}
                                        className={`font-mono text-sm tracking-widest uppercase transition-colors duration-300 ${item.highlight
                                            ? "bg-cf-white text-cf-black px-4 py-2 hover:bg-cf-dim hover:text-white inline-block"
                                            : "text-cf-dim hover:text-cf-white"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </Magnetic>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="font-mono text-sm tracking-widest uppercase transition-colors duration-300 text-cf-dim hover:text-cf-white"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-cf-white z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-cf-black z-40 flex flex-col items-center justify-center gap-12"
                    >
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-serif text-4xl text-cf-white hover:text-cf-dim transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
