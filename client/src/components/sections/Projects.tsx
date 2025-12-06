import { motion } from "framer-motion";
import { ArrowUpRight, Scale, FileText, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-sm font-sans font-bold tracking-[0.2em] text-secondary uppercase mb-4">Case Files & Research</h2>
            <h3 className="text-4xl font-heading font-bold text-foreground">Featured Projects</h3>
          </div>
          <Button variant="outline" className="gap-2">
            View GitHub <ArrowUpRight className="w-4 h-4" />
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
            <Card className="overflow-hidden border-muted bg-card shadow-lg">
              <div className="grid md:grid-cols-2 h-full">
                <div className="bg-primary p-8 flex flex-col justify-center relative overflow-hidden">
                   {/* Abstract Tech Pattern */}
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
                   <div className="relative z-10">
                     <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                       <Scale className="w-8 h-8 text-secondary" />
                     </div>
                     <h3 className="text-3xl font-heading font-bold text-white mb-2">NyAI Project</h3>
                     <p className="text-white/70 font-mono text-sm">National Institute of Technology, Kurukshetra</p>
                   </div>
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Legal-AI Systems for Cheque Bounce Case Automation</h4>
                    <p className="text-muted-foreground font-serif mb-6">
                      Developing AI-driven tools to support legal automation under Section 138 of the Negotiable Instruments Act. 
                      Merging machine learning, NLP, and legal reasoning to predict case outcomes and structure legal datasets.
                    </p>
                    <div className="space-y-2 mb-8">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        <span>Legal Document Annotation Framework</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                         <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        <span>Case Outcome Prediction Model</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                         <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        <span>NLP & Feature Extraction</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">View Documentation</Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Smaller Project Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-muted hover:border-secondary/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Users className="w-6 h-6 text-foreground group-hover:text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl">Youth Humanitarian Action</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-serif">
                  One Day National Awareness Workshop on "Red Cross Volunteerism & Legal Contribution".
                  Leading discussions on the legal framework of humanitarian aid.
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
            <Card className="h-full border-muted hover:border-secondary/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <FileText className="w-6 h-6 text-foreground group-hover:text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl">Patent Drafting Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-serif">
                  Techniques of Patent Drafting organized by RGNUL, Punjab. 
                  Specialized training in intellectual property rights and innovation protection.
                </p>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
