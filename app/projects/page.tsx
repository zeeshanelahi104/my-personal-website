"use client";
import PageLayout from "@/components/PageLayout";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

import React from "react";
// import { useState } from "react";
// import Image from "next/image";

// import project1 from "./images/project1.png";
// import project2 from "./images/project2.png";
// import project3 from "./images/project3.png";
// import project4 from "./images/project4.png";
// import { Separator } from "@radix-ui/react-separator";
// import {
//   Tooltip,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import Link from "next/link";
// import { Github } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Projects = [
//   {
//     id: "01",
//     title: "Notes App",
//     category: "Full Stack",
//     description:
//       "A simple and aesthetic notes app that allows users to create, edit, and delete notes. Using the cool features of JavaScript to make it happen while using HTML and CSS to make it interactive for user.",
//     stack: ["HTML", "CSS", "JavaScript"],
//     image: project1,
//     githubUrl: "https://github.com/Zeeshan Elahi-tech/Notes-App",
//   },
//   {
//     id: "02",
//     title: "Analog Clock",
//     category: "Full Stack",
//     description:
//       "A simple and clean analogue clock that displays the current time. Using mathematical formula to measure the actual time but making it happen through JS, design provided by CSS.",
//     stack: ["HTML", "CSS", "JavaScript"],
//     image: project2,
//     githubUrl: "https://github.com/Zeeshan Elahi-tech/Analog-Clock",
//   },
//   {
//     id: "03",
//     title: "Weather App",
//     category: "Full Stack",
//     description:
//       "Weather app that allows users to search for the weather of any city in the world. Huge role of API and functionality of JavaScript combined with the beauty oh HTML and CSS. ",
//     stack: ["HTML", "CSS", "JavaScript", "API"],
//     image: project3,
//     githubUrl: "https://github.com/Zeeshan Elahi-tech/Weather-App",
//   },
//   {
//     id: "04",
//     title: "Calculator App",
//     category: "Full Stack",
//     description:
//       "A simple and clean calculator app that performs basic arithmetic operations on interger as well as floating point numbers.",
//     stack: ["HTML", "CSS", "JavaScript"],
//     image: project4,
//     githubUrl: "https://github.com/Zeeshan Elahi-tech/Calculator",
//   },
// ];

const ProjectPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const handleSlideChange = (index: number) => {
  //   setCurrentIndex(index);
  // };
  return (
    <div className="py-6 md:py-12">
      <PageLayout>
        <div className="flex justify-center items-center h-[50vh]">
          <h2 className="text-3xl md:text-5xl font-bold text-lightSky">
            🚧 Projects Coming Soon...
          </h2>
        </div>

        {/* <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
          onSelect={() => {
            const index = 0;
            if (typeof index === "number") {
              handleSlideChange(index);
            }
          }}
        >
          <CarouselContent>
            {Projects?.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-bodyColor border-lightSky/20 hover:border-lightSky/30">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
                      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                        <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                          <div>
                            <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                              {project?.id}
                            </h2>

                            <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                              {project?.category} Project
                            </h3>
                            <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal py-4 ">
                              {project?.description}
                            </p>

                            <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
                              {project?.stack?.map((item, index) => (
                                <li
                                  key={index}
                                  className="text-xs md:text-base text-lightSky/80"
                                >
                                  {item}
                                  {index !== project?.stack?.length - 1 && ","}
                                </li>
                              ))}
                            </div>
                            <Separator className="bg-gray-700 h-px my-4" />

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    size="icon"
                                    className=" items-center text-lightSky border border-hoverColor/30 hover:bg-lightSky/10 hover:border-lightSky/70"
                                  >
                                    <Link
                                      href={project?.githubUrl}
                                      target="_blank"
                                    >
                                      <Github />{""}
                                      <span className="sr-only">View Github repositry</span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 order-1 md:order-2 ">
                        <div className="relative h-64  md:h-96 bg-gray-700 rounded-lg overflow-hidden">
                          <Image
                            src={project?.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 -bottom-8 ">
            <CarouselPrevious className="rounded-md bg-transparent 
            border border-lightSky/50 
            hover:bg-lightSky/10 
            hover:border-hoverColor/80 
            hoverEffect hover:text-white p-5"/>
            <CarouselNext className="rounded-md bg-transparent 
            border border-lightSky/50 
            hover:bg-lightSky/10 
            hover:border-hoverColor/80 
            hoverEffect hover:text-white p-5"/>
          </div>
        </Carousel> */}
      </PageLayout>
    </div>
  );
};

export default ProjectPage;
