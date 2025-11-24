import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <Target className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Objective</h2>
          </div>

          <Card className="shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in-up">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Software Engineer with <span className="text-primary font-semibold">2+ years of professional experience</span> as a MERN Stack Developer. 
                Expertise in designing, developing, and scaling full-stack web applications using{" "}
                <span className="text-primary font-semibold">React.js, Next.js, Node.js, Express.js, and MongoDB</span>. 
                Proven ability in third-party API integration, requirement analysis, and delivering high-quality, scalable solutions 
                through effective teamwork and project planning. Combines strong academic foundation with practical experience to build 
                applications that exceed both technical requirements and user expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
