// "use client";
// import PageLayout from "@/components/PageLayout";
// import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
// import { Briefcase, Calendar, GraduationCap, User } from "lucide-react";
// import React from "react";
// import { motion } from "motion/react";
// import { Badge } from "@/components/ui/badge";

// const tabMenu = [
//   { title: "Experience", value: "experience", icon: Briefcase },
//   { title: "Education", value: "education", icon: GraduationCap },
//   { title: "About me", value: "about", icon: User },
// ];

// const tabsContent = {
//   experience: {
//     title: "Professional Experience",
//     items: [
//       {
//         role: "Fullstack Developer",
//         Description:
//           "I learnt Fullstack Development with experience of building different websites and web applications involving the use of different technologies such as Next.js, TypeScript, JavaScript, Tailwind CSS, HTML.",
//         highlights: ["React", "Next.js", "TypeScript","Tailwind CSS", "Team Leasdership"],
//       },
//       {
//         role: "Frontend Developer",
//         Description:
//           "I learntFrontend Developer by building websites and web applications. I specialize in HTML, CSS, and JavaScript.",
//         highlights: ["HTML", "CSS", "JavaScript", "Team Leasdership"],
//       },
//       {
//         role: "OOP Developer",
//         Description:
//           "OOP Developer woorking with C, C++, C# and Python. I have experience in building different projects and applications.",
//         highlights: ["C", "C++", "C# (basic)", "Python (Intermediate)"],
//       },
//     ],
//   },

//   education: {
//     title: "Educational Background",
//     items: [
//       {
//         degree: "Bachelors of Computer Science",
//         period: "Present-2027",
//         Description:
//           "Currently persuing bachelors in CS and Robusting my skills in the emerging field of Computer Science and learning new technologies",
//         highlights: [
//           "Programming Fundamental","ICT", "Assembly Language", "Discrete Structures", "Digital Logic Design", "Calculus & Analytical Geometry", "Linear Algebra", "Applied Physics" 
//         ],
//       },
//       {
//         degree: "Intermediate in Computer Science",
//         instituation: "Govt. Graduate College",
//         period: "2021 - 2023",
//         Description:
//           "Started building my base in the emerging field of computer science",
//         highlights: [
//           "A+ Grade",
//           "Stood at 1st position in the class",
//           "Topper of the college",
//           "One of the best Students of the year",
//         ],
//       },
//       {
//         degree: "Matriculation in Biology",
//         instituation: "Govt. Girls MC School",
//         period: "2019 - 2021",
//         Description:
//           "Learnt a lot about different branches of Science such as Biology, Chemistry,Mathematics, Physics and many others",
//         highlights: [
//           "A+ Grade",
//           "Topper of the school",
//           "One of the best Students of the year",
//         ],
//       },
//     ],
//   },

//   about: {
//     title: "About Me",
//     bio: "Passionate software developer with over 1 year of experience in building modern websites and web applications. I specialize in HTML, CSS, and JavaScript. I am a quick learner and a team player who is always looking to grow and improve my skills.",
//     interests: [
//       "Software Development",
//       "Web Development",
//       "Open Source Contribution",
//       "Mechine Learning",
//       "Team Leadership",
//       "Artificial Intelligence",
//       "Ethetical Hacking",
//     ],
//     Languages: [
//       "Urdu (Native)",
//       "Punjabi (Native)",
//       "English (Professional level)",
//       "Hindi (Intermediate)",
//       "Arabic(Intermediate)",
//     ],
//   },
// };

// const resumePage = () => {
//   return (
//     <div className="flex flex-col justify-center py-10">
//       <PageLayout>
//         <Tabs
//           defaultValue="experience"
//           className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
//         >
//           <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
//             {tabMenu?.map((item) => (
//               <TabsTrigger
//                 key={item?.value}
//                 value={item?.value}
//                 className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-lightSky hover:bg-lightSky/60 text-xs sm:text-sm"
//               >
//                 <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
//                   <item.icon className="w-4 h-4 md:h-5 md:w-5" />
//                   {item?.title}
//                 </div>
//               </TabsTrigger>
//             ))}
//           </TabsList>

//           <div className="flex-1 min-h[400px] ">
//             <TabsContent value="experience">
//               <motion.h2
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-2xl font-bold mb-6 text-lightSky"
//               >
//                 {tabsContent.experience.title}
//               </motion.h2>

//               <div className="space-y-6 ">
//                 {tabsContent?.experience?.items.map((item, index) => (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1 * index }}
//                     key={index}
//                     className="border rounded-lg border-lightSky/20 p-6 hover:border-lightSky/30 hover:bg-lightSky/5 "
//                   >
//                     <div className="flex justify-between items-start mb-4">
//                       <div className="flex items-start justify-between mb-4">
//                         <div>
//                           <h3 className="text-lg font-semibold">
//                             {item?.role}
//                           </h3>
//                         </div>
//                       </div>
//                     </div>
//                     <p className="mb-4 text-white">{item?.Description}</p>

//                     <div className="flex flex-wrap gap-2">
//                       {item?.highlights.map((highlight, i) => (
//                         <Badge key={i} variant="secondary">
//                           {highlight}
//                         </Badge>
//                       ))}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="education">
//               <motion.h2
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-2xl font-bold mb-6 text-lightSky"
//               >
//                 {tabsContent.education.title}
//               </motion.h2>

//               <div className="space-y-6 ">
//                 {tabsContent?.education?.items.map((item, index) => (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1 * index }}
//                     key={index}
//                     className="border rounded-lg border-lightSky/20 p-6  hover:border-lightSky/30 hover:bg-lightSky/5 "
//                   >
//                     <div className="flex justify-between items-start mb-4">
//                       <div className="flex items-start justify-between mb-4">
//                         <div>
//                           <h3 className="text-lg font-semibold">
//                             {item?.degree}
//                           </h3>
//                           <p className="text-muted-foreground">
//                             {item?.instituation}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-center text-muted-foreground">
//                         <Calendar className="h-4 w-4 mr-2" />
//                         {item?.period}
//                       </div>
//                     </div>
//                     <p className="mb-4 text-white">{item?.Description}</p>

//                     <div className="flex flex-wrap gap-2">
//                       {item?.highlights.map((highlight, i) => (
//                         <Badge key={i} variant="secondary">
//                           {highlight}
//                         </Badge>
//                       ))}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="about">
//                 <motion.h2
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-2xl font-bold mb-6 text-lightSky"
//                 >
//                   {tabsContent.about.title}
//                 </motion.h2>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="border rounded-lg border-lightSky/20 p-6"
//                 >
//                   <p className="mb-6 text-lg">{tabsContent.about.bio}</p>
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="text-lg font-semibold mb-2">Interests</h3>
//                       <div className="flex flex-wrap gap-2">
//                         {tabsContent.about.interests.map((interest, i) => (
//                           <Badge key={i} variant="secondary">
//                             {interest}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold mb-2">Languages</h3>
//                       <div className="flex flex-wrap gap-2">
//                         {tabsContent.about.Languages.map((language, i) => (
//                           <Badge key={i} variant="secondary">
//                             {language}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//             </TabsContent>
//           </div>
//         </Tabs>
//       </PageLayout>
//     </div>
//   );
// };

// export default resumePage;



"use client";
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import { Briefcase, Calendar, GraduationCap, User, Code, Database, Wrench } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: User },
  // { title: "Projects", value: "projects", icon: Code },
];

const tabsContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "MERN Stack Developer",
        company: "Xavier Tech, Faisalabad",
        period: "Oct 2024 - Present",
        description: [
          "Leading third-party API integrations for enhanced functionality",
          "Developing responsive UIs with React.js and scalable backends with Node.js/MongoDB",
          "Collaborating across full MERN stack for end-to-end solutions",
          "Optimizing team workflows for efficient project delivery"
        ],
        highlights: ["React.js", "Next.js", "Node.js", "MongoDB", "API Integration", "Team Leadership"],
      },
      {
        role: "Junior MERN Stack Developer",
        company: "V3 Solution",
        period: "Sep 2023 - Sep 2024",
        description: [
          "Built scalable web applications with MERN stack",
          "Implemented RESTful APIs and third-party service integrations",
          "Conducted code reviews and performance optimizations",
          "Participated in full SDLC from requirements to deployment"
        ],
        highlights: ["Express.js", "Redux", "Firebase", "JWT Auth", "Code Review", "SDLC"],
      },
    ],
  },

  education: {
    title: "Education Background",
    items: [
      {
        degree: "Bachelor of Science in Software Engineering",
        institution: "National Textile University, Faisalabad",
        period: "2020 - 2024",
        description: [
          "Specialized in software architecture and web technologies",
          "Final Year Project: YarnWise (MERN Stack inventory system)"
        ],
        highlights: ["Web Development", "Database Systems", "Algorithms", "Cloud Computing"],
      },
      {
        degree: "Intermediate (F.Sc Pre-Engineering)",
        institution: "KIPS College, Faisalabad",
        period: "2017 - 2019",
        description: ["Built foundation in mathematics and logical problem-solving"],
        highlights: ["A Grade"],
      },
      {
        degree: "Matriculation (Science)",
        institution: "Sacred Angel School and College",
        period: "2015 - 2017",
        description: ["Early development of analytical and technical skills"],
        highlights: ["A+ Grade"],
      },
    ],
  },

  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Programming Languages",
        icon: Code,
        items: [
          "JavaScript (Expert)",
          "TypeScript (Advanced)",
          "Python (Intermediate)",
          "C/C++ (Intermediate)",
          "C# (Intermediate)",
          "PHP (Intermediate)"
        ]
      },
      {
        name: "Web Development",
        icon: Code,
        items: [
          "React.js/Next.js",
          "Node.js/Express.js",
          "HTML/CSS/SCSS",
          "Tailwind CSS/Bootstrap",
          "RESTful APIs",
          "GraphQL (Basic)"
        ]
      },
      {
        name: "Databases",
        icon: Database,
        items: [
          "MongoDB (Advanced)",
          "SQL (MySQL, Oracle)",
          "Firebase",
          "Database Design"
        ]
      },
      {
        name: "Tools & Technologies",
        icon: Wrench,
        items: [
          "VS Code/Visual Studio",
          "Git/GitHub",
          "Figma/Canva",
          "Postman",
          "Power BI/Tableau",
          "Docker"
        ]
      }
    ]
  },

  projects: {
    title: "Key Projects",
    categories: [
      {
        name: "Full-Stack Applications",
        items: [
          {
            name: "YarnWise (Final Year Project)",
            description: "MERN stack inventory system for yarn stock management",
            highlights: ["Chakra UI", "Tailwind CSS", "User roles", "Real-time updates"]
          },
          {
            name: "Saferides Ecosystem",
            description: "Suite of 3 MERN apps for USA client (Customer, Driver, Admin)",
            highlights: ["JWT Auth", "Real-time notifications", "Ride management"]
          },
          {
            name: "Chaudhary Enterprises",
            description: "Next.js inventory for agricultural products",
            highlights: ["RTK", "i18n (English/Urdu)", "Stock tracking"]
          },
          {
            name: "MUSK Inventory System",
            description: "Next.js cosmetic stock management (internal use)",
            highlights: ["Tailwind CSS", "Barcode scanning", "Expiry alerts"]
          }
        ]
      },
      {
        name: "Frontend Projects",
        items: [
          {
            name: "Perioxai",
            description: "React.js web app with Styled Components",
            highlights: ["Third-party APIs", "Complex integrations"]
          },
          {
            name: "Uprinting",
            description: "MERN stack with Next.js frontend",
            highlights: ["Tailwind CSS", "E-commerce features"]
          },
          {
            name: "Centrix Global",
            description: "Next.js static website for IT services",
            highlights: ["SEO optimization", "Contact analytics"]
          }
        ]
      }
    ]
  }
};

const ResumePage = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="experience"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
        >
          <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-lightSky hover:bg-lightSky/60 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                  <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                  {item?.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1 min-h-[400px]">
            {/* Experience Tab */}
            <TabsContent value="experience">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.experience.title}
              </motion.h2>

              <div className="space-y-6">
                {tabsContent.experience.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6 hover:border-lightSky/30 hover:bg-lightSky/5 transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item.role}</h3>
                        <p className="text-lightSky/80">{item.company}</p>
                      </div>
                      <div className="flex items-center text-sm text-lightSky/80">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.period}
                      </div>
                    </div>
                    
                    <ul className="mb-4 text-white/90 list-disc pl-5 space-y-1">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary"
                          className="bg-lightSky/10 text-lightSky hover:bg-lightSky/20"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.education.title}
              </motion.h2>

              <div className="space-y-6">
                {tabsContent.education.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6 hover:border-lightSky/30 hover:bg-lightSky/5 transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item.degree}</h3>
                        <p className="text-lightSky/80">{item.institution}</p>
                      </div>
                      <div className="flex items-center text-sm text-lightSky/80">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.period}
                      </div>
                    </div>
                    
                    <ul className="mb-4 text-white/90 list-disc pl-5 space-y-1">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary"
                          className="bg-lightSky/10 text-lightSky hover:bg-lightSky/20"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.skills.title}
              </motion.h2>

              <div className="space-y-8">
                {tabsContent.skills.categories.map((category, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6 hover:border-lightSky/30 hover:bg-lightSky/5 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <category.icon className="w-5 h-5 text-lightSky" />
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary"
                          className="bg-lightSky/10 text-lightSky hover:bg-lightSky/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.projects.title}
              </motion.h2>

              <div className="space-y-8">
                {tabsContent.projects.categories.map((category, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6 hover:border-lightSky/30 hover:bg-lightSky/5 transition-all"
                  >
                    <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
                    <div className="space-y-6">
                      {category.items.map((project, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 * i }}
                          className="border-b border-lightSky/10 pb-4 last:border-0 last:pb-0"
                        >
                          <h4 className="font-medium text-lightSky">{project.name}</h4>
                          <p className="text-white/90 mb-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.highlights.map((highlight, j) => (
                              <Badge 
                                key={j} 
                                variant="secondary"
                                className="bg-lightSky/10 text-lightSky hover:bg-lightSky/20 text-xs"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ResumePage;