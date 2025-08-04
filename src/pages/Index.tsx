import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TrailerFleet } from "@/components/TrailerFleet";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState("professional");

  useEffect(() => {
    // Remove existing theme classes
    document.documentElement.classList.remove("theme-bold", "theme-clean");
    
    // Add new theme class
    if (currentTheme === "bold") {
      document.documentElement.classList.add("theme-bold");
    } else if (currentTheme === "clean") {
      document.documentElement.classList.add("theme-clean");
    }
  }, [currentTheme]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <ThemeToggle currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
      <Header />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <TrailerFleet />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
