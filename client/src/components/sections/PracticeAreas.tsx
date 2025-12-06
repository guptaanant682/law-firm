import { motion } from "framer-motion";
import { Terminal, FileText, Cpu, Search, Globe, Mic, Gavel, ShieldAlert, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const practiceAreas = [
  {
    title: "Cyber Law & Digital Forensics",
    icon: <Terminal className="w-5 h-5" />,
    description: "Expertise in OSINT frameworks, digital evidence extraction, and cyber crime investigation protocols.",
    tags: ["Cyber Crime Investigation", "Digital Evidence", "Kali Linux", "Drone Forensics"]
  },
  {
    title: "AI Governance & Policy",
    icon: <Cpu className="w-5 h-5" />,
    description: "Navigating the legal complexities of Artificial Intelligence, from prompt engineering ethics to automated legal reasoning.",
    tags: ["AI Ethics", "Legal Automation", "Algorithmic Accountability", "Prompt Engineering"]
  },
  {
    title: "Intellectual Property Rights",
    icon: <FileText className="w-5 h-5" />,
    description: "Protection of innovation through patent drafting and navigating copyright laws in the digital age.",
    tags: ["Patent Drafting", "Copyright Law", "Digital Rights", "Innovation Protection"]
  },
  {
    title: "Civil & Criminal Litigation",
    icon: <Scale className="w-5 h-5" />,
    description: "Comprehensive legal representation with a focus on procedural law and judicial analysis.",
    tags: ["Legal Research", "Case Analysis", "Mediation", "Court Procedures"]
  }
];

export default function PracticeAreas() {
  return (
    <section id="expertise" className="py-24 relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full border border-secondary/20" />
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full border border-secondary/20" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-sm font-sans font-bold tracking-[0.2em] text-secondary uppercase mb-4">Areas of Expertise</h2>
           <h3 className="text-4xl font-heading font-bold text-white">Legal Practice Areas</h3>
           <p className="mt-4 text-white/70 max-w-2xl mx-auto font-serif">
             Specialized legal services tailored for the digital age, bridging the gap between traditional jurisprudence and modern technology.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm group">
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 group-hover:bg-secondary group-hover:text-primary transition-colors">
                    {area.icon}
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl tracking-wide text-white">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 font-serif mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white font-normal bg-transparent"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
