import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, BookOpen, Github, Palette, Trophy } from "lucide-react";

const interests = [
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Competitive esports enthusiast (MOBA/FPS games)"
  },
  {
    icon: BookOpen,
    title: "Reading",
    description: "Tech blogs, software architecture, and Holy Quran"
  },
  {
    icon: Github,
    title: "Open Source",
    description: "Contributing to dev tools, hackathons, and documentation"
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX prototyping in Figma for side projects"
  },
  {
    icon: Trophy,
    title: "Sports",
    description: "Badminton, Snooker and cricket player"
  }
];

const Interests = () => {
  return (
    <section id="interests" className="py-5 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
            Interests & Hobbies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-block p-4 rounded-full bg-gradient-primary group-hover:animate-glow">
                    <interest.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                  <p className="text-muted-foreground text-sm">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
