import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Community } from "@/components/Community";
import { Writings } from "@/components/Writings";
import { Fellowships } from "@/components/Fellowships";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Community />
      <Writings />
      <Fellowships />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
