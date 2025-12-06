import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Scale className="w-8 h-8 text-secondary" />
            <div>
              <h4 className="font-heading font-bold text-xl leading-none">PARUL KUMAR</h4>
              <p className="text-xs text-white/60 tracking-wider uppercase mt-1">Advocate & Cyber Law Specialist</p>
            </div>
          </div>
          
          <div className="text-sm text-white/60 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Parul Kumar. All rights reserved.</p>
            <p className="mt-1">Designed with Digital Justice Principles</p>
          </div>
        </div>
        
        <div className="h-px w-full bg-white/10 mb-8" />
        
        <div className="flex justify-center gap-8 text-sm font-medium text-white/80">
          <a href="#" className="hover:text-secondary transition-colors">Disclaimer</a>
          <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-secondary transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
