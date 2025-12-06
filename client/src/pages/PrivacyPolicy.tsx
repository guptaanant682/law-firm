import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Scale, Shield, Lock, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          
          <div className="mb-12 border-b border-border pb-8">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">Privacy Policy & Disclaimer</h1>
            <p className="text-muted-foreground font-serif italic">Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="space-y-12 prose prose-slate max-w-none">
            
            {/* Bar Council Disclaimer */}
            <section className="bg-muted/30 p-8 border-l-4 border-secondary rounded-r-md">
              <div className="flex items-start gap-3 mb-4">
                <Scale className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <h2 className="text-xl font-heading font-bold text-primary m-0">Bar Council of India Disclaimer</h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground m-0">
                In accordance with the rules of the Bar Council of India, Advocates are prohibited from soliciting work or advertising via public communication. By accessing this website (the "Portfolio"), you acknowledge and confirm that:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-muted-foreground">
                <li>You are seeking information about <strong>Advocate Parul Kumar</strong> of your own accord and volition.</li>
                <li>There has been no form of solicitation, advertisement, or inducement by Advocate Parul Kumar or his associates.</li>
                <li>The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement.</li>
                <li>No material/information provided on this website should be construed as legal advice.</li>
                <li>Advocate Parul Kumar shall not be liable for consequences of any action taken by relying on the material/information provided on this website.</li>
              </ul>
            </section>

            {/* Privacy Policy Content */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary shrink-0" />
                <h2 className="text-2xl font-heading font-bold text-primary">Privacy Policy</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Privacy Policy outlines how we handle information in compliance with the <strong>Information Technology Act, 2000</strong> and the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>. We are committed to protecting your digital privacy and ensuring transparency in our operations.
              </p>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">1. No Data Collection via Forms</h3>
                  <p className="text-muted-foreground">
                    This website is a static portfolio designed for informational purposes. We have removed all interactive contact forms to ensure zero collection of personal data directly through the website interface. We do not store, process, or transmit personal data via this site's infrastructure.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">2. Email Communication</h3>
                  <p className="text-muted-foreground">
                    Any communication initiated by the user via email links provided on this website is voluntary. The information shared in such emails is strictly confidential and protected under <strong>Client-Attorney Privilege</strong> (Section 126 of the Indian Evidence Act, 1872) once a formal client relationship is established. Until such relationship is established, please do not send confidential information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">3. Technical Data & Cookies</h3>
                  <p className="text-muted-foreground">
                    This website is hosted on a secure platform which may collect standard server logs for security and performance monitoring. These logs may include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                    <li>IP Address (Anonymized where possible)</li>
                    <li>Browser Type and Version</li>
                    <li>Time and Date of Access</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    We do not use tracking cookies for advertising or marketing purposes.
                  </p>
                </div>
              </div>
            </section>

             {/* DPDP Act Compliance */}
             <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary shrink-0" />
                <h2 className="text-2xl font-heading font-bold text-primary">DPDP Act Compliance</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under the Digital Personal Data Protection Act, 2023, we act as a responsible entity regarding any data you may voluntarily share via email.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                 <div className="p-4 border border-border rounded-sm bg-card">
                    <h4 className="font-bold text-foreground mb-2">Purpose Limitation</h4>
                    <p className="text-sm text-muted-foreground">Data is used solely for the purpose of responding to your legal inquiries.</p>
                 </div>
                 <div className="p-4 border border-border rounded-sm bg-card">
                    <h4 className="font-bold text-foreground mb-2">Data Minimization</h4>
                    <p className="text-sm text-muted-foreground">We request only necessary information required to understand your legal situation.</p>
                 </div>
              </div>
            </section>

             {/* Contact for Privacy */}
             <section className="border-t border-border pt-8 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary shrink-0" />
                <h2 className="text-xl font-heading font-bold text-primary">Grievance Officer</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                For any concerns regarding this privacy policy or your data rights, please contact:
              </p>
              <div className="bg-muted/50 p-6 rounded-md inline-block">
                <p className="font-bold text-foreground">Advocate Parul Kumar</p>
                <p className="text-sm text-muted-foreground mt-1">Email: parulkhohal14@gmail.com</p>
                <p className="text-sm text-muted-foreground">Subject Line: "Privacy Policy Inquiry"</p>
              </div>
            </section>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
