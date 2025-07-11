import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono mb-8 sm:mb-12 text-center">
          <span className="text-primary">//</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Photo */}
          <div className="lg:col-span-1 flex justify-center order-1 lg:order-1">
            <div className="relative group">
              <img 
                src="/uploads/a31a7b7f-b2aa-475e-9252-938cb8ecbaa7.png"
                alt="Anthony Ushie"
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500"></div>
            </div>
          </div>
          
          {/* Content */}
          <Card className="lg:col-span-2 p-6 sm:p-8 md:p-12 order-2 lg:order-2">
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-foreground">
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                I'm a Bitcoiner passionate about real-world adoption. I organize Bitcoin meetups, 
                build grassroots wallets, and explore Lightning tools that reach the last mile. 
                I lead the <span className="text-primary font-medium">iPayBTC RSU Community</span>, 
                speak at events, and participate in protocol-focused hackathons.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Former <span className="text-primary font-medium">Chaincode Labs fellow</span>. 
                Part of the <span className="text-primary font-medium">Btrust Language Pathway Program</span>. 
                I write about Bitcoin and build with curiosity and care.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                My focus is on making Bitcoin accessible to everyone, particularly through mobile-first 
                solutions that work in resource-constrained environments. From USSD Lightning wallets 
                to protocol-level integrations, I'm always exploring new ways to bring Bitcoin to the masses.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};