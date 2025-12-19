import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Meteors } from "@/components/ui/meteors";

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Levelup Marketplace, Faisalabad",
    period: "Oct 2024 – Present",
    achievements: [
      "Spearheaded the integration of 100+ third-party app integrations including Airtable, Asana, Stripe, Jira, WooCommerce, and Trello",
      "Engineered and delivered 15+ custom marketplace application pages for Real Estate, Zillow, and Bytemine",
      "Mastered the GoHighLevel (GHL) ecosystem, implementing nearly 120+ API endpoints",
      "Developed 10+ reusable widgets (Review Carousel, Store Locator, Content Grid) for the GHL platform",
      "Built 10+ custom utility tools with React frontends and Node.js/Express backends",
    ],
  },
  {
    title: "Junior MERN Stack Developer",
    company: "V3 Solution",
    period: "Nov 2023 – Sep 2024",
    achievements: [
      "Designed and developed scalable, high-performance web applications using the MERN stack",
      "Implemented RESTful APIs and integrated third-party services",
      "Collaborated with cross-functional teams to deliver high-quality software solutions on time",
      "Conducted code reviews and optimized application performance",
      "Participated in all phases of the software development lifecycle",
    ],
  },
  {
    title: "Web Developer (Intern)",
    company: "V3 Solution",
    period: "Sep 2023 – Oct 2023",
    achievements: [
      "Gained practical experience in HTML, CSS, JavaScript, and React.js",
      "Contributed to UI components and responsive layouts under mentorship",
      "Strengthened understanding of modern web standards and Git workflows",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 overflow-hidden bg-background">
      {/* Meteors Background */}
      <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none opacity-30">
        <Meteors number={20} className="opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Briefcase className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight font-heading">
              Work <span className="text-gradient">History</span>
            </h2>
          </motion.div>

          {/* Timeline Structure for Experience */}
          <div className="relative space-y-12">
            {/* Vertical Line for Timeline effect */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20 z-0 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} w-full`}
              >
                {/* Timeline Dot/Marker */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10 hidden md:flex items-center justify-center shadow-glow"></div>

                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'pr-8' : 'pl-8'} relative`}>
                  <CardSpotlight
                    className="w-full p-6"
                    containerClassName="bg-primary/5 dark:bg-primary/5 backdrop-blur-sm border-primary/20 hover:border-primary/50"
                    spotlightColor="rgba(16, 185, 129, 0.3)"
                  >
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl mb-2 font-bold text-foreground">
                            {exp.title}
                          </CardTitle>
                          <p className="text-lg text-primary font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-2 w-fit text-sm bg-primary/10 text-primary border-primary/20"
                        >
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-accent mt-1.5 w-1.5 h-1.5 min-w-1.5 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </CardSpotlight>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default Experience;