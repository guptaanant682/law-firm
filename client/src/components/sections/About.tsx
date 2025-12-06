import { motion } from "framer-motion";
import { BookOpen, Gavel, ShieldCheck, Brain } from "lucide-react";
import textureBg from "@assets/generated_images/white_marble_texture.png";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Texture Background */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none z-0"
        style={{ backgroundImage: `url(${textureBg})` }}
      />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-sans font-bold tracking-[0.2em] text-secondary uppercase mb-4">The Advocate</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 leading-tight">
              Fostering technology-driven legal frameworks for digital justice.
            </h3>
            
            <div className="prose prose-lg text-muted-foreground font-serif">
              <p className="mb-6">
                I am a law graduate specializing in cyber law and AI governance, driven by a passion for legal policy analysis. 
                My work sits at the intersection of traditional jurisprudence and emerging technologies.
              </p>
              <p>
                Currently pursuing an LL.M in Cyber Law & Cyber Crime Investigation at National Forensic Science University, 
                I bring hands-on experience in legal research, public speaking, and the technical nuances of AI prompt engineering and OSINT frameworks.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Gavel className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-foreground">Legal Research</h4>
                  <p className="text-sm text-muted-foreground">Deep policy analysis & writing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-foreground">Cyber Crime</h4>
                  <p className="text-sm text-muted-foreground">Investigation & Digital Forensics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-foreground">AI Governance</h4>
                  <p className="text-sm text-muted-foreground">Prompt Engineering & Ethics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-foreground">Public Speaking</h4>
                  <p className="text-sm text-muted-foreground">Workshops & Awareness</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[500px] bg-muted rounded-t-full border-8 border-double border-muted-foreground/10 overflow-hidden"
          >
             {/* Abstract representation of Law & Tech */}
             <div className="absolute inset-0 bg-primary/5" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-[3/4] border border-secondary/30 rounded-t-full" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-[3/4] border border-secondary/50 rounded-t-full" />
             
             <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent">
                <div className="text-center">
                   <p className="font-heading text-2xl font-bold text-primary">NFSU</p>
                   <p className="font-serif italic text-muted-foreground">LL.M Candidate, 2026</p>
                </div>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
