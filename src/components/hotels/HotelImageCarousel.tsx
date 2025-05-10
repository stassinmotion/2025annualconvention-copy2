
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Hotel } from '@/types/hotel';
import { cn } from '@/lib/utils';
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface HotelImageCarouselProps {
  hotel: Hotel;
  isActive: boolean;
}

export default function HotelImageCarousel({ hotel, isActive }: HotelImageCarouselProps) {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<string, boolean>>({});
  
  // Define a fallback hotel image - guaranteed to exist in the public folder
  const fallbackImage = "/placeholder.svg";

  // If hotel has no images, use a default array with the fallback
  const images = hotel.images && hotel.images.length > 0 
    ? hotel.images 
    : [{ src: fallbackImage, alt: hotel.name }];
  
  const handleImageLoad = (src: string) => {
    console.log(`Image loaded successfully in carousel for ${hotel.name}`);
    console.log(`Carousel image path: ${src}`);
    setLoadedImages(prev => ({ ...prev, [src]: true }));
  };
  
  const handleImageError = (src: string) => {
    console.error(`Failed to load carousel image for ${hotel.name}`);
    console.error(`Failed carousel image path: ${src}`);
    setErrorImages(prev => ({ ...prev, [src]: true }));
  };

  const isImageLoaded = (src: string) => loadedImages[src];
  const hasImageError = (src: string) => errorImages[src];

  return (
    <div className="relative w-full h-full">
      <Carousel 
        className="w-full h-full"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => {
            const imageSrc = hasImageError[image.src] ? fallbackImage : image.src;
            
            return (
              <CarouselItem key={index} className="h-full">
                <div className="relative overflow-hidden h-full">
                  {/* Loading overlay */}
                  {!isImageLoaded(image.src) && (
                    <div className="absolute inset-0 bg-racing-black/70 z-10 flex items-center justify-center">
                      <Skeleton className="w-full h-full bg-racing-black/50" />
                    </div>
                  )}
                
                  {/* Image with animation */}
                  <motion.div 
                    initial={{ scale: 1.1, opacity: 0.7 }}
                    animate={{ 
                      scale: isImageLoaded(image.src) ? 1 : 1.1,
                      opacity: isImageLoaded(image.src) ? 1 : 0.7
                    }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full"
                  >
                    <div className="w-full h-full relative">
                      <img
                        src={imageSrc}
                        alt={image.alt}
                        onLoad={() => handleImageLoad(image.src)}
                        onError={() => handleImageError(image.src)}
                        className={cn(
                          "w-full h-full object-cover transition-opacity duration-300",
                          isImageLoaded(image.src) ? "opacity-100" : "opacity-0",
                          isActive && "transform-gpu hover:scale-105"
                        )}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-racing-black/30 to-transparent"></div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
        {/* Only show navigation buttons when there's more than one image */}
        {images.length > 1 && (
          <>
            <CarouselPrevious className="absolute left-4 top-1/2 z-20 bg-racing-black/50 hover:bg-racing-black text-white border-racing-red" />
            <CarouselNext className="absolute right-4 top-1/2 z-20 bg-racing-black/50 hover:bg-racing-black text-white border-racing-red" />
          </>
        )}
      </Carousel>
    </div>
  );
}
