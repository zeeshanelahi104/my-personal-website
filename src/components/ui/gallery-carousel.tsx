// // components/ui/gallery-carousel.tsx
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, X, Maximize2, Pause, Play } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// export interface GalleryItem {
//     url: string;
//     type: "image" | "video";
//     title?: string;
//     description?: string;
// }

// interface GalleryCarouselProps {
//     items: GalleryItem[];
//     title?: string;
//     initialIndex?: number;
//     className?: string;
//     onClose?: () => void;
//     showControls?: boolean;
//     showCounter?: boolean;
//     autoPlay?: boolean;
//     autoPlayInterval?: number;
// }

// export const GalleryCarousel = ({
//     items,
//     title,
//     initialIndex = 0,
//     className,
//     onClose,
//     showControls = true,
//     showCounter = true,
//     autoPlay = false,
//     autoPlayInterval = 5000,
// }: GalleryCarouselProps) => {
//     const [currentIndex, setCurrentIndex] = useState(initialIndex);
//     const [isFullscreen, setIsFullscreen] = useState(false);
//     const [isPlaying, setIsPlaying] = useState(autoPlay);
//     const [touchStart, setTouchStart] = useState<number | null>(null);
//     const [touchEnd, setTouchEnd] = useState<number | null>(null);
//     const videoRef = useRef<HTMLVideoElement>(null);

//     const minSwipeDistance = 50;

//     // Handle touch events for mobile swipe
//     const onTouchStart = (e: React.TouchEvent) => {
//         setTouchEnd(null);
//         setTouchStart(e.targetTouches[0].clientX);
//     };

//     const onTouchMove = (e: React.TouchEvent) => {
//         setTouchEnd(e.targetTouches[0].clientX);
//     };

//     const onTouchEnd = () => {
//         if (!touchStart || !touchEnd) return;

//         const distance = touchStart - touchEnd;
//         const isLeftSwipe = distance > minSwipeDistance;
//         const isRightSwipe = distance < -minSwipeDistance;

//         if (isLeftSwipe) {
//             handleNext();
//         } else if (isRightSwipe) {
//             handlePrevious();
//         }
//     };

//     // Auto-play functionality
//     useEffect(() => {
//         if (!autoPlay || !isPlaying) return;

//         const timer = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % items.length);
//         }, autoPlayInterval);

//         return () => clearInterval(timer);
//     }, [items.length, autoPlay, isPlaying, autoPlayInterval]);

//     const handlePrevious = () => {
//         setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
//     };

//     const handleNext = () => {
//         setCurrentIndex((prev) => (prev + 1) % items.length);
//     };

//     const handleFullscreen = () => {
//         if (!document.fullscreenElement) {
//             document.documentElement.requestFullscreen().catch(console.log);
//             setIsFullscreen(true);
//         } else {
//             document.exitFullscreen();
//             setIsFullscreen(false);
//         }
//     };

//     const currentItem = items[currentIndex];

//     // Responsive dimensions based on screen size
//     const getResponsiveClass = () => {
//         if (isFullscreen) return "fixed inset-0 z-50 bg-background p-4";

//         return cn(
//             "relative rounded-xl overflow-hidden bg-muted/20",
//             "aspect-video w-full", // Always maintain aspect ratio
//             "max-h-[70vh]", // Limit height on large screens
//             "sm:max-h-[80vh]", // Slightly larger on tablets
//             "lg:max-h-[85vh]" // Largest on desktops
//         );
//     };

//     return (
//         <div className={cn("relative group", className)}>
//             {/* Close Button */}
//             {onClose && (
//                 <Button
//                     size="icon"
//                     variant="ghost"
//                     className={cn(
//                         "absolute z-20 bg-background/80 backdrop-blur-sm",
//                         "top-2 right-2",
//                         "sm:top-3 sm:right-3",
//                         "lg:top-4 lg:right-4",
//                         "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
//                     )}
//                     onClick={onClose}
//                 >
//                     <X className="w-4 h-4 sm:w-5 sm:h-5" />
//                 </Button>
//             )}

//             {/* Fullscreen Button */}
//             <Button
//                 size="icon"
//                 variant="ghost"
//                 className={cn(
//                     "absolute z-20 bg-background/80 backdrop-blur-sm",
//                     "top-2 left-2",
//                     "sm:top-3 sm:left-3",
//                     "lg:top-4 lg:left-4",
//                     "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
//                 )}
//                 onClick={handleFullscreen}
//             >
//                 <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
//             </Button>

//             {/* Auto-play Toggle */}
//             {autoPlay && (
//                 <Button
//                     size="icon"
//                     variant="ghost"
//                     className={cn(
//                         "absolute z-20 bg-background/80 backdrop-blur-sm",
//                         "top-2 left-12",
//                         "sm:top-3 sm:left-14",
//                         "lg:top-4 lg:left-16",
//                         "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
//                     )}
//                     onClick={() => setIsPlaying(!isPlaying)}
//                 >
//                     {isPlaying ? (
//                         <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
//                     ) : (
//                         <Play className="w-4 h-4 sm:w-5 sm:h-5" />
//                     )}
//                 </Button>
//             )}

//             {/* Main Content Area */}
//             <div
//                 className={getResponsiveClass()}
//                 onTouchStart={onTouchStart}
//                 onTouchMove={onTouchMove}
//                 onTouchEnd={onTouchEnd}
//             >
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={currentIndex}
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -50 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="w-full h-full flex items-center justify-center"
//                     >
//                         {currentItem.type === "video" ? (
//                             <video
//                                 ref={videoRef}
//                                 src={currentItem.url}
//                                 controls
//                                 autoPlay={isPlaying}
//                                 muted
//                                 playsInline
//                                 className="w-full h-full object-contain bg-black"
//                             />
//                         ) : (
//                             <img
//                                 src={currentItem.url}
//                                 alt={currentItem.title || `Gallery image ${currentIndex + 1}`}
//                                 className="w-full h-full object-contain"
//                                 loading="lazy"
//                                 decoding="async"
//                             />
//                         )}
//                     </motion.div>
//                 </AnimatePresence>

//                 {/* Navigation Controls - Hidden on mobile, visible on hover for desktop */}
//                 {showControls && items.length > 1 && (
//                     <>
//                         <Button
//                             size="icon"
//                             variant="ghost"
//                             className={cn(
//                                 "absolute bg-background/80 backdrop-blur-sm",
//                                 "left-2 top-1/2 -translate-y-1/2",
//                                 "sm:left-4",
//                                 "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity",
//                                 "h-8 w-8 sm:h-10 sm:w-10" // Smaller on mobile
//                             )}
//                             onClick={handlePrevious}
//                         >
//                             <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//                         </Button>

//                         <Button
//                             size="icon"
//                             variant="ghost"
//                             className={cn(
//                                 "absolute bg-background/80 backdrop-blur-sm",
//                                 "right-2 top-1/2 -translate-y-1/2",
//                                 "sm:right-4",
//                                 "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity",
//                                 "h-8 w-8 sm:h-10 sm:w-10"
//                             )}
//                             onClick={handleNext}
//                         >
//                             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//                         </Button>
//                     </>
//                 )}

//                 {/* Mobile Swipe Indicator */}
//                 <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
//                     <ChevronLeft className="w-3 h-3" />
//                     <span>Swipe to navigate</span>
//                     <ChevronRight className="w-3 h-3" />
//                 </div>
//             </div>

//             {/* Thumbnail Strip - Responsive sizing */}
//             {items.length > 1 && (
//                 <div className="flex gap-1 sm:gap-2 mt-3 sm:mt-4 overflow-x-auto py-2 px-1">
//                     {items.map((item, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrentIndex(index)}
//                             className={cn(
//                                 "relative flex-shrink-0 rounded-lg overflow-hidden transition-all",
//                                 "hover:ring-2 hover:ring-primary/50",
//                                 currentIndex === index
//                                     ? "ring-2 ring-primary ring-offset-1 sm:ring-offset-2"
//                                     : "opacity-60 hover:opacity-100",
//                                 // Responsive sizing
//                                 "w-12 h-12", // Mobile
//                                 "sm:w-16 sm:h-16", // Tablet
//                                 "lg:w-20 lg:h-20" // Desktop
//                             )}
//                         >
//                             {item.type === "video" ? (
//                                 <div className="w-full h-full bg-muted flex items-center justify-center">
//                                     <video
//                                         src={item.url}
//                                         className="w-full h-full object-cover"
//                                         muted
//                                     />
//                                     <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//                                         <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="white" />
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <img
//                                     src={item.url}
//                                     alt=""
//                                     className="w-full h-full object-cover"
//                                     loading="lazy"
//                                 />
//                             )}
//                         </button>
//                     ))}
//                 </div>
//             )}

//             {/* Caption and Counter - Responsive layout */}
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 sm:mt-3 gap-1 sm:gap-0">
//                 <div className="flex-1 min-w-0">
//                     {title && (
//                         <h3 className="font-semibold text-sm sm:text-base truncate">{title}</h3>
//                     )}
//                     {currentItem.title && (
//                         <p className="text-xs text-muted-foreground truncate">
//                             {currentItem.title}
//                         </p>
//                     )}
//                 </div>

//                 {showCounter && items.length > 1 && (
//                     <div className="text-xs sm:text-sm text-muted-foreground px-2 py-1 bg-muted rounded self-start sm:self-auto">
//                         {currentIndex + 1} / {items.length}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };


// components/ui/gallery-carousel.tsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface GalleryItem {
    url: string;
    type: "image" | "video";
    title?: string;
    description?: string;
}

interface GalleryCarouselProps {
    items: GalleryItem[];
    title?: string;
    initialIndex?: number;
    className?: string;
    onClose?: () => void;
    showControls?: boolean;
    showCounter?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

export const GalleryCarousel = ({
    items,
    title,
    initialIndex = 0,
    className,
    onClose,
    showControls = true,
    showCounter = true,
    autoPlay = false,
    autoPlayInterval = 5000,
}: GalleryCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const minSwipeDistance = 50;

    // Handle touch events for mobile swipe
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrevious();
        }
    };

    // Auto-play functionality
    useEffect(() => {
        if (!autoPlay || !isPlaying) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [items.length, autoPlay, isPlaying, autoPlayInterval]);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(console.log);
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const currentItem = items[currentIndex];

    // Get Cloudinary optimized URL
    const getOptimizedUrl = (url: string, type: "image" | "video") => {
        if (!url.includes('cloudinary')) return url;

        if (type === "image") {
            // Add Cloudinary transformations for responsive images
            return url.replace('/upload/', '/upload/f_auto,q_auto,w_800/');
        }

        return url;
    };

    return (
        <div className={cn("relative group", className)}>
            {/* Close Button */}
            {onClose && (
                <Button
                    size="icon"
                    variant="ghost"
                    className={cn(
                        "absolute z-20 bg-background/80 backdrop-blur-sm",
                        "top-2 right-2",
                        "sm:top-3 sm:right-3",
                        "lg:top-4 lg:right-4",
                        "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                    )}
                    onClick={onClose}
                >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
            )}

            {/* Fullscreen Button */}
            <Button
                size="icon"
                variant="ghost"
                className={cn(
                    "absolute z-20 bg-background/80 backdrop-blur-sm",
                    "top-2 left-2",
                    "sm:top-3 sm:left-3",
                    "lg:top-4 lg:left-4",
                    "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                )}
                onClick={handleFullscreen}
            >
                <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            {/* Auto-play Toggle */}
            {autoPlay && (
                <Button
                    size="icon"
                    variant="ghost"
                    className={cn(
                        "absolute z-20 bg-background/80 backdrop-blur-sm",
                        "top-2 left-12",
                        "sm:top-3 sm:left-14",
                        "lg:top-4 lg:left-16",
                        "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                    )}
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    {isPlaying ? (
                        <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                        <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                </Button>
            )}

            {/* Main Content Area */}
            <div
                className={cn(
                    "relative rounded-xl overflow-hidden bg-muted/20 aspect-video w-full",
                    "max-h-[70vh] sm:max-h-[80vh] lg:max-h-[85vh]",
                    isFullscreen && "fixed inset-0 z-50 bg-background p-4"
                )}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        {currentItem.type === "video" ? (
                            <video
                                ref={videoRef}
                                src={getOptimizedUrl(currentItem.url, "video")}
                                controls
                                autoPlay={isPlaying}
                                muted
                                playsInline
                                className="w-full h-full object-contain bg-black"
                            />
                        ) : (
                            <img
                                src={getOptimizedUrl(currentItem.url, "image")}
                                alt={currentItem.title || `Gallery image ${currentIndex + 1}`}
                                className="w-full h-full object-contain"
                                loading="lazy"
                                decoding="async"
                            />
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                {showControls && items.length > 1 && (
                    <>
                        <Button
                            size="icon"
                            variant="ghost"
                            className={cn(
                                "absolute bg-background/80 backdrop-blur-sm",
                                "left-2 top-1/2 -translate-y-1/2",
                                "sm:left-4",
                                "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity",
                                "h-8 w-8 sm:h-10 sm:w-10"
                            )}
                            onClick={handlePrevious}
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>

                        <Button
                            size="icon"
                            variant="ghost"
                            className={cn(
                                "absolute bg-background/80 backdrop-blur-sm",
                                "right-2 top-1/2 -translate-y-1/2",
                                "sm:right-4",
                                "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity",
                                "h-8 w-8 sm:h-10 sm:w-10"
                            )}
                            onClick={handleNext}
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                    </>
                )}

                {/* Mobile Swipe Indicator */}
                <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                    <ChevronLeft className="w-3 h-3" />
                    <span>Swipe to navigate</span>
                    <ChevronRight className="w-3 h-3" />
                </div>
            </div>

            {/* Thumbnail Strip */}
            {items.length > 1 && (
                <div className="flex gap-1 sm:gap-2 mt-3 sm:mt-4 overflow-x-auto py-2 px-1">
                    {items.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={cn(
                                "relative flex-shrink-0 rounded-lg overflow-hidden transition-all",
                                "hover:ring-2 hover:ring-primary/50",
                                currentIndex === index
                                    ? "ring-2 ring-primary ring-offset-1 sm:ring-offset-2"
                                    : "opacity-60 hover:opacity-100",
                                "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                            )}
                        >
                            {item.type === "video" ? (
                                <div className="w-full h-full bg-muted flex items-center justify-center">
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="white" />
                                    </div>
                                </div>
                            ) : (
                                <img
                                    src={getOptimizedUrl(item.url, "image")}
                                    alt=""
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Caption and Counter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 sm:mt-3 gap-1 sm:gap-0">
                <div className="flex-1 min-w-0">
                    {title && (
                        <h3 className="font-semibold text-sm sm:text-base truncate">{title}</h3>
                    )}
                    {currentItem.title && (
                        <p className="text-xs text-muted-foreground truncate">
                            {currentItem.title}
                        </p>
                    )}
                </div>

                {showCounter && items.length > 1 && (
                    <div className="text-xs sm:text-sm text-muted-foreground px-2 py-1 bg-muted rounded self-start sm:self-auto">
                        {currentIndex + 1} / {items.length}
                    </div>
                )}
            </div>
        </div>
    );
};