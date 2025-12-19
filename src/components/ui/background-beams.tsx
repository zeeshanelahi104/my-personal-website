"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950",
                className
            )}
        >
            <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-primary/20 rounded-full blur-[10rem] animate-pulse-slow" />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[8rem] animate-float" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[8rem] animate-float" style={{ animationDelay: "2s" }} />
            </div>
        </div>
    );
};
