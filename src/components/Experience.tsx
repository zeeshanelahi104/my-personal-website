import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

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
    period: "During Internship",
    achievements: [
      "Gained practical experience in HTML, CSS, JavaScript, and React.js",
      "Contributed to UI components and responsive layouts under mentorship",
      "Strengthened understanding of modern web standards and Git workflows",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-2 w-fit"
                    >
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary mt-1">▹</span>
                        <span className="text-muted-foreground">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
