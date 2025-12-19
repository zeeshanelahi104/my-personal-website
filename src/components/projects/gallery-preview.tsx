// components/projects/gallery-preview.tsx
import { useState } from "react";
import { Play, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryPreviewProps {
    items: Array<{
        url: string;
        type: "image" | "video";
    }>;
    projectTitle: string;
    maxThumbnails?: number;
    onViewAll?: () => void;
    className?: string;
    size?: "sm" | "md" | "lg";
}

export const GalleryPreview = ({
    items,
    projectTitle,
    maxThumbnails = 3,
    onViewAll,
    className,
    size = "md",
}: GalleryPreviewProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const displayItems = items.slice(0, maxThumbnails);
    const hasMore = items.length > maxThumbnails;

    if (items.length === 0) return null;

    // Get Cloudinary optimized thumbnail URL
    const getThumbnailUrl = (url: string) => {
        if (!url.includes('cloudinary')) return url;

        // Add Cloudinary transformations for thumbnails
        return url.replace('/upload/', '/upload/c_fill,w_200,h_200,q_auto,f_auto/');
    };

    const sizeClasses = {
        sm: {
            thumbnail: "h-14",
            icon: "w-4 h-4",
            text: "text-xs"
        },
        md: {
            thumbnail: "h-16 sm:h-20",
            icon: "w-4 h-4 sm:w-5 sm:h-5",
            text: "text-xs sm:text-sm"
        },
        lg: {
            thumbnail: "h-20 sm:h-24",
            icon: "w-5 h-5 sm:w-6 sm:h-6",
            text: "text-sm sm:text-base"
        }
    };

    return (
        <div className={cn("space-y-2 sm:space-y-3", className)}>
            <div className="flex items-center justify-between">
                <h4 className={cn("font-medium", sizeClasses[size].text)}>
                    Project Gallery
                </h4>
                {hasMore && (
                    <button
                        onClick={onViewAll}
                        className={cn(
                            "text-primary hover:underline transition-colors",
                            "text-xs sm:text-sm"
                        )}
                    >
                        View all ({items.length})
                    </button>
                )}
            </div>

            <div className="flex gap-1.5 sm:gap-2 overflow-x-auto py-1 -mx-1 px-1">
                {displayItems.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            "relative flex-1 aspect-square rounded-lg overflow-hidden group cursor-pointer transition-all",
                            "hover:scale-[1.02] hover:shadow-md",
                            sizeClasses[size].thumbnail
                        )}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={onViewAll}
                    >
                        {item.type === "video" ? (
                            <>
                                <div className="w-full h-full bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center">
                                    <Play className={cn("text-muted-foreground", sizeClasses[size].icon)} fill="currentColor" />
                                </div>
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Play className={cn("text-white", sizeClasses[size].icon)} fill="white" />
                                </div>
                            </>
                        ) : (
                            <img
                                src={getThumbnailUrl(item.url)}
                                alt={`${projectTitle} preview ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        )}

                        {hoveredIndex === index && (
                            <div className="absolute inset-0 bg-black/20 transition-opacity" />
                        )}
                    </div>
                ))}

                {hasMore && (
                    <div
                        className={cn(
                            "relative flex-1 aspect-square rounded-lg overflow-hidden cursor-pointer",
                            "hover:bg-muted/80 transition-colors",
                            sizeClasses[size].thumbnail
                        )}
                        onClick={onViewAll}
                    >
                        <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center p-2">
                            <ImageIcon className={cn("mb-1 text-muted-foreground", sizeClasses[size].icon)} />
                            <span className={cn(
                                "font-medium text-center leading-tight",
                                "text-[10px] xs:text-xs",
                                sizeClasses[size].text
                            )}>
                                +{items.length - maxThumbnails}
                                <span className="block">more</span>
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};