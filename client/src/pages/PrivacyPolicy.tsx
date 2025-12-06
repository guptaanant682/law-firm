import { motion } from "framer-motion";
import { Shield, Lock, FileText, Scale } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-12 border-b border-border pb-8">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <Shield className="w-8 h-8" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase">Legal Compliance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Privacy Policy & Disclaimer
            </h1>
            <p className="text-xl text-muted-foreground font-serif italic">
              In compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and Bar Council of India Rules.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last Updated: December 06, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-muted-foreground max-w-none">
            
            <section className="mb-10">
              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-md mb-8">
                <h3 className="text-xl font-bold text-foreground mt-0 flex items-center gap-2">
                  <Scale className="w-5 h-5" /> Bar Council of India Disclaimer
                </h3>
                <p className="text-sm mb-0">
                  This website (www.parulkumar.legal) has been designed for informational purposes only. By accessing this website, you acknowledge and confirm that you are seeking information relating to Parul Kumar of your own accord and that there has been no form of solicitation, advertisement, or inducement by Parul Kumar or his associates. The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Parul Kumar shall not be liable for consequences of any action taken by relying on the material/information provided on this website.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2>1. Introduction</h2>
              <p>
                We value your trust and are committed to protecting your personal data. This Privacy Policy outlines how Parul Kumar ("Data Fiduciary") collects, uses, processes, and protects the personal data of users ("Data Principals") in accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the Information Technology Act, 2000.
              </p>
            </section>

            <section className="mb-10">
              <h2>2. Collection of Personal Data</h2>
              <p>
                We collect personal data only when strictly necessary and with your explicit consent. The data we may collect includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data:</strong> Name, professional title.</li>
                <li><strong>Contact Data:</strong> Email address, phone number.</li>
                <li><strong>Communication Data:</strong> Details provided in the subject and message fields of our contact forms.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and device information (for security and analytics purposes).</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2>3. Purpose of Processing (Section 4, DPDP Act)</h2>
              <p>
                Your personal data is processed solely for the following "Legitimate Uses":
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your legal inquiries or requests for consultation.</li>
                <li>To provide legal services and professional advice as requested.</li>
                <li>To comply with legal obligations and regulatory requirements.</li>
                <li>To improve the functionality and security of our digital platform.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2>4. Consent and Notice (Section 5 & 6, DPDP Act)</h2>
              <p>
                By using our contact forms or services, you provide your <strong>Free, Specific, Informed, Unconditional, and Unambiguous Consent</strong> for us to process your data for the purposes stated above. You have the right to withdraw your consent at any time by contacting our Grievance Officer.
              </p>
            </section>

            <section className="mb-10">
              <h2>5. Rights of Data Principals (Section 11-14, DPDP Act)</h2>
              <p>
                As a Data Principal, you have the following rights under Indian Law:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4 not-prose">
                <div className="border border-border p-4 rounded-md bg-card">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2"><FileText className="w-4 h-4 text-secondary"/> Right to Access</h4>
                  <p className="text-sm text-muted-foreground">Request a summary of personal data being processed and the processing activities.</p>
                </div>
                <div className="border border-border p-4 rounded-md bg-card">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2"><Shield className="w-4 h-4 text-secondary"/> Right to Correction</h4>
                  <p className="text-sm text-muted-foreground">Request correction, completion, or updating of your personal data.</p>
                </div>
                <div className="border border-border p-4 rounded-md bg-card">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2"><Lock className="w-4 h-4 text-secondary"/> Right to Erasure</h4>
                  <p className="text-sm text-muted-foreground">Request the erasure of your personal data unless retention is required by law.</p>
                </div>
                <div className="border border-border p-4 rounded-md bg-card">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2"><Scale className="w-4 h-4 text-secondary"/> Grievance Redressal</h4>
                  <p className="text-sm text-muted-foreground">Right to have your grievances redressed regarding data processing.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2>6. Data Security & Retention</h2>
              <p>
                We implement reasonable security safeguards to prevent personal data breaches. Your data is retained only for as long as necessary to fulfill the purposes for which it was collected or as required by applicable laws (e.g., maintaining case files for statutory periods).
              </p>
            </section>

            <section className="mb-10">
              <h2>7. Contact & Grievance Redressal</h2>
              <p>
                For any concerns regarding this Privacy Policy or to exercise your rights, please contact:
              </p>
              <div className="bg-muted/30 p-6 rounded-md not-prose">
                <p className="font-bold text-foreground">Parul Kumar</p>
                <p className="text-muted-foreground">Advocate & Cyber Law Specialist</p>
                <p className="text-muted-foreground mt-2">Email: <a href="mailto:parulkhohal14@gmail.com" className="text-primary hover:underline">parulkhohal14@gmail.com</a></p>
              </div>
            </section>

          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
            <Link href="/">
              <Button variant="outline" className="gap-2">
                &larr; Return to Home
              </Button>
            </Link>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
