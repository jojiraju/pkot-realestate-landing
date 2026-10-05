"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TextType from "./TextType";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-forest-deep flex items-center justify-center">
      {/* Background Image Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-forest-deep/60 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" 
          alt="Luxury Architecture" 
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-20 flex flex-col items-center text-center px-6 mt-16 max-w-5xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gold tracking-[0.3em] uppercase text-xs sm:text-sm font-semibold mb-6 flex items-center gap-3"
        >
          <span>Property</span>
          <span className="w-1 h-1 rounded-full bg-ivory"></span>
          <span>Land</span>
        </motion.span>
        
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-ivory font-light leading-[1.1] mb-6 flex flex-wrap justify-center gap-x-4 md:gap-x-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.6 }
            }
          }}
        >
          <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.19, 1, 0.22, 1] } } }}>Connecting</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.19, 1, 0.22, 1] } } }} className="italic text-gold">Buyers</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.19, 1, 0.22, 1] } } }}>&amp;</motion.span>
          <div className="basis-full h-0 hidden md:block"></div>
          <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.19, 1, 0.22, 1] } } }} className="italic text-gold">Sellers</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.19, 1, 0.22, 1] } } }}>Worldwide</motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-ivory/80 font-sans tracking-[0.2em] text-xs md:text-sm max-w-lg mx-auto mb-8 uppercase min-h-[1.5rem]"
        >
          <TextType 
            text={[
              "Building Better Tomorrows",
              "Connecting Buyers & Sellers",
              "Across India & The UK",
              "Premium Real Estate"
            ]}
            typingSpeed={60}
            deletingSpeed={30}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-gold"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 mt-8"
        >
          <a href="#properties" className="px-8 py-4 bg-gold text-forest-deep font-sans tracking-widest text-xs uppercase hover:bg-ivory transition-colors duration-500">
            Explore Properties
          </a>
          <a href="#contact" className="px-8 py-4 border border-gold/50 text-ivory font-sans tracking-widest text-xs uppercase hover:bg-gold/10 transition-colors duration-500">
            Speak With An Advisor
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-widest text-ivory/60">Scroll</span>
        <div className="w-[1px] h-12 bg-ivory/20 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 50, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
