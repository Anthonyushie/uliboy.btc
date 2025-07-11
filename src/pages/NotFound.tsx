import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Zap } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [showLightning, setShowLightning] = useState(false);
  const [glitchText, setGlitchText] = useState("404");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Lightning effect
    const lightningInterval = setInterval(() => {
      setShowLightning(true);
      setTimeout(() => setShowLightning(false), 200);
    }, 2000);
    
    // Glitch effect for 404 text
    const glitchInterval = setInterval(() => {
      const glitchChars = ['4', '0', '4', '█', '▓', '▒', '░'];
      const randomText = Array.from({ length: 3 }, () => 
        glitchChars[Math.floor(Math.random() * glitchChars.length)]
      ).join('');
      setGlitchText(randomText);
      
      setTimeout(() => setGlitchText("404"), 100);
    }, 3000);
    
    return () => {
      clearInterval(lightningInterval);
      clearInterval(glitchInterval);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Bitcoin Symbols */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bitcoin-${i}`}
            className="absolute text-primary/10 text-4xl font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ₿
          </motion.div>
        ))}
        
        {/* Lightning Bolts */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`lightning-${i}`}
            className="absolute"
            style={{
              left: `${25 + i * 20}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
            animate={{
              opacity: showLightning ? [0, 1, 0.8, 0] : 0,
              scale: showLightning ? [0.8, 1.2, 1] : 0.8,
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 0.3,
              delay: i * 0.1,
            }}
          >
            <Zap className="w-8 h-8 text-primary/30" />
          </motion.div>
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(247,147,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(247,147,26,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <motion.h1
            className="text-8xl md:text-9xl font-bold font-mono text-primary mb-4"
            animate={{
              textShadow: showLightning
                ? [
                    "0 0 10px #f7931a",
                    "0 0 20px #f7931a",
                    "0 0 30px #f7931a",
                    "0 0 10px #f7931a",
                  ]
                : "0 0 10px #f7931a",
            }}
            transition={{ duration: 0.3 }}
          >
            {glitchText}
          </motion.h1>
          
          {/* Glitch Lines */}
          <motion.div
            className="relative"
            animate={{
              opacity: showLightning ? [1, 0, 1] : 1,
            }}
            transition={{ duration: 0.1, repeat: 2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-1 transform -skew-x-12" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent h-1 transform skew-x-12 translate-y-2" />
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-4">
            <span className="text-primary">//</span> Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-2 font-mono">
            Looks like this page got lost in the Lightning Network!
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            The page <span className="text-primary font-semibold">{location.pathname}</span> doesn't exist.
          </p>
        </motion.div>
        
        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="font-mono group"
            onClick={() => window.location.href = '/'}
          >
            <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Go Home
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="font-mono group"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
        </motion.div>
        
        {/* Fun Bitcoin Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 p-6 bg-card/50 rounded-lg border border-primary/20"
        >
          <p className="text-sm text-muted-foreground font-mono italic">
            "In Bitcoin we trust, but this page we cannot find." 
          </p>
          <p className="text-xs text-primary font-mono mt-2">
            - Satoshi's 404 Wisdom
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;