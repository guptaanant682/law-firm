import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Advocate Intern",
    org: "Chambers of Advocate B.D. Mishra",
    location: "District & Session Court, Jhajjar",
    date: "June 2022",
    description: [
      "Researched and summarized key legal precedents on cyber fraud, improving team understanding by 60%.",
      "Compiled comprehensive reports on current laws affecting digital transactions.",
      "Observed over 10+ courtroom sessions to analyze judicial processes and trial procedures."
    ]
  },
  {
    id: 2,
    role: "Legal-AI Research Contributor",
    org: "NyAI Project, NIT Kurukshetra",
    location: "Remote / Hybrid",
    date: "In Progress",
    description: [
      "Contributing to AI-driven tools for automation in cheque bounce cases (Section 138).",
      "Collaborating on case outcome prediction models using NLP and legal reasoning.",
      "Designing legal document annotation frameworks for training machine learning models.",
      "Feature extraction and dataset structuring based on judgment analysis."
    ]
  }
];

const education = [
  {
    degree: "L.L.M (Cyber Law & Cyber Crime Investigation)",
    school: "National Forensic Science University, Gandhinagar",
    year: "2025 - 2026"
  },
  {
    degree: "B.A.L.L.B (Hons.)",
    school: "Institute of Law, Kurukshetra University",
    year: "2020 - 2025"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-sans font-bold tracking-[0.2em] text-secondary uppercase mb-4">Curriculum Vitae</h2>
          <h3 className="text-4xl font-heading font-bold text-foreground">Legal & Academic Record</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education Column */}
          <div className="lg:col-span-1">
            <h4 className="text-2xl font-heading font-bold text-primary mb-8 border-b-2 border-secondary/30 pb-2 inline-block">
              Education
            </h4>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-border"
                >
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-secondary" />
                  <h5 className="font-heading font-bold text-lg">{edu.degree}</h5>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <p className="text-sm text-muted-foreground font-mono mt-1">{edu.year}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
               <h4 className="text-xl font-heading font-bold text-primary mb-6 border-b-2 border-secondary/30 pb-2 inline-block">
                Certifications
              </h4>
              <ul className="space-y-4">
                <li className="text-sm text-muted-foreground">
                  <strong className="text-foreground block font-heading">Drone Forensic Training Program</strong>
                  Aeroworks Technologies (2025) - UAV analysis & evidence extraction
                </li>
                <li className="text-sm text-muted-foreground">
                  <strong className="text-foreground block font-heading">Cybercrime Investigation & Digital Forensics</strong>
                  Certificate Course
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Column */}
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-heading font-bold text-primary mb-8 border-b-2 border-secondary/30 pb-2 inline-block">
              Professional Experience
            </h4>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-card border border-border p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary group-hover:bg-secondary transition-colors" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h5 className="text-xl font-heading font-bold text-foreground">{exp.role}</h5>
                      <p className="text-primary font-medium">{exp.org}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                        {exp.date}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span className="font-serif leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
