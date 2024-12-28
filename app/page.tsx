// import { Container } from "lucide-react"
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/ui/photo";
import SocialLinks from "@/components/ui/socialLinks";
import Statistics from "@/components/ui/statistics";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-bodyColor text-white/80 relative">
      <Container className="py-12 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="flex flex-col items-center md:items-start gap-3 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold tracking-wider mb-1">
              Computer Science
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2 text-white">
              Hello I&apos;m
            </h2>
            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">
              Memoona Saleem
            </h1>
            </div>

            <div className="w-full h-[120px] md:h-[140px] relative">
              <div className="absolute top-0 left-0 w-full h-full">
            <HomeDescription/>
              </div>
            </div>

            <Button
              className="bg-transparent 
            rounded-full border
             border-lightSky/50
               text-lightSky
                hover:text-black
                 hover:bg-hoverColor hoverEffect h-11 "
            >
              Download CV <Download />
            </Button>
            <SocialLinks />
            <Statistics />
          
        </div>
        <Photo />
      </Container>
    </div>
  );
}
