import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Elite Trailer Rentals</h1>
              <p className="text-sm text-muted-foreground">Charlotte, NC</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#trailers" className="text-foreground hover:text-primary transition-colors">Trailers</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="tel:9804039731" className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(980) 403-9731</span>
            </a>
            <Button variant="cta" size="default">
              Book Now
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};