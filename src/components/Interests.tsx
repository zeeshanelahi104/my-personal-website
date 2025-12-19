import { CardContent } from "@/components/ui/card";
import { Gamepad2, BookOpen, Github, Palette, Trophy, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FluidBackground } from "@/components/ui/fluid-background";

const interests = [
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Competitive esports enthusiast (MOBA/FPS games)",
    color: "text-accent"
  },
  {
    icon: BookOpen,
    title: "Reading",
    description: "Tech blogs, software architecture, and Holy Quran",
    color: "text-primary"
  },
  {
    icon: Github,
    title: "Open Source",
    description: "Contributing to dev tools, hackathons, and documentation",
    color: "text-accent"
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX prototyping in Figma for side projects",
    color: "text-primary"
  },
  {
    icon: Trophy,
    title: "Sports",
    description: "Badminton, Snooker and cricket player",
    color: "text-accent"
  },
];

const Interests = () => {
  return (
    <section id="interests" className="relative py-24 overflow-hidden bg-background">
      <FluidBackground className="opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
              Interests & <span className="text-primary italic">Hobbies</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full group"
              >
                <CardSpotlight
                  className="w-full h-full p-8"
                  containerClassName="bg-card/40 backdrop-blur-xl border-white/10 hover:border-primary/40 rounded-3xl transition-all duration-500 shadow-xl h-full"
                  spotlightColor="rgba(249, 115, 22, 0.1)"
                >
                  <CardContent className="p-0 text-center flex flex-col items-center justify-center h-full space-y-6">
                    <div className={`p-6 rounded-2xl bg-primary/5 border border-primary/10 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-inner`}>
                      <interest.icon className={`w-10 h-10 ${interest.color}`} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground font-heading">{interest.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{interest.description}</p>
                    </div>
                  </CardContent>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
