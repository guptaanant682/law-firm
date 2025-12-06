import { motion } from "framer-motion";
import { PenTool } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-background border border-secondary/30 text-secondary mb-8 shadow-sm">
            <PenTool className="w-6 h-6" />
          </div>
          
          <blockquote className="font-heading text-2xl md:text-4xl italic text-foreground leading-relaxed">
            "In the digital age, justice must not only be done but must be seen to be done through the lens of technological competence and ethical governance."
          </blockquote>
          
          <cite className="block mt-8 text-sm font-bold tracking-[0.2em] text-secondary uppercase not-italic">
            — Parul Kumar
          </cite>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-secondary/10 rounded-tl-3xl -translate-x-4 -translate-y-4" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-secondary/10 rounded-br-3xl translate-x-4 translate-y-4" />
    </section>
  );
}
