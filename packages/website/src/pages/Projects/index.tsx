import { Button } from "@/components/ui/Button";
import { useTheme } from "@/contexts/ThemeProvider";

const Projects = () => {
  const themeContext = useTheme();

  return (
    <div>
      <h1>Theme: {themeContext.theme}</h1>
      <Button
        onClick={() => {
          themeContext.toggleTheme();
        }}
      >
        Click me
      </Button>
    </div>
  );
};

export { Projects };
