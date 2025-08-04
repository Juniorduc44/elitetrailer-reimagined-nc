import { Shield, Clock, MapPin } from "lucide-react";

export const WhyChooseSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Reliable",
      description: "All trailers are thoroughly inspected and maintained to ensure your safety and peace of mind."
    },
    {
      icon: Clock,
      title: "Quick & Easy",
      description: "Simple online booking process gets you on the road fast with minimal paperwork."
    },
    {
      icon: MapPin,
      title: "Local Experts",
      description: "Charlotte-based team with deep knowledge of local needs and regulations."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Elite Trailer Rentals?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing Charlotte with the highest quality trailer rental experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};