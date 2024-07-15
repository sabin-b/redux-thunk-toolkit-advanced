import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/themeProvider";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
//   console.log(theme, setTheme);

  function handleThemetoggle() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <Button onClick={handleThemetoggle} variant="outline" size="icon">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
