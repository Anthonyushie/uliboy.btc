import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight leading-tight">
            Anthony Ushie
          </h1>
          
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-mono">
            <span className="text-primary">Bitcoin Builder</span> |{" "}
            <span className="text-primary">Community Organizer</span> |{" "}
            <span className="text-primary">Protocol Explorer</span>
          </div>
          
          <blockquote className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-foreground/80 font-sans px-4">
            "Building Bitcoin where it matters — on the ground and under the hood."
          </blockquote>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 font-mono w-full sm:w-auto">
              <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 font-mono w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Contact Me
            </Button>
          </div>
          
          <div className="flex justify-center gap-4 sm:gap-6 pt-6 sm:pt-8">
            <a 
              href="https://github.com/anthonyushie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a 
              href="https://twitter.com/anthonyushie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300"
            >
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};