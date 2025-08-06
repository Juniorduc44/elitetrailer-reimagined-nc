import { Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-foreground/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Elite Trailer Rentals</h3>
                <p className="text-sm opacity-80">Charlotte, NC</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Premium trailer rental services serving the Charlotte area with professional equipment and reliable service.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#home" className="hover:text-background transition-colors">Home</a></li>
              <li><a href="#trailers" className="hover:text-background transition-colors">Our Fleet</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:9804039731" className="hover:text-background transition-colors">
                  (980) 403-9731
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Charlotte, NC</span>
              </div>
              <div className="text-sm">
                <div>Sun-Sat: 7AM-9PM</div>
                <div>After Hours Available</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Elite Trailer Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};