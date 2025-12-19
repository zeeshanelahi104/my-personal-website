import React from "react";
import { motion } from "framer-motion";

export const MeshGradient = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
            <motion.div
                className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary blur-[100px]"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent blur-[100px]"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary/50 blur-[120px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};
