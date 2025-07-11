import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Sun, Globe } from "lucide-react";

const fellowships = [
  {
    name: "Chaincode Labs Seminar",
    role: "Fellow",
    description: "Intensive technical program focused on Bitcoin protocol development, consensus mechanisms, and advanced cryptography",
    period: "2025",
    type: "Fellowship",
    icon: Award,
    highlights: [
      "Bitcoin Core development",
      "Consensus mechanisms",
      "Cryptographic protocols",
      "P2P networking"
    ],
    prestigious: true
  },
  {
    name: "BTrust Language Pathway Program",
    role: "Participant", 
    description: "A developer-focused initiative designed to help participants gain mastery in Bitcoin-centric programming languages and tools.",
    period: "2025",
    type: "Cultural Program",
    icon: Globe,
    highlights: [
      "Mastery of Bitcoin development languages (e.g., C++, Rust, Python)",
      "Deep understanding of Bitcoin Core and protocol-level engineering",
      "Contribution to open-source Bitcoin infrastructure"
    ],
    prestigious: false
  },
  {
    name: "Summer of Bitcoin",
    role: "Participant",
    description: "Open-source Bitcoin development program connecting students with Bitcoin projects and mentors",
    period: "2023",
    type: "Development Program",
    icon: Sun,
    highlights: [
      "Open-source contributions",
      "Bitcoin project development",
      "Mentorship program",
      "Global developer network"
    ],
    prestigious: true
  }
];

const achievements = [
  "Selected for competitive Chaincode Labs technical program",
  "Contributed to multiple Bitcoin open-source projects",
  "Built cross-cultural connections in global Bitcoin community",
  "Mentored new developers entering Bitcoin space"
];

export const Fellowships = () => {
  return (
    <section id="fellowships" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-center">
          <span className="text-primary">//</span> Fellowships & Programs
        </h2>
        <p className="text-center text-muted-foreground mb-12 font-mono">
          Continuous learning and contribution to the Bitcoin ecosystem
        </p>
        
        {/* Fellowships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {fellowships.map((fellowship, index) => {
            const IconComponent = fellowship.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden h-full ${fellowship.prestigious ? 'ring-2 ring-primary/20' : ''}`}
              >
                {fellowship.prestigious && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-mono">
                    Prestigious
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="font-mono text-lg leading-tight mb-2">
                        {fellowship.name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        <span className="text-primary font-medium">{fellowship.role}</span>
                        <span>•</span>
                        <span>{fellowship.period}</span>
                      </CardDescription>
                    </div>
                    <IconComponent className="h-8 w-8 text-primary ml-2" />
                  </div>
                  
                  <Badge variant={fellowship.prestigious ? "default" : "secondary"} className="w-fit font-mono">
                    {fellowship.type}
                  </Badge>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-6 flex-1">
                    {fellowship.description}
                  </p>
                  
                  <div>
                    <h4 className="font-mono font-semibold mb-3 text-sm">Key Areas:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {fellowship.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-xs">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Achievements Section */}
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="font-mono text-xl flex items-center">
              <Award className="mr-3 text-primary" />
              Notable Achievements
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};