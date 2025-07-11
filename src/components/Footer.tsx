import { Github, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-mono font-bold text-lg text-primary mb-4">
              Anthony Ushie
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building at the edges of Bitcoin adoption — from USSD wallets to protocol-level integrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#writings" className="text-muted-foreground hover:text-primary transition-colors">
                  Writings
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Anthonyushie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/Uli_boy1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:anthonytwan75official@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground font-mono">
            © {currentYear} Anthony Ushie. Built with ❤.
          </p>
        </div>
      </div>
    </footer>
  );
};