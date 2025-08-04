import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";

export const ContactSection = () => {
  const serviceAreas = [
    "Charlotte", "Huntersville", "Matthews", "Pineville", 
    "Cornelius", "Davidson", "Concord", "Gastonia"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Book your trailer rental today and experience the Elite difference
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => window.open('https://elitetrailerrentals.bigrentals.com/', '_blank')}
                className="group"
              >
                Book Online Now
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => window.open('tel:9804039731', '_self')}
              >
                <Phone className="w-5 h-5" />
                Call Us Today
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <a 
                    href="tel:9804039731" 
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    (980) 403-9731
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">Charlotte, NC</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Business Hours</div>
                  <div className="text-muted-foreground">Sun-Sat: 7AM-9PM</div>
                  <div className="text-sm text-muted-foreground">After Hours Available</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Service Areas
            </h3>
            <p className="text-muted-foreground mb-6">
              We proudly serve Charlotte and surrounding communities:
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {serviceAreas.map((area) => (
                <div 
                  key={area}
                  className="bg-muted/50 rounded-lg px-4 py-2 text-center text-foreground font-medium"
                >
                  {area}
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              Delivery and pickup services available throughout our service area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};