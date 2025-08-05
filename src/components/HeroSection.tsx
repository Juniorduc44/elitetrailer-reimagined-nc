import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroTrailer from "@/assets/hero-trailer.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-glow/20 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTrailer})` }}
      />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Premium Trailer Rentals in{" "}
                <span className="text-accent-red">Charlotte, NC</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Safe, clean, and professional trailers for moving, construction, clean-outs, and equipment transport. Serving the Charlotte area with pride and reliability.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group">
                Book Your Trailer Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-white" size="xl">
                View Our Fleet
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-white/80">Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">Quick Features</h3>
              <div className="space-y-3">
                {[
                  "Same-day availability",
                  "Professional maintenance",
                  "Competitive pricing",
                  "Local Charlotte team"
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-3 text-white">
                    <CheckCircle className="w-5 h-5 text-accent-red" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};