import { Navigation } from "./components/Navigation";
import { FloatingShapes } from "./components/FloatingShapes";
import { Hero } from "./components/Hero";
import { ProjectGallery } from "./components/ProjectGallery";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      {/* Background Floating Shapes */}
      <FloatingShapes />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <ProjectGallery />
        <About />
        <Skills />
        <Process />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
