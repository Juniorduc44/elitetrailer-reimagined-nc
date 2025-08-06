import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  isAnimated?: boolean;
}

export const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});
  const [animationStates, setAnimationStates] = useState<{ [key: string]: boolean }>({});

  // Sample gallery items - replace with actual organized images
  const galleryItems: GalleryItem[] = [
    {
      id: "commercial-transport",
      title: "Commercial Transport Solutions",
      description: "Heavy-duty trailers for commercial applications",
      category: "commercial",
      images: [
        "/images/facebook_screenshots/facebook_screenshot_00.jpg",
        "/images/facebook_screenshots/facebook_screenshot_01.jpg",
        "/images/facebook_screenshots/facebook_screenshot_02.jpg"
      ],
      isAnimated: true
    },
    {
      id: "construction-equipment",
      title: "Construction Equipment Hauling",
      description: "Specialized trailers for construction machinery",
      category: "construction",
      images: [
        "/images/facebook_screenshots/facebook_screenshot_03.jpg",
        "/images/facebook_screenshots/facebook_screenshot_04.jpg",
        "/images/facebook_screenshots/facebook_screenshot_05.jpg"
      ],
      isAnimated: true
    },
    {
      id: "residential-moving",
      title: "Residential Moving Services",
      description: "Enclosed trailers perfect for household moves",
      category: "residential",
      images: [
        "/images/facebook_screenshots/facebook_screenshot_06.jpg",
        "/images/facebook_screenshots/facebook_screenshot_07.jpg",
        "/images/facebook_screenshots/facebook_screenshot_08.jpg"
      ],
      isAnimated: true
    },
    {
      id: "landscaping-debris",
      title: "Landscaping & Debris Removal",
      description: "Dump trailers for yard cleanup and landscaping projects",
      category: "landscaping",
      images: [
        "/images/facebook_screenshots/facebook_screenshot_09.jpg",
        "/images/facebook_screenshots/facebook_screenshot_10.jpg",
        "/images/facebook_screenshots/facebook_screenshot_11.jpg"
      ],
      isAnimated: true
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "construction", label: "Construction" },
    { id: "residential", label: "Residential" },
    { id: "landscaping", label: "Landscaping" }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const toggleAnimation = (itemId: string) => {
    setAnimationStates(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const nextImage = (itemId: string, maxIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [itemId]: ((prev[itemId] || 0) + 1) % maxIndex
    }));
  };

  const prevImage = (itemId: string, maxIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [itemId]: ((prev[itemId] || 0) - 1 + maxIndex) % maxIndex
    }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trailers in Action
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Real projects showcasing our professional trailer solutions
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const currentIndex = currentImageIndex[item.id] || 0;
            const isAnimating = animationStates[item.id];
            
            return (
              <Card key={item.id} className="overflow-hidden shadow-card hover:shadow-float transition-all duration-300 group">
                <div className="relative">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={item.images[currentIndex]}
                      alt={`${item.title} - Image ${currentIndex + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  
                  {/* Navigation Controls */}
                  {item.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                        onClick={() => prevImage(item.id, item.images.length)}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                        onClick={() => nextImage(item.id, item.images.length)}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>

                      {/* Animation Toggle */}
                      {item.isAnimated && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                          onClick={() => toggleAnimation(item.id)}
                        >
                          {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                      )}
                    </>
                  )}
                  
                  {/* Category Badge */}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm"
                  >
                    {item.category}
                  </Badge>
                  
                  {/* Image Counter */}
                  {item.images.length > 1 && (
                    <div className="absolute bottom-2 left-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-medium">
                      {currentIndex + 1} / {item.images.length}
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};