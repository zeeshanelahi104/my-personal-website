"use client";
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import { Briefcase, Calendar, Code2, GraduationCap, User } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];

const tabsContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Fullstack Developer",
        company: "Google",
        period: "2022 - Present",
        Description:
          "Fullstack Developer with 1 year of experience in building websites and web applications. I specialize in HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
        highlights: [" React", "Next.js", "TypeScript", "Team Leasdership"],
      },
      {
        role: "Frontend Developer",
        company: "Google",
        period: "2020 - 2021",
        Description:
          "Frontend Developer with 1 year of experience in building websites and web applications. I specialize in HTML, CSS, and JavaScript.",
        highlights: ["HTML", "CSS", "JavaScript", "Team Leasdership"],
      },
      {
        role: "OOP Developer",
        company: "Google",
        period: "2021 - 2022",
        Description:
          "OOP Developer with 1 year of experience in building websites and web applications. I specialize in HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
        highlights: ["C", "C++", "C# (basic)"],
      },
      {
        role: "Backend Developer",
        company: "Google",
        period: "2021 - 2022",
        Description:
          "Backend Developer with 1 year of experience in building websites and web applications. I specialize in HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
        highlights: ["Python", "C", "C++"],
      },
    ],
  },

  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Intermediate in Computer Science",
        instituation: "Govt. Graduate College",
        period: "2021 - 2023",
        Description:
          "Started building my base in the emerging field of computer science",
        highlights: [
          "A+ Grade",
          "Stood at 1st position in the class",
          "Topper of the college",
          "One of the best Students of the year",
        ],
      },
      {
        degree: "Matriculation Biology",
        instituation: "Govt. Girls MC School",
        period: "2019 - 2021",
        Description:
          "Started building my base in the emerging field of computer science",
        highlights: [
          "A+ Grade",
          "Topper of the school",
          "One of the best Students of the year",
        ],
      },
    ],
  },

  skill: {
    title: "Technical Skills",
    items: [
      {
        Name: "React",
        Description:
          "I have worked on a variety of projects and have mastered the following technologies",
        Skills: ["React", "Next.js", "TypeScript", "Team Leasdership"],
      },
      {
        Name: "Node.js",
        Description:
          "I have worked on a variety of projects and have mastered the following technologies",
        Skills: ["React", "Next.js", "TypeScript", "Team Leasdership"],
      },
      {
        Name: "MongoDB",
        Description:
          "I have worked on a variety of projects and have mastered the following technologies",
        Skills: ["React", "Next.js", "TypeScript", "Team Leasdership"],
      },
    ],
  },

  about: {
    title: "About Me",
    bio: "Passionate software developer with over 1 year of experience in building modern websites and web applications. I specialize in HTML, CSS, and JavaScript. I am a quick learner and a team player who is always looking to grow and improve my skills.",
    interests: [
      "Software Development",
      "Web Development",
      "Open Source Contribution",
      "Mechine Learning",
      "Team Leadership",
      "Artificial Intelligence",
      "Ethetical Hacking",
    ],
    Languages: [
      "Urdu (Native)",
      "Punjabi (Native)",
      "English (Professional level)",
      "Hindi (Intermediate)",
      "Arabic(Internediate)",
    ],
  },
};

const resumePage = () => {
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

          <div className="flex-1 min-h[400px] ">
            <TabsContent value="experience">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.experience.title}
              </motion.h2>

              <div className="space-y-6 ">
                {tabsContent?.experience?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6 hover:border-lightSky/30 hover:bg-lightSky/5 "
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item?.role}
                          </h3>
                          <p className="text-muted-foreground">
                            {item?.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.Description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item?.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.education.title}
              </motion.h2>

              <div className="space-y-6 ">
                {tabsContent?.education?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6  hover:border-lightSky/30 hover:bg-lightSky/5 "
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item?.degree}
                          </h3>
                          <p className="text-muted-foreground">
                            {item?.instituation}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.Description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item?.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.skill.title}
              </motion.h2>

              <div className="space-y-6 ">
                {tabsContent?.skill?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6  hover:border-lightSky/30 hover:bg-lightSky/5 "
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item?.Name}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.Description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item?.Skills.map((skills, i) => (
                        <Badge key={i} variant="secondary">
                          {skills}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.about.title}
              </motion.h2>

              <div className="space-y-6 ">
                {tabsContent?.education?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6  hover:border-lightSky/30 hover:bg-lightSky/5 "
                  >
                    <p className="text-white/85 text-lg">
                      {tabsContent.about.bio}
                    </p>

                    <div className="space-y-4 pt-2">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Interests
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {tabsContent.about.interests.map((interest, i) => (
                            <Badge key={i} variant="secondary">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {tabsContent.about.Languages.map((Language, i) => (
                            <Badge key={i} variant="secondary">
                              {Language}
                            </Badge>
                          ))}
                        </div>
                      </div>
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

export default resumePage;
