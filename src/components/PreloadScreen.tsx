import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PreloadScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showLightning, setShowLightning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Trigger lightning effects
    const lightningTimer = setInterval(() => {
      setShowLightning(true);
      setTimeout(() => setShowLightning(false), 200);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(lightningTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
      >
        {/* Lightning Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Lightning Bolts */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 3) * 30}%`,
              }}
              animate={{
                opacity: showLightning ? [0, 1, 0.8, 0] : 0,
                scale: showLightning ? [0.8, 1.2, 1, 0.9] : 0.8,
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 0.3,
                delay: i * 0.05,
              }}
            >
              <svg
                width="60"
                height="120"
                viewBox="0 0 60 120"
                className="text-primary drop-shadow-lg"
              >
                <path
                  d="M30 0L20 40H35L25 80L45 45H30L40 0Z"
                  fill="currentColor"
                  className="animate-pulse"
                />
              </svg>
            </motion.div>
          ))}

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Electric Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"
            animate={{
              opacity: showLightning ? [0.3, 0.8, 0.3] : 0.1,
              scale: showLightning ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          {/* Bitcoin Symbol with Lightning */}
          <motion.div
            className="relative mb-8"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="relative">
              <motion.div
                className="text-8xl font-bold text-primary"
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
                ₿
              </motion.div>
              
              {/* Lightning Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.h1
            className="text-2xl font-mono font-bold text-foreground mb-4"
            animate={{
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            Charging the Lightning Network...
          </motion.h1>

          {/* Progress Bar */}
          <div className="w-80 h-2 bg-muted rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-yellow-400 to-primary rounded-full"
              style={{ width: `${progress}%` }}
              animate={{
                boxShadow: showLightning
                  ? [
                      "0 0 5px #f7931a",
                      "0 0 15px #f7931a",
                      "0 0 25px #f7931a",
                      "0 0 5px #f7931a",
                    ]
                  : "0 0 5px #f7931a",
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Progress Text */}
          <motion.p
            className="text-muted-foreground font-mono"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            {progress}% Complete
          </motion.p>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Corner Lightning Effects */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`corner-${i}`}
            className={`absolute w-20 h-20 ${
              i === 0 ? "top-4 left-4" :
              i === 1 ? "top-4 right-4" :
              i === 2 ? "bottom-4 left-4" :
              "bottom-4 right-4"
            }`}
            animate={{
              opacity: showLightning ? [0, 1, 0] : 0,
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full text-primary"
              fill="currentColor"
            >
              <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />
            </svg>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};