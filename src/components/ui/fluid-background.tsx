"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const FluidBackground = ({
    className,
}: {
    className?: string;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className={cn("fixed inset-0 z-0 overflow-hidden pointer-events-none", className)}>
            <motion.div
                className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            <motion.div
                className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-40 animate-blob"
            />
            <motion.div
                className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000"
            />
            <motion.div
                className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000"
            />
        </div>
    );
};
