"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
    children,
    className,
    containerClassName,
    spotlightColor = "rgba(124, 58, 237, 0.25)", // Violet default
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    spotlightColor?: string;
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative overflow-hidden rounded-xl border border-border bg-card/50 text-card-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-glow hover:border-primary/50",
                containerClassName
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />
            <div className={cn("relative h-full z-10", className)}>{children}</div>
        </div>
    );
};
