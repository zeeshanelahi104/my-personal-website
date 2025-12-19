"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBoxes = ({
    className,
    ...rest
}: {
    className?: string;
}) => {
    const rows = new Array(150).fill(1);
    const cols = new Array(100).fill(1);
    let colors = [
        "--sky-300",
        "--pink-300",
        "--green-300",
        "--yellow-300",
        "--red-300",
        "--purple-300",
        "--blue-300",
        "--indigo-300",
        "--violet-300",
    ];
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div
            style={{
                transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
            }}
            className={cn(
                "absolute left-1/2 top-1/2 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
                className
            )}
            {...rest}
        >
            {rows.map((_, i) => (
                <motion.div
                    key={`row` + i}
                    className="w-16 h-8  border-l  border-slate-700 relative"
                >
                    {cols.map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: `var(${getRandomColor()})`,
                                transition: { duration: 0 },
                            }}
                            animate={{
                                transition: { duration: 2 },
                            }}
                            key={`col` + j}
                            className="w-16 h-8  border-r border-t border-slate-700 relative"
                        >
                            {j % 2 === 0 && i % 2 === 0 ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m6-6H6"
                                    />
                                </svg>
                            ) : null}
                        </motion.div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

export const Boxes = React.memo(BackgroundBoxes);

export const GridBackground = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("relative w-full bg-background overflow-hidden", className)}>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.05] -z-10" />
            <div className="relative z-10">{children}</div>
        </div>
    )
}

export const DotBackground = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("relative w-full bg-background overflow-hidden", className)}>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute inset-0 bg-dot-black/[0.1] dark:bg-dot-white/[0.1] -z-10" />
            <div className="relative z-10">{children}</div>
        </div>
    )
}
