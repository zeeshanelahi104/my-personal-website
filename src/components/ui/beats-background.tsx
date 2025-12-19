import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BeatsBackground = () => {
    const [bars, setBars] = useState<number[]>([]);

    useEffect(() => {
        // Generate 40 bars
        setBars(Array.from({ length: 40 }, (_, i) => i));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
            <div className="absolute inset-x-0 bottom-0 h-full flex items-end justify-center gap-1 px-4">
                {bars.map((i) => (
                    <motion.div
                        key={i}
                        className="w-1 md:w-2 bg-primary rounded-t-full"
                        initial={{ height: "10%" }}
                        animate={{
                            height: [
                                `${Math.random() * 40 + 10}%`,
                                `${Math.random() * 60 + 20}%`,
                                `${Math.random() * 30 + 10}%`,
                            ],
                        }}
                        transition={{
                            duration: Math.random() * 2 + 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Rhythmic pulses */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={`pulse-${i}`}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
                    initial={{ width: 0, height: 0, opacity: 0.5 }}
                    animate={{
                        width: ["100vw", "150vw"],
                        height: ["100vw", "150vw"],
                        opacity: 0,
                    }}
                    transition={{
                        duration: 4,
                        delay: i * 1.3,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />
            ))}
        </div>
    );
};
