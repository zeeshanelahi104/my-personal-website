import { User } from "lucide-react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { WavyBackground } from "@/components/ui/wavy-background";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-background">
      <WavyBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <User className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider uppercase">Behind the Code</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
              My Technical <span className="text-primary italic">Objective</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CardSpotlight
              className="w-full p-8 md:p-12"
              containerClassName="bg-card/40 backdrop-blur-xl border-white/10 hover:border-primary/30 transition-all duration-500 rounded-3xl"
              spotlightColor="rgba(99, 102, 241, 0.15)"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-6">
                  <p className="text-xl text-muted-foreground leading-relaxed font-light">
                    Software Engineer with <span className="text-foreground font-semibold">2+ years of professional experience</span> as a MERN Stack Developer.
                  </p>
                  <p className="text-lg text-muted-foreground/80 leading-relaxed">
                    I specialize in architecting high-performance digital solutions using
                    <span className="text-foreground font-medium px-2 py-1 bg-primary/5 rounded mx-1 font-heading">React.js</span>,
                    <span className="text-foreground font-medium px-2 py-1 bg-primary/5 rounded mx-1 font-heading">Next.js</span>,
                    <span className="text-foreground font-medium px-2 py-1 bg-primary/5 rounded mx-1 font-heading">Node.js</span>, and
                    <span className="text-foreground font-medium px-2 py-1 bg-primary/5 rounded mx-1 font-heading">MongoDB</span>.
                  </p>
                  <p className="text-lg text-muted-foreground/80 leading-relaxed">
                    My approach combines a deep technical foundation with a passion for
                    <span className="text-primary italic font-heading">user-centric design</span>, ensuring that every
                    line of code contributes to a seamless and impactful experience.
                  </p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-4">
                  {[
                    { label: "Experience", value: "2+ Years" },
                    { label: "Education", value: "BSCS Graduate" },
                    { label: "Status", value: "Active" }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                      <p className="text-lg font-bold text-foreground font-heading">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
