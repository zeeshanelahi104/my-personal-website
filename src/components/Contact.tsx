import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Vortex } from "@/components/ui/vortex";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden min-h-[700px]">
      <Vortex
        backgroundColor="transparent"
        rangeY={200}
        particleCount={200}
        baseHue={260}
        className="flex items-center justify-center py-24 px-4"
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-heading">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to new opportunities and collaborations. Let's build something amazing together!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardSpotlight
                className="w-full p-8"
                containerClassName="bg-card/40 backdrop-blur-xl border-white/10 hover:border-primary/40 rounded-3xl transition-all duration-500 shadow-2xl"
                spotlightColor="rgba(99, 102, 241, 0.2)"
              >
                <CardContent className="p-0 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <h3 className="text-2xl font-semibold mb-6 text-primary font-heading">Contact Information</h3>

                      <a
                        href="mailto:zeeshanelahi104@gmail.com"
                        className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors border border-primary/20 shadow-sm">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-lg">zeeshanelahi104@gmail.com</span>
                      </a>

                      <a
                        href="tel:+923084931790"
                        className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors border border-primary/20 shadow-sm">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-lg">+92 308 4931790</span>
                      </a>

                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shadow-sm">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-lg">Faisalabad, Punjab, Pakistan</span>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-2xl font-semibold mb-6 text-primary font-heading">Social Links</h3>

                      <div className="space-y-4">
                        <Button
                          variant="outline"
                          className="w-full justify-start h-12 text-lg hover:bg-primary/10 hover:text-primary hover:border-primary/50 rounded-xl"
                          asChild
                        >
                          <a href="https://github.com/zeeshanelahi104" target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 mr-3" />
                            GitHub
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          className="w-full justify-start h-12 text-lg hover:bg-primary/10 hover:text-primary hover:border-primary/50 rounded-xl"
                          asChild
                        >
                          <a href="https://www.linkedin.com/in/zeeshan-elahi-818zl942" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5 mr-3" />
                            LinkedIn
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          className="w-full justify-start h-12 text-lg hover:bg-primary/10 hover:text-primary hover:border-primary/50 rounded-xl"
                          asChild
                        >
                          <a href="https://www.instagram.com/zeeshanelahi104" target="_blank" rel="noopener noreferrer">
                            <Instagram className="w-5 h-5 mr-3" />
                            Instagram
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-primary/20 text-center">
                    <Button
                      size="lg"
                      variant="default"
                      className="min-w-[220px] bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-primary/40 h-12 rounded-xl transition-all duration-300"
                      asChild
                    >
                      <a href="mailto:zeeshanelahi104@gmail.com">
                        Send Me an Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </CardSpotlight>
            </motion.div>
          </div>
        </div>
      </Vortex>
    </section>
  );
};

export default Contact;
