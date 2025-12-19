import { CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SparklesCore } from "@/components/ui/sparkles";

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
    <section id="education" className="relative py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="sparkles-education"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#6366f1"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
              Education <span className="text-primary italic">Journey</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <CardSpotlight
                  className="w-full p-8"
                  containerClassName="bg-card/40 backdrop-blur-xl border-white/10 hover:border-primary/40 rounded-[2rem] transition-all duration-500 shadow-xl"
                  spotlightColor="rgba(99, 102, 241, 0.15)"
                >
                  <CardHeader className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-4xl shadow-inner">
                        {edu.icon}
                      </div>
                      <div className="flex-1 space-y-2">
                        <CardTitle className="text-2xl font-bold text-foreground font-heading tracking-tight">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-lg text-primary/80 font-medium">{edu.institution}</p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="w-fit flex items-center gap-2 bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm font-semibold rounded-full"
                      >
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
