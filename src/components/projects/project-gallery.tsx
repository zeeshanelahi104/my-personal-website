// components/projects/project-gallery.tsx
import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { GalleryCarousel, GalleryItem } from "@/components/ui/gallery-carousel";
import { Button } from "@/components/ui/button";
import { Images, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
    projectId: string;
    projectTitle: string;
    items?: GalleryItem[];
    fetchUrl?: string;
    badgeCount?: number;
    variant?: "button" | "badge" | "icon";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export const ProjectGallery = ({
    projectId,
    projectTitle,
    items: propItems,
    fetchUrl,
    badgeCount,
    variant = "button",
    size = "md",
    className,
}: ProjectGalleryProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState<GalleryItem[]>(propItems || []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const fetchMedia = async () => {
        if (propItems) return;

        setLoading(true);
        setError(null);

        try {
            const url = fetchUrl || `http://localhost:5000/api/media/${projectId}`;
            console.log(`Fetching media from: ${url}`);

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status}`);
            }

            const data = await response.json();
            console.log("Fetched media data:", data);

            // Transform API response to GalleryItem format
            const formattedItems = data.map((item: any) => ({
                url: item.url || item.src,
                type: item.type || (item.url?.includes('.mp4') ? 'video' : 'image'),
                title: item.title,
                description: item.description,
            }));
            setItems(formattedItems);
        } catch (err) {
            console.error("Failed to fetch media:", err);
            setError("Failed to load media. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleOpen = async () => {
        setIsOpen(true);
        if (!propItems && items.length === 0) {
            await fetchMedia();
        }
    };

    const totalItems = badgeCount || items.length;

    const sizeClasses = {
        sm: "h-8 px-2 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base"
    };

    if (!isMounted) return null;

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <div className={className}>
                        {variant === "badge" ? (
                            <Badge
                                variant="secondary"
                                className={cn(
                                    "gap-1 cursor-pointer hover:bg-secondary/80 transition-colors",
                                    size === "sm" && "px-2 py-0.5 text-xs",
                                    size === "md" && "px-3 py-1 text-sm",
                                    size === "lg" && "px-4 py-1.5 text-base"
                                )}
                                onClick={handleOpen}
                            >
                                <Images className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="hidden xs:inline">Gallery</span>
                                {totalItems > 0 && (
                                    <span className="ml-0.5">({totalItems})</span>
                                )}
                            </Badge>
                        ) : variant === "icon" ? (
                            <Button
                                size="icon"
                                variant="ghost"
                                className={cn(
                                    "h-8 w-8 sm:h-10 sm:w-10",
                                    sizeClasses[size]
                                )}
                                onClick={handleOpen}
                            >
                                <Images className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Button>
                        ) : (
                            <Button
                                variant="outline"
                                className={cn(
                                    "w-full border-accent/20 hover:bg-accent/10 hover:text-accent hover:border-accent/50",
                                    sizeClasses[size]
                                )}
                                onClick={handleOpen}
                            >
                                <Images className="w-4 h-4 mr-2" />
                                <span className="truncate">View Gallery</span>
                                {totalItems > 0 && (
                                    <span className="ml-1 hidden sm:inline">({totalItems})</span>
                                )}
                            </Button>
                        )}
                    </div>
                </DialogTrigger>

                <DialogContent className={cn(
                    "max-h-[90vh] p-0 overflow-hidden bg-background/95 backdrop-blur-xl border-white/10",
                    "max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl",
                    "h-[90vh] sm:h-[85vh]"
                )}>
                    <DialogHeader className="px-4 pt-4 sm:px-6 sm:pt-6">
                        <DialogTitle className="text-xl sm:text-2xl font-bold truncate">
                            {projectTitle} Gallery
                        </DialogTitle>
                    </DialogHeader>

                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 h-[calc(100%-4rem)]">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center h-full gap-4">
                                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                                <p className="text-muted-foreground">Loading gallery...</p>
                            </div>
                        ) : error ? (
                            <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
                                <p className="text-destructive text-center">{error}</p>
                                <Button
                                    variant="outline"
                                    onClick={fetchMedia}
                                    className="mt-2"
                                >
                                    Retry
                                </Button>
                            </div>
                        ) : items.length > 0 ? (
                            <GalleryCarousel
                                items={items}
                                title={projectTitle}
                                showControls
                                showCounter
                                autoPlay={false}
                                className="h-full"
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground p-4 text-center">
                                <Images className="w-12 h-12 sm:w-16 sm:h-16 opacity-50" />
                                <p className="text-sm sm:text-base">No media available for this project</p>
                                <p className="text-xs text-muted-foreground/60">
                                    Check back later or contact for more details
                                </p>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};