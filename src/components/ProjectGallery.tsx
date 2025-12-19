import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Images, Loader2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface MediaItem {
    url: string;
    type: "image" | "video";
}

interface ProjectGalleryProps {
    projectId: string;
    projectTitle: string;
}

interface MediaSlideProps {
    item: MediaItem;
    index: number;
    current: number;
    projectTitle: string;
    handleSlideClick: (index: number) => void;
}

const MediaSlide = ({ item, index, current, projectTitle, handleSlideClick }: MediaSlideProps) => {
    const slideRef = useRef<HTMLLIElement>(null);
    const xRef = useRef(0);
    const yRef = useRef(0);
    const frameRef = useRef<number>();

    useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return;

            const x = xRef.current;
            const y = yRef.current;

            slideRef.current.style.setProperty("--x", `${x}px`);
            slideRef.current.style.setProperty("--y", `${y}px`);

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const handleMouseMove = (event: React.MouseEvent) => {
        const el = slideRef.current;
        if (!el) return;

        const r = el.getBoundingClientRect();
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
    };

    const handleMouseLeave = () => {
        xRef.current = 0;
        yRef.current = 0;
    };

    const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.style.opacity = "1";
    };

    return (
        <div className="[perspective:1200px] [transform-style:preserve-3d]">
            <li
                ref={slideRef}
                className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 cursor-pointer"
                onClick={() => handleSlideClick(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform:
                        current !== index
                            ? "scale(0.98) rotateX(8deg)"
                            : "scale(1) rotateX(0deg)",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transformOrigin: "bottom",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
                    style={{
                        transform:
                            current === index
                                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                                : "none",
                    }}
                >
                    {item.type === "video" ? (
                        <video
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out"
                            style={{
                                opacity: current === index ? 1 : 0.5,
                            }}
                            src={item.url}
                            muted
                            loop
                            autoPlay={current === index}
                        />
                    ) : (
                        <img
                            className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-600 ease-in-out"
                            style={{
                                opacity: current === index ? 1 : 0.5,
                            }}
                            alt={`${projectTitle} ${index + 1}`}
                            src={item.url}
                            onLoad={imageLoaded}
                            loading="eager"
                            decoding="sync"
                        />
                    )}
                    {current === index && (
                        <div className="absolute inset-0 bg-black/20 transition-all duration-1000" />
                    )}
                </div>

                <article
                    className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSlideClick(index);
                            }}
                            className="mt-6 px-6 py-3 w-fit mx-auto text-sm text-black dark:text-white bg-white dark:bg-neutral-800 h-12 border border-transparent flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                            Click to view full size
                        </button>
                    </div>
                </article>
            </li>
        </div>
    );
};

interface CarouselControlProps {
    type: "previous" | "next";
    title: string;
    handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
    return (
        <button
            className="w-12 h-12 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-2 border-transparent rounded-full focus:border-accent focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 hover:bg-accent/20"
            title={title}
            onClick={handleClick}
        >
            {type === "previous" ? (
                <ChevronLeft className="text-neutral-600 dark:text-neutral-200 w-6 h-6" />
            ) : (
                <ChevronRight className="text-neutral-600 dark:text-neutral-200 w-6 h-6" />
            )}
        </button>
    );
};

interface LightboxProps {
    item: MediaItem;
    index: number;
    projectTitle: string;
    onClose: () => void;
}

const Lightbox = ({ item, index, projectTitle, onClose }: LightboxProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
                <X className="w-6 h-6 text-white" />
            </button>

            <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {item.type === "video" ? (
                    <video
                        src={item.url}
                        controls
                        autoPlay
                        className="max-w-full max-h-full rounded-lg shadow-2xl"
                    />
                ) : (
                    <img
                        src={item.url}
                        alt={`${projectTitle} ${index + 1}`}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    />
                )}
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center z-10">
                <p className="text-lg font-semibold">{projectTitle}</p>
                <p className="text-sm text-white/60">Media {index + 1}</p>
            </div>
        </motion.div>
    );
};

export const ProjectGallery = ({ projectId, projectTitle }: ProjectGalleryProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [media, setMedia] = useState<MediaItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [current, setCurrent] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    useEffect(() => {
        if (isOpen) {
            fetchMedia();
        }
    }, [isOpen]);

    const fetchMedia = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/api/media/${projectId}`);
            const data = await response.json();
            console.log("Fetched media data:", data);
            setMedia(data);
        } catch (error) {
            console.error("Failed to fetch media:", error);
        } finally {
            setLoading(false);
        }
    };

    const handlePreviousClick = () => {
        const previous = current - 1;
        setCurrent(previous < 0 ? media.length - 1 : previous);
    };

    const handleNextClick = () => {
        const next = current + 1;
        setCurrent(next === media.length ? 0 : next);
    };

    const handleSlideClick = (index: number) => {
        if (current === index) {
            setLightboxIndex(index);
        } else {
            setCurrent(index);
        }
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full border-accent/20 hover:bg-accent/10 hover:text-accent hover:border-accent/50">
                        <Images className="w-4 h-4 mr-2" />
                        View Gallery
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden bg-background/95 backdrop-blur-xl border-white/10">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-gradient">{projectTitle} Gallery</DialogTitle>
                    </DialogHeader>

                    <div className="mt-6 pb-8">
                        {loading ? (
                            <div className="flex items-center justify-center h-[70vmin]">
                                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                            </div>
                        ) : media.length > 0 ? (
                            <div className="relative w-full flex items-center justify-center">
                                <div className="relative w-[70vmin] h-[70vmin] mx-auto overflow-visible">
                                    <ul
                                        className="absolute flex transition-transform duration-700 ease-in-out"
                                        style={{
                                            transform: `translateX(calc(-${current * 100}% - ${current * 8}vmin))`,
                                        }}
                                    >
                                        {media.map((item, index) => (
                                            <MediaSlide
                                                key={index}
                                                item={item}
                                                index={index}
                                                current={current}
                                                projectTitle={projectTitle}
                                                handleSlideClick={handleSlideClick}
                                            />
                                        ))}
                                    </ul>

                                    <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
                                        <CarouselControl
                                            type="previous"
                                            title="Go to previous slide"
                                            handleClick={handlePreviousClick}
                                        />

                                        <div className="flex items-center mx-4 text-sm text-muted-foreground">
                                            {current + 1} / {media.length}
                                        </div>

                                        <CarouselControl
                                            type="next"
                                            title="Go to next slide"
                                            handleClick={handleNextClick}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-64 text-muted-foreground">
                                No media available for this project
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            {lightboxIndex !== null && createPortal(
                <AnimatePresence>
                    <Lightbox
                        item={media[lightboxIndex]}
                        index={lightboxIndex}
                        projectTitle={projectTitle}
                        onClose={() => setLightboxIndex(null)}
                    />
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};
