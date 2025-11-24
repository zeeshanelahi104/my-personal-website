import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink, Video } from "lucide-react";

const projects = [
  {
    title: "YarnWise",
    subtitle: "Final Year Project",
    description:
      "MERN stack inventory system for yarn stock management with role-based access control, analytics reporting, and real-time updates.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Chakra UI",
      "Tailwind CSS",
    ],
    type: "video",
    videoUrl: "YOUR_CLOUDINARY_VIDEO_URL_HERE",
    category: "Full-Stack",
  },
  {
    title: "Saferides Ecosystem",
    subtitle: "USA Client Project",
    description:
      "Suite of 3 interconnected MERN apps (Customer, Driver, Admin) featuring ride scheduling, JWT authentication, and real-time notifications.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Socket.io", "Tailwind CSS"],
    link: "https://saferides.vercel.app",
    type: "live",
    category: "Full-Stack",
  },
  {
    title: "DriversNow",
    subtitle: "USA Client Project",
    description:
      "Driver-focused MERN app for ride management, real-time trip updates, and user interaction.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    link: "https://driversnow.vercel.app",
    type: "live",
    category: "Full-Stack",
  },
  {
    title: "Saferides Admin Panel",
    subtitle: "Confidential",
    description:
      "Admin panel for managing customers, drivers, rides, and analytics. Confidential access for client only.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    type: "private",
    category: "Admin Panel",
  },
  {
    title: "Chaudhary Enterprises",
    subtitle: "Agricultural Inventory",
    description:
      "Next.js inventory system for agricultural products with Redux state management, bilingual support (English/Urdu), and transaction reports.",
    tech: ["Next.js", "Redux Toolkit", "MongoDB", "Tailwind CSS"],
    type: "video",
    videoUrl: "YOUR_CLOUDINARY_VIDEO_URL_HERE",
    category: "Full-Stack",
  },
  {
    title: "MUSK Inventory System",
    subtitle: "Cosmetic Stock Management",
    description:
      "Next.js cosmetic stock management with barcode scanning and automated expiry alerts.",
    tech: ["Next.js", "Redux Toolkit", "MongoDB", "Tailwind CSS"],
    type: "video",
    videoUrl: "YOUR_CLOUDINARY_VIDEO_URL_HERE",
    category: "Full-Stack",
  },
  {
    title: "Custom Utility Tools",
    subtitle: "MERN Stack Tools",
    description:
      "Modular tools including Image Editor, QR Generator, Shareable Links, Deep Links, and VCard with reusable components.",
    tech: ["React", "Node.js", "Express", "REST API", "Tailwind CSS"],
    type: "demo",
    category: "Utility",
  },
  {
    title: "Real Estate Integrations",
    subtitle: "Property Listings",
    description:
      "Custom pages for Real Estate API and Zillow property listings with dynamic data fetching and responsive displays.",
    tech: ["React", "Node.js", "Express", "REST API", "Tailwind CSS"],
    type: "demo",
    category: "Integration",
  },
  // {
  //   title: "Perioxai",
  //   subtitle: "API Integration Platform",
  //   description: "React.js app with Styled Components featuring complex third-party API integrations for streamlined workflows.",
  //   tech: ["React", "Styled Components", "REST API"],
  //   type: "demo",
  //   category: "Frontend"
  // },
  // {
  //   title: "YBRG",
  //   subtitle: "Analytics Dashboard",
  //   description: "React.js application with Material-UI focused on responsive data visualization and dashboard analytics.",
  //   tech: ["React", "Material-UI", "Charts"],
  //   type: "demo",
  //   category: "Frontend"
  // },
  // {
  //   title: "Uprinting",
  //   subtitle: "E-commerce Platform",
  //   description: "MERN stack with Next.js frontend styled with Tailwind CSS for modern UI.",
  //   tech: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
  //   type: "demo",
  //   category: "Full-Stack"
  // },
  {
    title: "Centrix Global",
    subtitle: "IT Services Website",
    description:
      "Next.js static website for IT services with SEO optimization and contact form analytics.",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
    link: "https://centrixglobal.co.uk/",
    type: "live",
    category: "Frontend",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <FolderGit2 className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.type === "video" && (
                      <Video className="w-5 h-5 text-primary" />
                    )}
                    {project.type === "live" && (
                      <ExternalLink className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-primary font-medium">
                    {project.subtitle}
                  </p>
                  <Badge variant="outline" className="w-fit mt-2">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.videoUrl && (
                    <div className="mb-4 rounded-lg overflow-hidden bg-secondary h-40 flex items-center justify-center">
                      <video
                        controls
                        className="w-full h-full object-cover"
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666'%3EVideo%3C/text%3E%3C/svg%3E"
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                  )}

                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-white hover:bg-primary text-black hover:text-white shadow-md"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live Demo
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
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

export default Projects;
