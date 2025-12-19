import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";
import AnimatedIntro from "./AnimatedIntro";
import { motion } from "framer-motion";
import { MeshGradient } from "@/components/ui/mesh-gradient";
import { Vortex } from "@/components/ui/vortex";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Vortex
          backgroundColor="transparent"
          rangeY={100}
          particleCount={300}
          baseHue={250}
          className="flex items-center justify-center w-full h-full"
        />
      </div>
      <MeshGradient />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new opportunities
              </motion.div>

              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                  Hi, I'm
                </h2>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-[1.1] font-heading">
                  Zeeshan <span className="text-primary italic">Elahi</span>
                </h1>
                <div className="h-12 md:h-16">
                  <AnimatedIntro />
                </div>
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Software Engineer with <span className="text-foreground font-medium">2+ years of experience</span> in
              <span className="text-foreground font-medium"> MERN Stack</span> development, crafting scalable and
              user-centric web applications with a focus on clean architecture and performance.
            </p>


            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full group" asChild>
                <a href="#projects">
                  Explore My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
              {[
                { icon: Github, href: "https://github.com/zeeshanelahi104" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/zeeshan-elahi-818zl942" },
                { icon: Instagram, href: "https://www.instagram.com/zeeshanelahi104" },
                { icon: Mail, href: "mailto:zeeshanelahi104@gmail.com" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -4 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[40px] rotate-6 blur-2xl animate-pulse-slow" />
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 to-primary/20 rounded-[40px] -rotate-6 blur-2xl animate-pulse" />

              <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card/30 backdrop-blur-xl">
                <img
                  src="/images/profileImage.png"
                  alt="Zeeshan Elahi"
                  className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Status info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-card border border-primary/20 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="w-3 h-3 bg-primary rounded-full animate-ping" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Based in</p>
                    <p className="text-sm font-semibold">Pakistan</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
