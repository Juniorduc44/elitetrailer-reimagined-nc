import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export const ThemeToggle = ({ currentTheme, onThemeChange }: ThemeToggleProps) => {
  const themes = [
    { id: 'professional', name: 'Professional', description: 'Clean and trustworthy' },
    { id: 'bold', name: 'Bold', description: 'Modern and striking' },
    { id: 'clean', name: 'Clean', description: 'Minimal and fresh' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50 bg-card/90 backdrop-blur-sm border rounded-lg p-4 shadow-card">
      <h3 className="text-sm font-semibold mb-3 text-foreground">Design Variants</h3>
      <div className="space-y-2">
        {themes.map((theme) => (
          <Button
            key={theme.id}
            variant={currentTheme === theme.id ? "default" : "ghost"}
            size="sm"
            onClick={() => onThemeChange(theme.id)}
            className="w-full justify-start text-left"
          >
            <div>
              <div className="font-medium">{theme.name}</div>
              <div className="text-xs opacity-70">{theme.description}</div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};