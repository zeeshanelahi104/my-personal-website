import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Code } from "lucide-react";
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiSharp, SiPhp,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiHtml5, SiCss3,
  SiTailwindcss, SiBootstrap, SiGraphql, SiPostgresql,
  SiMongodb, SiMysql, SiOracle, SiFirebase,
  SiGit, SiGithub, SiFigma, SiCanva, SiTableau, SiPostman,
  SiVercel, SiRender, SiAmazon
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 95, Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", level: 85, Icon: SiTypescript, color: "#3178C6" },
      { name: "Python", level: 70, Icon: SiPython, color: "#3776AB" },
      { name: "C/C++", level: 65, Icon: SiCplusplus, color: "#00599C" },
      { name: "C#", level: 60, Icon: SiSharp, color: "#239120" },
      { name: "PHP", level: 50, Icon: SiPhp, color: "#777BB4" }
    ]
  },
  {
    title: "Web Development",
    technologies: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress, color: "#000000" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
      { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 90, Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", level: 70, Icon: SiMysql, color: "#4479A1" },
      { name: "Oracle", level: 70, Icon: SiOracle, color: "#F80000" },
      { name: "Firebase", level: 65, Icon: SiFirebase, color: "#FFCA28" }
    ]
  },
  {
    title: "Tools & Technologies",
    tools: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#181717" },
      { name: "VS Code", Icon: Code2, color: "#007ACC" },
      { name: "Visual Studio", Icon: Code, color: "#5C2D91" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
      { name: "Canva", Icon: SiCanva, color: "#00C4CC" },
      { name: "Power BI", Icon: Code2, color: "#F2C811" },
      { name: "Tableau", Icon: SiTableau, color: "#E97627" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", Icon: SiVercel, color: "#000000" },
      { name: "Render", Icon: SiRender, color: "#46E3B7" },
      { name: "AWS", Icon: SiAmazon, color: "#FF9900" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <Code2 className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
                  
                  {category.skills && (
                    <div className="space-y-6">
                      {category.skills.map((skill, i) => (
                        <div key={i}>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <skill.Icon 
                                className="w-10 h-10 transition-transform hover:scale-110" 
                                style={{ color: skill.color }}
                              />
                              <span className="font-medium text-lg">{skill.name}</span>
                            </div>
                            <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                          </div>
                          <div className="h-3 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {category.technologies && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {category.technologies.map((tech, i) => (
                        <div 
                          key={i} 
                          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105 group"
                        >
                          <tech.Icon 
                            className="w-12 h-12 transition-transform group-hover:scale-110" 
                            style={{ color: tech.color }}
                          />
                          <span className="text-sm font-medium text-center">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {category.tools && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {category.tools.map((tool, i) => (
                        <div 
                          key={i} 
                          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105 group"
                        >
                          <tool.Icon 
                            className="w-12 h-12 transition-transform group-hover:scale-110" 
                            style={{ color: tool.color }}
                          />
                          <span className="text-sm font-medium text-center">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
