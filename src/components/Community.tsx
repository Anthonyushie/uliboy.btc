import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Mic, Award } from "lucide-react";

const events = [
  {
    title: "Halving Day Campus Event",
    description: "Led a campus-wide Bitcoin halving celebration and educational event",
    organization: "iPayBTC RSU",
    type: "Physical Event",
    attendees: "30+",
    icon: Calendar,
    highlight: true
  },
  {
    title: "Bitcoin Onboarding Sessions",
    description: "Hosted physical and virtual sessions teaching Bitcoin basics",
    organization: "iPayBTC RSU",
    type: "Workshop Series",
    attendees: "20+",
    icon: Users,
    highlight: false
  },
  {
    title: "Gen Bitcoiners Virtual Event",
    description: "Co-hosted with Autumn Domingo & Isaana Misra",
    organization: "Gen Bitcoiners",
    type: "Virtual Panel",
    attendees: "30+",
    icon: Mic,
    highlight: true
  }
];

const leadership = [
  {
    title: "Community Lead",
    organization: "iPayBTC RSU",
    description: "Leading Bitcoin education and adoption initiatives on campus",
    period: "2024 - Present"
  },
  {
    title: "Speaker & Host",
    organization: "Various Bitcoin Events",
    description: "Speaking at Events and hosting educational sessions",
    period: "2024 - Present"
  },
  {
    title: "Event Organizer / Contributor",
    organization: "BitdevsPH",
    description: "Organizing and managing Bitcoin-focused technical meetups",
    period: "2025 - Present"
  }
  
];

export const Community = () => {
  return (
    <section id="community" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-center">
          <span className="text-primary">//</span> Community & Leadership
        </h2>
        <p className="text-center text-muted-foreground mb-12 font-mono">
          Building Bitcoin communities from the ground up
        </p>
        
        {/* Featured Event Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold font-mono mb-6 text-center">
            <span className="text-primary">Bitcoin Halving Day Campus Event 2024</span>
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Leading Bitcoin education and community building at the university level. 
            This halving event brought together students and educators to explore Bitcoin's impact.
          </p>
          
          {/* Photo Gallery with Animations */}
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="w-full overflow-hidden rounded-xl shadow-2xl group">
              <img 
                src="/uploads/6e82425a-8332-466e-a913-ffd1ed0c0892.png"
                alt="iPayBTC team group photo at halving event"
                className="w-full h-64 md:h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            
            {/* Grid Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/uploads/bc779967-9785-466e-b114-4390c881ad06.png"
                  alt="Anthony speaking at Bitcoin halving event"
                  className="w-full h-48 md:h-56 object-cover transform group-hover:scale-110 transition-all duration-500 ease-out"
                />
              </div>
              
              <div className="group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/uploads/99140c2a-29c2-4491-bb24-ac3681821a3f.png"
                  alt="Students attending Bitcoin education session"
                  className="w-full h-48 md:h-56 object-cover transform group-hover:scale-110 transition-all duration-500 ease-out"
                />
              </div>
              
              <div className="group overflow-hidden rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
                <img 
                  src="/uploads/e4dbbc2b-404f-4e72-8866-c18335502036.png"
                  alt="Bitcoin education session in progress"
                  className="w-full h-48 md:h-56 object-cover transform group-hover:scale-110 transition-all duration-500 ease-out"
                />
              </div>
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/uploads/9eac156c-3bb3-4e39-8d18-ed2a5dc99d86.png"
                  alt="Engaged audience learning about Bitcoin"
                  className="w-full h-40 md:h-48 object-cover transform group-hover:scale-110 transition-all duration-500 ease-out"
                />
              </div>
              
              <div className="group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/uploads/377f0f9b-7cfc-4444-aa71-06a648b4507e.png"
                  alt="Bitcoin workshop participants"
                  className="w-full h-40 md:h-48 object-cover transform group-hover:scale-110 transition-all duration-500 ease-out"
                />
              </div>
              
              <div className="group overflow-hidden rounded-lg shadow-lg sm:col-span-2 lg:col-span-1">
                <img 
                  src="/uploads/556a92eb-8468-4991-80fb-d15c16481fd3.png"
                  alt="iPayBTC team members at campus event"
                  className="w-full h-40 md:h-48 object-cover transform group-hover:scale-110 transition-all duration-500 ease-out"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Card className="inline-block p-4 md:p-6 bg-card/50">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs md:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span>40+ Students Reached</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span>Campus-wide Impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span>iPayBTC Community</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Events Section */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold font-mono mb-8 flex items-center justify-center md:justify-start">
            <Calendar className="mr-3 text-primary" />
            Events & Speaking
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden ${event.highlight ? 'ring-2 ring-primary/20' : ''}`}
                >
                  {event.highlight && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-mono">
                      Featured
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="font-mono text-lg mb-2">{event.title}</CardTitle>
                        <CardDescription>{event.organization}</CardDescription>
                      </div>
                      <IconComponent className="h-6 w-6 text-primary ml-2" />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs font-mono">
                        {event.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs font-mono">
                        {event.attendees} attendees
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Leadership Section */}
        <div>
          <h3 className="text-2xl font-bold font-mono mb-8 flex items-center">
            <Award className="mr-3 text-primary" />
            Leadership Roles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((role, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="font-mono text-lg">{role.title}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {role.organization}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {role.description}
                  </p>
                  <Badge variant="outline" className="font-mono text-xs">
                    {role.period}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};