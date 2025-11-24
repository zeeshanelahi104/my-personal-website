import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "National Textile University, Faisalabad",
    period: "2020 – 2024",
    icon: "🎓"
  },
  {
    degree: "Intermediate (F.Sc Pre-Engineering)",
    institution: "KIPS College, Faisalabad",
    period: "2017 – 2019",
    icon: "📚"
  },
  {
    degree: "Matriculation (Science)",
    institution: "Sacred Angel School and College, Faisalabad",
    period: "2015 – 2017",
    icon: "📖"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{edu.icon}</span>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
