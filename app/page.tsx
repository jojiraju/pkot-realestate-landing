import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import PropertyShowcase from "@/components/PropertyShowcase";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandIntro />
      <PropertyShowcase />
      
      {/* Simple Footer */}
      <footer id="contact" className="bg-forest py-24 px-6 md:px-12 text-center border-t border-ivory/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-ivory mb-6 font-light">
            Ready to build your <span className="italic text-gold">better tomorrow?</span>
          </h2>
          <p className="text-ivory/70 font-sans font-light mb-12 max-w-lg mx-auto">
            Connecting Buyers & Sellers across India and the UK. Speak with our advisors today for premium properties and land investments.
          </p>
          <a href="mailto:pkotrealestate@gmail.com" className="inline-block px-12 py-5 bg-gold text-forest-deep tracking-widest uppercase text-xs font-semibold hover:bg-ivory transition-colors duration-500">
            Email Us Now
          </a>
          
          <div className="mt-24 pt-12 border-t border-ivory/20 flex flex-col md:flex-row items-start justify-between gap-16 text-left">
            
            {/* Branding & Copyright */}
            <div className="flex flex-col gap-6 w-full md:w-1/3">
              <div className="font-serif text-3xl tracking-widest font-light uppercase text-ivory">
                P-KOT
              </div>
              <p className="text-[10px] tracking-widest text-ivory/40 uppercase leading-relaxed">
                Building Better Tomorrows.<br/>
                &copy; 2026 P-KOT Real Estate & Developers.<br/>
                All rights reserved.
              </p>
            </div>

            {/* Locations */}
            <div className="flex flex-col gap-6 w-full md:w-1/3 md:pl-12">
              <span className="text-[10px] tracking-[0.2em] font-semibold text-gold uppercase">Global Presence</span>
              <div className="flex flex-col gap-3 text-xs tracking-widest text-ivory/70 uppercase">
                <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gold"></span> India</span>
                <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gold/40"></span> United Kingdom</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-6 w-full md:w-1/3">
              <span className="text-[10px] tracking-[0.2em] font-semibold text-gold uppercase">Connect</span>
              <div className="flex flex-col gap-4 text-[10px] sm:text-xs tracking-widest text-ivory/70 uppercase">
                <a href="#" className="hover:text-gold transition-colors flex items-center justify-between group border-b border-ivory/10 pb-3">
                  <span>Instagram <span className="text-ivory/30 lowercase tracking-normal ml-2">@p.kot_realestates</span></span>
                  <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">↗</span>
                </a>
                <a href="#" className="hover:text-gold transition-colors flex items-center justify-between group border-b border-ivory/10 pb-3">
                  <span>Facebook <span className="text-ivory/30 lowercase tracking-normal ml-2">/pkotrealestates</span></span>
                  <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">↗</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </main>
  );
}
