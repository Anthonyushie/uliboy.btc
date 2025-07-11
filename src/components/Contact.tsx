import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, Calendar, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    name: "Twitter/X",
    handle: "@Uli_boy1",
    description: "Follow for Bitcoin builds and hot takes",
    icon: Twitter,
    link: "https://twitter.com/Uli_boy1",
    primary: true
  },
  {
    name: "GitHub",
    handle: "anthonyushie",
    description: "Check out my open-source contributions",
    icon: Github,
    link: "https://github.com/Anthonyushie",
    primary: true
  },
  {
    name: "Email",
    handle: "anthonytwan75official@gmail.com",
    description: "For collaborations and opportunities",
    icon: Mail,
    link: "mailto:anthonytwan75official@gmail.com",
    primary: false
  },
  {
    name: "Calendar",
    handle: "Schedule a chat",
    description: "Book time for Bitcoin discussions",
    icon: Calendar,
    link: "#",
    primary: false
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-center">
          <span className="text-primary">//</span> Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 font-mono">
          Let's build Bitcoin together
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-all duration-200 cursor-pointer group ${
                  method.primary ? 'ring-2 ring-primary/20 hover:ring-primary/40' : ''
                }`}
              >
                <a 
                  href={method.link} 
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block h-full"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="font-mono text-lg mb-1">
                          {method.name}
                        </CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {method.handle}
                        </CardDescription>
                      </div>
                      <IconComponent className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </CardContent>
                </a>
              </Card>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <Card className="text-center bg-card/50">
          <CardContent className="p-8">
            <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold font-mono mb-2">
              Interested in collaborating?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're working on Bitcoin adoption, Lightning Network applications, 
              or building tools for the unbanked, I'd love to hear from you. Let's explore 
              how we can work together to advance Bitcoin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-mono" asChild>
                <a href="mailto:anthonytwan75official@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send me an email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="font-mono" asChild>
                <a href="https://twitter.com/Uli_boy1" target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2 h-5 w-5" />
                  DM on Twitter
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};