import React, { memo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const About = memo(() => (
  <main className="py-32 px-6 overflow-hidden min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="aspect-[3/4] relative z-10">
          <img 
            src="https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?auto=format&fit=crop&q=80&w=800" 
            alt="Traditional Spice Crafting"
            className="w-full h-full object-cover rounded-sm"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-gold p-8 flex flex-col justify-center items-center text-center z-20 rounded-sm shadow-2xl">
          <span className="text-4xl font-serif text-brand-dark font-bold">2026</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Established</span>
        </div>
        <div className="absolute -top-10 -left-10 w-64 h-64 border border-brand-gold/20 -z-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Our Philosophy</span>
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
          Authenticity in every <span className="italic">single grain.</span>
        </h2>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          Daham Ceylon Spice was founded on the belief that luxury is found in purity. We partner exclusively with small-scale organic farmers in Sri Lanka to ensure that every export exceeds international standards while preserving the rich heritage of Ceylon spice crafting.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          <div>
            <h4 className="text-xl font-serif mb-2">100% Organic</h4>
            <p className="text-muted text-sm">No chemicals, no preservatives. Pure nature in a jar.</p>
          </div>
          <div>
            <h4 className="text-xl font-serif mb-2">Direct Trade</h4>
            <p className="text-muted text-sm">Fair pricing for farmers, better quality for buyers.</p>
          </div>
        </div>

        <button className="group flex items-center gap-4 text-brand-dark dark:text-white font-bold uppercase tracking-widest text-xs border-b-2 border-brand-gold pb-2 hover:gap-6 transition-all">
          Learn Our Process <ArrowRight size={16} className="text-brand-gold" />
        </button>
      </motion.div>
    </div>
  </main>
));

export default About;
