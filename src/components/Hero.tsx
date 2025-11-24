import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import AnimatedIntro from "./AnimatedIntro";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Zeeshan Elahi
              </h1>
              <AnimatedIntro />
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Software Engineer with{" "}
              <span className="text-primary font-semibold">
                2+ years of professional experience
              </span>{" "}
              as a MERN Stack Developer. Expertise in designing, developing, and
              scaling full-stack web applications using{" "}
              <span className="text-primary font-semibold">
                React.js, Next.js, Node.js, Express.js, and MongoDB
              </span>
              .
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground justify-center lg:justify-start flex-wrap">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Faisalabad, Punjab</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:zeeshanelahi104@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  zeeshanelahi104@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+92 308 4931790</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                size="icon"
                asChild
                className="bg-white hover:bg-primary text-black hover:text-white shadow-md"
              >
                <a
                  href="https://github.com/zeeshanelahi104"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                asChild
                className="bg-white hover:bg-primary text-black hover:text-white shadow-md"
              >
                <a
                  href="https://www.linkedin.com/in/zeeshan-elahi-818zl942"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                asChild
                className="bg-white hover:bg-primary text-black hover:text-white shadow-md"
              >
                <a
                  href="https://www.instagram.com/zeeshanelahi104"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <Button
                size="lg"
                className="shadow-lg hover:shadow-xl transition-shadow"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white hover:bg-primary text-black hover:text-white shadow-md"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right: Enhanced Image Section */}
          <div className="flex-shrink-0">
            <div className="relative group">
              {/* Glow Background */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-700" />

              {/* Decorative Dots */}
              <span className="absolute -right-4 top-10 w-3 h-3 bg-primary rounded-full shadow-lg animate-pulse" />
              <span className="absolute left-6 -bottom-4 w-2 h-2 bg-accent rounded-full shadow-md animate-bounce" />

              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/25 shadow-2xl">
                <img
                  src="/public/images/profileImage.png"
                  alt="Zeeshan Elahi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Outer Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/10 blur-2xl opacity-40" />

              {/* Status Badge */}
              <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
