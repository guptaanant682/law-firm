import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Experience from "@/components/sections/Experience";
import NotableWork from "@/components/sections/NotableWork";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Experience />
        <NotableWork />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
