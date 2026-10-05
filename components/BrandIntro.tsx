"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandIntro() {
  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-12 bg-[#0d1410] text-ivory relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top: Striking Left-Aligned Statement */}
        <div className="max-w-6xl mb-32 md:mb-48">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-6 mb-12"
          >
            <span className="w-12 h-[1px] bg-gold block"></span>
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-gold">Building Tomorrows</span>
          </motion.div>

          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 }
              }
            }}
            className="font-serif text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] font-light text-ivory flex flex-col gap-1 lg:gap-3"
          >
            <div className="overflow-hidden pb-1">
              <motion.div variants={{ hidden: { y: "110%" }, visible: { y: 0, transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } } }}>
                We don't just build <span className="italic text-ivory/50">structures.</span>
              </motion.div>
            </div>
            <div className="overflow-hidden pb-1">
              <motion.div variants={{ hidden: { y: "110%" }, visible: { y: 0, transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } } }}>
                We shape places where
              </motion.div>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.div variants={{ hidden: { y: "110%" }, visible: { y: 0, transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } } }}>
                <span className="italic text-gold">families grow</span> &amp; <span className="italic text-gold">thrive.</span>
              </motion.div>
            </div>
          </motion.h2>
        </div>

        {/* Middle: Staggered Image Collage & Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-32">
          
          <div className="lg:col-span-4 flex flex-col gap-8 mt-12 lg:mt-32">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] relative overflow-hidden"
            >
              <Image 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Interior detail" 
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-ivory/60 font-sans text-sm leading-relaxed"
            >
              P-KOT Real Estate and Developers is a premium real estate development company committed to building landmark residential, commercial, and mixed-use developments across India and the UK.
            </motion.p>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="aspect-[3/4] relative overflow-hidden z-10"
            >
              <Image 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury facade" 
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Minimal accent */}
            <div className="absolute -inset-4 border border-gold/20 z-0 hidden lg:block"></div>
          </div>

          <div className="lg:col-span-3 flex flex-col justify-end h-full gap-8 mb-12 lg:mb-32">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-ivory/60 font-sans text-sm leading-relaxed"
            >
              With a legacy of quality, integrity, and innovation, we craft spaces that go beyond the ordinary, designed to endure for generations and create lasting value.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="aspect-square relative overflow-hidden"
            >
              <Image 
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Architectural texture" 
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom: Architectural Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full border-y border-ivory/10 mt-16 lg:mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center py-24 px-8 border-b md:border-b-0 md:border-r border-ivory/10 hover:bg-ivory/5 transition-colors duration-500 group cursor-default"
          >
            <span className="block font-serif text-7xl md:text-[7rem] text-ivory group-hover:text-gold transition-colors duration-500 mb-6">
              10<span className="text-gold group-hover:text-ivory transition-colors duration-500">+</span>
            </span>
            <span className="uppercase tracking-[0.3em] text-xs text-ivory/50 group-hover:text-ivory transition-colors duration-500">Years of Excellence</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center justify-center py-24 px-8 border-b md:border-b-0 md:border-r border-ivory/10 hover:bg-ivory/5 transition-colors duration-500 group cursor-default"
          >
            <span className="block font-serif text-7xl md:text-[7rem] text-ivory group-hover:text-gold transition-colors duration-500 mb-6">
              50<span className="text-gold group-hover:text-ivory transition-colors duration-500">+</span>
            </span>
            <span className="uppercase tracking-[0.3em] text-xs text-ivory/50 group-hover:text-ivory transition-colors duration-500">Landmark Projects</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center py-24 px-8 hover:bg-ivory/5 transition-colors duration-500 group cursor-default"
          >
            <span className="block font-serif text-7xl md:text-[7rem] text-ivory group-hover:text-gold transition-colors duration-500 mb-6">
              5M<span className="text-gold group-hover:text-ivory transition-colors duration-500">+</span>
            </span>
            <span className="uppercase tracking-[0.3em] text-xs text-ivory/50 group-hover:text-ivory transition-colors duration-500">Sq. Ft. Delivered</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
