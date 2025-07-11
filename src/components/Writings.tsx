import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const writings = [
  {
    title: "Open Source DeepDive On Fedimint Updates",
    description: "",
    publication: "BTC++",
    type: "Report",
    date: "2025",
    readTime: "8 min read",
    link: "#",
    featured: true
  },
  {
    title: "Bitcoin & Curiosity: A Builder's Perspective",
    description: "Personal reflection on what drives Bitcoin innovation and the importance of curiosity-driven development",
    publication: "Personal Blog",
    type: "Essay",
    date: "2024",
    readTime: "6 min read",
    link: "#",
    featured: false
  },
  {
    title: "Building Grassroots Bitcoin Communities",
    description: "Lessons learned from organizing Bitcoin events and communities in emerging markets",
    publication: "Personal Blog",
    type: "Community Guide",
    date: "2024",
    readTime: "7 min read",
    link: "#",
    featured: false
  }
];

const topics = [
  "Lightning Network Apps",
  "Bitcoin & Curiosity", 
  "Financial Inclusion",
  "Protocol Design",
  "Community Building"
];

export const Writings = () => {
  return (
    <section id="writings" className="py-20 px-6 bg-muted/30 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-center">
          <span className="text-primary">//</span> Writings
        </h2>
        <p className="text-center text-muted-foreground mb-12 font-mono">
          Sharing thoughts on Bitcoin, technology, and building for adoption
        </p>

        {/* Featured Articles */}
        <div className="mb-12">
          <h3 className="text-xl font-bold font-mono mb-6 flex items-center">
            <BookOpen className="mr-3 text-primary" />
            Featured Articles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 blur-sm">
            {writings.filter(article => article.featured).map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="font-mono text-lg leading-tight mb-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <span className="text-primary font-medium">{article.publication}</span>
                        <span>•</span>
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {article.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs font-mono">
                        {article.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs font-mono">
                        {article.readTime}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* All Articles */}
        <div className="mb-12">
          <h3 className="text-xl font-bold font-mono mb-6">All Articles</h3>
          
          <div className="space-y-4 blur-sm">
            {writings.map((article, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-mono font-semibold mb-1">{article.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="text-primary font-medium">{article.publication}</span>
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                        <Badge variant="outline" className="text-xs font-mono">
                          {article.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" asChild>
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Topics */}
        <div>
          <h3 className="text-xl font-bold font-mono mb-6 blur-sm">Writing Topics</h3>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic, index) => (
              <Badge key={index} variant="secondary" className="font-mono">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      {/* Under Development Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center p-8 bg-card/90 rounded-2xl border border-primary/20 shadow-2xl max-w-md mx-4"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-4"
          >
            ⚡
          </motion.div>
          
          <motion.h3
            className="text-2xl font-bold font-mono text-primary mb-2"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Under Development
          </motion.h3>
          
          <p className="text-muted-foreground font-mono text-sm">
            Building something amazing with Bitcoin.<br />
            Check back soon for my latest writings!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};