import { motion } from "framer-motion";
import { Terminal, FileText, Cpu, Search, Globe, Mic } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Legal Tech & AI",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["AI Prompt Engineering", "Legal Automation", "NLP in Law", "Case Prediction Models"]
  },
  {
    title: "Cyber Forensics",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Kali Linux", "Ubuntu/Parrot OS", "OSINT Framework", "Evidence Extraction", "Drone Forensics"]
  },
  {
    title: "Legal Expertise",
    icon: <FileText className="w-5 h-5" />,
    skills: ["Cyber Law", "Legal Research", "Policy Analysis", "Patent Drafting", "Mediation"]
  },
  {
    title: "Soft Skills",
    icon: <Mic className="w-5 h-5" />,
    skills: ["Public Speaking", "Team Collaboration", "Active Listening", "Workshop Leadership"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full border border-secondary/20" />
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full border border-secondary/20" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-sm font-sans font-bold tracking-[0.2em] text-secondary uppercase mb-4">Competencies</h2>
           <h3 className="text-4xl font-heading font-bold text-white">Technical & Legal Arsenal</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-3">
                    {category.icon}
                  </div>
                  <CardTitle className="font-heading text-lg tracking-wide text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Simple text representations for logos to keep it clean */}
           <span className="font-mono text-lg font-bold">HTML5</span>
           <span className="font-mono text-lg font-bold">CSS3</span>
           <span className="font-mono text-lg font-bold">JavaScript</span>
           <span className="font-mono text-lg font-bold">GitHub</span>
           <span className="font-mono text-lg font-bold">AWS</span>
           <span className="font-mono text-lg font-bold">Python</span>
        </div>
      </div>
    </section>
  );
}
