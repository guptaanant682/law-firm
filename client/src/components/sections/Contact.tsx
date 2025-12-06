import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-sans font-bold tracking-[0.2em] text-secondary uppercase mb-4">Correspondence</h2>
          <h3 className="text-4xl font-heading font-bold text-foreground mb-8">Get in Touch</h3>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            Available for legal consultation, policy analysis, and speaking engagements regarding Cyber Law and AI Governance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.0 }}
          >
            <Card className="h-full border-muted hover:border-secondary/50 transition-colors text-center group">
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">Email</h4>
                <a href="mailto:parulkhohal14@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  parulkhohal14@gmail.com
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full border-muted hover:border-secondary/50 transition-colors text-center group">
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">Location</h4>
                <p className="text-muted-foreground">
                  Gandhinagar, Gujarat <br/> Kurukshetra, Haryana
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full border-muted hover:border-secondary/50 transition-colors text-center group">
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">Professional</h4>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/parul-kumar" target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                    LinkedIn
                  </a>
                  <span className="text-muted-foreground/30">|</span>
                  <a href="https://github.com/Parulkumar51" target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
