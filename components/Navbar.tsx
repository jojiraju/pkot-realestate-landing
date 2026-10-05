"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 text-ivory"
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-gold/30 shadow-lg">
        <Image 
          src="/logo.jpg" 
          alt="P-KOT Real Estate Logo" 
          fill
          className="object-cover"
        />
      </div>
      
      <div className="hidden md:flex items-center gap-12 font-sans text-sm tracking-widest uppercase mix-blend-difference">
        <a href="#properties" className="hover:text-gold transition-colors duration-300">Properties</a>
        <a href="#about" className="hover:text-gold transition-colors duration-300">Our Story</a>
        <a href="#contact" className="hover:text-gold transition-colors duration-300">Contact</a>
      </div>

      <button className="md:hidden flex flex-col gap-1.5 p-2 mix-blend-difference">
        <span className="w-6 h-[1px] bg-current block"></span>
        <span className="w-6 h-[1px] bg-current block"></span>
      </button>
    </motion.nav>
  );
}
