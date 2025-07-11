import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "QuaddFinance",
    description: "USSD Lightning wallet built with tbDEX SDK for financial inclusion",
    role: "Frontend Developer / Project manager",
    stack: ["Lightning Network", "tbDEX", "USSD", "Node.js"],
    hackathon: "tbDEX Hackathon, 2024",
    github: "https://github.com/QuaddBox/Quad-Finance",
    demo: "#"
  },
  {
    name: "SolEarn",
    description: "On-chain payroll system for Solana DAOs with automated distributions",
    role: "Project manager",
    stack: ["Solana", "Rust", "React", "Web3.js"],
    hackathon: "Grizzlython Hackathon",
    github: "https://github.com/SolEarn-1-0",
    demo: "#"
  },
  {
    name: "SolNexus",
    description: "Decentralized event ticketing platform built on Solana blockchain",
    role: "Frontend Developer",
    stack: ["Solana", "Anchor", "TypeScript"],
    hackathon: "Solana Colosseum Hackathon",
    github: "https://github.com/QuaddBox/Sol-Nexus-Front-end",
    demo: "#"
  },
  {
    name: "Versturen",
    description: "Crowdfunding platform specifically designed for grassroots builders",
    role: "Lead Developer",
    stack: ["React", "Node.js", "Solana"],
    hackathon: "Radar Hackathon",
    github: "#",
    demo: "#"
  },
  {
    name: "Skibidi.cash",
    description: "Experimental meme-based Lightning Network micropayment system",
    role: "Protocol Developer",
    stack: ["Lightning Network", "Bitcoin", "React", "Breez SDK"],
    hackathon: "Skibidi.cash Hackathon",
    github: "https://github.com/Anthonyushie/sigma-wallet",
    demo: "#"
  },
  {
    name: "YakiHonne Agentic Mini App",
    description: "AI-powered mini application for enhanced user interactions",
    role: "Frontend Developer",
    stack: ["React", "AI/ML", "TypeScript", "Nostr"],
    hackathon: "Current Project",
    github: "https://github.com/Anthonyushie/tiptide-widget",
    demo: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono mb-4 text-center"
        >
          <span className="text-primary">//</span> Projects & Hackathons
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-8 sm:mb-12 font-mono text-sm sm:text-base"
        >
          Building the future of Bitcoin, one hack at a time
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300 group border-primary/20 hover:border-primary/40">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-mono text-base sm:text-lg leading-tight group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    <span className="text-primary font-medium">{project.role}</span> • {project.hackathon}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Badge variant="secondary" className="text-xs font-mono hover:bg-primary/20 transition-colors">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};