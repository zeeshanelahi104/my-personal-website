import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
            I'm always open to new opportunities and collaborations
          </p>

          <Card className="shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                  
                  <a 
                    href="mailto:zeeshanelahi104@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>zeeshanelahi104@gmail.com</span>
                  </a>

                  <a 
                    href="tel:+923084931790"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>+92 308 4931790</span>
                  </a>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-3 rounded-lg bg-secondary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>Faisalabad, Punjab, Pakistan</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Social Links</h3>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground hover:border-primary" 
                    asChild
                  >
                    <a href="https://github.com/zeeshanelahi104" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground hover:border-primary" 
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/zeeshan-elahi-818zl942" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground hover:border-primary" 
                    asChild
                  >
                    <a href="https://www.instagram.com/zeeshanelahi104" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5 mr-3" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow" asChild>
                  <a href="mailto:zeeshanelahi104@gmail.com">
                    Send Me an Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
