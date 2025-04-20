import PageLayout from "@/components/PageLayout";
import Title from "@/components/title";
import { Separator } from "@/components/ui/separator";
import { experienceData } from "@/Constants/index";

import React from "react";

const experience = () => {
  return (
    <section className="min-h-[80vh] flex flex-col w-full py-5 md:py-10">
      <PageLayout>
        <Title>Experience I have</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
          {/* {experienceData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-6 
              bg-lightSky/5 border
              border-lightSky/20 
              hover:border-lightSky/30 
              rounded-lg shadow-md group hover:shadow-lg gap-2.5 hoverEffect"
            >
              <div className="w-full flex ">
                <p className="text-5xl font-extrabold               
                              text-outline text-transparent 
                              group-hover:[-webkit-text-stroke:1px_#3b82f6]
                              hoverEffect
                            ">
                  {item?.id}
                </p>
              </div>
              <h2 className="font-semibold text-white">{item?.title}</h2>
              <p className="text-sm md:text-base pb-2">{item?.description}</p>
            <Separator className="bg-white/20"/>
            </div>
          ))} */}
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-6 
    bg-lightSky/5 border
    border-lightSky/20 
    hover:border-lightSky/30 
    rounded-lg shadow-md group hover:shadow-lg gap-2.5 hoverEffect transition-all duration-300"
            >
              <div className="w-full flex justify-between items-start">
                <p
                  className="text-5xl font-extrabold               
                    text-outline text-transparent 
                    group-hover:[-webkit-text-stroke:1px_#3b82f6]
                    hoverEffect
                  "
                >
                  {item.id}
                </p>
                <span className="text-sm text-lightSky bg-lightSky/10 px-3 py-1 rounded-full">
                  {item.period}
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="font-semibold text-white text-lg">
                  {item.title}
                </h2>
                <p className="text-lightSky/80 font-medium">{item.company}</p>
                <p className="text-sm md:text-base text-white/80 pb-2">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/5 text-lightSky px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Separator className="bg-white/20 mt-4" />
            </div>
          ))}
        </div>
      </PageLayout>
    </section>
  );
};

export default experience;
