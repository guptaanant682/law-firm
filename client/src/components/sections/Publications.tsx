import { motion } from "framer-motion";
import { BookOpen, ScrollText, PenTool, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import libraryBg from "@assets/generated_images/vintage_law_library.png";

const publications = [
  {
    type: "Legal Article",
    title: "The Intersection of AI and Indian Copyright Law",
    journal: "Journal of Cyber Law & Policy",
    date: "Nov 2024",
    summary: "Exploring the ownership of AI-generated content under the Copyright Act, 1957.",
    link: "#"
  },
  {
    type: "Research Paper",
    title: "Digital Evidence in Criminal Trials: Admissibility & Challenges",
    journal: "NFSU Law Review",
    date: "Aug 2024",
    summary: "An analysis of Section 65B of the Indian Evidence Act and recent Supreme Court judgments.",
    link: "#"
  },
  {
    type: "Op-Ed",
    title: "Data Privacy: The Road Ahead with DPDP Act 2023",
    journal: "Legal India Blog",
    date: "Oct 2023",
    summary: "Understanding the obligations of Data Fiduciaries and rights of Data Principals.",
    link: "#"
  }
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 relative">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${libraryBg})` }}
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-sans font-bold tracking-[0.2em] text-secondary uppercase mb-4">Legal Scholarship</h2>
          <h3 className="text-4xl font-heading font-bold text-foreground">Publications & Insights</h3>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-serif">
            Contributing to the legal discourse through rigorous research and analysis of contemporary legal issues.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-muted bg-card/50 backdrop-blur-md hover:bg-card hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary/5 rounded-full text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
                      <ScrollText className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded-sm">
                      {pub.date}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{pub.type}</div>
                  <CardTitle className="font-heading text-xl leading-tight group-hover:text-primary transition-colors">
                    {pub.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-bold text-foreground mb-2">{pub.journal}</p>
                  <p className="text-muted-foreground font-serif text-sm leading-relaxed">
                    {pub.summary}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="p-0 h-auto font-bold text-primary hover:text-secondary hover:bg-transparent gap-2 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quote / Philosophy */}
        <div className="mt-24 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto border-y border-secondary/30 py-12 px-8 relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-secondary">
              <PenTool className="w-6 h-6" />
            </div>
            <blockquote className="font-heading text-2xl md:text-3xl italic text-foreground leading-normal">
              "In the digital age, justice must not only be done but must be seen to be done through the lens of technological competence and ethical governance."
            </blockquote>
            <cite className="block mt-6 text-sm font-bold tracking-widest text-secondary uppercase not-italic">
              — Parul Kumar
            </cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
