import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@assets/generated_images/cyber_law_gavel_concept.png";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
      </div>

      {/* Grid Overlay for Tech Feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 border border-secondary/50 bg-secondary/10 backdrop-blur-sm rounded-full">
            <span className="text-sm font-medium text-secondary tracking-widest uppercase font-sans">Digital Justice & Governance</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-foreground mb-6"
        >
          PARUL KUMAR
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-xl md:text-2xl font-serif italic text-muted-foreground leading-relaxed">
            Bridging the gap between legal precedent and artificial intelligence.
            Specializing in Cyber Law, AI Governance, and Policy Analysis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold tracking-wide rounded-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
          >
            LEGAL CONSULTATION
          </a>
          <a 
            href="#projects"
            className="px-8 py-4 border border-primary text-primary font-heading font-semibold tracking-wide rounded-sm hover:bg-secondary/10 transition-all"
          >
            VIEW PRECEDENTS
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ChevronDown className="w-8 h-8 opacity-50" />
      </motion.div>
    </section>
  );
}
