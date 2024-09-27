import { useTheme } from "@/contexts/ThemeProvider";
import { NavLink } from "react-router-dom";

const Header = () => {
  const themeContext = useTheme();

  const bgColor = themeContext.theme === "light" ? "bg-black" : "bg-white";
  const textColor =
    themeContext.theme === "light" ? "text-white" : "text-black";

  return (
    <header
      className={`container min-w-full px-6 flex min-h-24 items-center ${bgColor}`}
    >
      <div className={`text-xl h-fit ${textColor}`}>Header</div>
      <div className="container ml-6 flex gap-4">
        <NavLink to="/" className={textColor}>
          Home
        </NavLink>
        <NavLink to="/about" className={textColor}>
          About
        </NavLink>
        <NavLink to="/projects" className={textColor}>
          Projects
        </NavLink>
      </div>
    </header>
  );
};

export { Header };
