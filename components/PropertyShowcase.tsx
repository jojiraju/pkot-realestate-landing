"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const properties = [
  {
    id: "01",
    name: "Quarters For Sale",
    location: "Edakkara Town, Kerala, India",
    type: "Premium Residential",
    description: "Prime location in Edakkara Town. Suitable for large families with excellent investment opportunities.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
  },
  {
    id: "02",
    name: "Quarters For Sale",
    location: "Chungathara Nilambur, Kerala",
    type: "Residential Quarters",
    description: "A home for every family. Spacious layouts with attached rooms, kitchens, and dedicated work areas.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "03",
    name: "5 Acres Land For Sale",
    location: "Kakkadampoyil Nilambur, Kerala",
    type: "Premium Land / Investment",
    description: "Direct owner dealing. Perfect property for farming, investment, or building a holiday home surrounded by nature.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80"
  }
];

export default function PropertyShowcase() {
  return (
    <section id="properties" className="py-32 bg-forest-deep text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Portfolio</span>
            <h2 className="font-serif text-4xl md:text-6xl font-light">Featured Developments</h2>
          </div>
          <a href="#" className="uppercase tracking-widest text-xs font-sans hover:text-gold transition-colors pb-2 border-b border-ivory/20 hover:border-gold">
            View All Projects
          </a>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {properties.map((prop, index) => (
            <motion.div 
              key={prop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center group`}
            >
              <div className="w-full md:w-3/5 overflow-hidden aspect-[4/3] md:aspect-[16/10] relative">
                <Image 
                  src={prop.image} 
                  alt={prop.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="text-gold font-serif text-2xl italic mb-4">{prop.id}</span>
                <h3 className="font-serif text-3xl md:text-5xl mb-4">{prop.name}</h3>
                <p className="font-sans text-ivory/70 tracking-wide text-sm mb-6 uppercase">{prop.location} &mdash; {prop.type}</p>
                <p className="font-sans text-ivory/80 leading-relaxed mb-8">
                  {prop.description}
                </p>
                <div>
                  <a href="#" className="inline-flex items-center gap-4 text-xs tracking-widest uppercase font-semibold group/btn">
                    <span className="group-hover/btn:text-gold transition-colors">Discover</span>
                    <span className="w-8 h-[1px] bg-ivory group-hover/btn:w-12 group-hover/btn:bg-gold transition-all duration-300"></span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
