// import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { FolderGit2, ExternalLink, Video } from "lucide-react";
// import { motion } from "framer-motion";
// import { CardSpotlight } from "@/components/ui/card-spotlight";
// import { BackgroundBeams } from "@/components/ui/background-beams";
// import { ProjectGallery } from "./ProjectGallery";
// import { SparklesCore } from "./ui/sparkles";

// const projects = [
//   {
//     id: "yarnwise",
//     title: "YarnWise",
//     subtitle: "Final Year Project",
//     description:
//       "MERN stack inventory system for yarn stock management with role-based access control, analytics reporting, and real-time updates.",
//     tech: [
//       "React",
//       "Node.js",
//       "MongoDB",
//       "Express",
//       "Chakra UI",
//       "Tailwind CSS",
//     ],
//     type: "video",
//     videoUrl: "YOUR_CLOUDINARY_VIDEO_URL_HERE",
//     category: "Full-Stack",
//   },
//   {
//     id: "saferides",
//     title: "Saferides Ecosystem",
//     subtitle: "USA Client Project",
//     description:
//       "Suite of 3 interconnected MERN apps (Customer, Driver, Admin) featuring ride scheduling, JWT authentication, and real-time notifications.",
//     tech: ["React", "Node.js", "MongoDB", "JWT", "Socket.io", "Tailwind CSS"],
//     link: "https://saferides.vercel.app",
//     type: "live",
//     category: "Full-Stack",
//   },
//   {
//     id: "driversnow",
//     title: "DriversNow",
//     subtitle: "USA Client Project",
//     description:
//       "Driver-focused MERN app for ride management, real-time trip updates, and user interaction.",
//     tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
//     link: "https://driversnow.vercel.app",
//     type: "live",
//     category: "Full-Stack",
//   },
//   {
//     id: "saferides-admin",
//     title: "Saferides Admin Panel",
//     subtitle: "Confidential",
//     description:
//       "Admin panel for managing customers, drivers, rides, and analytics. Confidential access for client only.",
//     tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
//     type: "private",
//     category: "Admin Panel",
//   },
//   {
//     id: "chaudhary-enterprises",
//     title: "Chaudhary Enterprises",
//     subtitle: "Agricultural Inventory",
//     description:
//       "Next.js inventory system for agricultural products with Redux state management, bilingual support (English/Urdu), and transaction reports.",
//     tech: ["Next.js", "Redux Toolkit", "MongoDB", "Tailwind CSS"],
//     type: "video",
//     videoUrl: "YOUR_CLOUDINARY_VIDEO_URL_HERE",
//     category: "Full-Stack",
//   },
//   {
//     id: "musk-inventory",
//     title: "MUSK Inventory System",
//     subtitle: "Cosmetic Stock Management",
//     description:
//       "Next.js cosmetic stock management with barcode scanning and automated expiry alerts.",
//     tech: ["Next.js", "Redux Toolkit", "MongoDB", "Tailwind CSS"],
//     type: "video",
//     videoUrl: "YOUR_CLOUDINARY_VIDEO_URL_HERE",
//     category: "Full-Stack",
//   },
//   {
//     id: "utility-tools",
//     title: "Custom Utility Tools",
//     subtitle: "MERN Stack Tools",
//     description:
//       "Modular tools including Image Editor, QR Generator, Shareable Links, Deep Links, and VCard with reusable components.",
//     tech: ["React", "Node.js", "Express", "REST API", "Tailwind CSS"],
//     type: "demo",
//     category: "Utility",
//   },
//   {
//     id: "real-estate",
//     title: "Real Estate Integrations",
//     subtitle: "Property Listings",
//     description:
//       "Custom pages for Real Estate API and Zillow property listings with dynamic data fetching and responsive displays.",
//     tech: ["React", "Node.js", "Express", "REST API", "Tailwind CSS"],
//     type: "demo",
//     category: "Integration",
//   },
//   {
//     id: "centrix-global",
//     title: "Centrix Global",
//     subtitle: "IT Services Website",
//     description:
//       "Next.js static website for IT services with SEO optimization and contact form analytics.",
//     tech: ["Next.js", "Tailwind CSS", "SEO"],
//     link: "https://centrixglobal.co.uk/",
//     type: "live",
//     category: "Frontend",
//   },
// ];

// // Map categories to distinct, appealing colors (Updated for Unified Theme)
// const categoryColorMap = {
//   "Full-Stack": "bg-primary/10 text-primary border-primary/20",
//   "Admin Panel": "bg-accent/10 text-accent border-accent/20",
//   "Utility": "bg-blue-500/10 text-blue-400 border-blue-500/20",
//   "Integration": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
//   "Frontend": "bg-purple-500/10 text-purple-400 border-purple-500/20",
// };

// const getCategoryBadgeClass = (category) => {
//   return categoryColorMap[category] || "bg-secondary text-secondary-foreground border-border";
// };

// const Projects = () => {
//   return (
//     <section id="projects" className="relative py-20 overflow-hidden bg-background">
//       <div className="absolute inset-0 w-full h-full">
//         {/* <BackgroundBeams /> */}
//         <SparklesCore
//           id="tsparticlesfullpage"
//           background="black"
//           minSize={0.6}
//           maxSize={1.4}
//           particleDensity={100}
//           className="w-full h-full"
//           particleColor="#10b981"
//         />
//       </div>
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 0.8 }}
//             className="flex items-center gap-4 mb-16"
//           >
//             <div className="p-3 rounded-xl bg-accent/10 text-accent">
//               <FolderGit2 className="w-10 h-10" />
//             </div>
//             <h2 className="text-5xl font-extrabold tracking-tight">
//               Featured <span className="text-gradient-reverse">Projects</span>
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="h-full"
//               >
//                 <CardSpotlight
//                   className="w-full h-full p-6 flex flex-col"
//                   containerClassName="bg-primary/5 dark:bg-primary/5 backdrop-blur-sm border-primary/20 hover:border-primary/50 h-full"
//                   spotlightColor="rgba(249, 115, 22, 0.3)" // Orange spotlight for projects
//                 >
//                   <CardHeader className="p-0 mb-4">
//                     <div className="flex items-start justify-between mb-2">
//                       <CardTitle className="text-2xl text-foreground group-hover:text-accent transition-colors font-bold">
//                         {project.title}
//                       </CardTitle>
//                       {project.type === "video" && (
//                         <Video className="w-6 h-6 text-accent" />
//                       )}
//                       {project.type === "live" && (
//                         <ExternalLink className="w-6 h-6 text-accent" />
//                       )}
//                     </div>
//                     <p className="text-sm text-primary font-medium">
//                       {project.subtitle}
//                     </p>
//                     <Badge
//                       variant="outline"
//                       className={`w-fit mt-2 font-semibold ${getCategoryBadgeClass(project.category)}`}
//                     >
//                       {project.category}
//                     </Badge>
//                   </CardHeader>

//                   <CardContent className="p-0 flex flex-col h-full">
//                     <p className="text-muted-foreground mb-4 text-sm flex-grow leading-relaxed">
//                       {project.description}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-4 mt-auto">
//                       {project.tech.map((tech, i) => (
//                         <Badge
//                           key={i}
//                           variant="secondary"
//                           className="text-xs font-normal bg-secondary/50 text-secondary-foreground border-white/5"
//                         >
//                           {tech}
//                         </Badge>
//                       ))}
//                     </div>

//                     <div className="mt-auto pt-4 space-y-3">
//                       <ProjectGallery projectId={project.id} projectTitle={project.title} />

//                       {project.link && (
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
//                           asChild
//                         >
//                           <a
//                             href={project.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             View Live Demo
//                             <ExternalLink className="w-4 h-4 ml-2" />
//                           </a>
//                         </Button>
//                       )}
//                     </div>
//                   </CardContent>
//                 </CardSpotlight>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




// app/projects/page.tsx or components/Projects.tsx
"use client";

import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink, Video, Lock, Globe, Shield, Loader2, Images } from "lucide-react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { GalleryCarousel } from "@/components/ui/gallery-carousel";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AuroraBackground } from "@/components/ui/aurora-background";

const projects = [
  {
    id: "yarnwise",
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
    id: "saferides",
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
    id: "driversnow",
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
    id: "saferides-admin",
    title: "Saferides Admin Panel",
    subtitle: "Confidential",
    description:
      "Admin panel for managing customers, drivers, rides, and analytics. Confidential access for client only.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    type: "private",
    category: "Admin Panel",
  },
  {
    id: "chaudhary-enterprises",
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
    id: "musk-inventory",
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
    id: "utility-tools",
    title: "Custom Utility Tools",
    subtitle: "MERN Stack Tools",
    description:
      "Modular tools including Image Editor, QR Generator, Shareable Links, Deep Links, and VCard with reusable components.",
    tech: ["React", "Node.js", "Express", "REST API", "Tailwind CSS"],
    type: "demo",
    category: "Utility",
  },
  {
    id: "real-estate",
    title: "Real Estate Integrations",
    subtitle: "Property Listings",
    description:
      "Custom pages for Real Estate API and Zillow property listings with dynamic data fetching and responsive displays.",
    tech: ["React", "Node.js", "Express", "REST API", "Tailwind CSS"],
    type: "demo",
    category: "Integration",
  },
  {
    id: "centrix-global",
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

// Map categories to distinct, appealing colors
const categoryColorMap = {
  "Full-Stack": "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
  "Admin Panel": "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20",
  "Utility": "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20",
  "Integration": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20",
  "Frontend": "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20",
};

const getCategoryBadgeClass = (category: string) => {
  return categoryColorMap[category as keyof typeof categoryColorMap] ||
    "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80";
};

// Type for project media cache
interface ProjectMediaCache {
  [key: string]: Array<{ url: string; type: "image" | "video" }>;
}

const Projects = () => {
  const [mediaCache, setMediaCache] = useState<ProjectMediaCache>({});
  const [loadingProjects, setLoadingProjects] = useState<string[]>([]);

  // Fetch media for a specific project
  const fetchProjectMedia = async (projectId: string) => {
    if (mediaCache[projectId] || loadingProjects.includes(projectId)) return;

    setLoadingProjects(prev => [...prev, projectId]);

    try {
      const response = await fetch(`https://zeeshan-elahi.vercel.app/api/media/${projectId}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch media for ${projectId}`);
      }

      const data = await response.json();

      // Transform API response
      const formattedData = data.map((item: any) => ({
        url: item.url || item.src,
        type: item.type || (item.url?.includes('.mp4') ? 'video' : 'image'),
      }));

      setMediaCache(prev => ({
        ...prev,
        [projectId]: formattedData
      }));
    } catch (error) {
      console.error(`Error fetching media for ${projectId}:`, error);
      // Set empty array on error
      setMediaCache(prev => ({
        ...prev,
        [projectId]: []
      }));
    } finally {
      setLoadingProjects(prev => prev.filter(id => id !== projectId));
    }
  };

  // Pre-fetch media for first few projects on component mount
  useEffect(() => {
    const initialProjects = projects.slice(0, 3).map(p => p.id);
    initialProjects.forEach(fetchProjectMedia);
  }, []);

  return (
    <section id="projects" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-background">
      <AuroraBackground className="h-full">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 pt-20">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16"
            >
              <div className={cn(
                "p-2 sm:p-3 rounded-xl bg-accent/10 text-accent",
                "w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
              )}>
                <FolderGit2 className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">
                  Featured <span className="text-gradient-reverse">Projects</span>
                </h2>
                <p className="text-muted-foreground mt-1 sm:mt-2 text-sm sm:text-base">
                  A collection of my recent work and client projects
                </p>
              </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {projects.map((project, index) => {
                const projectMedia = mediaCache[project.id] || [];
                console.log(projectMedia, "Project Media");
                const isLoading = loadingProjects.includes(project.id);

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    className="h-full group/card"
                    onMouseEnter={() => !mediaCache[project.id] && fetchProjectMedia(project.id)}
                  >
                    <CardSpotlight
                      className="w-full h-full p-4 sm:p-6 flex flex-col relative z-20"
                      containerClassName={cn(
                        "bg-card/40 backdrop-blur-xl border-white/10",
                        "hover:border-primary/40 h-full transition-all duration-500",
                        "hover:shadow-2xl hover:shadow-primary/10 rounded-3xl"
                      )}
                      spotlightColor="rgba(99, 102, 241, 0.2)"
                    >
                      {/* Card Header */}
                      <CardHeader className="p-0 mb-3 sm:mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors truncate">
                            {project.title}
                          </CardTitle>
                          <div className="flex items-center gap-1">
                            {project.type === "video" && (
                              <Video className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                            )}
                            {project.type === "live" && (
                              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                            )}
                            {project.type === "private" && (
                              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                            )}
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-primary font-medium truncate">
                          {project.subtitle}
                        </p>

                        <Badge
                          variant="outline"
                          className={cn(
                            "w-fit mt-2 font-semibold transition-colors",
                            getCategoryBadgeClass(project.category),
                            "text-xs sm:text-sm px-3 py-1 rounded-full"
                          )}
                        >
                          {project.category}
                        </Badge>
                      </CardHeader>

                      <CardContent className="p-0 flex flex-col h-full">
                        <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm flex-grow leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          {project.tech.slice(0, 4).map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className={cn(
                                "text-xs font-normal bg-secondary/50 text-secondary-foreground border-white/5",
                                "px-1.5 py-0.5 sm:px-2 sm:py-1"
                              )}
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 4 && (
                            <Badge
                              variant="secondary"
                              className={cn(
                                "text-xs font-normal bg-secondary/50 text-secondary-foreground border-white/5",
                                "px-1.5 py-0.5 sm:px-2 sm:py-1"
                              )}
                            >
                              +{project.tech.length - 4}
                            </Badge>
                          )}
                        </div>

                        <div className="mb-4 rounded-2xl overflow-hidden border border-white/5 shadow-inner">
                          {isLoading ? (
                            <div className="aspect-video bg-muted/20 flex flex-col items-center justify-center gap-3">
                              <Loader2 className="w-8 h-8 animate-spin text-primary/50" />
                              <p className="text-xs text-muted-foreground">Loading showcase...</p>
                            </div>
                          ) : projectMedia.length > 0 ? (
                            <GalleryCarousel
                              items={projectMedia}
                              title={project.title}
                              showControls
                              showCounter
                              autoPlay={false}
                              className="aspect-video"
                            />
                          ) : (
                            <div className="aspect-video bg-muted/10 flex flex-col items-center justify-center gap-2">
                              <Images className="w-8 h-8 opacity-20 text-primary" />
                              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Preview Unavailable</p>
                            </div>
                          )}
                        </div>

                        <div className="mt-auto pt-3 sm:pt-4 flex items-center gap-3">
                          {project.link && (
                            <Button
                              variant="default"
                              size="sm"
                              className={cn(
                                "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground",
                                "shadow-glow hover:shadow-primary/40 transition-all duration-300",
                                "text-xs sm:text-sm h-10 rounded-xl"
                              )}
                              asChild
                            >
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Live Demo
                                <ExternalLink className="w-3.5 h-3.5 ml-2" />
                              </a>
                            </Button>
                          )}

                          {project.type === "private" && (
                            <div className="flex-1 text-center p-2.5 bg-muted/50 rounded-xl border border-white/5">
                              <p className="text-[10px] sm:text-xs text-muted-foreground flex items-center justify-center gap-1.5 uppercase tracking-wider font-semibold">
                                <Lock className="w-3 h-3 text-accent" />
                                Confidential
                              </p>
                            </div>
                          ) || project.type === "video" && !project.link && (
                            <div className="flex-1 text-center p-2.5 bg-muted/50 rounded-xl border border-white/5">
                              <p className="text-[10px] sm:text-xs text-muted-foreground flex items-center justify-center gap-1.5 uppercase tracking-wider font-semibold">
                                <Video className="w-3 h-3 text-primary" />
                                Video Showcase
                              </p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </CardSpotlight>
                  </motion.div>
                );
              })}
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 sm:mt-16 text-center"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 px-8"
              >
                View All Projects
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.div> */}
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Projects;