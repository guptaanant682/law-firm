import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
        >
          {/* Tooltip */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border shadow-lg p-3 rounded-md max-w-[200px] relative hidden md:block"
          >
             <button 
               onClick={() => setIsVisible(false)}
               className="absolute -top-2 -left-2 bg-destructive text-destructive-foreground rounded-full p-0.5 hover:bg-destructive/90"
             >
               <X className="w-3 h-3" />
             </button>
             <p className="text-xs font-medium text-foreground">
               Have a legal inquiry? <br/>
               <span className="text-muted-foreground">Click to chat on WhatsApp.</span>
             </p>
             {/* Triangle Pointer */}
             <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-card" />
             <div className="absolute -bottom-[9px] right-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-border -z-10" />
          </motion.div>

          <a
            href="https://wa.me/919876543210" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
