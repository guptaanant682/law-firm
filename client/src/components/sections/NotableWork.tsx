import { motion } from "framer-motion";
import { ArrowUpRight, Scale, FileText, Users, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotableWork() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-sm font-sans font-bold tracking-[0.2em] text-secondary uppercase mb-4">Case Files & Research</h2>
            <h3 className="text-4xl font-heading font-bold text-foreground">Notable Work & Research</h3>
          </div>
          <Button variant="outline" className="gap-2 group">
            View Complete Portfolio <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Project - NyAI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden border-muted bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 h-full">
                <div className="bg-primary p-8 flex flex-col justify-center relative overflow-hidden min-h-[300px]">
                   {/* Abstract Tech Pattern */}
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
                   <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                   
                   <div className="relative z-10">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6 border border-secondary/20">
                        Ongoing Research
                     </div>
                     <h3 className="text-3xl font-heading font-bold text-white mb-2">NyAI Project</h3>
                     <p className="text-white/70 font-mono text-sm border-l-2 border-secondary pl-4 py-1">National Institute of Technology, Kurukshetra</p>
                   </div>
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-4 font-heading">Legal-AI Systems for Cheque Bounce Case Automation</h4>
                    <p className="text-muted-foreground font-serif mb-6 leading-relaxed">
                      Contributing to the development of AI-driven tools to support legal automation under Section 138 of the Negotiable Instruments Act. 
                      Merging machine learning, NLP, and legal reasoning to predict case outcomes and structure legal datasets.
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-sm text-foreground bg-muted/30 p-2 rounded-sm border-l-2 border-secondary">
                        <span className="font-semibold">Objective:</span>
                        <span>Automate decision-making support in NI Act cases</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-foreground bg-muted/30 p-2 rounded-sm border-l-2 border-secondary">
                         <span className="font-semibold">Role:</span>
                        <span>Legal-AI Research & Document Annotation</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">Read Case Study</Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Smaller Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-muted hover:border-secondary/50 transition-colors group bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors border border-border">
                  <Users className="w-6 h-6 text-foreground group-hover:text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl">Youth Humanitarian Action</CardTitle>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Workshop & Advocacy</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-serif">
                  Conducted a National Awareness Workshop on "Red Cross Volunteerism & Legal Contribution".
                  Addressed the intersection of humanitarian aid and legal frameworks for youth volunteers.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full border-muted hover:border-secondary/50 transition-colors group bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors border border-border">
                  <FileText className="w-6 h-6 text-foreground group-hover:text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl">Patent Drafting</CardTitle>
                 <p className="text-xs text-muted-foreground uppercase tracking-widest">IPR & Innovation</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-serif">
                  Specialized workshop on "Techniques of Patent Drafting" organized by RGNUL, Punjab. 
                  Focused on the technical and legal nuances of securing intellectual property rights.
                </p>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
