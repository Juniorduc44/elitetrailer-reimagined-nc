import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Excellent service! The trailer was clean, well-maintained, and perfect for our move. The booking process was super easy.",
      author: "Sarah M.",
      location: "Charlotte"
    },
    {
      text: "Used their dump trailer for a home renovation project. Great quality equipment and very reasonable pricing. Highly recommend!",
      author: "Mike R.",
      location: "Huntersville"
    },
    {
      text: "Professional service from start to finish. The flatbed trailer was perfect for transporting our equipment. Will definitely use again.",
      author: "Jennifer L.",
      location: "Matthews"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by Charlotte residents and businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current" 
                  />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <div className="text-foreground font-semibold">
                - {testimonial.author}, {testimonial.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};