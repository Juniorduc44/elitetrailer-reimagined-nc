import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Truck, Wrench } from "lucide-react";
import enclosedTrailer from "@/assets/enclosed-trailer.jpg";
import dumpTrailer from "@/assets/dump-trailer.jpg";
import flatbedTrailer from "@/assets/flatbed-trailer.jpg";

export const TrailerFleet = () => {
  const trailers = [
    {
      title: "Enclosed Trailers",
      description: "Perfect for moving, storage, and protecting valuable cargo from weather.",
      image: enclosedTrailer,
      features: [
        "20ft length available",
        "Weather protection", 
        "Secure locking system"
      ],
      link: "https://elitetrailerrentals.bigrentals.com/enclosed-20ft"
    },
    {
      title: "Dump Trailers",
      description: "Ideal for construction debris, landscaping, and clean-out projects.",
      image: dumpTrailer,
      features: [
        "14ft length available",
        "Hydraulic dump system",
        "Heavy-duty construction"
      ],
      link: "https://elitetrailerrentals.bigrentals.com/dump-14ft"
    },
    {
      title: "Flatbed Trailers", 
      description: "Great for hauling equipment, vehicles, and oversized items.",
      image: flatbedTrailer,
      features: [
        "24ft length available",
        "Tie-down points included",
        "Car hauling capability"
      ],
      link: "https://elitetrailerrentals.bigrentals.com/flatbed-24ft"
    }
  ];

  const icons = [Shield, Truck, Wrench];

  return (
    <section id="trailers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Trailer Fleet
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional-grade trailers for every job
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {trailers.map((trailer, index) => {
            const IconComponent = icons[index];
            return (
              <div 
                key={trailer.title}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-float transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={trailer.image} 
                    alt={trailer.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {trailer.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {trailer.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {trailer.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="default" 
                    className="w-full group"
                    onClick={() => window.open(trailer.link, '_blank')}
                  >
                    Book {trailer.title.split(' ')[0]} Trailer
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};